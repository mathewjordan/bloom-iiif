"use strict";var we=Object.create;var z=Object.defineProperty;var Ie=Object.getOwnPropertyDescriptor;var Pe=Object.getOwnPropertyNames;var Fe=Object.getPrototypeOf,ze=Object.prototype.hasOwnProperty;var ke=(e,t)=>{for(var o in t)z(e,o,{get:t[o],enumerable:!0})},Q=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Pe(t))!ze.call(e,n)&&n!==o&&z(e,n,{get:()=>t[n],enumerable:!(r=Ie(t,n))||r.enumerable});return e};var f=(e,t,o)=>(o=e!=null?we(Fe(e)):{},Q(t||!e||!e.__esModule?z(o,"default",{value:e,enumerable:!0}):o,e)),Ae=e=>Q(z({},"__esModule",{value:!0}),e);var Ge={};ke(Ge,{default:()=>We});module.exports=Ae(Ge);var u=f(require("react"));var v=f(require("react")),X=require("@iiif/vault"),T={isLoaded:!1,itemHeight:void 0,vault:new X.Vault},Y=v.default.createContext(T),Z=v.default.createContext(T);function He(e,t){switch(t.type){case"updateIsLoaded":return{...e,isLoaded:t.isLoaded};case"updateItemHeight":return{...e,itemHeight:t.itemHeight};default:throw new Error(`Unhandled action type: ${t.type}`)}}var _=({initialState:e=T,children:t})=>{let[o,r]=v.default.useReducer(He,e);return v.default.createElement(Y.Provider,{value:o},v.default.createElement(Z.Provider,{value:r},t))};function P(){let e=v.default.useContext(Y);if(e===void 0)throw new Error("useViewerState must be used within a ViewerProvider");return e}function ee(){let e=v.default.useContext(Z);if(e===void 0)throw new Error("useViewerDispatch must be used within a ViewerProvider");return e}var d=f(require("react"));var m=f(require("react"));var l=f(require("react"));var k=require("@samvera/nectar-iiif");var oe=require("@stitches/react"),b=e=>1.618**e;var te={1:"0.382rem",2:"0.618rem",3:"1rem",4:"1.618rem",5:`calc(1rem * ${b(2)})`,6:`calc(1rem * ${b(3)})`,7:`calc(1rem * ${b(4)})`,8:`calc(1rem * ${b(5)})`,9:`calc(1rem * ${b(6)})`,10:`calc(1rem * ${b(7)})`,11:`calc(1rem * ${b(8)})`,12:`calc(1rem * ${b(9)})`},Me={colors:{primary:"#1a1d1e",primaryMuted:"#26292b",primaryAlt:"#151718",accent:"#006adc",accentMuted:"#5eb0ef",accentAlt:"#00254d",secondary:"#FFFFFF",secondaryMuted:"#e6e8eb",secondaryAlt:"#c1c8cd"},fonts:{sans:"'Inter', Arial, sans-serif",display:"'Calistoga', 'Inter', Arial, sans-serif"},fontSizes:{1:"0.611rem",2:"0.722rem",3:"0.833rem",4:"1rem",5:"1.177rem",6:"1.318rem",7:`calc(1rem * ${b(1)})`,8:`calc(1rem * ${b(2)})`,9:`calc(1rem * ${b(3)})`},sizes:{...te},space:{...te},transitions:{all:"all 250ms cubic-bezier(0.16, 1, 0.3, 1)",load:"all 1.25s cubic-bezier(0.16, 1, 0.3, 1)"}},Le={xxs:"(max-width: 349px)",xs:"(max-width: 575px)",sm:"(max-width: 767px)",md:"(max-width: 991px)",xl:"(max-width: 1199px)",lg:"(min-width: 1200px)"},{styled:i,css:Je,keyframes:Ke,createTheme:Qe}=(0,oe.createStitches)({theme:Me,media:Le});var R=i("div",{position:"absolute",width:"100%",backgroundColor:"green"}),A=i("figure",{display:"flex",flexDirection:"column",margin:"0 0 $2",flexGrow:"0",flexShrink:"0",borderRadius:"3px",transition:"$all",img:{position:"absolute",display:"flex",flexDirection:"column",objectFit:"cover",zIndex:"0",width:"100%",height:"100%",color:"transparent"},video:{position:"absolute",display:"flex",flexDirection:"column",objectFit:"cover",zIndex:"1",width:"100%",height:"100%",color:"transparent",opacity:"0",transition:"$load",borderRadius:"3px"},figcaption:{display:"flex",flexDirection:"column",padding:"$2 0",color:"$primary",transition:"$all"},variants:{isFocused:{true:{margin:"-$2 -$2 0",video:{opacity:"1"},figcaption:{padding:"$2",color:"$accent"},[`& ${R}`]:{width:"calc(100% - ($2 * 2))"}}}}}),H=i("span",{display:"flex",position:"relative",backgroundColor:"$secondaryAlt",width:"100%",height:"100%",overflow:"hidden",borderRadius:"3px",boxShadow:"none",transition:"$all"}),re=i(k.Label,{fontSize:"$3",fontWeight:"700"}),ne=i(k.Summary,{fontSize:"$2",marginTop:"$1",color:"$primary"});var ie=f(require("@radix-ui/react-aspect-ratio"));var ae=require("@samvera/nectar-iiif"),De=({index:e,isFocused:t,label:o,summary:r,thumbnail:n})=>{let s=ee(),[y,C]=(0,l.useState)(!1),h=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let g=new ResizeObserver(a=>{for(let p of a)if(p.contentBoxSize){let E=Array.isArray(p.contentBoxSize)?p.contentBoxSize[0]:p.contentBoxSize;s({type:"updateItemHeight",itemHeight:E.inlineSize})}});e===0&&h.current&&g.observe(h.current)},[e,y]),n[0].type==="ContentResource"?l.default.createElement(l.default.Fragment,null):l.default.createElement(A,{isFocused:t},l.default.createElement(ie.Root,{ratio:1/1},l.default.createElement(R,{ref:h}),l.default.createElement(H,null,l.default.createElement(ae.Thumbnail,{altAsLabel:o,css:{objectFit:"cover",width:"100%",height:"100%"},onLoad:()=>C(!0),thumbnail:n}))),l.default.createElement("figcaption",null,l.default.createElement(re,{label:o}),r&&l.default.createElement(ne,{summary:r})))},se=De;var j=i("a",{color:"black",textDecoration:"none"}),M=i("div",{position:"relative",width:"calc(100% / 4)",zIndex:"0",borderRadius:"3px",[`> ${j}:hover`]:{[`${A}`]:{boxShadow:"3px 3px 11px #0003"},[`${H}`]:{borderBottomLeftRadius:"0",borderBottomRightRadius:"0"}}});var c=f(require("react"));var le=i("div",{position:"absolute",zIndex:"2",left:"-$2",top:"-$2",width:"calc(100% + (0.618rem * 2))",opacity:"0",variants:{isFocused:{true:{opacity:"1"}}}}),ce=i("div",{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-end",zIndex:"1"}),me=i("div",{display:"flex",justifyContent:"center",padding:"$2 $2 0",background:"linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",cursor:"default",button:{width:"$4",height:"$4",display:"flex",flexDirection:"column",textAlign:"center",justifyContent:"center",alignItems:"center",borderRadious:"100%",backgroundColor:"transparent",border:"none",cursor:"pointer","&:disabled":{opacity:"0.2"},svg:{width:"100%",fill:"$secondary",stroke:"$secondary",color:"$secondary"}}}),de=i("div",{display:"flex",justifyContent:"center",backgroundColor:"rgba(0,0,0,0.7)",color:"$secondaryAlt",fontSize:"$1",padding:"$1",cursor:"default"});var ue=f(require("@radix-ui/react-aspect-ratio"));var L=f(require("react")),D=()=>L.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},L.default.createElement("title",null,"Next"),L.default.createElement("path",{fill:"none",stroke:"currentColor",strokeMiterlimit:"10",strokeWidth:"70",d:"M268 112l144 144-144 144M392 256H100"}));var N=f(require("react")),B=()=>N.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},N.default.createElement("title",null,"Previous"),N.default.createElement("path",{fill:"none",stroke:"currentColor",strokeMiterlimit:"10",strokeWidth:"70",d:"M244 400L100 256l144-144M120 256h292"}));var Ne=({activeCanvas:e,handleActiveCanvas:t,isFocused:o,manifest:r})=>{let[n,s]=(0,c.useState)(!1),[y,C]=(0,c.useState)(!1),h=e+1,g=0;return r&&(g=r.items.length),(0,c.useEffect)(()=>{h<=1?s(!1):s(!0),h>=g?C(!1):C(!0)},[e,r]),c.default.createElement(le,{isFocused:o},c.default.createElement(ue.Root,{ratio:1/1},r&&c.default.createElement(ce,null,c.default.createElement(me,{onClick:a=>a.preventDefault()},c.default.createElement("button",{onClick:()=>t(-1),disabled:!n},c.default.createElement(B,null)),c.default.createElement("button",{onClick:()=>t(1),disabled:!y},c.default.createElement(D,null))),c.default.createElement(de,{onClick:a=>a.preventDefault()},h," of ",g))))},pe=Ne;var fe=(e,t)=>{if(e.thumbnail.length!==0)return e.thumbnail;let o=t.get(e.items[0]);return t.get(o.items[0]).body};var Be=({index:e,item:t})=>{var q;let o=P(),{vault:r}=o,[n,s]=(0,m.useState)(!1),[y,C]=(0,m.useState)(0),[h,g]=(0,m.useState)(t.thumbnail),[a,p]=(0,m.useState)(),[E,ve]=(0,m.useState)(t.id);(0,m.useEffect)(()=>{n&&setTimeout(()=>{a||r.loadManifest(t.id).then(S=>p(S)).catch(S=>{console.error(`Manifest failed to load: ${S}`)})},1e3)},[n]),(0,m.useEffect)(()=>{let S=r.get(t.thumbnail);g(S)},[]);let V=()=>s(!0),W=()=>s(!1),G=S=>{if(!a)return;let J=y+S,K=r.get(a.items[J]),$e=fe(K,r),Se=r.get($e);ve(K.id),g(Se),C(J)};(0,m.useEffect)(()=>{a&&G(0)},[a]);let U;return((q=t.homepage)==null?void 0:q.length)>0&&(U=t.homepage[0].id),m.default.createElement(M,null,m.default.createElement(j,{href:U,tabIndex:0,onFocus:V,onBlur:W,onMouseEnter:V,onMouseLeave:W},m.default.createElement(se,{index:e,isFocused:n,key:E,label:t.label,summary:t.summary,thumbnail:h}),m.default.createElement(pe,{manifest:a,activeCanvas:y,handleActiveCanvas:G,isFocused:n})))},he=Be;var ge=i("div",{position:"relative",display:"flex",flexDirection:"row",[`> ${M}`]:{marginRight:"$4","&:last-child":{marginRight:"0"}}});var $=f(require("react"));var F=i("div",{position:"absolute",background:"black",borderRadius:"3px",opacity:"0",transition:"$all"}),w=i("div",{position:"absolute",display:"flex",flexDirection:"column",width:"$4",height:"$4",borderRadius:"100%",backgroundColor:"white",justifyContent:"center",textAlign:"center",alignItems:"center",boxShadow:"none",transform:"none",transition:"$all",svg:{display:"flex",width:"$3",height:"$3",fill:"$primary",stroke:"$primary",color:"$primary",transition:"$all"}}),be=i("button",{position:"absolute",height:"100%",zIndex:"1",border:"none",cursor:"pointer",background:"transparent",["&:disabled"]:{opacity:"0",transform:"scale(0)"},["&:hover"]:{[`> ${F}`]:{opacity:1},[`> ${w}`]:{boxShadow:"3px 3px 11px #0003",svg:{fill:"$accent",stroke:"$accent",color:"$accent"}}},variants:{value:{next:{left:"unset",right:"0",[`> ${F}`]:{left:"unset",right:"0",top:"0",background:"linear-gradient(270deg, rgba(0,0,0,0.7) 38.2%, rgba(0,0,0,0) 98%)"},[`> ${w}`]:{right:"calc(-$4 / 2)",marginTop:"calc(-$4 / 2)"},[`&:hover > ${w}`]:{marginRight:"$1"}},previous:{left:"0",right:"unset",[`> ${F}`]:{left:"0",right:"unset",top:"0",background:"linear-gradient(90deg, rgba(0,0,0,0.7) 38.2%, rgba(0,0,0,0) 98%)"},[`> ${w}`]:{left:"calc(-$4 / 2)",marginTop:"calc(-$4 / 2)"},[`&:hover > ${w}`]:{marginLeft:"$1"}}}}});var Ee=({disabled:e,handleControl:t,height:o,increment:r,label:n})=>{let s=o*.382;return $.default.createElement($.default.Fragment,null,$.default.createElement(be,{"aria-label":n,direction:n,onClick:()=>t(r),style:{height:`${o}px`,width:`${s}px`},disabled:e,value:n},$.default.createElement(F,{style:{height:`${o}px`,width:`${s}px`}}),$.default.createElement(w,null,n==="next"&&$.default.createElement(D,null),n==="previous"&&$.default.createElement(B,null))))},O=Ee;var Te=({items:e})=>{let{itemHeight:t}=P(),[o,r]=(0,d.useState)([0,1,2,3,4]),[n,s]=(0,d.useState)(!1),[y,C]=(0,d.useState)(!1),h=(0,d.useRef)(null);(0,d.useEffect)(()=>{!e||(o.includes(0)?s(!1):s(!0),o.includes(e.length-1)?C(!1):C(!0))},[o]);let g=a=>{r(o.map(p=>p+a))};return d.default.createElement(ge,{ref:h},t&&d.default.createElement(d.default.Fragment,null,d.default.createElement(O,{increment:-1,label:"previous",handleControl:g,height:t,disabled:!n}),d.default.createElement(O,{increment:1,label:"next",handleControl:g,height:t,disabled:!y})),e.filter((a,p)=>{if(o.includes(p))return a}).map((a,p)=>d.default.createElement(he,{index:p,item:a,key:a.id})))},xe=Te;var x=f(require("react"));var Ce=i("div",{display:"flex",flexDirection:"column",paddingBottom:"$4",margin:"0",color:"$primary",lineHeight:"1.4em",".bloom-header-homepage":{color:"$accent",textDecoration:"none"},".bloom-header-label":{fontSize:"$6",fontWeight:"400",fontFamily:"$display"},".bloom-header-summary":{fontSize:"$4",marginTop:"$2"}});var I=require("@samvera/nectar-iiif"),Re=({label:e,summary:t,homepage:o})=>{let[r,n]=(0,x.useState)(!1);return(0,x.useEffect)(()=>{o.length>0&&n(!0)},[o]),x.default.createElement(Ce,null,r?x.default.createElement(I.Homepage,{homepage:o,className:"bloom-header-homepage"},x.default.createElement(I.Label,{label:e,as:"span",className:"bloom-header-label"})):x.default.createElement(I.Label,{label:e,as:"span",className:"bloom-header-label"}),t&&x.default.createElement(I.Summary,{summary:t,as:"span",className:"bloom-header-summary"}))},ye=Re;var je=e=>u.default.createElement(_,null,u.default.createElement(Oe,{...e})),Oe=({collectionId:e})=>{let t=P(),{vault:o}=t,[r,n]=(0,u.useState)();return(0,u.useEffect)(()=>{o.loadCollection(e).then(s=>n(s)).catch(s=>{console.error(`Collection failed to load: ${s}`)}).finally(()=>{})},[]),!r||!r.items?(console.log(`The IIIF Collection ${e} failed to load.`),u.default.createElement(u.default.Fragment,null)):r.items.length===0?(console.log(`The IIIF collection ${e} does not contain items.`),u.default.createElement(u.default.Fragment,null)):u.default.createElement(Ve,null,u.default.createElement(ye,{label:r.label,summary:r.summary,homepage:r.homepage}),u.default.createElement(xe,{items:r.items}))},Ve=i("div",{padding:"$4 0"}),We=je;
//# sourceMappingURL=index.cjs.js.map
