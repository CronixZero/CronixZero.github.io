(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{AP5z:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),c=n("vOnD"),i=n("yBb5"),r=n("vrFN"),o=c.d.ul.withConfig({displayName:"goodies__UnstyledUl",componentId:"o1f9jr-0"})(["list-style:initial;margin-left:15px;line-height:30px;font-weight:600;"]);t.default=function(){var e=Object(a.useState)(),t=e[0],n=e[1];return Object(a.useEffect)((function(){fetch("https://api.github.com/gists/17793ea33123f0ce4c0200cc734d7889").then((function(e){return e.json()})).then((function(e){n(JSON.parse(e.files["goodies.json"].content))}))}),[]),l.a.createElement(i.a,null,l.a.createElement(r.a,{title:"Anurag Hazra - All Links"}),l.a.createElement("h1",null,"Goodies"),l.a.createElement("p",null,"Collection of all of the project, experiment, source-code links at one place."),l.a.createElement("hr",null),!t&&l.a.createElement("p",null,"Loading please wait...."),t&&Object.entries(t).map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,e[0]),l.a.createElement(o,null,e[1].map((function(e){return l.a.createElement("li",null,l.a.createElement("a",{target:"__blank",href:e[0]},e[1]))}))))})))}}}]);
//# sourceMappingURL=component---src-pages-goodies-js-912eabb0033d38eb78b6.js.map