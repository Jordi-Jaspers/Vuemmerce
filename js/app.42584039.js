(function(t){function e(e){for(var i,n,r=e[0],c=e[1],l=e[2],d=0,h=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&h.push(s[n][0]),s[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],i=!0,r=1;r<o.length;r++){var c=o[r];0!==s[c]&&(i=!1)}i&&(a.splice(e--,1),t=n(n.s=o[0]))}return t}var i={},s={app:0},a=[];function n(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=i,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var i=o("85ec"),s=o.n(i);s.a},"09be":function(t,e,o){"use strict";var i=o("fddc"),s=o.n(i);s.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Preloader"),o("Header"),o("router-view")],1)},a=[],n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[o("h1",{staticClass:"navbar-brand"},[t._v("Vuemmerce Shop")]),o("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[o("span",{staticClass:"navbar-toggler-icon"})]),o("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[o("ul",{staticClass:"navbar-nav ml-auto"},[o("li",{staticClass:"nav-item active"})])])])}],c={name:"Header",methods:{}},l=c,u=o("2877"),d=Object(u["a"])(l,n,r,!1,null,"1ad38540",null),h=d.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[t.show?i("div",{staticClass:"preloader"},[i("img",{staticClass:"logo",attrs:{src:o("b380"),alt:"Vuemmerce Logo"}}),i("p",[t._v("Loading Vuemmerce Shop...")]),i("div",{staticClass:"circles"},[i("div",{staticClass:"circle"}),i("div",{staticClass:"circle"}),i("div",{staticClass:"circle"}),i("div",{staticClass:"circle"}),i("div",{staticClass:"circle"})])]):t._e()])},g=[],v={name:"preloader",components:{},data:function(){return{show:!0}},mounted:function(){this.show&&this.showToggle()},methods:{showToggle:function(){var t=this;setTimeout((function(){t.show=!1;var e="/Looks/LOOK1";t.$route.path!==e&&t.$router.push(e)}),1500)}}},m=v,b=Object(u["a"])(m,p,g,!1,null,null,null),f=b.exports,k={name:"app",components:{Header:h,Preloader:f}},w=k,C=(o("034f"),Object(u["a"])(w,s,a,!1,null,null,null)),A=C.exports,y=o("8c4f"),N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("body",[o("div",{staticClass:"products fullscreen"},t._l(t.looks,(function(e){return o("div",{key:e.id},[o("LookItem",{attrs:{look:e,looks:t.looks}})],1)})),0),o("footer",{staticClass:"bg-light",attrs:{id:"footer"}},[o("ul",{staticClass:"copyright"},[t.buttonToggle?o("li",[o("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:t.RouteToPrevious}},[t._v("Previous")])]):t._e(),o("li",[t._v("© The ZOO. All rights reserved.")]),t.buttonToggle?o("li",[o("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:t.RouteToNext}},[t._v("Next")])]):t._e()])])])},I=[],x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("body",[t.productSwitch?i("div",[i("div",{staticClass:"card product-item fullscreen"},[i("h1",{staticClass:"text-center p-5"},[t._v(t._s(t.filterName))]),i("div",{staticClass:"wrapper"},[t.showVid?i("div",{staticClass:"look-video first-box"},[i("video",{staticClass:"card-img-top vid-box center",attrs:{id:"videoElement",src:t.look.videos[0],autoplay:"true"},on:{ended:t.SwitchToPicture,click:t.SwitchToPicture}})]):t._e(),t.showPic?i("div",{staticClass:"look-picture first-box"},[i("img",{staticClass:"card-img-top img-box center",attrs:{src:t.look.photos[0]},on:{click:t.SwitchToVideo}})]):t._e(),i("div",{staticClass:"card-body second-box"},t._l(t.look.articles,(function(e){return i("ProductItem",{key:e.sku,staticClass:"card-image center",attrs:{productitem:e,productSwitch:t.productSwitch},on:{passArticle:function(e){return t.getArticle(e)}}})})),1)]),i("div",{staticClass:"card-body title-padding"},[i("h5",{staticClass:"card-title"},[t._v("Look-description:")]),i("p",{staticClass:"card-text description-padding"},[t._v(" "+t._s(t.look.description)+" "+t._s(t.look.fit)+" ")])])])]):i("div",[i("div",{staticClass:"card product-item fullscreen"},[i("section",{staticClass:"tm-banner fullscreen"},[i("div",{staticClass:"tm-container-outer tm-banner-bg"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row tm-banner-row tm-banner-row-header"},[i("div",{staticClass:"col-xs-12"},[i("div",{staticClass:"tm-banner-header"},[i("h1",{staticClass:"text-uppercase tm-banner-title"},[t._v("Veummerce Shop")]),i("img",{staticClass:"padding",attrs:{src:o("582a"),alt:"Dots"}}),i("h4",{staticClass:"tm-banner-subtitle "},[t._v(t._s(t.article.name))])])])]),i("div",{staticClass:"row tm-banner-row",attrs:{id:"tm-section-search"}},[i("form",{staticClass:"tm-search-form tm-section-pad-2 ",attrs:{action:"index.html",method:"get"}},[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"look-picture2 first-box text-center"},[i("ProductItem",{key:t.article.sku,attrs:{productitem:t.article}})],1),i("div",{staticClass:"card-body second-box"},[i("h5",{staticClass:"card-title"},[t._v("Product-description:")]),i("p",{staticClass:"card-text description-padding"},[t._v(" "+t._s(t.article.description)+" ")]),i("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"button"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("Back to the look")])])])])])])])])])])])},S=[],E=(o("b0c0"),o("ac1f"),o("5319"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.productSwitch?o("div",[o("img",{staticClass:"card-img-top imgsmall imgspace center",attrs:{src:t.imgLinks[0]},on:{click:t.RouteToProduct}})]):o("VueSlickCarousel",{attrs:{arrows:!1,dots:!0}},t._l(t.imgLinks,(function(e){return o("img",{key:e,staticClass:"card-img-top center",attrs:{src:e},on:{click:t.RouteToProduct}})})),0)],1)}),P=[],_=o("a7ab"),R=o.n(_),T={name:"productitem",props:["productitem","productitems","productSwitch"],components:{VueSlickCarousel:R.a},data:function(){return{articleID:null,imgLinks:[]}},created:function(){this.articleID=this.productitem.sku,this.imgLinks=this.productitem.photos},methods:{RouteToProduct:function(){console.log("clicked image");var t=this.productitem;return this.$route.path!=="/Product/".concat(t.sku)?(console.log("emitting object"),this.$emit("passArticle",t),this.$router.push("/Product/".concat(t.sku))):console.log("Already on path!")}}},L=T,D=(o("af13"),Object(u["a"])(L,E,P,!1,null,"e260b3c6",null)),j=D.exports,Z={name:"lookitem",props:["look","looks"],components:{ProductItem:j},data:function(){return{filterName:this.look.name,lookID:this.look.id,showVid:null,showPic:null,productSwitch:null,article:null}},created:function(){this.productSwitch=!0,this.showVid=!1,this.showPic=!0},mounted:function(){this.showPic&&this.filterNumbers()},watch:{$route:function(){this.$route.path=="/Product/".concat(this.article.sku)?(console.log("Watcher activated: Route changed to '/Products' !"),this.productSwitch=!1):this.productSwitch=!0}},methods:{getArticle:function(t){console.log("getArticle function"),this.article=t},filterNumbers:function(){this.filterName=this.filterName.replace(/[0-9]/g,"")},SwitchToVideo:function(){this.showPic=!1,this.showVid=!0},SwitchToPicture:function(){this.showVid=!1,this.showPic=!0}}},M=Z,V=(o("7d57"),Object(u["a"])(M,x,S,!1,null,"24990973",null)),G=V.exports,O=o("bc3a"),U=o.n(O),Y={name:"Looks",props:["lookID","articleID"],components:{LookItem:G},data:function(){return{looks:null,buttonToggle:null}},created:function(){var t=this;console.log("getting data"),U.a.get("https://www.hyperlynx.be/looks.json").then((function(e){return t.looks=e.data.looks})).catch((function(t){return console.log(t)})),console.log("articleID:"+this.articleID),console.log("lookID:"+this.lookID),this.buttonToggle=!0},watch:{$route:function(){this.$route.path=="/Looks/".concat(this.lookID)?(console.log("Watcher activated: Route changed to '/LOOKS' !"),this.buttonToggle=!0):this.buttonToggle=!1}},methods:{RouteToPrevious:function(){for(var t=this.looks,e=0;e<t.length;e++)if(t[e].id==this.lookID)var o=e;else o=-1;var i=this.looks[o-1].id;console.log(i);var s="/Looks/".concat(i);console.log(s),this.$route.path!==s&&this.$router.push(s)},RouteToNext:function(){for(var t=this.looks,e=0;e<t.length;e++)if(t[e].id==this.lookID)var o=e;else o=-1;var i=this.looks[o+1].id;console.log(i);var s="/Looks/".concat(i);console.log(s),this.$route.path!==s&&this.$router.push(s)}}},F=Y,Q=(o("09be"),Object(u["a"])(F,N,I,!1,null,null,null)),W=Q.exports;i["a"].use(y["a"]);var z=[{path:"/Looks/:lookID",name:"Looks",props:!0,component:W},{path:"/Product/:articleID",name:"Looks",props:!0,component:W}],B=new y["a"]({routes:z}),$=B,J=(o("4989"),o("a89b"),o("1157")),H=o.n(J);window.$=window.jQuery=H.a,i["a"].config.productionTip=!1,new i["a"]({router:$,render:function(t){return t(A)}}).$mount("#app")},"582a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAmCAYAAAD9XArwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0ZFM0RBNDhENzVBMTFFN0E5QzNGNzdFOTdEMEVEN0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0ZFM0RBNDlENzVBMTFFN0E5QzNGNzdFOTdEMEVEN0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RkUzREE0NkQ3NUExMUU3QTlDM0Y3N0U5N0QwRUQ3QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RkUzREE0N0Q3NUExMUU3QTlDM0Y3N0U5N0QwRUQ3QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnMwMxIAAACqSURBVHjaYvj//z8DFLMB8UQgfgvE76BsNpg8A5LCCf8xQQc2hW+xKHwLk2diIBIgK1yMRX4OnIXFM++weYYR7FASrR5ViFehLxDvA+LPUAxi+6DHTMt/3KAFlnp8/hMGviCF+4hQuA8U15+ALuAl4JfPxPqaEaTwDBEKT4Pc6EusZ4gOHhj2g4bAFyjeB7VtNIXTSCEbEE8E4rdA/A7KZsNW9gz58hEgwACX0OZH8U8xvgAAAABJRU5ErkJggg=="},"7d57":function(t,e,o){"use strict";var i=o("ce7f"),s=o.n(i);s.a},"85ec":function(t,e,o){},a89b:function(t,e,o){},af13:function(t,e,o){"use strict";var i=o("b37e"),s=o.n(i);s.a},b37e:function(t,e,o){},b380:function(t,e,o){t.exports=o.p+"img/zoo.061f001f.png"},ce7f:function(t,e,o){},fddc:function(t,e,o){}});
//# sourceMappingURL=app.42584039.js.map