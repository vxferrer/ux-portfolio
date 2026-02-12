// Frizzi 

const friziIntro = document.getElementById('friziIntro');
const friziZoom = document.getElementById('friziZoom');
const friziText = document.getElementById('friziText');
const friziBurst = document.getElementById('friziBurst');
const introHint = document.getElementById('introHint');
const nav = document.getElementById('nav');
let introComplete = false;

function handleIntroScroll() {
  const rect = friziIntro.getBoundingClientRect();
  const scrollHeight = friziIntro.offsetHeight - window.innerHeight;
  const scrolled = -rect.top;
  const progress = Math.max(0, Math.min(1, scrolled / scrollHeight));

  // Phase 1: 0-65% — Frizi crece con wobble
  if (progress <= 0.65) {
    const p = progress / 0.65;
    const scale = 1 + p * 7;
    const rotate = Math.sin(p * Math.PI) * 8;
    friziZoom.style.transform = 'scale(' + scale + ') rotate(' + rotate + 'deg)';
    friziZoom.style.opacity = 1;
    friziText.style.opacity = Math.max(0, 0.7 - p * 1.5);
    friziBurst.style.transform = 'translate(-50%,-50%) scale(0)';
    friziBurst.style.opacity = 0;
    introHint.classList.toggle('hidden', p > 0.15);
  }

  // Phase 2: 65-85% — Frizi se desvanece, burst oscuro se expande
  if (progress > 0.65 && progress <= 0.85) {
    const p = (progress - 0.65) / 0.2;
    friziZoom.style.opacity = 1 - p;
    friziZoom.style.transform = 'scale(8) rotate(0deg)';
    friziBurst.style.transform = 'translate(-50%,-50%) scale(' + (p * 30) + ')';
    friziBurst.style.opacity = 1;
  }

  // Phase 3: 85-100% — Burst se disipa, aparece el home
  if (progress > 0.85) {
    const p = (progress - 0.85) / 0.15;
    friziZoom.style.opacity = 0;
    friziBurst.style.opacity = 1 - p;
    if (p > 0.3 && !introComplete) {
      introComplete = true;
      nav.classList.add('show');
    }
  }

  if (progress < 0.85) {
    introComplete = false;
    nav.classList.remove('show');
  }
}

window.addEventListener('scroll', handleIntroScroll, { passive: true });
handleIntroScroll();

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
