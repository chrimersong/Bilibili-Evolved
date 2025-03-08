!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/comments/content-replace"]=t():e["utils/comments/content-replace"]=t()}(globalThis,(()=>(()=>{var e,t,n={165:(e,t,n)=>{"use strict";n.d(t,{CommentContentReplaceHandlers:()=>l});var o=n(322),r=n(905);const i=e=>{try{const t=new URL(e);return Boolean(t)}catch(e){return!1}};class a{}const{options:s}=(0,r.getComponentSettings)("commentContentReplace"),c=[new class extends a{isKeywordMatch(e,t,n){return e instanceof Text&&(e.textContent.includes(t)&&i(n))}replaceContent(e,t,n){const o=e.textContent.indexOf(t);if(-1===o||!(e instanceof Text))return[];const r=new Text(e.textContent.substring(0,o)),i=((e,t)=>{const n=document.createElement("img");return n.src=e,n.alt=t,n.loading="lazy",n.style.width="50px",n.style.height="50px",n})(n,t),a=new Text(e.textContent.substring(o+t.length));return e.replaceWith(r,i,a),[a]}},new class extends a{isKeywordMatch(e,t,n){return e instanceof HTMLImageElement&&(e.alt===t&&i(n))}replaceContent(e,t,n){return e instanceof HTMLImageElement?(e.src=n,[]):[]}},new class extends a{isKeywordMatch(e,t){return e instanceof Text&&e.textContent.includes(t)}replaceContent(e,t,n){const o=e.textContent.indexOf(t);if(-1===o)return[];const r=e.textContent.substring(0,o),i=e.textContent.substring(o+t.length);return e.textContent=`${r}${n}${i}`,[]}},new class extends a{isKeywordMatch(e,t){return e instanceof HTMLImageElement&&e.alt===t}replaceContent(e,t,n){return e instanceof HTMLImageElement?(""===n?e.remove():e.replaceWith(new Text(n)),[]):[]}},new class extends a{isKeywordMatch(){return!0}replaceContent(e){return Array.from(e.childNodes)}}],l="commentContentReplace.handlers";(0,o.registerAndGetData)(l,[e=>{let{content:t}=e;const{replaceMap:n}=s,[r]=(0,o.registerAndGetData)("commentContentReplace.defaultHandler.replaceMap",n),i=e=>{e.forEach((e=>{Object.entries(r).forEach((t=>{let[n,o]=t;if(n===o||""===n)return;const r=c.find((t=>t.isKeywordMatch(e,n,o)));if(!r)return;const a=r.replaceContent(e,n,o);i(a)}))}))};i(t)}])},552:(e,t,n)=>{var o=n(955)((function(e){return e[1]}));o.push([e.id,".comment-content-replace-row {\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  gap: 4px;\n}\n.comment-content-replace-row-from, .comment-content-replace-row-to {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.comment-content-replace-row-to-icon {\n  padding: 4px;\n}",""]),e.exports=o},882:(e,t,n)=>{var o=n(955)((function(e){return e[1]}));o.push([e.id,".comment-content-replace-extra-options {\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  gap: 8px;\n}\n.comment-content-replace-rows {\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  gap: 8px;\n}\n.comment-content-replace-separator {\n  align-self: center;\n  width: 30%;\n  height: 1px;\n  background-color: #8884;\n}\n.comment-content-replace-add-row {\n  align-self: start;\n}",""]),e.exports=o},955:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},991:(e,t,n)=>{"use strict";var o,r=function(){return void 0===o&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=s(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:v(p,t),references:1}),o.push(u)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,h=0;function v(e,t){var n,o,r;if(t.singleton){var i=h++;n=m||(m=l(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=l(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=s(n[o]);a[r].references--}for(var i=c(e,t),l=0;l<n.length;l++){var u=s(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},912:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>_});var o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"comment-content-replace-extra-options"},[t("div",{staticClass:"comment-content-replace-rows"},[e._l(e.rows,(function(n,o){return[t("ContentReplaceRow",{key:n.key,attrs:{row:n},on:{change:function(t){return e.handleRowChange(n,t)},delete:function(t){return e.handleRowDelete(n)}}}),e._v(" "),o<e.rows.length-1?t("div",{key:n.key,staticClass:"comment-content-replace-separator"}):e._e()]}))],2),e._v(" "),t("VButton",{staticClass:"comment-content-replace-add-row",on:{click:e.handleRowAdd}},[t("VIcon",{attrs:{size:14,icon:"mdi-plus"}}),e._v("\n    添加配置\n  ")],1)],1)};o._withStripped=!0;var r=n(905);const i=coreApis.utils,a=coreApis.ui;function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class c{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.from=e,this.to=t,s(this,"key",(0,i.getRandomId)())}}var l=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"comment-content-replace-row"},[t("div",{staticClass:"comment-content-replace-row-from"},[t("TextBox",{attrs:{placeholder:"查找",text:e.row.from,"change-on-blur":""},on:{change:function(t){return e.emitChange({from:t,to:e.row.to})}}}),e._v(" "),t("VButton",{attrs:{type:"transparent",icon:"",title:"删除此项"},on:{click:e.emitDelete}},[t("VIcon",{attrs:{size:14,icon:"mdi-trash-can-outline"}})],1)],1),e._v(" "),t("div",{staticClass:"comment-content-replace-row-to"},[t("VIcon",{staticClass:"comment-content-replace-row-to-icon",attrs:{size:14}},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M20 16L14.5 21.5L13.08 20.09L16.17 17H10.5C6.91 17 4 14.09 4 10.5V4H6V10.5C6 13 8 15 10.5 15H16.17L13.09 11.91L14.5 10.5L20 16Z",fill:"currentColor"}})])]),e._v(" "),t("TextBox",{attrs:{placeholder:"替换为",text:e.row.to,"change-on-blur":""},on:{change:function(t){return e.emitChange({from:e.row.from,to:t})}}})],1)])};l._withStripped=!0;const u=Vue.extend({components:{VButton:a.VButton,VIcon:a.VIcon,TextBox:a.TextBox},props:{row:{required:!0,type:c}},methods:{emitChange(e){this.$emit("change",e)},emitDelete(){this.$emit("delete")}}});var d=n(991),p=n.n(d),f=n(552),m=n.n(f),h={insert:"head",singleton:!1};p()(m(),h);m().locals;function v(e,t,n,o,r,i,a,s){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=c):r&&(c=s?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}const g=v(u,l,[],!1,null,null,null).exports,{options:x}=(0,r.getComponentSettings)("commentContentReplace"),y=Vue.extend({components:{ContentReplaceRow:g,VButton:a.VButton,VIcon:a.VIcon},data(){const{replaceMap:e}=x;return{rows:Object.entries(e).map((e=>{let[t,n]=e;return new c(t,n)}))}},methods:{saveSettings(){const e=this.rows.map((e=>[e.from,e.to])).filter((e=>{let[t]=e;return Boolean(t)}));x.replaceMap=Object.fromEntries(e)},handleRowChange(e,t){e.from=t.from,e.to=t.to,this.saveSettings()},handleRowDelete(e){(0,i.deleteValue)(this.rows,(t=>t===e)),this.saveSettings()},handleRowAdd(){this.rows.push(new c)}}});var w=n(882),b=n.n(w),C={insert:"head",singleton:!1};p()(b(),C);b().locals;const _=v(y,o,[],!1,null,null,null).exports},699:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=699,e.exports=t},80:e=>{"use strict";e.exports="替换评论中的内容.\n\n可以添加多个替换配置, 每项配置可将一个关键词替换为其他文本. 若替换的目标是一个链接, 则视作替换为表情, 留空则会移除命中的关键词.\n"},322:e=>{"use strict";e.exports=coreApis.pluginApis.data},905:e=>{"use strict";e.exports=coreApis.settings}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,r.d(i,a),i},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0;var i={};return(()=>{"use strict";r.d(i,{component:()=>s});const e=coreApis.componentApis.define,t=coreApis.componentApis.utils.commentApis,n=coreApis.spinQuery;var o=r(322);const a=(0,e.defineOptionsMetadata)({replaceMap:{defaultValue:{},hidden:!0}}),s=(0,e.defineComponentMetadata)({name:"commentContentReplace",displayName:"评论内容替换",tags:[componentsTags.utils],options:a,entry:async()=>{(0,t.forEachCommentItem)({added:async e=>{const{CommentContentReplaceHandlers:t}=await Promise.resolve().then(r.bind(r,165));if(void 0===e.shadowDomEntry)return;const i=await(0,n.select)((()=>e.shadowDomEntry.querySelector(":host(bili-rich-text) #contents")),{queryInterval:200});if(null===i)return;i.childNodes;const[a]=(0,o.getData)(t);a.forEach((t=>t({commentItem:e,content:Array.from(i.childNodes)})))}})},extraOptions:()=>Promise.resolve().then(r.bind(r,912)),commitHash:"1ab4c3fd6fe4cae140727cd2342062b3b14527ac",coreVersion:"2.10.0",description:(()=>{const e=r(699);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(r.t.bind(r,80,17)).then((e=>e.default))}})()})})(),i=i.component})()));