(()=>{"use strict";var e,r,t,n,o,a,i,f={114:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof header)return e();t.l("https://ruslanoy.github.io/mfe-header/remoteEntry.js",(t=>{if("undefined"!=typeof header)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"header")})).then((()=>header))},482:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof footer)return e();t.l("https://ruslanoy.github.io/mfe-footer/remoteEntry.js",(t=>{if("undefined"!=typeof footer)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"footer")})).then((()=>footer))},867:(e,r,t)=>{var n=t(769),o=t.n(n),a=t(338);const i=o().lazy((()=>t.e(32).then(t.t.bind(t,32,23)))),f=o().lazy((()=>t.e(948).then(t.t.bind(t,948,23)))),u=()=>o().createElement("div",null,o().createElement(n.Suspense,{fallback:o().createElement("div",null,"Загрузка Header...")},o().createElement(i,null)),o().createElement("h1",null,"Основное приложение"),o().createElement(n.Suspense,{fallback:o().createElement("div",null,"Загрузка Footer...")},o().createElement(f,null))),l=document.getElementById("root");(0,a.H)(l).render(o().createElement(u,null))}},u={};function l(e){var r=u[e];if(void 0!==r)return r.exports;var t=u[e]={exports:{}};return f[e](t,t.exports,l),t.exports}l.m=f,l.c=u,e=[],l.O=(r,t,n,o)=>{if(!t){var a=1/0;for(s=0;s<e.length;s++){for(var[t,n,o]=e[s],i=!0,f=0;f<t.length;f++)(!1&o||a>=o)&&Object.keys(l.O).every((e=>l.O[e](t[f])))?t.splice(f--,1):(i=!1,o<a&&(a=o));if(i){e.splice(s--,1);var u=n();void 0!==u&&(r=u)}}return r}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[t,n,o]},l.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return l.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);l.r(o);var a={};r=r||[null,t({}),t([]),t(t)];for(var i=2&n&&e;"object"==typeof i&&!~r.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,l.d(o,a),o},l.d=(e,r)=>{for(var t in r)l.o(r,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((r,t)=>(l.f[t](e,r),r)),[])),l.u=e=>{},l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n={},o="mfe-app:",l.l=(e,r,t,a)=>{if(n[e])n[e].push(r);else{var i,f;if(void 0!==t)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var p=u[s];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==o+t){i=p;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",o+t),i.src=e),n[e]=[r];var d=(r,t)=>{i.onerror=i.onload=null,clearTimeout(c);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(t))),r)return r(t)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),f&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a={32:[32],948:[948]},i={32:["default","./Header",114],948:["default","./Footer",482]},l.f.remotes=(e,r)=>{l.o(a,e)&&a[e].forEach((e=>{var t=l.R;t||(t=[]);var n=i[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),l.m[e]=()=>{throw r},n.p=0},a=(e,t,a,i,f,u)=>{try{var l=e(t,a);if(!l||!l.then)return f(l,i,u);var s=l.then((e=>f(e,i)),o);if(!u)return s;r.push(n.p=s)}catch(e){o(e)}},f=(e,r,o)=>a(r.get,n[1],t,0,u,o),u=r=>{n.p=1,l.m[e]=e=>{e.exports=r()}};a(l,n[2],0,0,((e,r,t)=>e?a(l.I,n[0],0,e,f,t):o()),1)}}))},(()=>{l.S={};var e={},r={};l.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];l.o(l.S,t)||(l.S[t]={});var a=l.S[t],i="mfe-app",f=(e,r,t,n)=>{var o=a[e]=a[e]||{},f=o[r];(!f||!f.loaded&&(!n!=!f.eager?n:i>f.from))&&(o[r]={get:t,from:i,eager:!!n})},u=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var o=l(e);if(!o)return;var a=e=>e&&e.init&&e.init(l.S[t],n);if(o.then)return s.push(o.then(a,r));var i=a(o);if(i&&i.then)return s.push(i.catch(r))}catch(e){r(e)}},s=[];return"default"===t&&(f("react-dom","18.3.1",(()=>()=>l(961)),1),f("react","18.3.1",(()=>()=>l(540)),1),u(114),u(482)),s.length?e[t]=Promise.all(s).then((()=>e[t]=1)):e[t]=1}}})(),l.p="https://ruslanoy.github.io/mfe-app/",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(f=e[a]))[0]?"-":(o>0?".":"")+(o=2,f);return n}var i=[];for(a=1;a<e.length;a++){var f=e[a];i.push(0===f?"not("+u()+")":1===f?"("+u()+" || "+u()+")":2===f?i.pop()+" "+i.pop():r(f))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},t=(r,n)=>{if(0 in r){n=e(n);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,f=1,u=!0;;f++,i++){var l,s,p=f<r.length?(typeof r[f])[0]:"";if(i>=n.length||"o"==(s=(typeof(l=n[i]))[0]))return!u||("u"==p?f>o&&!a:""==p!=a);if("u"==s){if(!u||"u"!=p)return!1}else if(u)if(p==s)if(f<=o){if(l!=r[f])return!1}else{if(a?l>r[f]:l<r[f])return!1;l!=r[f]&&(u=!1)}else if("s"!=p&&"n"!=p){if(a||f<=o)return!1;u=!1,f--}else{if(f<=o||s<p!=a)return!1;u=!1}else"s"!=p&&"n"!=p&&(u=!1,f--)}}var d=[],c=d.pop.bind(d);for(i=1;i<r.length;i++){var h=r[i];d.push(1==h?c()|c():2==h?c()&c():h?t(h,n):!c())}return!!c()},n=(r,t,n)=>{var o=n?(e=>Object.keys(e).reduce(((r,t)=>(e[t].eager&&(r[t]=e[t]),r)),{}))(r[t]):r[t];return Object.keys(o).reduce(((r,t)=>!r||!o[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],f=(typeof i)[0];if(a!=f)return"o"==a&&"n"==f||"s"==f||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(r,t)?t:r),0)},o=(e,r,t)=>t?t():((e,r)=>(e=>{throw new Error(e)})("Shared module "+r+" doesn't exist in shared scope "+e))(e,r),a=(e=>function(r,t,n,o,a){var i=l.I(r);return i&&i.then&&!n?i.then(e.bind(e,r,l.S[r],t,!1,o,a)):e(r,l.S[r],t,n,o,a)})(((e,a,i,f,u,s)=>{if(!((e,r)=>e&&l.o(e,r))(a,i))return o(e,i,s);var p,d,c=n(a,i,f);return t(u,c)||(d=((e,t,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+r(o)+")")(a,i,c,u),"undefined"!=typeof console&&console.warn&&console.warn(d)),(p=a[i][c]).loaded=1,p.get()})),i={},f={769:()=>a("default","react",!0,[1,18,2,0],(()=>()=>l(540))),783:()=>a("default","react-dom",!0,[1,18,2,0],(()=>()=>l(961)))};[769,783].forEach((e=>{l.m[e]=r=>{i[e]=0,delete l.c[e];var t=f[e]();if("function"!=typeof t)throw new Error("Shared module is not available for eager consumption: "+e);r.exports=t()}}));var u={792:[769,783]},s={};l.f.consumes=(e,r)=>{l.o(u,e)&&u[e].forEach((e=>{if(l.o(i,e))return r.push(i[e]);if(!s[e]){var t=r=>{i[e]=0,l.m[e]=t=>{delete l.c[e],t.exports=r()}};s[e]=!0;var n=r=>{delete i[e],l.m[e]=t=>{throw delete l.c[e],r}};try{var o=f[e]();o.then?r.push(i[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))}})(),(()=>{var e={792:0};l.f.j=(r,t)=>{var n=l.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(32|948)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=l.p+l.u(r),i=new Error;l.l(a,(t=>{if(l.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}},l.O.j=r=>0===e[r];var r=(r,t)=>{var n,o,[a,i,f]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(f)var s=f(l)}for(r&&r(t);u<a.length;u++)o=a[u],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(s)},t=self.webpackChunkmfe_app=self.webpackChunkmfe_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var s=l.O(void 0,[855],(()=>l(867)));s=l.O(s)})();