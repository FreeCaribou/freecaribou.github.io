(this.webpackJsonphome=this.webpackJsonphome||[]).push([[0],{107:function(e,t,n){e.exports=n(127)},112:function(e,t,n){},113:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},114:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(32),c=n.n(l),o=(n(112),n(52)),u=(n(113),n(114),n(54)),i=n(9),m=n(141),s=n(140);function E(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hello Career"))}var f=n(143),g=n(142),h=Object(a.createContext)([null,function(e){return e}]);function v(){var e=Object(f.a)(),t=e.t,n=(e.i18n,Object(a.useContext)(h)),l=Object(o.a)(n,2),c=(l[0],l[1]);return r.a.createElement("div",null,r.a.createElement("h1",null,t("General.Hello")),r.a.createElement(g.a,{primary:!0,onClick:function(e){return c("en")}},"En"),r.a.createElement(g.a,{secondary:!0,onClick:function(e){return c("fr")}},"Fr"))}function d(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hello Project"))}function p(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(m.a,{color:"blue",inverted:!0,fixed:"top"},r.a.createElement(s.a,null,r.a.createElement(m.a.Item,{color:"orange"},r.a.createElement(u.b,{to:"/"},"Home")),r.a.createElement(m.a.Item,{color:"orange"},r.a.createElement(u.b,{to:"/project"},"Project")),r.a.createElement(m.a.Item,{color:"orange"},r.a.createElement(u.b,{to:"/career"},"Career")))),r.a.createElement(s.a,{style:{marginTop:"7em"}},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(v,null)),r.a.createElement(i.a,{path:"/project"},r.a.createElement(d,null)),r.a.createElement(i.a,{path:"/career"},r.a.createElement(E,null))))))}var b=function(){var e=Object(f.a)(),t=(e.t,e.i18n),n=Object(a.useState)("en"),l=Object(o.a)(n,2),c=l[0],u=l[1],i=Object(a.useState)(["en","fr"]),m=Object(o.a)(i,1)[0];Object(a.useEffect)((function(){console.log("Welcome in the consol, what are you doing here?");var e=localStorage.getItem("lng");if(e)u(e);else{var t=navigator.language;t=t.slice(0,2),u(t)}}),[]),Object(a.useEffect)((function(){s(c)}),[c]);var s=function(e){m.find((function(t){return t===e}))&&(console.log("change the lang!"),t.changeLanguage(e),localStorage.setItem("lng",c))};return r.a.createElement(h.Provider,{value:[c,u]},r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(126);var j=n(82),O=n(53),w=n(96);j.a.use(w.a).use(O.e).init({fallbackLng:"en",lng:"en",interpolation:{escapeValue:!1}});j.a;c.a.render(r.a.createElement(a.Suspense,{fallback:r.a.createElement("p",null,"Load")},r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.7f326ab0.chunk.js.map