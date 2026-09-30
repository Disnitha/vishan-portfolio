const menu=document.querySelector('.menu');
const links=document.querySelector('.links');
if(menu&&links){menu.addEventListener('click',()=>links.classList.toggle('open'));links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')))}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)'}}),{threshold:.08});
document.querySelectorAll('.section,.grid4 article,.projects article,.timeline>div').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition='opacity .65s ease, transform .65s ease';observer.observe(el)});
