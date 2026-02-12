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

// FRIZI ZOOM INTRO
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

  // Phase 1: 0-65% — Frizi grows with wobble
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

  // Phase 2: 65-85% — Frizi fades, dark burst expands
  if (progress > 0.65 && progress <= 0.85) {
    const p = (progress - 0.65) / 0.2;
    friziZoom.style.opacity = 1 - p;
    friziZoom.style.transform = 'scale(8) rotate(0deg)';
    friziBurst.style.transform = 'translate(-50%,-50%) scale(' + (p * 30) + ')';
    friziBurst.style.opacity = 1;
  }

  // Phase 3: 85-100% — Burst fades, home appears
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

// SCROLL REVEAL
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(function(el) {
  observer.observe(el);
});

// NAV SCROLL
function handleNavScroll() {
  var introBottom = friziIntro.offsetTop + friziIntro.offsetHeight;
  if (window.scrollY > introBottom + 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

// UNIFIED SCROLL
function onScroll() {
  handleIntroScroll();
  handleNavScroll();
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// NAV LINKS CLOSE
document.querySelectorAll('.nav-links a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// CURSOR GLOW
var glow = document.getElementById('cursorGlow');
var mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;
document.addEventListener('mousemove', function(e) { mouseX = e.clientX; mouseY = e.clientY; });
function animateGlow() {
  glowX += (mouseX - glowX) * 0.08;
  glowY += (mouseY - glowY) * 0.08;
  glow.style.left = glowX + 'px';
  glow.style.top = glowY + 'px';
  requestAnimationFrame(animateGlow);
}
animateGlow();

// AUTO-SHOW IMAGES
document.querySelectorAll('.project-img img, .about-photo img').forEach(function(img) {
  if (img.src && img.src !== window.location.href && img.src !== '') {
    img.style.display = 'block';
    var ph = img.parentElement.querySelector('.placeholder');
    if (ph) ph.style.display = 'none';
  }
});

// cv page

function toggleMenu(){document.getElementById('hamburger').classList.toggle('active');document.getElementById('navLinks').classList.toggle('open')}
document.querySelectorAll('#navLinks a').forEach(a=>{a.addEventListener('click',()=>{document.getElementById('hamburger').classList.remove('active');document.getElementById('navLinks').classList.remove('open')})});
document.querySelectorAll('.reveal').forEach(el=>{new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')})},{threshold:.1,rootMargin:'0px 0px -60px 0px'}).observe(el)});

// about page


function toggleMenu(){document.getElementById('hamburger').classList.toggle('active');document.getElementById('navLinks').classList.toggle('open')}
document.querySelectorAll('#navLinks a').forEach(a=>{a.addEventListener('click',()=>{document.getElementById('hamburger').classList.remove('active');document.getElementById('navLinks').classList.remove('open')})});
document.querySelectorAll('.reveal').forEach(el=>{new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')})},{threshold:.1,rootMargin:'0px 0px -60px 0px'}).observe(el)});
