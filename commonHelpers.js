import{a as h,S as m,i as n}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const d of e.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();async function g(o,r){const t=`https://pixabay.com/api/?key=43214760-0343bbd140b24677312cd0c55&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=15`;try{const e=await h.get(t);return console.log(e),!e.data.hits||e.data.hits.length===0?[]:e.data}catch(e){return console.error("Error fetching more images:",e),[]}}function b(){const o=document.querySelector(".gallery");o.innerHTML=""}function y(o){const r=document.querySelector(".gallery"),a=o.map(s=>`<li class="card">
    <a href="${s.largeImageURL}" data-lightbox="gallery-item">
      <img class="contentCard" src="${s.webformatURL}" alt="${s.tags}">
    </a>
    <div class="imgCard">
      <p><b>Likes:</b> ${s.likes}</p>
      <p><b>Views:</b> ${s.views}</p>
      <p><b>Comments:</b> ${s.comments}</p>
      <p><b>Downloads:</b> ${s.downloads}</p>
    </div></li>
  `).join("");r.insertAdjacentHTML("beforeend",a)}const u=new m(".gallery a",{captionsData:"alt",captionDelay:250}),w=document.getElementById("search-form"),E=document.getElementById("search-input"),l=document.querySelector(".loader"),c=document.getElementById("load");let i="";const f=15;let p=1;w.addEventListener("submit",async o=>{if(o.preventDefault(),i=E.value.trim(),!i){n.error({position:"topRight",title:"Error",message:"Please enter a keyword for search."});return}l.style.display="block",b();try{const r=await g(i);console.log(r.totalHits),r.length===0?n.info({position:"topRight",title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):(y(r.hits),u.refresh(),c.style.display="block"),r.totalHits<f&&(n.info({position:"topRight",title:"Info",message:"We're sorry, but you've reached the end of search results."}),c.style.display="none")}catch(r){console.error("Error fetching images:",r),n.error({position:"topRight",title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{l.style.display="none"}});c.addEventListener("click",async()=>{p+=1,l.style.display="block";try{const o=await g(i,p);if(o.totalHits%f&&(c.style.display="none",n.info({position:"topRight",title:"Info",message:"We're sorry, but you've reached the end of search results."})),y(o.hits),u.refresh(),o.length>0){const r=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}catch(o){console.error("Error fetching more images:",o),n.error({position:"topRight",title:"Error",message:"An error occurred while fetching more images. Please try again later."})}finally{l.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
