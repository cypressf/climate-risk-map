import React, { useEffect, useRef } from 'react';
import { scaleLinear, extent, bin, select, mean, max, axisBottom, axisLeft, line, curveBasis } from 'd3';
import { DataIdParams } from './DataDefinitions';
import Color from './Color';
const margin = ({ top: 20, right: 30, bottom: 30, left: 40 });
type Props = {
    data: number[] | undefined,
    selections: DataIdParams[] | undefined,
    xRange?: [number, number] | undefined,
    width?: number,
    height?: number,
    formatter?: any,
    continuous: boolean,
};

function epanechnikov(bandwidth: number) {
    return (x: number) => Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;
}

function kde(kernel: (x: number) => number,
             thresholds: number[],
             data: number[]): [number, number][] {
    return thresholds.map((t: number) => [t, mean(data, (d: number) => kernel(t - d))!]);
}

const ProbabilityDensity = ({ data, selections, xRange = undefined, width = 300, height = 200, formatter, continuous=true }: Props) => {
    const svgRef = useRef<SVGSVGElement>(null);
    useEffect(() => {
        if (data === undefined || selections === undefined) {
            return;
        }
        const domain = xRange === undefined ? extent(data) as [number, number] : xRange;
        const x = scaleLinear()
            .domain(domain)
            .nice()
            .range([margin.left, width - margin.right]);
        const thresholds = x.ticks(40)
        const bins = bin()
            .domain(x.domain() as [number, number])
            .thresholds(thresholds)
            (data)
        const bandwidth = (domain[1] - domain[0]) / 40;
        const density = kde(epanechnikov(bandwidth), thresholds, data)
        const yValues = density.map(([, yValue]) => yValue);
        const y = scaleLinear()
            .domain([0, max(bins, d => d.length)! / data.length])
            .range([height - margin.bottom, margin.top]);
        const yLine = scaleLinear()
            .domain([0, max(yValues)!])
            .range([height - margin.bottom, margin.top]);

        const xAxis = (g: any) => g
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(axisBottom(x).tickFormat(formatter).ticks(6))
            .call((g: any) => g.select(".domain")
                .remove())
        const yAxis = (g: any) => g
            .attr("transform", `translate(${margin.left},0)`)
            .call(axisLeft(y).ticks(null))
            .call((g: any) => g.select(".domain").remove())
        const svg = select(svgRef.current);
        const color = Color(selections, continuous);
        const kdeLine: any = line()
            .curve(curveBasis)
            .x(d => x(d[0]))
            .y(d => yLine(d[1]))
        svg.select("#histogram")
            .selectAll("rect")
            .data(bins)
            .join("rect")
            .attr("fill", d => color(mean([d.x1!, d.x0!]) as any))
            .attr("x", d => x(d.x0!) + 1)
            .attr("y", d => y(d.length / data.length))
            .attr("width", d => x(d.x1!) - x(d.x0!) - 1)
            .attr("height", d => y(0) - y(d.length / data.length));
        svg.select("#kde")
            .datum(density)
            .attr("fill", "none")
            .attr("stroke", "#000")
            .attr("stroke-width", 1.5)
            .attr("stroke-linejoin", "round")
            .attr("d", kdeLine);
        svg.select("#xAxis")
            .call(xAxis);
        svg.select("#yAxis")
            .call(yAxis);
    }, [data, selections, xRange, formatter, height, width, continuous]);

    if (data === undefined || selections === undefined) {
        return null;
    }
    return <svg
        ref={svgRef}
        viewBox={"0 0 " + width.toString() + " " + height.toString()}
        width={width}
        height={height}
        x={850}
        y={350}
    >
        <g id="histogram"></g>
        <path id="kde"></path>
        <g id="xAxis"></g>
        <g id="yAxis"></g>
    </svg>
};

export default ProbabilityDensity
