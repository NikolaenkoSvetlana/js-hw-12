import{a as y,S as h,i as n}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const b="43214760-0343bbd140b24677312cd0c55";let c=1;const w=15;let d="";async function p(t,e){try{t!==d?(d=t,c=1):c=e;const s=`https://pixabay.com/api/?key=${b}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${c}&per_page=${w}`,o=await y.get(s);if(o.status!==200)throw new Error("Network response was not ok");return o.data.hits}catch(s){return console.error("Error fetching images:",s),[]}}function E(){const t=document.querySelector(".gallery");t.innerHTML=""}function u(t){const e=document.querySelector(".gallery"),s=t.map(o=>`<li class="card">
      <a href="${o.largeImageURL}" data-lightbox="gallery-item">
        <img class="contentCard" src="${o.webformatURL}" alt="${o.tags}">
      </a>
      <div class="imgCard">
        <p><b>Likes:</b> ${o.likes}</p>
        <p><b>Views:</b> ${o.views}</p>
        <p><b>Comments:</b> ${o.comments}</p>
        <p><b>Downloads:</b> ${o.downloads}</p>
      </div>
    </li>`).join("");e.insertAdjacentHTML("beforeend",s)}const m=new h(".gallery a",{captionsData:"alt",captionDelay:250}),L=document.getElementById("search-form"),f=document.getElementById("search-input"),l=document.querySelector(".loader"),g=document.querySelector(".js-load-more");L.addEventListener("submit",async t=>{t.preventDefault();const e=f.value.trim();if(!e){n.error({position:"topRight",title:"Error",message:"Please enter a keyword for search."});return}l.style.display="block",E();try{const s=await p(e,1);s.length===0?n.info({position:"topRight",title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):(u(s),m.refresh(),g.classList.remove("load-more-hidden"))}catch(s){console.error("Error fetching images:",s),n.error({position:"topRight",title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{l.style.display="none"}});g.addEventListener("click",async()=>{const t=f.value.trim();if(!t){n.error({position:"topRight",title:"Error",message:"Please enter a keyword for search."});return}try{const e=await p(t,2);e.length===0?alert("No more images available."):(u(e),m.refresh())}catch(e){console.error("Error fetching images:",e),n.error({position:"topRight",title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{l.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
