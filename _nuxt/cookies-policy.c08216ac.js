import{u as d}from"./entry.1c3813f7.js";import{d as l,a as c,C as u,A as f,I as h,J as i,u as m,H as g}from"./swiper-vue.d657e82d.js";const p=["data-dark"],_=i("div",{class:"h1-serif text-light"}," Cookies Policy ",-1),k=[_],y=l({__name:"cookies-policy",setup(v){const e=d(),a=c(!0);e.changeHeader(a.value),e.changeFooter(!1),e.changeInfo(!1);{const t=c([]),s={root:null,rootMargin:`-37px 0px -${window.innerHeight-37}px 0px`},n=new IntersectionObserver(o=>{o.forEach(r=>{r.isIntersecting&&(r.target.getAttribute("data-dark")==="true"?(e.changeHeader(!1),e.changeTransHeader(!1)):(e.changeHeader(!0),e.changeTransHeader(!1)))})},s);u(()=>{setTimeout(()=>{t.value=document.querySelectorAll("[data-dark]"),t.value.forEach(o=>{n.observe(o)})},1e3)}),f(()=>{n.disconnect()})}return(t,s)=>(g(),h("main",null,[i("section",{"data-dark":!m(a),class:"min-h-[80vh] flex items-center justify-center bg-secondary"},k,8,p)]))}});export{y as default};
