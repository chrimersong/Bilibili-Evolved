!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/danmaku/unescape"]=t():e["video/danmaku/unescape"]=t()}(globalThis,(()=>(()=>{var e,t,o={844:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=844,e.exports=t},78:e=>{"use strict";e.exports="将弹幕中的 `\\n` 替换为真实的换行, 注意这可能导致原先不重叠的弹幕发生重叠.\n"}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return o[e](a,a.exports,r),a.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var c=2&n&&o;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>i[e]=()=>o[e]));return i.default=()=>o,r.d(a,i),a},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";r.d(a,{component:()=>o});const e=coreApis.componentApis.define,t=coreApis.componentApis.video.videoDanmaku,o=(0,e.defineComponentMetadata)({name:"unescapeDanmaku",displayName:"弹幕转义",tags:[componentsTags.video],entry:()=>{const e=/\\n/g;(0,t.forEachVideoDanmaku)({added:t=>{if(e.test(t.text)){const o=t.text.replace(e,"\n");t.element.textContent=o}}})},commitHash:"29059634f05846e79b893a1326523355a3bdc9ae",coreVersion:"2.8.9",description:(()=>{const e=r(844);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(r.t.bind(r,78,17)).then((e=>e.default))}})()})})(),a=a.component})()));