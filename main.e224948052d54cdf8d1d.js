(()=>{"use strict";var e,r,t,n,o,a,i={250:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof header)return e();t.l("undefined/remoteEntry.js",(t=>{if("undefined"!=typeof header)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"header")})).then((()=>header))},452:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof footer)return e();t.l("undefined/remoteEntry.js",(t=>{if("undefined"!=typeof footer)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"footer")})).then((()=>footer))},570:(e,r,t)=>{const n={header:{devUrl:"http://localhost:3001/mfe-header/remoteEntry.js",prodUrl:"https://ruslanoy.github.io/mfe-header/remoteEntry.js"},footer:{devUrl:"http://localhost:3002/mfe-footer/remoteEntry.js",prodUrl:"https://ruslanoy.github.io/mfe-footer/remoteEntry.js"}};(async()=>{await Promise.all(Object.entries(n).map((([e,r])=>((e,r)=>new Promise(((t,n)=>{const o=document.createElement("script");o.src=r,o.type="text/javascript",o.async=!0,o.onload=()=>{console.log(`Remote ${e} loaded`),t("success")},o.onerror=()=>{console.error(`Failed to load remote ${e}`),n()},document.head.appendChild(o)})))(e,r.prodUrl))))})().then((()=>Promise.all([t.e(914),t.e(867)]).then(t.bind(t,867)))).catch((e=>console.error("Remote loading failed:",e)))}},f={};function u(e){var r=f[e];if(void 0!==r)return r.exports;var t=f[e]={exports:{}};return i[e](t,t.exports,u),t.exports}u.m=i,u.c=f,u.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return u.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);u.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,u.d(o,a),o},u.d=(e,r)=>{for(var t in r)u.o(r,t)&&!u.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((r,t)=>(u.f[t](e,r),r)),[])),u.u=e=>e+"."+{540:"1264bbcd3ce98d7e2c73",867:"e45335379270590a9607",961:"e3f2d437d49d8f8917cb"}[e]+".js",u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="mfe-app:",u.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,f;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var p=s[l];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==n+o){i=p;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),f&&document.head.appendChild(i)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={32:[32],948:[948]},a={32:["default","./Header",250],948:["default","./Footer",452]},u.f.remotes=(e,r)=>{u.o(o,e)&&o[e].forEach((e=>{var t=u.R;t||(t=[]);var n=a[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),u.m[e]=()=>{throw r},n.p=0},i=(e,t,a,i,f,u)=>{try{var s=e(t,a);if(!s||!s.then)return f(s,i,u);var l=s.then((e=>f(e,i)),o);if(!u)return l;r.push(n.p=l)}catch(e){o(e)}},f=(e,r,o)=>i(r.get,n[1],t,0,s,o),s=r=>{n.p=1,u.m[e]=e=>{e.exports=r()}};i(u,n[2],0,0,((e,r,t)=>e?i(u.I,n[0],0,e,f,t):o()),1)}}))},(()=>{u.S={};var e={},r={};u.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];u.o(u.S,t)||(u.S[t]={});var a=u.S[t],i="mfe-app",f=(e,r,t,n)=>{var o=a[e]=a[e]||{},f=o[r];(!f||!f.loaded&&(!n!=!f.eager?n:i>f.from))&&(o[r]={get:t,from:i,eager:!!n})},s=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var o=u(e);if(!o)return;var a=e=>e&&e.init&&e.init(u.S[t],n);if(o.then)return l.push(o.then(a,r));var i=a(o);if(i&&i.then)return l.push(i.catch(r))}catch(e){r(e)}},l=[];return"default"===t&&(f("react-dom","18.3.1",(()=>Promise.all([u.e(961),u.e(914)]).then((()=>()=>u(961))))),f("react","18.3.1",(()=>u.e(540).then((()=>()=>u(540))))),s(250),s(452)),l.length?e[t]=Promise.all(l).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;u.g.importScripts&&(e=u.g.location+"");var r=u.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(f=e[a]))[0]?"-":(o>0?".":"")+(o=2,f);return n}var i=[];for(a=1;a<e.length;a++){var f=e[a];i.push(0===f?"not("+u()+")":1===f?"("+u()+" || "+u()+")":2===f?i.pop()+" "+i.pop():r(f))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},t=(r,n)=>{if(0 in r){n=e(n);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,f=1,u=!0;;f++,i++){var s,l,p=f<r.length?(typeof r[f])[0]:"";if(i>=n.length||"o"==(l=(typeof(s=n[i]))[0]))return!u||("u"==p?f>o&&!a:""==p!=a);if("u"==l){if(!u||"u"!=p)return!1}else if(u)if(p==l)if(f<=o){if(s!=r[f])return!1}else{if(a?s>r[f]:s<r[f])return!1;s!=r[f]&&(u=!1)}else if("s"!=p&&"n"!=p){if(a||f<=o)return!1;u=!1,f--}else{if(f<=o||l<p!=a)return!1;u=!1}else"s"!=p&&"n"!=p&&(u=!1,f--)}}var d=[],c=d.pop.bind(d);for(i=1;i<r.length;i++){var h=r[i];d.push(1==h?c()|c():2==h?c()&c():h?t(h,n):!c())}return!!c()},n=(r,t,n)=>{var o=n?(e=>Object.keys(e).reduce(((r,t)=>(e[t].eager&&(r[t]=e[t]),r)),{}))(r[t]):r[t];return Object.keys(o).reduce(((r,t)=>!r||!o[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],f=(typeof i)[0];if(a!=f)return"o"==a&&"n"==f||"s"==f||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(r,t)?t:r),0)},o=(e,r,t)=>t?t():((e,r)=>(e=>{throw new Error(e)})("Shared module "+r+" doesn't exist in shared scope "+e))(e,r),a=(e=>function(r,t,n,o,a){var i=u.I(r);return i&&i.then&&!n?i.then(e.bind(e,r,u.S[r],t,!1,o,a)):e(r,u.S[r],t,n,o,a)})(((e,a,i,f,s,l)=>{if(!((e,r)=>e&&u.o(e,r))(a,i))return o(e,i,l);var p,d,c=n(a,i,f);return t(s,c)||(d=((e,t,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+r(o)+")")(a,i,c,s),"undefined"!=typeof console&&console.warn&&console.warn(d)),(p=a[i][c]).loaded=1,p.get()})),i={},f={914:()=>a("default","react",!1,[1,18,2,0],(()=>u.e(540).then((()=>()=>u(540))))),672:()=>a("default","react-dom",!1,[1,18,2,0],(()=>u.e(961).then((()=>()=>u(961)))))},s={867:[672],914:[914]},l={};u.f.consumes=(e,r)=>{u.o(s,e)&&s[e].forEach((e=>{if(u.o(i,e))return r.push(i[e]);if(!l[e]){var t=r=>{i[e]=0,u.m[e]=t=>{delete u.c[e],t.exports=r()}};l[e]=!0;var n=r=>{delete i[e],u.m[e]=t=>{throw delete u.c[e],r}};try{var o=f[e]();o.then?r.push(i[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))}})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(f=e[a]))[0]?"-":(o>0?".":"")+(o=2,f);return n}var i=[];for(a=1;a<e.length;a++){var f=e[a];i.push(0===f?"not("+u()+")":1===f?"("+u()+" || "+u()+")":2===f?i.pop()+" "+i.pop():r(f))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},t=(r,n)=>{if(0 in r){n=e(n);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,f=1,u=!0;;f++,i++){var s,l,p=f<r.length?(typeof r[f])[0]:"";if(i>=n.length||"o"==(l=(typeof(s=n[i]))[0]))return!u||("u"==p?f>o&&!a:""==p!=a);if("u"==l){if(!u||"u"!=p)return!1}else if(u)if(p==l)if(f<=o){if(s!=r[f])return!1}else{if(a?s>r[f]:s<r[f])return!1;s!=r[f]&&(u=!1)}else if("s"!=p&&"n"!=p){if(a||f<=o)return!1;u=!1,f--}else{if(f<=o||l<p!=a)return!1;u=!1}else"s"!=p&&"n"!=p&&(u=!1,f--)}}var d=[],c=d.pop.bind(d);for(i=1;i<r.length;i++){var h=r[i];d.push(1==h?c()|c():2==h?c()&c():h?t(h,n):!c())}return!!c()},n=(r,t,n)=>{var o=n?(e=>Object.keys(e).reduce(((r,t)=>(e[t].eager&&(r[t]=e[t]),r)),{}))(r[t]):r[t];return Object.keys(o).reduce(((r,t)=>!r||!o[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],f=(typeof i)[0];if(a!=f)return"o"==a&&"n"==f||"s"==f||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(r,t)?t:r),0)},o=(e,r,t)=>t?t():((e,r)=>(e=>{throw new Error(e)})("Shared module "+r+" doesn't exist in shared scope "+e))(e,r),a=(e=>function(r,t,n,o,a){var i=u.I(r);return i&&i.then&&!n?i.then(e.bind(e,r,u.S[r],t,!1,o,a)):e(r,u.S[r],t,n,o,a)})(((e,a,i,f,s,l)=>{if(!((e,r)=>e&&u.o(e,r))(a,i))return o(e,i,l);var p,d,c=n(a,i,f);return t(s,c)||(d=((e,t,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+r(o)+")")(a,i,c,s),"undefined"!=typeof console&&console.warn&&console.warn(d)),(p=a[i][c]).loaded=1,p.get()})),i={},f={914:()=>a("default","react",!1,[1,18,2,0],(()=>u.e(540).then((()=>()=>u(540))))),672:()=>a("default","react-dom",!1,[1,18,2,0],(()=>u.e(961).then((()=>()=>u(961)))))},s={867:[672],914:[914]},l={};u.f.consumes=(e,r)=>{u.o(s,e)&&s[e].forEach((e=>{if(u.o(i,e))return r.push(i[e]);if(!l[e]){var t=r=>{i[e]=0,u.m[e]=t=>{delete u.c[e],t.exports=r()}};l[e]=!0;var n=r=>{delete i[e],u.m[e]=t=>{throw delete u.c[e],r}};try{var o=f[e]();o.then?r.push(i[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))}})(),(()=>{var e={792:0};u.f.j=(r,t)=>{var n=u.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(32|914|948)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=u.p+u.u(r),i=new Error;u.l(a,(t=>{if(u.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,f]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in i)u.o(i,n)&&(u.m[n]=i[n]);f&&f(u)}for(r&&r(t);s<a.length;s++)o=a[s],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkmfe_app=self.webpackChunkmfe_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),u(570)})();