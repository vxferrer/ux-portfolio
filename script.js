// Hamburger menu
function toggleMenu(){
  document.getElementById('hamburger').classList.toggle('active');
  document.getElementById('navLinks').classList.toggle('open');
}
// Close menu on link click
document.querySelectorAll('#navLinks a').forEach(a=>{a.addEventListener('click',()=>{
  document.getElementById('hamburger').classList.remove('active');
  document.getElementById('navLinks').classList.remove('open');
})});

// Nav scroll
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>60)});

// Reveal
document.querySelectorAll('.reveal').forEach(el=>{new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')})},{threshold:.1,rootMargin:'0px 0px -60px 0px'}).observe(el)});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',function(e){e.preventDefault();const t=document.querySelector(this.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth',block:'start'})})});

// Modal
function openModal(id){
  document.getElementById('modal-'+id).classList.add('active');
  document.body.classList.add('modal-open');
}
function closeModal(){
  document.querySelectorAll('.modal-overlay').forEach(m=>m.classList.remove('active'));
  document.body.classList.remove('modal-open');
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

// cv page

function toggleMenu(){document.getElementById('hamburger').classList.toggle('active');document.getElementById('navLinks').classList.toggle('open')}
document.querySelectorAll('#navLinks a').forEach(a=>{a.addEventListener('click',()=>{document.getElementById('hamburger').classList.remove('active');document.getElementById('navLinks').classList.remove('open')})});
document.querySelectorAll('.reveal').forEach(el=>{new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')})},{threshold:.1,rootMargin:'0px 0px -60px 0px'}).observe(el)});

// about page


function toggleMenu(){document.getElementById('hamburger').classList.toggle('active');document.getElementById('navLinks').classList.toggle('open')}
document.querySelectorAll('#navLinks a').forEach(a=>{a.addEventListener('click',()=>{document.getElementById('hamburger').classList.remove('active');document.getElementById('navLinks').classList.remove('open')})});
document.querySelectorAll('.reveal').forEach(el=>{new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')})},{threshold:.1,rootMargin:'0px 0px -60px 0px'}).observe(el)});
