import{_ as C}from"./TitleBanner.bedea0d2.js";import{b as T,u as q,a as F,g as M,c as D}from"./entry.1c3813f7.js";import{d as $,c as E,f as N,W as U,a as S,C as L,A as R,I as b,G as g,u as x,J as t,R as H,F as V,X as z,H as y,M as j,a4 as G,a5 as J}from"./swiper-vue.d657e82d.js";import{a as O,_ as W}from"./sanity-image.65ba4ec5.js";import{_ as X}from"./_plugin-vue_export-helper.c27b6911.js";import"./vue.f36acd1f.6837454d.js";const K="https://cdn.sanity.io/files",P=$({name:"SanityImage",props:{assetId:{type:String,required:!0},projectId:{type:String,default:null},dataset:{type:String,default:null},download:{type:[String,Boolean],default:!1}},setup(e,{slots:s}){const d=T(),a=E(()=>{const n=e.assetId.split("-").slice(1),m=n.pop(),f=e.projectId||d.config.projectId,l=e.dataset||d.config.dataset||"production",_=`${n.join("-")}.${m}`,i=[K,f,l,_].join("/");return e.download?i+"?dl="+(typeof e.download=="string"?e.download:""):i});return()=>{var n;return((n=s.default)==null?void 0:n.call(s,{src:a.value}))||N("span")}}}),A=e=>(G("data-v-13b4e31c"),e=e(),J(),e),Q={class:"bg-primary"},Y=A(()=>t("section",{class:"drop-shadow-section bg-light"},null,-1)),Z={"data-dark":"true",class:"bg-light padding pb-20 md:pb-40"},tt={"data-aos":"fade-up",class:"h1-serif text-primary"},et={"data-dark":"true","data-aos":"fade-up",class:"flex items-start flex-row w-full gap-4"},at={class:"rounded-[60px] text-base text-light border transition border-primary border-px bg-primary mb-3 md:mb-6 font-sans flex px-4 py-2 md:py-1"},ot={class:"rounded-[60px] text-base duration-500 hover:cursor-pointer hover:text-light border transition border-primary border-px bg-light text-primary hover:bg-primary mb-3 md:mb-6 font-sans px-4 py-2 md:py-1"},st=["href"],nt={class:"p-1","data-aos":"fade-up"},rt={"data-dark":"false",class:"w-full preview-container bg-primary"},dt={class:"md:py-20 md:px-40"},it={class:"rounded-lg overflow-hidden"},ct=A(()=>t("section",{"data-dark":"false",class:"pb-20 md:pb-40 bg-light"},null,-1)),lt=$({__name:"cataloghi",async setup(e){let s,d;const a=q(),{locale:n}=F(),m=M`{ "cataloghi": *[_type == "cataloghi" && language == $language] }`,f=T(),{data:l}=([s,d]=U(()=>D("cataloghi",()=>f.fetch(m,{language:n.value}),{transform:o=>o==null?void 0:o.cataloghi[0]})),s=await s,d(),s),_=S(!1);a.changeHeader(_.value),a.changeFooter(!1),a.changeInfo(!1);{const o=S([]),v={root:null,rootMargin:`-37px 0px -${window.innerHeight-37}px 0px`},p=new IntersectionObserver(c=>{c.forEach(u=>{u.isIntersecting&&(u.target.getAttribute("data-dark")==="true"?(a.changeHeader(!1),a.changeTransHeader(!1)):(a.changeHeader(!0),a.changeTransHeader(!1)))})},v);L(()=>{a.changeTransHeader(!0),setTimeout(()=>{o.value=document.querySelectorAll("[data-dark]"),o.value.forEach(c=>{p.observe(c)})},1e3)}),R(()=>{p.disconnect()})}function i(o){return o.asset._ref}return(o,v)=>{var I,k;const p=C,c=P,u=O,w=W;return y(),b("main",Q,[g(p,{title:"Cataloghi",dark:x(_)},null,8,["dark"]),Y,t("section",Z,[t("div",tt,[t("p",null,H((I=x(l))==null?void 0:I.text_box),1)])]),(y(!0),b(V,null,z((k=x(l))==null?void 0:k.cataloghi,(r,B)=>(y(),b("section",{key:r.title+B,class:"padding pt-0 bg-light flex flex-col"},[t("div",et,[t("div",at,H(r.title),1),t("div",ot,[g(c,{"asset-id":i(r.catalogho_link)},{default:j(({src:h})=>[t("a",{target:"_blank",href:h},"Download",8,st)]),_:2},1032,["asset-id"])])]),t("div",nt,[t("div",rt,[t("div",dt,[t("div",it,[g(w,{"asset-id":i(r==null?void 0:r.preview)},{default:j(({src:h})=>[g(u,{class:"w-full",src:h,loading:"lazy"},null,8,["src"])]),_:2},1032,["asset-id"])])])])])]))),128)),ct])}}});const ht=X(lt,[["__scopeId","data-v-13b4e31c"]]);export{ht as default};
