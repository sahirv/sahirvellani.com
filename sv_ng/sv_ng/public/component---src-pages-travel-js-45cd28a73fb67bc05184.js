(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Fcmh:function(e,t,a){e.exports={selected:"continents-module--selected--1RLmy"}},KT0D:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),i=a("X06M"),r=a.n(i),c=a("Bl7J"),s=a("vrFN"),l=a("Wbzz"),m=a("sh+E"),u=a("Fcmh"),d=a.n(u),h=function(e){var t=function(e){var t=[];for(var a in e)t.push(o.a.createElement("path",{d:e[a]}));return t},a={},i=e.continents;for(var r in i)a[i[r].continent]=t(i[r].path);var c=Object(n.useState)(void 0),s=c[0],l=c[1];return o.a.createElement("svg",{onClick:function(){e.onContinentClick(void 0),l(void 0)},version:"1.0",width:"100%",viewBox:"0 0 468 200",preserveAspectRatio:"xMidYMid meet",id:"worldMap"},o.a.createElement("g",{onClick:function(t){t.stopPropagation(),e.onContinentClick("africa"),l("africa")},id:"africa",transform:"matrix(1.6963e-2,0,0,-1.6963e-2,0,239)",className:"africa"==s?d.a.selected:null},a.africa),o.a.createElement("g",{onClick:function(t){t.stopPropagation(),e.onContinentClick("asia"),l("asia")},id:"asia",transform:"matrix(1.6963e-2,0,0,-1.6963e-2,0,239)",className:"asia"==s?d.a.selected:null},a.asia),o.a.createElement("g",{onClick:function(t){t.stopPropagation(),e.onContinentClick("australia"),l("australia")},id:"australia",transform:"matrix(1.6963e-2,0,0,-1.6963e-2,0,239)",className:"australia"==s?d.a.selected:null},a.australia),o.a.createElement("g",{onClick:function(t){t.stopPropagation(),e.onContinentClick("europe"),l("europe")},id:"europe",transform:"matrix(1.6963e-2,0,0,-1.6963e-2,0,239)",className:"europe"==s?d.a.selected:null},a.europe),o.a.createElement("g",{onClick:function(t){t.stopPropagation(),e.onContinentClick("south america"),l("south america")},id:"south_america",transform:"matrix(1.6963e-2,0,0,-1.6963e-2,0,239)",className:"south america"==s?d.a.selected:null},a["south america"]),o.a.createElement("g",{onClick:function(t){t.stopPropagation(),e.onContinentClick("north america"),l("north america")},id:"north_america",transform:"matrix(1.6963e-2,0,0,-1.6963e-2,0,239)",className:"north america"==s?d.a.selected:null},a["north america"]))},p=function(e){return o.a.createElement("div",null,o.a.createElement(h,{continents:e.continents,onContinentClick:e.onContinentClick}))};t.default=function(){var e=Object(l.useStaticQuery)("2219617198"),t=e.image_data.nodes[0].earth_image_details,a=e.map_data.nodes[0].map_data,i=o.a.useState(void 0),u=i[0],d=i[1],h=Object(n.useRef)();return o.a.createElement(c.a,{pageTitle:"Earth"},o.a.createElement(s.a,{title:"Earth - Travel"}),o.a.createElement("div",{className:r.a.earthDescription},"What should we do with our time but to explore? I haven't seen much of the world, but the parts that I have seen offered plenty of beautiful scenes and moments. Here are some of those moments that I experienced, sorted by continent."),o.a.createElement(p,{continents:a,onContinentClick:function(e){var t;d(e),t=h,console.log(t),t.current&&window.scrollTo(0,t.current.offsetTop)}}),o.a.createElement("hr",{className:r.a.hrStyle}),o.a.createElement(m.a,{gridRef:h,continent:u,thumbnails:e.thumbnails.edges,images:e.images.edges,imageDetails:t}))}},X06M:function(e,t,a){e.exports={earthDescription:"travel-module--earthDescription--3JG8r",hrStyle:"travel-module--hrStyle--1jtnH"}}}]);
//# sourceMappingURL=component---src-pages-travel-js-45cd28a73fb67bc05184.js.map