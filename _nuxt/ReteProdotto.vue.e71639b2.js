import{a as N,_ as H}from"./sanity-image.65ba4ec5.js";import{d as I,a as w,C as A,A as B,H as u,I as f,J as s,R as r,Q as F,P as b,G as n,M as m,K as x,L as _,u as i,N as h,F as C,X as $,S as R}from"./swiper-vue.d657e82d.js";import{u as T,v as k}from"./entry.1c3813f7.js";const Z={id:"pure",class:"bg-primary scroll-mt-20"},q={"data-dark":"false","data-aos":"fade-up",class:"padding pt-0 items-start flex flex-col"},D={class:"padding ps-0"},G={class:"text-primary bg-light duration-500 text-center rounded-[60px] hover:cursor-auto border transition border-light border-px px-4 pt-[0.1rem] pb-[0.2rem] md:pt-1 md:pb-0.5"},J={class:"font-sans sans-sm md:sans-base"},K={key:0,class:"ps-0.5 md:ps-2 font-serif serif-sm md:serif-base"},Q={class:"relative w-full"},U={class:"absolute w-full h-full flex items-center justify-center md:hidden z-[2]"},W={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative"},X={class:"pagination bottom-[16px] absolute w-full z-10 md:hidden"},O={class:"flex justify-center align-center gap-2"},Y=["data-dark"],ss={class:"col-span-2 md:col-span-1 font-sans text-base"},es={class:"justify-center hidden md:flex"},ts={key:0},is={class:"font-sans sans-sm md:sans-base"},as={class:"ps-1 font-serif serif-sm md:serif-base"},ns={class:"font-sans text-end text-base"},os=["data-dark"],ds={class:"padding md:pb-4 grid grid-cols-2 text-primary gap-4"},ls={class:"h1-serif col-span-2 md:col-span-1 flex items-end order-1"},rs={class:"col-span-2 md:col-span-1 order-4 md:order-2 lg:mt-5"},cs={class:"flex flex-row items-end justify-start lg:justify-end gap-2 md:gap-4"},us={class:"col-span-2 flex justify-center items-center py-8 md:py-20 order-2 md:order-3"},fs={class:"w-full col-span-2 flex flex-row order-3 md:order-4 product-text"},ms=s("div",{class:"w-auto me-4 md:me-8 hidden md:flex items-start justify-center"},[s("svg",{class:"w-10 md:w-12 h-auto",viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M27 0C12.0887 0 0 12.0887 0 27C0 41.9113 12.0887 54 27 54C41.9113 54 54 41.9113 54 27C54 12.0887 41.9113 0 27 0ZM27.0218 10.3846C28.6148 10.3846 30.1154 11.7824 30.1154 13.4803C30.1154 15.2934 28.6148 16.6154 27.0218 16.6154C25.1567 16.6154 23.8846 15.2934 23.8846 13.4803C23.8846 11.7824 25.1567 10.3846 27.0218 10.3846ZM34.2692 42.5769H29.0769H24.9231H19.7308V39.4615L24.9231 38.4231V24.9231H20.7692V21.8077L29.0769 20.7692V38.4231L34.2692 39.4615V42.5769Z",fill:"#314826"})])],-1),hs={class:"flex flex-col"},gs={class:"sans-sm md:sans-base font-sans"},vs={class:"serif-sm md:serif-base font-serif"},_s=I({__name:"ReteProdotto",props:["slice","id"],setup(t){const l=T(),o=w(1);function P(){o.value++,o.value===3&&(o.value=1)}function z(){o.value--,o.value===0&&(o.value=2)}const p=w(!0);function y(){p.value=window.innerWidth<768}A(()=>{y(),window.addEventListener("resize",()=>{y()})}),B(()=>{window.removeEventListener("resize",()=>{y()})});function S(e){l.changeProduct(e)}function V(e){const d=getComputedStyle(e).width;e.style.width=d,e.style.position="absolute",e.style.visibility="hidden",e.style.height="auto";const c=getComputedStyle(e).height;e.style.width=null,e.style.position=null,e.style.visibility=null,e.style.height=0,getComputedStyle(e).height,requestAnimationFrame(()=>{e.style.height=c})}function L(e){e.style.height="auto"}function j(e){const d=getComputedStyle(e).height;e.style.height=d,getComputedStyle(e).height,requestAnimationFrame(()=>{e.style.height=0})}function g(e){return e.asset._ref}return(e,d)=>{const c=N,v=H;return u(),f(C,null,[s("section",Z,[s("section",q,[s("div",D,[s("p",G,[s("span",J,r(t.slice.name),1),F(),t.slice.name_extended?(u(),f("span",K,r(t.slice.name_extended),1)):b("",!0)])]),s("div",Q,[s("div",U,[s("div",{onClick:d[0]||(d[0]=a=>z()),class:"w-1/2 h-full select-none"}),s("div",{onClick:d[1]||(d[1]=a=>P()),class:"w-1/2 h-full select-none"})]),s("div",W,[n(v,{"asset-id":g(t.slice.image_left)},{default:m(({src:a})=>[x(n(c,{"data-dark":!0,src:a,class:"w-full select-none",loading:"lazy"},null,8,["src"]),[[_,!i(p)||i(o)===1]])]),_:1},8,["asset-id"]),n(v,{"asset-id":g(t.slice.image_right)},{default:m(({src:a})=>[x(n(c,{src:a,class:"w-full select-none",loading:"lazy"},null,8,["src"]),[[_,!i(p)||i(o)===2]])]),_:1},8,["asset-id"]),s("div",X,[s("div",O,[s("div",{class:h([[i(o)===1?"bg-primary opacity-100":"bg-light opacity-100"],"w-2 h-2 rounded-full"])},null,2),s("div",{class:h([[i(o)===2?"bg-primary opacity-100":"bg-light opacity-100"],"w-2 h-2 rounded-full"])},null,2)])])])])]),s("section",null,[s("div",{"data-dark":i(l).openProduct===t.id,onClick:d[2]||(d[2]=a=>S(t.id)),class:h(["w-full select-none top-0",[i(l).openProduct===t.id?"bg-light text-primary":"bg-primary text-light"]])},[s("div",{class:h([{" border-primary border-t-light":i(l).openProduct===t.id},"mx-4 md:mx-8 border-t border-b py-2 grid grid-cols-3 hover:cursor-pointer top-0"])},[s("span",ss,r(e.$t("info")),1),s("div",es,[i(l).openProduct===t.id?(u(),f("div",ts,[s("span",is,r(t.slice.name),1),s("span",as,r(t.slice.name_extended),1)])):b("",!0)]),s("span",ns,r(i(l).openProduct===t.id?"–":"+"),1)],2)],10,Y),n(R,{name:"expand",onEnter:V,onAfterEnter:L,onLeave:j},{default:m(()=>[x(s("div",{"data-dark":i(l).openProduct===t.id,class:"bg-light"},[s("div",ds,[s("div",ls,r(t.slice.info.info_title),1),s("div",rs,[s("div",cs,[(u(!0),f(C,null,$(t.slice.info.icons,(a,M)=>(u(),f("div",{key:"icons-"+M,class:"xl:max-w-[7vw] md:max-x-[3rem] md:w-auto w-[2.5rem]"},[n(v,{"asset-id":g(a==null?void 0:a.icon)},{default:m(({src:E})=>[n(c,{src:E,class:"w-full h-auto",loading:"lazy"},null,8,["src"])]),_:2},1032,["asset-id"])]))),128))])]),s("div",us,[n(v,{"asset-id":g(t.slice.info.diagram)},{default:m(({src:a})=>[n(c,{src:a,class:"md:w-5/6 lazyload",loading:"lazy"},null,8,["src"])]),_:1},8,["asset-id"])]),s("div",fs,[ms,s("div",hs,[s("div",gs,[n(i(k),{value:t.slice.info.description_sans},null,8,["value"])]),s("div",vs,[n(i(k),{value:t.slice.info.description_serif},null,8,["value"])])])])])],8,os),[[_,i(l).openProduct===t.id]])]),_:1})])]),s("section",{"data-dark":"false",class:h([[i(l).openProduct===t.id?"inset-shadow":""],"pb-20 md:pb-40 bg-primary"])},null,2)],64)}}});export{_s as _};
