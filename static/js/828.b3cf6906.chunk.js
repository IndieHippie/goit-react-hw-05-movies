"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[828],{9828:function(e,t,n){n.r(t);var r=n(9439),a=n(7689),c=n(1087),i=n(2791),s=n(5652),u=n(5874),o=n(2483),p=n(9482),d=n(184);t.default=function(){var e,t,n=(0,a.UO)().id,l=(0,i.useState)(),f=(0,r.Z)(l,2),h=f[0],v=f[1],x=null!==(e=null===(t=(0,a.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";if((0,i.useEffect)((function(){(0,u.TP)(n).then().then((function(e){return v(e)})).catch((function(e){return console.log(e)}))}),[n]),h){var m=h.title,j=h.release_date,g=h.vote_average,w=h.genres,k=h.overview,_=h.poster_path,b=j.slice(0,4);return(0,d.jsxs)("div",{children:[(0,d.jsxs)(c.rU,{style:{padding:"5px"},to:x,children:[(0,d.jsx)(p.TPM,{})," Go back"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:_?"https://image.tmdb.org/t/p/w500".concat(_):s,alt:m,width:240}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("h2",{children:[m," (",b,")"]}),(0,d.jsxs)("p",{children:["User Score:\xa0",g?Math.fround(10*g).toFixed(0):"","%"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsxs)("p",{children:[" ",k]}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("p",{children:w?w.map((function(e){return e.name})).join(", "):""})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(c.OL,{to:"reviews",state:{from:x},children:(0,d.jsx)("p",{children:"Reviews"})})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.OL,{to:"cast",state:{from:x},children:(0,d.jsx)("p",{children:"Cast"})})})]})]}),(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(o.Z,{}),children:(0,d.jsx)(a.j3,{})})]})}}},5874:function(e,t,n){n.d(t,{IQ:function(){return l},Jh:function(){return f},TP:function(){return d},V0:function(){return p},ri:function(){return o}});var r=n(5861),a=n(7757),c=n.n(a),i=n(2388),s="https://api.themoviedb.org/3",u="67474e2afd071beea09d8edbde001cc8",o=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(u,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.results.map((function(e){return{id:e.id,title:e.title,poster_path:e.poster_path}})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/search/movie?api_key=").concat(u,"&query=").concat(t,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results.map((function(e){return{id:e.id,title:e.title,poster_path:e.poster_path}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},5652:function(e,t,n){e.exports=n.p+"static/media/no-image.a285722b7f59fd605c1d.jpg"}}]);
//# sourceMappingURL=828.b3cf6906.chunk.js.map