import{u as R}from"./vue.f36acd1f.6837454d.js";import{h as I,w as U,j as b,p as D,f as A,i as k,k as x,l as C,m as q,b as F}from"./entry.1c3813f7.js";import{c as y,d as O,a as $,C as T,f as P}from"./swiper-vue.d657e82d.js";async function G(e,t){return await Y(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function Y(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const n={width:i.width,height:i.height,ratio:i.width/i.height};t(n)},i.onerror=n=>r(n),i.src=e})}function z(e){return t=>t?e[t]||t:e.missingValue}function Z({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(o,s)=>`${o}=${s}`),t&&typeof t!="function"&&(t=z(t));const n=i||{};return Object.keys(n).forEach(o=>{typeof n[o]!="function"&&(n[o]=z(n[o]))}),(o={})=>Object.entries(o).filter(([d,c])=>typeof c<"u").map(([d,c])=>{const u=n[d];return typeof u=="function"&&(c=u(o[d])),d=typeof t=="function"?t(d):d,e(d,c)}).join(r)}function h(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function J(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function V(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function X(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function Q(e){const t={options:e},r=(n,o={})=>B(t,n,o),i=(n,o={},s={})=>r(n,{...s,modifiers:A(o,s.modifiers||{})}).url;for(const n in e.presets)i[n]=(o,s,d)=>i(o,s,{...e.presets[n],...d});return i.options=e,i.getImage=r,i.getMeta=(n,o)=>K(t,n,o),i.getSizes=(n,o)=>ie(t,n,o),t.$img=i,i}async function K(e,t,r){const i=B(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await G(e,i.url)}function B(e,t,r){var u,l;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:n}=ee(e,r.provider||e.options.provider),o=te(e,r.preset);if(t=I(t)?t:U(t),!i.supportsAlias)for(const g in e.options.alias)t.startsWith(g)&&(t=b(e.options.alias[g],t.substr(g.length)));if(i.validateDomains&&I(t)){const g=D(t).host;if(!e.options.domains.find(p=>p===g))return{url:t}}const s=A(r,o,n);s.modifiers={...s.modifiers};const d=s.modifiers.format;(u=s.modifiers)!=null&&u.width&&(s.modifiers.width=h(s.modifiers.width)),(l=s.modifiers)!=null&&l.height&&(s.modifiers.height=h(s.modifiers.height));const c=i.getImage(t,s,e);return c.format=c.format||d||"",c}function ee(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function te(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ie(e,t,r){var f,w,N,_,j;const i=h((f=r.modifiers)==null?void 0:f.width),n=h((w=r.modifiers)==null?void 0:w.height),o=X(r.sizes),s=(N=r.densities)!=null&&N.trim()?J(r.densities.trim()):e.options.densities;V(s);const d=i&&n?n/i:0,c=[],u=[];if(Object.keys(o).length>=1){for(const m in o){const v=W(m,String(o[m]),n,d,e);if(v!==void 0){c.push({size:v.size,screenMaxWidth:v.screenMaxWidth,media:`(max-width: ${v.screenMaxWidth}px)`});for(const S of s)u.push({width:v._cWidth*S,src:M(e,t,r,v,S)})}}re(c)}else for(const m of s){const v=Object.keys(o)[0];let S=W(v,String(o[v]),n,d,e);S===void 0&&(S={size:"",screenMaxWidth:0,_cWidth:(_=r.modifiers)==null?void 0:_.width,_cHeight:(j=r.modifiers)==null?void 0:j.height}),u.push({width:m,src:M(e,t,r,S,m)})}ne(u);const l=u[u.length-1],g=c.length?c.map(m=>`${m.media?m.media+" ":""}${m.size}`).join(", "):void 0,p=g?"w":"x",a=u.map(m=>`${m.src} ${m.width}${p}`).join(", ");return{sizes:g,srcset:a,src:l==null?void 0:l.src}}function W(e,t,r,i,n){const o=n.options.screens&&n.options.screens[e]||parseInt(e),s=t.endsWith("vw");if(!s&&/^\d+$/.test(t)&&(t=t+"px"),!s&&!t.endsWith("px"))return;let d=parseInt(t);if(!o||!d)return;s&&(d=Math.round(d/100*o));const c=i?Math.round(d*i):r;return{size:t,screenMaxWidth:o,_cWidth:d,_cHeight:c}}function M(e,t,r,i,n){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*n:void 0,height:i._cHeight?i._cHeight*n:void 0},r)}function re(e){var r;e.sort((i,n)=>i.screenMaxWidth-n.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const n=e[i];n.media===t&&e.splice(i,1),t=n.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function ne(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const oe=Z({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>x(e)+"_"+x(t)}),se=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const n=oe(t)||"_";return r||(r=b(i.options.nuxt.baseURL,"/_ipx")),{url:b(r,n,k(e))}},ae=!0,de=!0,ce=Object.freeze(Object.defineProperty({__proto__:null,getImage:se,supportsAlias:de,validateDomains:ae},Symbol.toStringTag,{value:"Module"})),E={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};E.providers={ipxStatic:{provider:ce,defaults:{}}};const H=()=>{const e=C(),t=q();return t.$img||t._img||(t._img=Q({...E,nuxt:{baseURL:e.app.baseURL}}))},ue={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},le=e=>{const t=y(()=>({provider:e.provider,preset:e.preset})),r=y(()=>({width:h(e.width),height:h(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=H(),n=y(()=>({...e.modifiers,width:h(e.width),height:h(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:n}},fe={...ue,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},ye=O({name:"NuxtImg",props:fe,emits:["load","error"],setup:(e,t)=>{const r=H(),i=le(e),n=$(!1),o=y(()=>r.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:h(e.width),height:h(e.height)}})),s=y(()=>{const a={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||n.value)&&(a.sizes=o.value.sizes,a.srcset=o.value.srcset),a}),d=y(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||n.value)return!1;if(typeof a=="string")return a;const f=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return r(e.src,{...i.modifiers.value,width:f[0],height:f[1],quality:f[2]||50,blur:f[3]||3},i.options.value)}),c=y(()=>e.sizes?o.value.src:r(e.src,i.modifiers.value,i.options.value)),u=y(()=>d.value?d.value:c.value);if(e.preload){const a=Object.values(o.value).every(f=>f);R({link:[{rel:"preload",as:"image",nonce:e.nonce,...a?{href:o.value.src,imagesizes:o.value.sizes,imagesrcset:o.value.srcset}:{href:u.value}}]})}const l=$(),p=q().isHydrating;return T(()=>{if(d.value){const a=new Image;a.src=c.value,e.sizes&&(a.sizes=o.value.sizes||"",a.srcset=o.value.srcset),a.onload=f=>{n.value=!0,t.emit("load",f)};return}l.value&&(l.value.complete&&p&&(l.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),l.value.onload=a=>{t.emit("load",a)},l.value.onerror=a=>{t.emit("error",a)})}),()=>P("img",{ref:l,src:u.value,...s.value,...t.attrs})}}),ge="https://cdn.sanity.io/images",L={assetId:{type:String,required:!0},projectId:{type:String,default:null},dataset:{type:String,default:null},auto:{type:String},bg:{type:String},blur:{type:[Number,String],validator:e=>Number(e)>=0&&Number(e)<=100},crop:{type:String,validator:e=>["top","bottom","left","right","center","focalpoint","entropy"].includes(e)},dl:{type:String},dpr:{type:[Number,String],validator:e=>[1,2,3].includes(Number(e))},fit:{type:String,validator:e=>["clip","crop","fill","fillmax","max","scale","min"].includes(e)},flip:{type:String,validator:e=>["h","v","hv"].includes(e)},fm:{type:String,validator:e=>["jpg","pjpg","png","webp"].includes(e)},fpX:{type:[Number,String],validator:e=>Number(e)<=1&&Number(e)>=0},fpY:{type:[Number,String],validator:e=>Number(e)<=1&&Number(e)>=0},h:{type:[Number,String]},invert:{type:Boolean},maxH:{type:[Number,String]},maxW:{type:[Number,String]},minH:{type:[Number,String]},minW:{type:[Number,String]},or:{type:[Number,String],validator:e=>[0,90,180,270].includes(Number(e))},q:{type:[Number,String],validator:e=>Number(e)>=0&&Number(e)<=100},rect:{type:String},sat:{type:[Number,String]},sharpen:{type:[Number,String],validator:e=>Number(e)>=0&&Number(e)<=100},w:{type:[Number,String]}},me=Object.keys(L).filter(e=>!["assetId","projectId","dataset"].includes(e)),Se=O({name:"SanityImage",props:L,setup(e,{attrs:t,slots:r}){const i=F(),n=y(()=>{var g;const o=me.map(p=>{const a=p.replace(/[A-Z]/,f=>"-"+f.toLowerCase());return e[p]?`${a}=${e[p]}`:void 0}).filter(Boolean).join("&"),s=((g=e.assetId)==null?void 0:g.split("-").slice(1))||[],d=s.pop(),c=e.projectId||i.config.projectId,u=e.dataset||i.config.dataset||"production",l=`${s.join("-")}.${d}${o?"?"+o:""}`;return[ge,c,u,l].join("/")});return()=>{var o;return((o=r.default)==null?void 0:o.call(r,{src:n.value}))||P("img",{...t,src:n.value})}}});export{Se as _,ye as a};
