(this["webpackJsonpclimate-risk-map"]=this["webpackJsonpclimate-risk-map"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n,r,o,i,c=a(0),_=a.n(c),s=a(64),l=a.n(s),d=(a(98),a(17)),m=a(3),u=a(39),p=a(121),f=a(122),E=a(123),h=a(124);!function(e){e.ClimateMoistureIndex="cmi",e.IrregationDeficit="def",e.DroughtIndicator="dry",e.Groundwater="gw",e.MaxTemperature="ht",e.Evapotranspiration="pet",e.Precipitation="prc",e.Runoff="ro",e.FloodIndicator="wet",e.AllIndustries="Allindustr",e.Farming="Farming",e.Mining="Mining",e.Construction="Constructi",e.Retail="Retailtrad",e.Information="Informatio",e.Wholesale="Wholesalet",e.discuss="discuss",e.PerCapitap="PerCapitap",e.GDP2018="GDP2018"}(n||(n={})),function(e){e[e.Ecmi_00_19=0]="Ecmi_00_19",e[e.Ecmi_80_19=1]="Ecmi_80_19",e[e.Ecmi_80_99=2]="Ecmi_80_99",e[e.Edef_00_19=3]="Edef_00_19",e[e.Edef_80_19=4]="Edef_80_19",e[e.Edef_80_99=5]="Edef_80_99",e[e.Edry_00_19=6]="Edry_00_19",e[e.Edry_80_19=7]="Edry_80_19",e[e.Edry_80_99=8]="Edry_80_99",e[e.Egw_00_19=9]="Egw_00_19",e[e.Egw_80_19=10]="Egw_80_19",e[e.Egw_80_99=11]="Egw_80_99",e[e.Eht_00_19=12]="Eht_00_19",e[e.Eht_80_19=13]="Eht_80_19",e[e.Eht_80_99=14]="Eht_80_99",e[e.Epet_00_19=15]="Epet_00_19",e[e.Epet_80_19=16]="Epet_80_19",e[e.Epet_80_99=17]="Epet_80_99",e[e.Eprc_00_19=18]="Eprc_00_19",e[e.Eprc_80_19=19]="Eprc_80_19",e[e.Eprc_80_99=20]="Eprc_80_99",e[e.Ero_00_19=21]="Ero_00_19",e[e.Ero_80_19=22]="Ero_80_19",e[e.Ero_80_99=23]="Ero_80_99",e[e.Ewet_00_19=24]="Ewet_00_19",e[e.Ewet_80_19=25]="Ewet_80_19",e[e.Ewet_80_99=26]="Ewet_80_99",e[e.Mcmi_00_19=27]="Mcmi_00_19",e[e.Mcmi_80_19=28]="Mcmi_80_19",e[e.Mcmi_80_99=29]="Mcmi_80_99",e[e.Mdef_00_19=30]="Mdef_00_19",e[e.Mdef_80_19=31]="Mdef_80_19",e[e.Mdef_80_99=32]="Mdef_80_99",e[e.Mdry_00_19=33]="Mdry_00_19",e[e.Mdry_80_19=34]="Mdry_80_19",e[e.Mdry_80_99=35]="Mdry_80_99",e[e.Mgw_00_19=36]="Mgw_00_19",e[e.Mgw_80_19=37]="Mgw_80_19",e[e.Mgw_80_99=38]="Mgw_80_99",e[e.Mht_00_19=39]="Mht_00_19",e[e.Mht_80_19=40]="Mht_80_19",e[e.Mht_80_99=41]="Mht_80_99",e[e.Mpet_00_19=42]="Mpet_00_19",e[e.Mpet_80_19=43]="Mpet_80_19",e[e.Mpet_80_99=44]="Mpet_80_99",e[e.Mprc_00_19=45]="Mprc_00_19",e[e.Mprc_80_19=46]="Mprc_80_19",e[e.Mprc_80_99=47]="Mprc_80_99",e[e.Mro_00_19=48]="Mro_00_19",e[e.Mro_80_19=49]="Mro_80_19",e[e.Mro_80_99=50]="Mro_80_99",e[e.Mwet_00_19=51]="Mwet_00_19",e[e.Mwet_80_19=52]="Mwet_80_19",e[e.Mwet_80_99=53]="Mwet_80_99",e[e.Ncmi_00_19=54]="Ncmi_00_19",e[e.Ncmi_80_19=55]="Ncmi_80_19",e[e.Ncmi_80_99=56]="Ncmi_80_99",e[e.Ndef_00_19=57]="Ndef_00_19",e[e.Ndef_80_19=58]="Ndef_80_19",e[e.Ndef_80_99=59]="Ndef_80_99",e[e.Ndry_00_19=60]="Ndry_00_19",e[e.Ndry_80_19=61]="Ndry_80_19",e[e.Ndry_80_99=62]="Ndry_80_99",e[e.Ngw_00_19=63]="Ngw_00_19",e[e.Ngw_80_19=64]="Ngw_80_19",e[e.Ngw_80_99=65]="Ngw_80_99",e[e.Nht_00_19=66]="Nht_00_19",e[e.Nht_80_19=67]="Nht_80_19",e[e.Nht_80_99=68]="Nht_80_99",e[e.Npet_00_19=69]="Npet_00_19",e[e.Npet_80_19=70]="Npet_80_19",e[e.Npet_80_99=71]="Npet_80_99",e[e.Nprc_00_19=72]="Nprc_00_19",e[e.Nprc_80_19=73]="Nprc_80_19",e[e.Nprc_80_99=74]="Nprc_80_99",e[e.Nro_00_19=75]="Nro_00_19",e[e.Nro_80_19=76]="Nro_80_19",e[e.Nro_80_99=77]="Nro_80_99",e[e.Nwet_00_19=78]="Nwet_00_19",e[e.Nwet_80_19=79]="Nwet_80_19",e[e.Nwet_80_99=80]="Nwet_80_99",e[e.Allindustr=81]="Allindustr",e[e.Farming=82]="Farming",e[e.Mining=83]="Mining",e[e.Constructi=84]="Constructi",e[e.Retailtrad=85]="Retailtrad",e[e.Informatio=86]="Informatio",e[e.Wholesalet=87]="Wholesalet",e[e.discuss=88]="discuss",e[e.PerCapitap=89]="PerCapitap",e[e.GDP2018=90]="GDP2018"}(r||(r={})),function(e){e.MERRA2="M",e.ERA5="E",e.NARR="N"}(o||(o={})),function(e){e._1980_1999="80_99",e._2000_2019="00_19",e._1980_2019="80_19"}(i||(i={}));var y=Object(m.b)(",.0f"),g=[i._1980_1999,i._2000_2019,i._1980_2019],M=[o.ERA5,o.MERRA2,o.NARR],v=function(e){var t=e.dataGroup;return t=e.dataset+t+"_"+e.year,r[t]},b=function(e){return r[e.dataGroup]},w=new Map;w.set(n.ClimateMoistureIndex,{name:"Climate Moisture Index",id:v,units:"",formatter:y,color:Object(m.d)(p.a).domain([-10,0,10]),normalized:!0,description:"",years:g,datasets:M}),w.set(n.IrregationDeficit,{name:"Irrigation Deficit",id:v,units:"mm/year",formatter:y,color:Object(m.d)((function(e){return p.a(1-e)})).domain([-600,0,1600]),normalized:!1,description:"",years:g,datasets:M}),w.set(n.DroughtIndicator,{name:"Drought Indicator",id:v,units:"mm/year",formatter:y,color:Object(m.e)(f.a).domain([0,1500]),normalized:!1,description:"",years:g,datasets:M}),w.set(n.Groundwater,{name:"Groundwater",id:v,units:"mm/month",formatter:y,color:Object(m.e)(f.a).domain([0,40]),normalized:!1,description:"",years:g,datasets:M}),w.set(n.MaxTemperature,{name:"Maximum Month Temperature",id:v,units:"\xb0C",formatter:y,color:Object(m.d)((function(e){return E.a(1-e)})).domain([20,30,40]),normalized:!1,description:"",years:g,datasets:M}),w.set(n.Evapotranspiration,{name:"Mean Annual Potential Evapotranspiration",id:v,units:"mm/year",formatter:y,color:Object(m.e)(f.a).domain([300,1700]),normalized:!1,description:"",years:g,datasets:M}),w.set(n.Precipitation,{name:"Mean Annual Precipitation",id:v,units:"mm/year",formatter:y,color:Object(m.e)(f.a).domain([0,2200]),normalized:!1,description:"",years:g,datasets:M}),w.set(n.Runoff,{name:"Mean Annual Runoff",id:v,units:"mm/year",formatter:y,color:Object(m.e)(f.a).domain([0,2e3]),normalized:!1,description:"",years:g,datasets:M}),w.set(n.FloodIndicator,{name:"Flood Indicator",id:v,units:"mm/month",formatter:y,color:Object(m.e)(f.a).domain([0,500]),normalized:!1,description:"",years:g,datasets:M}),w.set(n.GDP2018,{name:"GDP 2018",id:b,units:"USD",formatter:Object(m.b)("$,.0f"),color:Object(m.f)().domain([0,1e6,2e6,3e6,1e7,1e8,3e8,7e8]).range(h.b[8]),normalized:!1,description:"",years:[],datasets:[]}),w.set(n.AllIndustries,{name:"All Industries",id:b,units:"",formatter:y,color:Object(m.e)(h.a).domain([0,1e6]),normalized:!1,description:"",years:[],datasets:[]}),w.set(n.Farming,{name:"Farming",id:b,units:"",formatter:y,color:Object(m.e)(h.a).domain([0,2e4]),normalized:!1,description:"",years:[],datasets:[]}),w.set(n.Mining,{name:"Mining",id:b,units:"",formatter:y,color:Object(m.e)(h.a).domain([0,2e4]),normalized:!1,description:"",years:[],datasets:[]}),w.set(n.Construction,{name:"Construction",id:b,units:"",formatter:y,color:Object(m.e)(h.a).domain([0,2e4]),normalized:!1,description:"",years:[],datasets:[]}),w.set(n.Retail,{name:"Retail",id:b,units:"",formatter:y,color:Object(m.e)(h.a).domain([0,2e4]),normalized:!1,description:"",years:[],datasets:[]}),w.set(n.Information,{name:"Information",id:b,units:"",formatter:y,color:Object(m.e)(h.a).domain([0,2e4]),normalized:!1,description:"",years:[],datasets:[]}),w.set(n.Wholesale,{name:"Wholesale",id:b,units:"",formatter:y,color:Object(m.e)(h.a).domain([0,2e4]),normalized:!1,description:"",years:[],datasets:[]}),w.set(n.discuss,{name:"discuss",id:b,units:"",formatter:y,color:Object(m.e)(h.a).domain([20,60]),normalized:!1,description:"",years:[],datasets:[]}),w.set(n.PerCapitap,{name:"PerCapitap",id:b,units:"",formatter:y,color:Object(m.d)(p.a).domain([1e4,4e4,1e5]),normalized:!1,description:"",years:[],datasets:[]});var N=w,j=a(67),O=Object(m.g)("body").append("div").attr("class","tooltip").style("opacity",0).style("position","absolute").style("font-size","0.7em").style("font-family","sans-serif").style("font-weight",600).style("padding","4px").style("background","white").style("pointer-events","none"),z=function(e,t){return void 0===e?"No data":t.formatter(e)+R(t.units)},R=function(e){return e?" ".concat(e):""},C=function(e){Object(m.g)(this).style("opacity",1).style("stroke",null),O.transition().duration(200).style("opacity",0)},A=function(e){var t=e.data,a=e.selection,n=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=N.get(a.dataGroup),o=Object(m.g)(n.current);if(void 0!==t){var i,c=Object(u.a)(t,t.objects.counties),_=Object(j.a)().cells(5).shapeWidth(20).shapeHeight(30).shapePadding(0).titleWidth(200).title(e.name+(i=e.units,i?" (".concat(i,")"):"")).labelFormat(e.formatter).orient("vertical").scale(e.color);o.select("#legend").attr("transform","translate(925, 320)").call(_),o.select("#counties").selectAll("path").data(c.features).join("path").attr("class","county").attr("fill",(function(t){if(t.properties){var n,o=e.id(a),i=t.properties[r[o]];return null!==(n=e.color(i))&&void 0!==n?n:"#ccc"}return"#ccc"})).attr("d",Object(m.c)()),o.select("#states").select("path").datum(Object(u.b)(t,t.objects.states)).attr("fill","none").attr("stroke","white").attr("stroke-linejoin","round").attr("d",Object(m.c)()),o.selectAll(".county").on("touchmove mousemove",function(e,t){return function(a){var n;Object(m.g)(this).style("opacity",.5).style("stroke","black").style("stroke-width",.5),O.transition().duration(200).style("opacity",.9);var o=null!==(n=a.properties.County_Sta.replace("_",", "))&&void 0!==n?n:"---",i=a.properties[r[e]];O.html("".concat(o,": ").concat(z(i,t))).style("left","".concat(m.a.pageX+20,"px")).style("top",m.a.pageY-45+"px")}}(e.id(a),e)).on("touchend mouseleave",C)}}),[t,a]),_.a.createElement("svg",{ref:n,viewBox:"0, 0, 1175, 610"},_.a.createElement("g",{id:"legend"}),_.a.createElement("g",{id:"counties"}),_.a.createElement("g",{id:"states"},_.a.createElement("path",null)))},I=a(31),k=function(e){var t=e.years,a=e.selectedYear,n=e.onSelectionChange;return _.a.createElement("select",{value:a,onChange:n},t.map((function(e){return _.a.createElement("option",{key:e,value:e},function(e){switch(e){case i._2000_2019:return"2000-2019";case i._1980_2019:return"1980-2019";case i._1980_1999:return"1980-1999"}}(e))})))},G=function(e){var t=e.datasets,a=e.selectedDataset,n=e.onSelectionChange;return _.a.createElement("select",{value:a,onChange:n},t.map((function(e){return _.a.createElement("option",{key:e,value:e},function(e){switch(e){case o.ERA5:return"ERA5";case o.MERRA2:return"MERRA2";case o.NARR:return"NARR"}}(e))})))},S=function(e){return N.get(e.dataGroup).years},D=function(e){return N.get(e.dataGroup).datasets},P=function(e){var t=e.selection,a=e.onSelectionChange,n=e.showNormalized;return _.a.createElement(_.a.Fragment,null,_.a.createElement("select",{value:t.dataGroup,onChange:function(e){var n=e.target.value;a(Object(I.a)({},t,{dataGroup:n}))}},Array.from(N.entries()).filter((function(e){var t=Object(d.a)(e,2),a=(t[0],t[1]);return n?a.normalized:!a.normalized})).map((function(e){var t,a=Object(d.a)(e,2),n=a[0],r=a[1];return _.a.createElement("option",{key:n,value:n},r.name," ",(t=r.units)?"(".concat(t,")"):"")}))),S(t).length>0&&_.a.createElement(k,{years:S(t),selectedYear:t.year,onSelectionChange:function(e){var n=e.target.value;a(Object(I.a)({},t,{year:n}))}}),D(t).length>0&&_.a.createElement(G,{datasets:D(t),selectedDataset:t.dataset,onSelectionChange:function(e){var n=e.target.value;a(Object(I.a)({},t,{dataset:n}))}}))},F=function(e){var t=e.onSelectionChange,a=e.showNormalized;return _.a.createElement("form",null,_.a.createElement("div",null,_.a.createElement("input",{type:"radio",id:"raw",name:"data-type",value:"raw",checked:!a,onChange:t}),_.a.createElement("label",{htmlFor:"raw"},"Raw Data")),_.a.createElement("div",null,_.a.createElement("input",{type:"radio",id:"normalized",name:"data-type",value:"normalized",checked:a,onChange:t}),_.a.createElement("label",{htmlFor:"normalized"},"Normalized Data")))},x=(a(99),function(e){var t,a,n=e.selection;return _.a.createElement("p",{id:"description"},null!==(t=null===(a=N.get(n.dataGroup))||void 0===a?void 0:a.description)&&void 0!==t?t:"")}),W=a(125),B=a(5);function T(e){var t,a,n=!1;void 0!==e&&((n=N.get(e.dataGroup).normalized)?t=e:a=e);return{selection:a,normalizedSelection:t,normalized:n}}var Y={dataGroup:n.IrregationDeficit,year:i._2000_2019,dataset:o.ERA5},J={dataGroup:n.ClimateMoistureIndex,year:i._2000_2019,dataset:o.ERA5},$=function(){var e=T(void 0),t=void 0!==e.selection?e.selection:Y,a=void 0!==e.normalizedSelection?e.normalizedSelection:J,n=e.normalized,r=Object(c.useState)(void 0),o=Object(d.a)(r,2),i=o[0],s=o[1],l=Object(c.useState)(t),m=Object(d.a)(l,2),u=m[0],p=m[1],f=Object(c.useState)(a),E=Object(d.a)(f,2),h=E[0],y=E[1],g=Object(c.useState)(n),M=Object(d.a)(g,2),v=M[0],b=M[1];Object(c.useEffect)((function(){Object(W.a)("/climate-risk-map/usa-topo.json").then(s)}),[]);Object(c.useEffect)((function(){void 0!==t&&p(t)}),[t]),Object(c.useEffect)((function(){void 0!==a&&y(a)}),[a]),Object(c.useEffect)((function(){b(n)}),[n]);return _.a.createElement(_.a.Fragment,null,_.a.createElement("h1",null,"Climate Risk Map"),_.a.createElement(F,{onSelectionChange:function(e){var t="normalized"===e.target.value;b(t)},showNormalized:v}),_.a.createElement(P,{onSelectionChange:function(e){var t=T(e);void 0!==t.selection&&p(t.selection),void 0!==t.normalizedSelection&&y(t.normalizedSelection)},selection:v?h:u,showNormalized:v}),_.a.createElement(x,{selection:v?h:u}),_.a.createElement(A,{data:i,selection:v?h:u}))},H=a(35),U=function(){return _.a.createElement(H.a,{basename:"/climate-risk-map"},_.a.createElement(B.c,null,_.a.createElement(B.a,{path:"/"},_.a.createElement($,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(_.a.createElement(_.a.StrictMode,null,_.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t,a){e.exports=a(105)},98:function(e,t,a){},99:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.0fc2a424.chunk.js.map