!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["launch-bar/cv-search"]=t():e["launch-bar/cv-search"]=t()}(globalThis,(()=>(()=>{var e,t,r={824:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=824,e.exports=t},239:e=>{"use strict";e.exports="在输入专栏的 cv 号或专栏文集的 rl 号时, 提供对应的跳转选项.\n"}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,i),o.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);i.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&n&&r;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,i.d(o,a),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";i.d(o,{plugin:()=>r});const e=coreApis.ajax,t=e=>{const{name:t,displayName:r,description:n,indexer:i,link:o}=e;return{name:t||i,displayName:r,icon:"mdi-open-in-new",indexer:i,description:n,action:()=>{window.open(o,"_blank")},order:0}},r={name:"launchBar.actions.cvSearch",displayName:"搜索栏 - 专栏跳转",async setup(r){let{addData:n}=r;n("launchBar.actions",(r=>{r.push({name:"cvSearchProvider",getActions:async r=>{const{match:n,type:i,id:o,indexer:a}=((e,t)=>{const r=e.match(t);if(!r)return{};const n=r[1],i=r[2];return{match:r,type:n,id:i,indexer:`${n}${i}`}})(r,/^(cv|rl)(\d+)$/);if(!n)return[];if("rl"===i){const r=await(0,e.getJson)(`https://api.bilibili.com/x/article/list/web/articles?id=${o}`),{name:n}=lodash.get(r,"data.list",{});return[t({name:n,description:"文集跳转",link:`https://www.bilibili.com/read/readlist/${a}`,indexer:a})]}const c=await(0,e.getJson)(`https://api.bilibili.com/x/article/viewinfo?id=${o}`),{title:s}=lodash.get(c,"data",{});return[t({name:s,description:"专栏跳转",link:`https://www.bilibili.com/read/${a}`,indexer:a})]}})}))},commitHash:"1ab4c3fd6fe4cae140727cd2342062b3b14527ac",coreVersion:"2.10.0",description:(()=>{const e=i(824);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(i.t.bind(i,239,17)).then((e=>e.default))}})()}})(),o=o.plugin})()));