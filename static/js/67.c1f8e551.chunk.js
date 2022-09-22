"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[67],{4742:function(n,e,t){t.d(e,{Z:function(){return k}});t(2791);var a,r,i,o,p,s,d,x=t(6856),c=t(6871),l=t(613),u=t(1807),h=t(168),g=t(7691),m=t(501),b=g.ZP.p(a||(a=(0,h.Z)(["\n  font-size: 14px;\n  display: none;\n  text-align: center;\n  :hover {\n    display: block;\n  }\n"]))),f=g.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: space-between;\n  margin-right: -10px;\n"]))),v=g.ZP.li(i||(i=(0,h.Z)(["\n  position: relative;\n  width: calc(100% / 2 - 20px);\n  height: auto;\n  margin: 10px;\n  border-radius: 5px;\n  border-radius: 5px 5px 5px 5px;\n  -webkit-box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);\n  -moz-box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);\n  box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);\n  :hover {\n    scale: 1.05;\n\n    -webkit-box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);\n    -moz-box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);\n    box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: calc(100% / 4 - 20px);\n    margin: 15px 10px;\n  }\n  @media screen and (min-width: 1200px) {\n    width: calc(100% / 5 - 20px);\n    margin: 15px 10px;\n  }\n"]))),w=(0,g.ZP)(m.rU)(o||(o=(0,h.Z)(["\n  text-decoration: none;\n  :hover {\n    cursor: pointer;\n  }\n  :hover p {\n    display: block;\n  }\n  :hover span {\n    display: none;\n  }\n"]))),Z=g.ZP.div(p||(p=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px 10px 2px 10px;\n  text-align: center;\n\n  height: 25px;\n  color: aliceblue;\n  font-size: 12px;\n  @media screen and (min-width: 1200px) {\n    padding: 10px 10px 0 10px;\n    font-size: 14px;\n  }\n"]))),j=g.ZP.div(s||(s=(0,h.Z)(["\n  width: max-content;\n  background-color: #7dc2fa;\n  border-radius: 5px;\n  padding: 0 5px;\n  display: flex;\n  position: absolute;\n  top: 2px;\n  left: 2px;\n"]))),y=g.ZP.img(d||(d=(0,h.Z)(["\n  display: block;\n  width: 100%;\n  height: 85%;\n  border-radius: 5px 5px 0 0;\n"]))),P=t(184),k=function(n){var e=n.movies,t=(n.tvepisodes,n.pathName),a=(0,c.TH)();return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(f,{children:e.map((function(n){var e=n.id,r=n.title,i=n.name,o=n.poster_path,p=n.vote_average;return(0,P.jsx)(v,{children:(0,P.jsxs)(w,{to:"".concat(t,"/").concat(e),state:{from:a},children:[(0,P.jsx)(y,{src:o?"https://image.tmdb.org/t/p/w500".concat(o):l,alt:r||i}),(0,P.jsxs)(Z,{children:[(0,P.jsxs)(j,{children:[(0,P.jsx)(x.pBi,{}),(0,P.jsx)("p",{children:Math.floor(100*p)/100})]}),(0,P.jsxs)(b,{children:[r||i," "]}),(0,P.jsx)(u.default,{text:"".concat(r||i),length:24})]})]})},e)}))})})}},9593:function(n,e,t){t.d(e,{Z:function(){return m}});var a,r=t(1413),i=(t(2791),t(3275)),o=t(8237),p=t(168),s=t(7691).ZP.div(a||(a=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  // align-items: center;\n"]))),d=t(2482),x=t(3524),c=t(7414),l=t(501),u=t(184),h=(0,x.Z)({palette:{primary:{main:d.Z[100]}}}),g=function(n){var e=n.totalPage,t=n.currentPage,a=n.paginate,p=n.searchParams;return(0,u.jsx)(s,{children:(0,u.jsx)(c.Z,{theme:h,children:(0,u.jsx)(i.Z,{showFirstButton:!0,showLastButton:!0,count:e,page:t,color:"primary",shape:"rounded",variant:"outlined",onChange:function(n,e){a(e),console.log(t)},renderItem:function(n){return(0,u.jsx)(o.Z,(0,r.Z)({component:l.rU,to:"".concat(p,"?page=").concat(n.page)},n))}})})})},m=g},7213:function(n,e,t){t.d(e,{Mj:function(){return d},UI:function(){return s},Yq:function(){return x}});var a,r,i,o=t(168),p=t(7691),s=p.ZP.form(a||(a=(0,o.Z)(["\n  width: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n  padding: 0 10px;\n\n  @media screen and (min-width: 768px) {\n    width: 550px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: 20px;\n    padding: 0 10px;\n  }\n  @media screen and (min-width: 1200px) {\n    width: 550px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: 20px;\n    padding: 0 10px;\n  }\n"]))),d=p.ZP.input(r||(r=(0,o.Z)(["\n  border: none;\n  background-color: transparent;\n  padding: 10px 15px;\n  width: 100%;\n\n  color: aliceblue;\n  border-bottom: 1px solid rgba(196, 232, 241, 1);\n  :focus {\n    border-radius: 5px;\n    outline: none;\n    -webkit-box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);\n    -moz-box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);\n    box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);\n  }\n"]))),x=p.ZP.button(i||(i=(0,o.Z)(["\n  border: none;\n  background-color: transparent;\n  padding: 0;\n  cursor: pointer;\n  margin-left: -35px;\n  :hover {\n    scale: 1.2;\n  }\n"])))},3303:function(n,e,t){t.d(e,{Z:function(){return x}});t(2791);var a,r,i=t(168),o=t(7691),p=o.ZP.select(a||(a=(0,i.Z)(["\n  cursor: pointer;\n  border: none;\n  background-color: #212c39;\n  padding: 10px 15px;\n\n  color: aliceblue;\n  border-bottom: 1px solid rgba(196, 232, 241, 1);\n  :focus {\n    border-radius: 5px;\n\n    outline: none;\n    -webkit-box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);\n    -moz-box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);\n    box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);\n  }\n"]))),s=o.ZP.option(r||(r=(0,i.Z)(["\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n"]))),d=t(184),x=function(n){var e=n.onChange;return(0,d.jsx)("div",{children:(0,d.jsxs)(p,{name:"movies",id:"movies",onChange:e,children:[(0,d.jsx)(s,{value:"",children:"-\ud83e\udc15\ud83e\udc17 sort by... \ud83e\udc17\ud83e\udc15-"}),(0,d.jsx)(s,{value:"popularity.asc",children:"popularity \ud83e\udc15"}),(0,d.jsx)(s,{value:"popularity.desc",children:"popularity \ud83e\udc17"}),(0,d.jsx)(s,{value:"vote_average.asc",children:"vote average \ud83e\udc15"}),(0,d.jsx)(s,{value:"vote_average.desc",children:"vote average \ud83e\udc17"}),(0,d.jsx)(s,{value:"release_date.asc",children:"release date \ud83e\udc15"}),(0,d.jsx)(s,{value:"release_date.desc",children:"release date \ud83e\udc17"})]})})}},9399:function(n,e,t){t.d(e,{_:function(){return s},j:function(){return p}});var a,r,i=t(168),o=t(7691),p=o.ZP.div(a||(a=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 10px;\n  @media screen and (min-width: 768px) {\n    align-items: baseline;\n  }\n  @media screen and (min-width: 1200px) {\n    align-items: baseline;\n  }\n"]))),s=o.ZP.div(r||(r=(0,i.Z)(["\n  padding: 20px;\n  @media screen and (min-width: 768px) {\n    padding: 10px 20px;\n  }\n  @media screen and (min-width: 1200px) {\n    padding: 20px;\n  }\n"])))},2067:function(n,e,t){t.r(e);var a=t(885),r=t(2791),i=t(6871),o=t(501),p=t(7433),s=t(2732),d=t(5218),x=t(4742),c=t(3303),l=t(9399),u=t(9593),h=t(828),g=t(9983),m=t(7213),b=t(184);e.default=function(){var n,e,t=(0,i.TH)(),f=(0,r.useState)([]),v=(0,a.Z)(f,2),w=v[0],Z=v[1],j=(0,o.lr)(),y=(0,a.Z)(j,2),P=y[0],k=y[1],_=(0,r.useState)(!1),z=(0,a.Z)(_,2),C=z[0],S=z[1],U=(0,r.useState)((null===(n=t.search)||void 0===n?void 0:n.split("?").slice(1,2).join("").split("=")[1])||""),B=(0,a.Z)(U,2),I=B[0],Y=B[1],q=(0,r.useState)(parseInt(null===(e=t.search)||void 0===e?void 0:e.split("?").slice(2).join("").split("=")[1])||1),F=(0,a.Z)(q,2),H=F[0],M=F[1],N=(0,r.useState)(1),T=(0,a.Z)(N,2),E=T[0],L=T[1];P.get("sort");(0,r.useEffect)((function(){S(!0),(0,p.h7)(I,H).then((function(n){var e=n.data,t=e.results,a=e.total_pages;Z(t),L(a)})).catch((function(n){return d.ZP.error("Sorry, something went wrong, try again")})).finally(S(!1))}),[I,H]);return(0,b.jsxs)(l._,{children:[(0,b.jsxs)(l.j,{children:[(0,b.jsx)(c.Z,{onChange:function(n){k({sort:n.target.value}),Y(n.target.value),M(1)}}),(0,b.jsx)(m.Yq,{children:(0,b.jsx)(o.rU,{to:"/tvepisodes/search",state:{from:t},children:(0,b.jsx)(g.Pd.Provider,{value:{color:"aliceblue",size:"2em"},children:(0,b.jsx)("div",{children:(0,b.jsx)(h.Yfv,{})})})})})]}),C&&(0,b.jsx)(s.Z,{}),w&&(0,b.jsx)(x.Z,{pathName:"/tvepisodes",movies:w}),(0,b.jsx)(u.Z,{totalPage:E,paginate:function(n){return M(n)},currentPage:H,searchParams:"?sort=".concat(I)})]})}}}]);
//# sourceMappingURL=67.c1f8e551.chunk.js.map