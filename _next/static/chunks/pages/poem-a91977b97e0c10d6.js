(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[322],{9195:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/poem",function(){return n(4383)}])},4383:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u},default:function(){return f}});var o=n(1527),a=n(3965),i=n.n(a),s=n(4895),l=n(959),r=n(5924);let c=e=>{let{title:t,content:n,id:a}=e;return(0,o.jsxs)("section",{className:i().poemContainer,id:a,children:[(0,o.jsx)("div",{className:i().poemTitleWrapper,children:(0,o.jsx)("div",{className:i().poemTitle,children:t})}),(0,o.jsx)("div",{className:i().poemContentWrapper,children:(0,o.jsx)("div",{className:i().poemContent,dangerouslySetInnerHTML:{__html:n}})})]})},m=e=>{let{title:t,id:n,activeID:a,moveToTarget:s}=e;return(0,o.jsx)("section",{className:(0,r.Z)({[i().catalogItem]:!0,[i().active]:a===n}),id:n,onClick:()=>s(n),children:(0,o.jsx)("span",{className:i().text,children:t})})},p=e=>{let{catalogs:t,contents:n}=e,a=(0,l.useRef)([]),r=(0,l.useRef)(!1),[p,_]=(0,l.useState)(t[0].id),[d,u]=(0,l.useState)(!1),f=e=>{_(e)},h=e=>{let t=document.getElementById("".concat(e));f(e);let{offsetTop:n}=t;window.scrollTo({top:n-120})};return(0,l.useEffect)(()=>{a.current=[],t.forEach((e,n)=>{let o=e.id,i=document.getElementById("".concat(o)),s={id:o,start:0,end:0};if(n===t.length-1)s={id:o,start:i.offsetTop,end:document.body.offsetHeight};else{let e=t[n+1],a=document.getElementById("".concat(e.id));s={id:o,start:i.offsetTop,end:a.offsetTop}}a.current.push(s)})},[t]),(0,l.useEffect)(()=>{let e=document.getElementsByTagName("body")[0];e.onscroll=e=>{r.current||(window.requestAnimationFrame(()=>{let t=e.target.documentElement.scrollTop||0,n=a.current.find(e=>e.start<=t+160&&e.end>t+160);n&&f(n.id),r.current=!1}),r.current=!0)}}),(0,o.jsxs)("section",{className:i().poemWrapper,children:[(0,o.jsx)("section",{className:i().poems,children:n.map(e=>(0,o.jsx)(c,{id:e.id,title:e.title,content:e.content},e.id))}),(0,o.jsx)("section",{className:i().catalog,children:(0,o.jsx)(s.Z,{data:t,itemKey:"id",itemHeight:40,height:480,style:{width:"100%"},children:e=>(0,o.jsx)(m,{title:e.title,id:e.id,activeID:p,moveToTarget:h})})})]})};var _=n(1047),d=n.n(_),u=!0;function f(e){let{allPostsData:t}=e,n=t.map(e=>({id:e.id,title:e.title}));return(0,o.jsx)("main",{className:d().main,children:(0,o.jsx)(p,{catalogs:n,contents:t})})}},3965:function(e){e.exports={poemWrapper:"PoemDisplay_poemWrapper__Pv3hU",poems:"PoemDisplay_poems__EbULe",poemContainer:"PoemDisplay_poemContainer__u8SFw",poemTitleWrapper:"PoemDisplay_poemTitleWrapper__BN_JU",poemTitle:"PoemDisplay_poemTitle__wCsak",poemContentWrapper:"PoemDisplay_poemContentWrapper__FhgxJ",poemContent:"PoemDisplay_poemContent__7aCeu",catalog:"PoemDisplay_catalog__r59vD",catalogItem:"PoemDisplay_catalogItem__XYgRy",text:"PoemDisplay_text__YQt3O",active:"PoemDisplay_active__sau_i"}},1047:function(e){e.exports={main:"Home_main__OVLM4"}}},function(e){e.O(0,[895,774,888,179],function(){return e(e.s=9195)}),_N_E=e.O()}]);