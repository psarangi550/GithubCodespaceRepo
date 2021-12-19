"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[6975],{9783:(n,e,r)=>{r.d(e,{Z:()=>l});var t=r(94015);var a=r.n(t);var i=r(23645);var o=r.n(i);var c=o()(a());c.push([n.id,"/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material-palenight.CodeMirror {\n  background-color: #292D3E;\n  color: #A6ACCD;\n}\n\n.cm-s-material-palenight .CodeMirror-gutters {\n  background: #292D3E;\n  color: #676E95;\n  border: none;\n}\n\n.cm-s-material-palenight .CodeMirror-guttermarker,\n.cm-s-material-palenight .CodeMirror-guttermarker-subtle,\n.cm-s-material-palenight .CodeMirror-linenumber {\n  color: #676E95;\n}\n\n.cm-s-material-palenight .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-material-palenight div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-palenight.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-palenight .CodeMirror-line::selection,\n.cm-s-material-palenight .CodeMirror-line>span::selection,\n.cm-s-material-palenight .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-palenight .CodeMirror-line::-moz-selection,\n.cm-s-material-palenight .CodeMirror-line>span::-moz-selection,\n.cm-s-material-palenight .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-palenight .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material-palenight .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material-palenight .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material-palenight .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material-palenight .cm-variable-3,\n.cm-s-material-palenight .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material-palenight .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material-palenight .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material-palenight .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material-palenight .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material-palenight .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material-palenight .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material-palenight .cm-comment {\n  color: #676E95;\n}\n\n.cm-s-material-palenight .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material-palenight .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material-palenight .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material-palenight .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material-palenight .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material-palenight .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material-palenight .cm-variable-3,\n.cm-s-material-palenight .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-material-palenight .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material-palenight .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}","",{version:3,sources:["webpack://./node_modules/codemirror/theme/material-palenight.css"],names:[],mappings:"AAAA;;;;CAIC;;AAED;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,YAAY;AACd;;AAEA;;;EAGE,cAAc;AAChB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;;AAGA;EACE,+BAA+B;EAC/B,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB",sourcesContent:["/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material-palenight.CodeMirror {\n  background-color: #292D3E;\n  color: #A6ACCD;\n}\n\n.cm-s-material-palenight .CodeMirror-gutters {\n  background: #292D3E;\n  color: #676E95;\n  border: none;\n}\n\n.cm-s-material-palenight .CodeMirror-guttermarker,\n.cm-s-material-palenight .CodeMirror-guttermarker-subtle,\n.cm-s-material-palenight .CodeMirror-linenumber {\n  color: #676E95;\n}\n\n.cm-s-material-palenight .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-material-palenight div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-palenight.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-palenight .CodeMirror-line::selection,\n.cm-s-material-palenight .CodeMirror-line>span::selection,\n.cm-s-material-palenight .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-palenight .CodeMirror-line::-moz-selection,\n.cm-s-material-palenight .CodeMirror-line>span::-moz-selection,\n.cm-s-material-palenight .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-palenight .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material-palenight .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material-palenight .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material-palenight .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material-palenight .cm-variable-3,\n.cm-s-material-palenight .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material-palenight .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material-palenight .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material-palenight .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material-palenight .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material-palenight .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material-palenight .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material-palenight .cm-comment {\n  color: #676E95;\n}\n\n.cm-s-material-palenight .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material-palenight .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material-palenight .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material-palenight .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material-palenight .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material-palenight .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material-palenight .cm-variable-3,\n.cm-s-material-palenight .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-material-palenight .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material-palenight .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}"],sourceRoot:""}]);const l=c},23645:n=>{n.exports=function(n){var e=[];e.toString=function e(){return this.map((function(e){var r=n(e);if(e[2]){return"@media ".concat(e[2]," {").concat(r,"}")}return r})).join("")};e.i=function(n,r,t){if(typeof n==="string"){n=[[null,n,""]]}var a={};if(t){for(var i=0;i<this.length;i++){var o=this[i][0];if(o!=null){a[o]=true}}}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);if(t&&a[l[0]]){continue}if(r){if(!l[2]){l[2]=r}else{l[2]="".concat(r," and ").concat(l[2])}}e.push(l)}};return e}},94015:n=>{function e(n,e){return o(n)||i(n,e)||t(n,e)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(n,e){if(!n)return;if(typeof n==="string")return a(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor)r=n.constructor.name;if(r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(n,e)}function a(n,e){if(e==null||e>n.length)e=n.length;for(var r=0,t=new Array(e);r<e;r++){t[r]=n[r]}return t}function i(n,e){var r=n&&(typeof Symbol!=="undefined"&&n[Symbol.iterator]||n["@@iterator"]);if(r==null)return;var t=[];var a=true;var i=false;var o,c;try{for(r=r.call(n);!(a=(o=r.next()).done);a=true){t.push(o.value);if(e&&t.length===e)break}}catch(l){i=true;c=l}finally{try{if(!a&&r["return"]!=null)r["return"]()}finally{if(i)throw c}}return t}function o(n){if(Array.isArray(n))return n}n.exports=function n(r){var t=e(r,4),a=t[1],i=t[3];if(!i){return a}if(typeof btoa==="function"){var o=btoa(unescape(encodeURIComponent(JSON.stringify(i))));var c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o);var l="/*# ".concat(c," */");var A=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[a].concat(A).concat([l]).join("\n")}return[a].join("\n")}},86975:(n,e,r)=>{r.r(e);r.d(e,{default:()=>l});var t=r(93379);var a=r.n(t);var i=r(9783);var o={};o.insert="head";o.singleton=false;var c=a()(i.Z,o);const l=i.Z.locals||{}},93379:(n,e,r)=>{var t=function n(){var e;return function n(){if(typeof e==="undefined"){e=Boolean(window&&document&&document.all&&!window.atob)}return e}}();var a=function n(){var e={};return function n(r){if(typeof e[r]==="undefined"){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement){try{t=t.contentDocument.head}catch(a){t=null}}e[r]=t}return e[r]}}();var i=[];function o(n){var e=-1;for(var r=0;r<i.length;r++){if(i[r].identifier===n){e=r;break}}return e}function c(n,e){var r={};var t=[];for(var a=0;a<n.length;a++){var c=n[a];var l=e.base?c[0]+e.base:c[0];var A=r[l]||0;var m="".concat(l," ").concat(A);r[l]=A+1;var s=o(m);var u={css:c[1],media:c[2],sourceMap:c[3]};if(s!==-1){i[s].references++;i[s].updater(u)}else{i.push({identifier:m,updater:d(u,e),references:1})}t.push(m)}return t}function l(n){var e=document.createElement("style");var t=n.attributes||{};if(typeof t.nonce==="undefined"){var i=true?r.nc:0;if(i){t.nonce=i}}Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}));if(typeof n.insert==="function"){n.insert(e)}else{var o=a(n.insert||"head");if(!o){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}o.appendChild(e)}return e}function A(n){if(n.parentNode===null){return false}n.parentNode.removeChild(n)}var m=function n(){var e=[];return function n(r,t){e[r]=t;return e.filter(Boolean).join("\n")}}();function s(n,e,r,t){var a=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet){n.styleSheet.cssText=m(e,a)}else{var i=document.createTextNode(a);var o=n.childNodes;if(o[e]){n.removeChild(o[e])}if(o.length){n.insertBefore(i,o[e])}else{n.appendChild(i)}}}function u(n,e,r){var t=r.css;var a=r.media;var i=r.sourceMap;if(a){n.setAttribute("media",a)}else{n.removeAttribute("media")}if(i&&typeof btoa!=="undefined"){t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")}if(n.styleSheet){n.styleSheet.cssText=t}else{while(n.firstChild){n.removeChild(n.firstChild)}n.appendChild(document.createTextNode(t))}}var p=null;var h=0;function d(n,e){var r;var t;var a;if(e.singleton){var i=h++;r=p||(p=l(e));t=s.bind(null,r,i,false);a=s.bind(null,r,i,true)}else{r=l(e);t=u.bind(null,r,e);a=function n(){A(r)}}t(n);return function e(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap){return}t(n=r)}else{a()}}}n.exports=function(n,e){e=e||{};if(!e.singleton&&typeof e.singleton!=="boolean"){e.singleton=t()}n=n||[];var r=c(n,e);return function n(t){t=t||[];if(Object.prototype.toString.call(t)!=="[object Array]"){return}for(var a=0;a<r.length;a++){var l=r[a];var A=o(l);i[A].references--}var m=c(t,e);for(var s=0;s<r.length;s++){var u=r[s];var p=o(u);if(i[p].references===0){i[p].updater();i.splice(p,1)}}r=m}}}}]);