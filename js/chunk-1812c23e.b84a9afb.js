(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1812c23e"],{"00b4":function(t,e,n){"use strict";n("ac1f");var r=n("23e7"),i=n("da84"),o=n("c65b"),a=n("e330"),c=n("1626"),d=n("861d"),s=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),u=i.Error,l=a(/./.test);r({target:"RegExp",proto:!0,forced:!s},{test:function(t){var e=this.exec;if(!c(e))return l(this,t);var n=o(e,this,t);if(null!==n&&!d(n))throw new u("RegExp exec method returned something other than an Object or null");return!!n}})},"0ccb":function(t,e,n){var r=n("e330"),i=n("50c4"),o=n("577e"),a=n("1148"),c=n("1d80"),d=r(a),s=r("".slice),u=Math.ceil,l=function(t){return function(e,n,r){var a,l,f=o(c(e)),h=i(n),p=f.length,m=void 0===r?" ":o(r);return h<=p||""==m?f:(a=h-p,l=d(m,u(a/m.length)),l.length>a&&(l=s(l,0,a)),t?f+l:l+f)}};t.exports={start:l(!1),end:l(!0)}},1148:function(t,e,n){"use strict";var r=n("da84"),i=n("5926"),o=n("577e"),a=n("1d80"),c=r.RangeError;t.exports=function(t){var e=o(a(this)),n="",r=i(t);if(r<0||r==1/0)throw c("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n}},"1fc7":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("2909");function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n("d3b7"),n("159b"),n("99af"),n("c740"),n("a434"),n("d81d"),n("a4d3"),n("e01a"),n("d28b"),n("3ca3"),n("ddb0");n("25f0"),n("4d90"),n("ac1f"),n("00b4");Object.prototype.hasOwnProperty;var c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;i(this,t),this.seed=e}return a(t,[{key:"get",value:function(){return++this.seed}}]),t}(),d=new c,s=function(t,e){t.forEach((function(t){t.parent=e}))},u=function(t){t.forEach((function(t){t.parent=null}))},l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t),this.id=e.id||d.get(),this.title=e.title||"",this.isLazy=e.isLazy||!1,this.isOpen=e.isOpen||!1,this.isLoading=e.isLoading||!1,this.children=e.children||null,this.parent=e.parent||null,this.data=e.data||{}}return a(t,[{key:"lazyLoad",value:function(){var t=this;return{node:this,key:this.id,done:function(e){s(e,t),t.children=e,t.isOpen=!0,t.isLoading=!1,t.isLazy=!1},fail:function(e){console.error("lazyLoad fail",e),t.isLoading=!1}}}},{key:"prependChild",value:function(t){t.parent=this,this.children?this.children.unshift(t):this.children=[t]}},{key:"appendChild",value:function(t){t.parent=this,this.children?this.children.push(t):this.children=[t]}},{key:"prependChildren",value:function(t){t&&(s(t,this),this.children=[].concat(Object(r["a"])(t),Object(r["a"])(this.children||[])))}},{key:"appendChildren",value:function(t){t&&(s(t,this),this.children=[].concat(Object(r["a"])(this.children||[]),Object(r["a"])(t)))}},{key:"removeChild",value:function(t,e){if(!this.children)return!1;var n=this.children.findIndex((function(e){return e.id===t.id}));return n>-1&&(t.parent=null,e?this.children.splice(n,1,e):this.children.splice(n,1),!0)}},{key:"removeChildren",value:function(){u(this.children),this.children=[]}}],[{key:"generateTree",value:function(t){return Array.isArray(t)&&t[0]&&(t=t[0]),f(t)}}]),t}();function f(t){return t=new l(t),t.children&&(t.children=t.children.map((function(e){return e.parent=t,f(e)}))),t}},2909:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t){if(Array.isArray(t))return r(t)}n.d(e,"a",(function(){return d}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n("fb6a"),n("b0c0"),n("ac1f"),n("00b4");function a(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t){return i(t)||o(t)||a(t)||c()}},"2aad":function(t,e,n){"use strict";n("9bc8")},"37e2":function(t,e,n){"use strict";n("80a1")},"4d90":function(t,e,n){"use strict";var r=n("23e7"),i=n("0ccb").start,o=n("9a0c");r({target:"String",proto:!0,forced:o},{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var r=n("da84"),i=n("0366"),o=n("c65b"),a=n("7b0b"),c=n("9bdd"),d=n("e95a"),s=n("68ee"),u=n("07fa"),l=n("8418"),f=n("9a1f"),h=n("35a1"),p=r.Array;t.exports=function(t){var e=a(t),n=s(this),r=arguments.length,m=r>1?arguments[1]:void 0,v=void 0!==m;v&&(m=i(m,r>2?arguments[2]:void 0));var b,g,y,w,D,x,k=h(e),I=0;if(!k||this==p&&d(k))for(b=u(e),g=n?new this(b):p(b);b>I;I++)x=v?m(e[I],I):e[I],l(g,I,x);else for(w=f(e,k),D=w.next,g=n?new this:[];!(y=o(D,w)).done;I++)x=v?c(w,m,[y.value,I],!0):y.value,l(g,I,x);return g.length=I,g}},"4fc3":function(t,e,n){t.exports=n.p+"img/vue.6b0dcf4c.svg"},"6bf1":function(t,e,n){t.exports=n.p+"img/folder-vue.8da6a30a.svg"},"80a1":function(t,e,n){},"9a0c":function(t,e,n){var r=n("342f");t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},"9bc8":function(t,e,n){},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(a){i(t,"throw",a)}}},a434:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("23cb"),a=n("5926"),c=n("07fa"),d=n("7b0b"),s=n("65f0"),u=n("8418"),l=n("1dde"),f=l("splice"),h=i.TypeError,p=Math.max,m=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var n,r,i,l,f,g,y=d(this),w=c(y),D=o(t,w),x=arguments.length;if(0===x?n=r=0:1===x?(n=0,r=w-D):(n=x-2,r=m(p(a(e),0),w-D)),w+n-r>v)throw h(b);for(i=s(y,r),l=0;l<r;l++)f=D+l,f in y&&u(i,l,y[f]);if(i.length=r,n<r){for(l=D;l<w-r;l++)f=l+r,g=l+n,f in y?y[g]=y[f]:delete y[g];for(l=w;l>w-r+n;l--)delete y[l-1]}else if(n>r)for(l=w-r;l>D;l--)f=l+r-1,g=l+n-1,f in y?y[g]=y[f]:delete y[g];for(l=0;l<n;l++)y[l+D]=arguments[l+2];return y.length=w-r+n,i}})},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),a=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:a},{from:i})},b0c0:function(t,e,n){var r=n("83ab"),i=n("5e77").EXISTS,o=n("e330"),a=n("9bf2").f,c=Function.prototype,d=o(c.toString),s=/^\s*function ([^ (]*)/,u=o(s.exec),l="name";r&&!i&&a(c,l,{configurable:!0,get:function(){try{return u(s,d(this))[1]}catch(t){return""}}})},c740:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").findIndex,o=n("44d2"),a="findIndex",c=!0;a in[]&&Array(1)[a]((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(a)},d28b:function(t,e,n){var r=n("746f");r("iterator")},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,o=n("1dde"),a=o("map");r({target:"Array",proto:!0,forced:!a},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),a=n("e330"),c=n("1a2d"),d=n("1626"),s=n("3a9b"),u=n("577e"),l=n("9bf2").f,f=n("e893"),h=o.Symbol,p=h&&h.prototype;if(i&&d(h)&&(!("description"in p)||void 0!==h().description)){var m={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),e=s(p,this)?new h(t):void 0===t?h():h(t);return""===t&&(m[e]=!0),e};f(v,h),v.prototype=p,p.constructor=v;var b="Symbol(test)"==String(h("test")),g=a(p.toString),y=a(p.valueOf),w=/^Symbol\((.*)\)[^)]+$/,D=a("".replace),x=a("".slice);l(p,"description",{configurable:!0,get:function(){var t=y(this),e=g(t);if(c(m,t))return"";var n=b?x(e,7,-1):D(e,w,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:v})}},eba1:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("TkContainer",{staticClass:"docs-page"},[n("div",{staticClass:"nav"},[n("DocLeftNav",{ref:"leftNav",on:{selectItem:t.handleSelectItem}})],1),n("div",{staticClass:"main"},[t.selectedItem?[n("h1",[t._v(t._s(t.selectedItem.title))]),n(t.selectedItem.data.component,{tag:"component"})]:n("span",[t._v("Please select a document")])],2)])},i=[],o=n("5530"),a=(n("d3b7"),n("159b"),n("b0c0"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"demo-left-bar"},[r("TkTree",{attrs:{nodes:t.treeData,"selected-id":t.selected&&t.selected.id},on:{onItemClick:t.handleNodeClick},scopedSlots:t._u([{key:"icon",fn:function(t){var e=t.data.item;return[e.children?r("img",{staticClass:"tree-node-icon",attrs:{src:n("6bf1")}}):r("img",{staticClass:"tree-node-icon",attrs:{src:n("4fc3")}})]}}])})],1)}),c=[],d=(n("d81d"),[{title:"Button | 按钮",data:{component:"ButtonDemo"}},{title:"Input | 输入框",data:{component:"InputDemo"}},{title:"Dropdown | 下拉菜单",data:{component:"DropdownDemo"}},{title:"Toast | 提示",data:{component:"ToastDemo"}},{title:"Switch | 开关",data:{component:"SwitchDemo"}},{title:"Radio | 单选",data:{component:"RadioDemo"}},{title:"Link | 链接",data:{component:"LinkDemo"}},{title:"Card | 卡片",data:{component:"CardDemo"}},{title:"Tree | 树状图",data:{component:"TreeDemo"}},{title:"NavBar | 导航栏",data:{component:"NavBarDemo"}},{title:"Drawer | 抽屉",data:{component:"DrawerDemo"}},{title:"Loading | 加载",data:{component:"LoadingDemo"}},{title:"AutoRatioBox | 自动宽高比盒子",data:{component:"AutoRatioBoxDemo"}},{title:"Pager | 分页器",data:{component:"PagerDemo"}},{title:"ContextMenu | 右键菜单",data:{component:"ContextMenuDemo"}},{title:"Dialog | 弹窗",data:{component:"DialogDemo"}},{title:"Misc | 杂项",data:{component:"MiscDemo"}}]),s=n("1fc7"),u={name:"DocLeftNav",data:function(){return{treeData:new s["a"]({title:"Documents",children:d.map((function(t){return new s["a"](t)}))}),selected:null,breadcrumbList:[]}},methods:{handleNodeClick:function(t){this.selected=t,this.$emit("selectItem",t)},goItem:function(t){var e=null;function n(r){var i=r.data;if(i.component!==t){if(r.children)for(var o in r.children){var a=r.children[o],c=a.data;if(c.component===t){e=a;break}n(a)}}else e=r}n(this.treeData),e&&this.handleNodeClick(e)}}},l=u,f=(n("37e2"),n("2877")),h=Object(f["a"])(l,a,c,!1,null,"629824cc",null),p=h.exports,m={};d.forEach((function(t){m[t.data.component]=function(e){return n.e("chunk-00f1f336").then(function(){var r=[n("c87c")("./".concat(t.data.component))];e.apply(null,r)}.bind(this)).catch(n.oe)}}));var v={name:"Docs",components:Object(o["a"])({DocLeftNav:p},m),data:function(){return{selectedItem:null}},watch:{"$route.params.name":{handler:function(t){t&&this.$refs.leftNav.goItem(t)}}},mounted:function(){this.checkLeftNav(this.$route.params.name)},methods:{checkLeftNav:function(t){t&&this.$refs.leftNav.goItem(t)},handleSelectItem:function(t){var e=t.data;e.component?(this.selectedItem=t,this.$route.params.name!==e.component&&this.$router.push({params:{name:e.component}})):this.selectedItem=null}}},b=v,g=(n("2aad"),Object(f["a"])(b,r,i,!1,null,"ec383570",null));e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-1812c23e.b84a9afb.js.map