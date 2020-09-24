(this["webpackJsonpclimate-risk-map"]=this["webpackJsonpclimate-risk-map"]||[]).push([[0],{63:function(t,e,n){t.exports=n(70)},68:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var r,o=n(1),a=n.n(o),i=n(36),m=n.n(i),c=(n(68),n(10)),u=n(0),s=n(37),f=n(71),l=n(72),_=n(73),d=n(74);!function(t){t[t.cmi10_00_1=0]="cmi10_00_1",t[t.cmi10_80_9=1]="cmi10_80_9",t[t.cmi10_80_1=2]="cmi10_80_1",t[t.def_00_19=3]="def_00_19",t[t.def_80_19=4]="def_80_19",t[t.def_80_99=5]="def_80_99",t[t.dry_00_19=6]="dry_00_19",t[t.dry_80_19=7]="dry_80_19",t[t.dry_80_99=8]="dry_80_99",t[t.gw_00_19=9]="gw_00_19",t[t.gw_80_19=10]="gw_80_19",t[t.gw_80_99=11]="gw_80_99",t[t.ht_00_19=12]="ht_00_19",t[t.ht_80_19=13]="ht_80_19",t[t.ht_80_99=14]="ht_80_99",t[t.pet_00_19=15]="pet_00_19",t[t.pet_80_19=16]="pet_80_19",t[t.pet_80_99=17]="pet_80_99",t[t.prc_00_19=18]="prc_00_19",t[t.prc_80_19=19]="prc_80_19",t[t.prc_80_99=20]="prc_80_99",t[t.ro_00_19=21]="ro_00_19",t[t.ro_80_19=22]="ro_80_19",t[t.ro_80_99=23]="ro_80_99",t[t.wet_00_19=24]="wet_00_19",t[t.wet_80_19=25]="wet_80_19",t[t.wet_80_99=26]="wet_80_99",t[t.Allindustr=27]="Allindustr",t[t.Farming=28]="Farming",t[t.Mining=29]="Mining",t[t.Constructi=30]="Constructi",t[t.Retailtrad=31]="Retailtrad",t[t.Informatio=32]="Informatio",t[t.Wholesalet=33]="Wholesalet",t[t.discuss=34]="discuss",t[t.PerCapitap=35]="PerCapitap",t[t.GDP2018=36]="GDP2018"}(r||(r={}));var p=new Intl.NumberFormat(void 0,{maximumFractionDigits:0,minimumFractionDigits:0}),b=new Map;b.set(r.cmi10_00_1,{name:"Climate Moisture Index 2000-2019",units:"",formatter:function(t){return p.format(t)},color:Object(u.c)(f.a).domain([-10,0,10])}),b.set(r.cmi10_80_9,{name:"Climate Moisture Index 1980-1999",units:"",formatter:function(t){return p.format(t)},color:Object(u.c)(f.a).domain([-10,0,10])}),b.set(r.cmi10_80_1,{name:"Climate Moisture Index 1980-2019",units:"",formatter:function(t){return p.format(t)},color:Object(u.c)(f.a).domain([-10,0,10])}),b.set(r.def_00_19,{name:"Irrigation Deficit 2000-2019",units:"mm/year",formatter:function(t){return p.format(t)},color:Object(u.c)((function(t){return f.a(1-t)})).domain([-600,0,1600])}),b.set(r.def_80_19,{name:"Irrigation Deficit 1980-2019",units:"mm/year",formatter:function(t){return p.format(t)},color:Object(u.c)((function(t){return f.a(1-t)})).domain([-600,0,1600])}),b.set(r.def_80_99,{name:"Irrigation Deficit 1980-1999",units:"mm/year",formatter:function(t){return p.format(t)},color:Object(u.c)((function(t){return f.a(1-t)})).domain([-600,0,1600])}),b.set(r.dry_00_19,{name:"Drought Indicator 2000-2019",units:"mm/year",formatter:function(t){return p.format(t)},color:Object(u.d)(l.a).domain([0,1500])}),b.set(r.dry_80_19,{name:"Drought Indicator 1980-2019",units:"mm/year",formatter:function(t){return p.format(t)},color:Object(u.d)(l.a).domain([0,1500])}),b.set(r.dry_80_99,{name:"Drought Indicator 1980-1999",units:"mm/year",formatter:function(t){return p.format(t)},color:Object(u.d)(l.a).domain([0,1500])}),b.set(r.gw_00_19,{name:"Groundwater 2000-2019",units:"mm/month",formatter:function(t){return p.format(t)},color:Object(u.d)(l.a).domain([0,40])}),b.set(r.gw_80_19,{name:"Groundwater 1980-2019",units:"mm/month",formatter:function(t){return p.format(t)},color:Object(u.d)(l.a).domain([0,40])}),b.set(r.gw_80_99,{name:"Groundwater 1980-1999",units:"mm/month",formatter:function(t){return p.format(t)},color:Object(u.d)(l.a).domain([0,40])}),b.set(r.ht_00_19,{name:"Maximum Month Temperature 2000-2019",units:"\xb0C",formatter:function(t){return p.format(t)},color:Object(u.c)((function(t){return _.a(1-t)})).domain([20,30,40])}),b.set(r.ht_80_19,{name:"Maximum Month Temperature 1980-2019",units:"\xb0C",formatter:function(t){return p.format(t)},color:Object(u.c)((function(t){return _.a(1-t)})).domain([20,30,40])}),b.set(r.ht_80_99,{name:"Maximum Month Temperature 1980-1999",units:"\xb0C",formatter:function(t){return p.format(t)},color:Object(u.c)((function(t){return _.a(1-t)})).domain([20,30,40])}),b.set(r.pet_00_19,{name:"Mean Annual Potential Evapotranspiration 2000-2019",units:"mm/year",formatter:function(t){return p.format(t)},color:Object(u.d)(l.a).domain([300,1700])}),b.set(r.pet_80_19,{name:"Mean Annual Potential Evapotranspiration 1980-2019",units:"mm/year",formatter:function(t){return p.format(t)},color:Object(u.d)(l.a).domain([300,1700])}),b.set(r.pet_80_99,{name:"Mean Annual Potential Evapotranspiration 1980-1999",units:"mm/year",formatter:function(t){return p.format(t)},color:Object(u.d)(l.a).domain([300,1700])}),b.set(r.prc_00_19,{name:"Mean Annual Precipitation 2000-2019",units:"mm/year",formatter:function(t){return p.format(t)},color:Object(u.d)(l.a).domain([0,2200])}),b.set(r.prc_80_19,{name:"Mean Annual Precipitation 1980-2019",units:"mm/year",formatter:function(t){return p.format(t)},color:Object(u.d)(l.a).domain([0,2200])}),b.set(r.prc_80_99,{name:"Mean Annual Precipitation 1980-1999",units:"mm/year",formatter:function(t){return p.format(t)},color:Object(u.d)(l.a).domain([0,2200])}),b.set(r.ro_00_19,{name:"Mean Annual Runoff 2000-2019",units:"mm/year",formatter:function(t){return p.format(t)},color:Object(u.d)(l.a).domain([0,2e3])}),b.set(r.ro_80_19,{name:"Mean Annual Runoff 1980-2019",units:"mm/year",formatter:function(t){return p.format(t)},color:Object(u.d)(l.a).domain([0,2e3])}),b.set(r.ro_80_99,{name:"Mean Annual Runoff 1980-1999",units:"mm/year",formatter:function(t){return p.format(t)},color:Object(u.d)(l.a).domain([0,2e3])}),b.set(r.wet_00_19,{name:"Flood Indicator 2000-2019",units:"mm/month",formatter:function(t){return p.format(t)},color:Object(u.d)(l.a).domain([0,500])}),b.set(r.wet_80_19,{name:"Flood Indicator 1980-2019",units:"mm/month",formatter:function(t){return p.format(t)},color:Object(u.d)(l.a).domain([0,500])}),b.set(r.wet_80_99,{name:"Flood Indicator 1890-1999",units:"mm/month",formatter:function(t){return p.format(t)},color:Object(u.d)(l.a).domain([0,500])}),b.set(r.GDP2018,{name:"GDP 2018",units:"USD",formatter:function(t){return new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:0,minimumFractionDigits:0}).format(t)},color:Object(u.e)().domain([0,1e6,2e6,3e6,1e7,1e8,3e8,7e8]).range(d.b[8])}),b.set(r.Allindustr,{name:"Allindustr",units:"",formatter:function(t){return p.format(t)},color:Object(u.d)(d.a).domain([0,1e6])}),b.set(r.Farming,{name:"Farming",units:"",formatter:function(t){return p.format(t)},color:Object(u.d)(d.a).domain([0,2e4])}),b.set(r.Mining,{name:"Mining",units:"",formatter:function(t){return p.format(t)},color:Object(u.d)(d.a).domain([0,2e4])}),b.set(r.Constructi,{name:"Constructi",units:"",formatter:function(t){return p.format(t)},color:Object(u.d)(d.a).domain([0,2e4])}),b.set(r.Retailtrad,{name:"Retailtrad",units:"",formatter:function(t){return p.format(t)},color:Object(u.d)(d.a).domain([0,2e4])}),b.set(r.Informatio,{name:"Informatio",units:"",formatter:function(t){return p.format(t)},color:Object(u.d)(d.a).domain([0,2e4])}),b.set(r.Wholesalet,{name:"Wholesalet",units:"",formatter:function(t){return p.format(t)},color:Object(u.d)(d.a).domain([0,2e4])}),b.set(r.discuss,{name:"discuss",units:"",formatter:function(t){return p.format(t)},color:Object(u.d)(d.a).domain([20,60])}),b.set(r.PerCapitap,{name:"PerCapitap",units:"",formatter:function(t){return p.format(t)},color:Object(u.c)(f.a).domain([1e4,4e4,1e5])});var y=b,j=Object(u.f)("body").append("div").attr("class","tooltip").style("opacity",0).style("position","absolute").style("font-size","0.7em").style("font-family","sans-serif").style("font-weight",600).style("padding","4px").style("background","white").style("pointer-events","none"),h=function(t){return t?" ".concat(t):""},O=function(t){Object(u.f)(this).style("opacity",1).style("stroke",null),j.transition().duration(200).style("opacity",0)},g=function(t){var e=t.data,n=t.selection,i=Object(o.useRef)(null);return Object(o.useEffect)((function(){var t=Object(u.f)(i.current);if(void 0!==e){var o=Object(s.a)(e,e.objects.counties);t.select("#map").selectAll("path").data(o.features).join("path").attr("class","county").attr("fill",(function(t){return t.properties?y.get(n).color(t.properties[r[n]]):y.get(n).color(NaN)})).attr("d",Object(u.b)()),t.selectAll(".county").on("touchmove mousemove",function(t){return function(e){Object(u.f)(this).style("opacity",.5).style("stroke","black").style("stroke-width",.5),j.transition().duration(200).style("opacity",.9);var n=0,o="---",a=e.properties[r[t]];a&&(n=a,o=e.properties.NAME);var i=y.get(t);j.html("".concat(o,": ").concat(i.formatter(n)+h(i.units))).style("left","".concat(u.a.pageX+20,"px")).style("top",u.a.pageY-45+"px")}}(n)).on("touchend mouseleave",O)}}),[e,n]),a.a.createElement("svg",{ref:i,viewBox:"0, 0, 975, 610"},a.a.createElement("g",{id:"map"}))},w=function(t){var e=t.selection,n=t.onSelectionChange;return a.a.createElement("select",{value:r[e],onChange:n},Array.from(y.entries()).map((function(t){var e,n=Object(c.a)(t,2),o=n[0],i=n[1];return a.a.createElement("option",{key:r[o],value:r[o]},i.name," ",(e=i.units)?"(".concat(e,")"):"")})))},v=(n(69),n(75)),M=function(){var t=Object(o.useState)({data:void 0,selection:r.GDP2018}),e=Object(c.a)(t,2),n=e[0],i=n.data,m=n.selection,u=e[1];Object(o.useEffect)((function(){Object(v.a)("/climate-risk-map/usa-topo.json").then((function(t){return u({data:t,selection:m})}))}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Climate Risk Map"),a.a.createElement(w,{onSelectionChange:function(t){u({data:i,selection:r[t.target.value]})},selection:m}),a.a.createElement(g,{data:i,selection:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.1cdffcf4.chunk.js.map