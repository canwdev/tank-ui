(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-10f94600":"2924aa47","chunk-2d0b1e17":"bead7943","chunk-302613fe":"7475f70f"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-10f94600":1,"chunk-302613fe":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-10f94600":"4a8a9972","chunk-2d0b1e17":"31d6cfe0","chunk-302613fe":"f7ca3231"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e0b":function(e,t,n){"use strict";n("2057")},"199e":function(e,t,n){},2057:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tk-scroll",class:[e.isDarkTheme?"tk-dark-theme":"tk-light-theme"],attrs:{id:"app"}},[n("TkNavBar",{attrs:{menu:[{title:"Start",url:"/quickstart"},{title:"Documents",url:"/docs"},{title:"Code",url:null,children:[{title:"Github",url:"https://github.com/canwdev/tank-ui"},{title:"Gitee",url:"https://gitee.com/canwdev/tank-ui"}]}]}},[n("template",{slot:"left"},[n("NavLogo")],1),n("template",{slot:"right"},[n("div",{staticClass:"flex items-center justify-end"},[n("TkSwitch",{attrs:{"text-on":"暗","text-off":"明"},model:{value:e.isDarkTheme,callback:function(t){e.isDarkTheme=t},expression:"isDarkTheme"}})],1)])],2),n("router-view")],1)},o=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("TkLink",{staticClass:"nav-logo",attrs:{href:"/"}},[r("img",{attrs:{src:n("dc07")}}),r("p",[e._v("TankUI")])])},i=[],s={name:"NavLogo"},u=s,l=(n("0e0b"),n("2877")),f=Object(l["a"])(u,c,i,!1,null,"568529c7",null),d=f.exports,p={name:"App",components:{NavLogo:d},computed:{isDarkTheme:{get:function(){return this.$store.getters.isDarkTheme},set:function(e){this.$store.commit("updateSettings",{key:"isDarkTheme",value:e})}}}},h=p,m=(n("b5c0"),Object(l["a"])(h,a,o,!1,null,"4b16bbd1",null)),g=m.exports,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-home"},[r("img",{attrs:{src:n("dc07")}}),r("TkHelloWorld",{attrs:{msg:"TankUI"}}),r("p",[e._v("A Minimal Vue 2.0 UI Library.")])],1)},k=[],y={},T=y,w=(n("cccb"),Object(l["a"])(T,b,k,!1,null,null,null)),S=w.exports;r["a"].use(v["a"]);var _=[{path:"/",name:"Home",component:S},{path:"/quickstart",name:"QuickStart",component:function(){return n.e("chunk-2d0b1e17").then(n.bind(null,"2278"))}},{path:"/docs",name:"DocsIndex",redirect:"/docs/ButtonDemo"},{path:"/docs/:name",name:"Docs",component:function(){return n.e("chunk-10f94600").then(n.bind(null,"eba1"))}}],O=new v["a"]({mode:"history",base:"/",routes:_}),j=O,x=n("2f62"),D=n("5530"),E="LS_KEY_TANK_UI_SETTINGS",N=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,C={isDarkTheme:N};function L(){var e=JSON.parse(localStorage.getItem(E)||"{}");return Object(D["a"])(Object(D["a"])({},C),e)}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};localStorage.setItem(E,JSON.stringify(e))}r["a"].use(x["a"]);var A=new x["a"].Store({state:{settings:L()},getters:{isDarkTheme:function(e){return e.settings.isDarkTheme}},mutations:{setSettings:function(e,t){e.settings=t,P(e.settings)},updateSettings:function(e,t){var n=t.key,r=t.value;e.settings[n]=r,P(e.settings)}},actions:{},modules:{}}),I=(n("8ba1"),n("70ea"),n("3fb6")),M=n.n(I),$=!0;$&&n("81c3"),r["a"].use(M.a),r["a"].config.productionTip=!1,new r["a"]({router:j,store:A,render:function(e){return e(g)}}).$mount("#app")},"5ced":function(e,t,n){},"70ea":function(e,t,n){},"8ba1":function(e,t,n){},b5c0:function(e,t,n){"use strict";n("199e")},cccb:function(e,t,n){"use strict";n("5ced")},dc07:function(e,t,n){e.exports=n.p+"img/logo.60239657.png"}});
//# sourceMappingURL=app.a7c5c41f.js.map