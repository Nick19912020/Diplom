(()=>{"use strict";const e=document.getElementsByClassName("accordeon")[0].getElementsByClassName("element");function t(){for(const t of e)t.className="element",t.getElementsByClassName("element-content")[0].style.display="none"}const n=document.getElementsByClassName("modal-overlay")[0],s=document.getElementById("callback"),l=[...document.getElementsByClassName("callback-btn"),...document.getElementsByClassName("services-elements")[0].getElementsByClassName("element"),...document.getElementsByClassName("button-services")],o=s.querySelector("form"),a=s.querySelectorAll("input"),c=document.getElementById("responseMessage"),m=document.querySelector("button"),d=c.getElementsByClassName("modal-content")[0],i=a[0],r=a[1],y=s.getElementsByClassName("form-warning-message")[0];function u(e,t,n){e.test(t.data)||(1===n.value.length?n.value="":n.value=n.value.slice(0,n.value.length-1))}const E={fio:e=>e.length>1,tel:e=>e.length>5&&e.length<17},g=document.getElementsByClassName("services-carousel")[0].getElementsByClassName("element"),p=document.getElementsByClassName("arrow-left")[0],v=document.getElementsByClassName("arrow-right")[0];let f=0;function C(){for(const e of g)e.style.display="none"}function N(){C();for(let e=f;e<f+3;e++)g[e].style.display="block"}const h=document.getElementsByClassName("top-slider")[0].getElementsByClassName("item"),B=document.getElementsByClassName("up")[0];document.documentElement.scrollTop<200&&(B.style.display="none");const k=document.getElementsByClassName("num"),L=document.getElementsByClassName("connect"),b=document.getElementsByClassName("logo"),w=document.getElementsByClassName("mobile-menu")[0],x=document.getElementsByClassName("mob-menu-btn")[0],S=document.getElementsByClassName("mobile-menu-close")[0],T=document.getElementsByClassName("block-link"),q=()=>{for(const e of T)e.addEventListener("click",(t=>{t.preventDefault(),document.querySelector(e.attributes.getNamedItem("href").value).scrollIntoView({behavior:"smooth"})}))};(()=>{for(const n of e)n.addEventListener("click",(()=>{t(),n.className="element active",n.getElementsByClassName("element-content")[0].style.display="block"}),!1)})(),(()=>{for(const e of l)e.addEventListener("click",(()=>{n.style.display="inline",s.style.display="inline"}),!1);m.addEventListener("click",(()=>{n.style.display="none",c.style.display="none"}),!1),s.getElementsByClassName("modal-close")[0].addEventListener("click",(()=>{n.style.display="none",s.style.display="none"})),n.addEventListener("click",(()=>{n.style.display="none",s.style.display="none"}));const e=/[А-Яа-я ]/,t=/[+\d]/;i.addEventListener("input",(t=>{u(e,t,i)})),r.addEventListener("input",(e=>{u(t,e,r)})),o.addEventListener("submit",(e=>{e.preventDefault();const t={};for(const e of a)if("text"===e.type){if(!E[e.name](e.value))return y.textContent="поле Имя минимум 2, поле Телефон минимум 6 максимум 16",void setTimeout((()=>{y.textContent=""}),3e3);t[e.name]=e.value}s.style.display="none",c.style.display="inline",i.value="",r.value="",d.textContent="Происходит загрузка",fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((()=>{d.textContent="Отправка удалась"})).catch((()=>{d.textContent="Отправка не удалась"}))}))})(),C(),N(),v.addEventListener("click",(()=>{f=(f+3)%g.length,N()})),p.addEventListener("click",(()=>{f<3&&(f=g.length),f-=3,N()}),!1),(()=>{for(let e=1;e<h.length;e++)h[e].hidden=!0;let e=0;setInterval((()=>{h[e].hidden=!0,e=(e+1)%h.length,h[e].hidden=!1}),3e3)})(),B.addEventListener("click",(()=>window.scrollTo({top:0,behavior:"smooth"})),!1),document.addEventListener("scroll",(()=>{document.documentElement.scrollTop<200?B.style.display="none":B.style.display="block"})),(()=>{for(const e of k){const t=Math.round(900*Math.random())+100;for(let n=0;n<t;n++)setTimeout((()=>{e.querySelector("span").textContent=n}),1e3+n)}})(),(()=>{for(const e of L)e.addEventListener("click",(()=>{e.classList.contains("header-tel")?window.open(`tel:${e.textContent}`,"_parent"):window.open(`mailto:${e.textContent}`,"_parent")}))})(),(()=>{for(const e of b)e.addEventListener("click",(()=>{location.reload()}))})(),x.addEventListener("click",(()=>{w.classList.add("open")})),S.addEventListener("click",(()=>{w.classList.remove("open")})),q(),q()})();