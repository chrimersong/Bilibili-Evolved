!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["live/showgirl"]=t():e["live/showgirl"]=t()}(globalThis,(()=>(()=>{"use strict";var e,t,o={479:e=>{e.exports=coreApis.style}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return o[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&n&&o;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,r.d(i,a),i},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};r.d(i,{component:()=>d});const a=coreApis.componentApis.define,l=coreApis.utils.urls,c="dpi-live-showgirl",s=async()=>{const{addStyle:e}=await Promise.resolve().then(r.t.bind(r,479,23));null===document.getElementById(c)&&e(`\n      .haruna-ctnr,\n      .avatar-btn\n      {\n        transform: scale(${1/window.devicePixelRatio}) !important;\n      }\n    `,c)},d=(0,a.defineComponentMetadata)({name:"dpiLiveShowgirl",displayName:"直播看板娘高 DPI 适配",enabledByDefault:window.devicePixelRatio>1,description:{"zh-CN":"根据屏幕 DPI 缩放直播看板娘的大小, 避免像素锯齿."},tags:[componentsTags.live,componentsTags.style],entry:s,reload:s,unload:()=>{document.getElementById(c)?.remove()},urlInclude:l.liveUrls,commitHash:"1ab4c3fd6fe4cae140727cd2342062b3b14527ac",coreVersion:"2.10.0"});return i=i.component})()));