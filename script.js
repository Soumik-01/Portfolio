const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
menuToggle?.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{
  const h=document.documentElement;
  const pct=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;
  progress.style.width=pct+'%';
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
