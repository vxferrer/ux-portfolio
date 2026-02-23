// ═══════════════════════════════════════
// VANESAFRZ — PORTFOLIO SCRIPTS
// ═══════════════════════════════════════

// Hamburger menu
function toggleMenu(){
  document.getElementById('hamburger').classList.toggle('active');
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('#navLinks a').forEach(a=>{a.addEventListener('click',()=>{
  document.getElementById('hamburger').classList.remove('active');
  document.getElementById('navLinks').classList.remove('open');
})});

// Nav scroll
const nav=document.getElementById('nav');
if(nav){window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>60)})}

// Reveal on scroll
document.querySelectorAll('.reveal').forEach(el=>{new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')})},{threshold:.1,rootMargin:'0px 0px -60px 0px'}).observe(el)});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',function(e){e.preventDefault();const t=document.querySelector(this.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth',block:'start'})})});

// Modal
function openModal(id){
  const m=document.getElementById('modal-'+id);
  if(m){m.classList.add('active');document.body.classList.add('modal-open')}
}
function closeModal(){
  document.querySelectorAll('.modal-overlay').forEach(m=>m.classList.remove('active'));
  document.body.classList.remove('modal-open');
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

// CV download dropdown
document.addEventListener('click',e=>{if(!e.target.closest('.btn-download-wrap')){document.querySelectorAll('.btn-download-wrap').forEach(w=>w.classList.remove('open'))}});


// ═══════════════════════════════════════
// i18n — LANGUAGE SYSTEM
// ═══════════════════════════════════════

const T = {

  // ─── NAV ───
  'nav.home':        { en: 'Home',       es: 'Inicio' },
  'nav.about':       { en: 'About me',   es: 'Sobre mí' },
  'nav.cv':          { en: 'Resume',     es: 'CV' },
  'nav.cta':         { en: "Let's talk!", es: '¡Hablemos!' },

  // ─── INDEX: Hero ───
  'hero.title':      { en: "I'm a <em>Product Designer</em> and strategic, goal oriented thinker focused in turn ideas into desirable products.",
                       es: "Soy <em>Product Designer</em> y pensadora estratégica enfocada en convertir ideas en productos deseables." },
  'hero.btn.work':   { en: 'My work',       es: 'Mi trabajo' },
  'hero.btn.chat':   { en: 'Wanna chat?',   es: '¿Hablamos?' },

  // ─── INDEX: Projects ───
  'projects.title':  { en: "What I've done before", es: 'Lo que he hecho' },
  'card.lumix.name': { en: 'Lumix - Finances and wellness app', es: 'Lumix - App de finanzas y bienestar' },
  'card.lumix.meta': { en: 'UX Research · UX / UI Design · Accessibility', es: 'UX Research · UX / UI Design · Accesibilidad' },
  'card.korean.meta':{ en: 'Heuristics Evaluation · UI Redesign · Usability', es: 'Evaluación Heurística · UI Redesign · Usabilidad' },
  'card.museek.meta':{ en: 'UX Research · Gamification · Low-fi Prototype', es: 'UX Research · Gamificación · Prototipo Low-fi' },

  // ─── INDEX: Talk + Footer ───
  'talk.title':      { en: "Let's Talk",  es: 'Hablemos' },
  'talk.sub':        { en: '📍 located in Spain, open to work remotely', es: '📍 España, disponible para trabajo remoto' },
  'footer.note':     { en: 'Built with 🤍 vanesafrz · 2026', es: 'Hecho con 🤍 por vanesafrz · 2026' },

  // ─── ABOUT ───
  'about.title':     { en: "Heyah! 👋<br>Vanesa's speaking", es: 'Heyah! 👋<br>Aquí Vanesa' },
  'about.bio1':      { en: "I like to think of myself as a designer with a <em>storyteller</em>'s soul. I come from the world of video editing and digital marketing, where I learned that everything communicates, everything tells a story, and that small details make a real difference.",
                       es: "Me gusta pensar en mí como una diseñadora con alma de <em>storyteller</em>. Vengo del mundo de la edición de vídeo y el marketing digital, donde aprendí que todo comunica, todo cuenta una historia, y que los pequeños detalles marcan la diferencia." },
  'about.bio2':      { en: "Now, I apply that mindset to digital product design: understanding people, defining the right problem, and creating experiences that <em>work and feel right</em>. I especially enjoy the research phase — discovering the \"why\" behind things.",
                       es: "Ahora aplico esa mentalidad al diseño de productos digitales: entender a las personas, definir bien el problema y crear experiencias que <em>funcionan y se sienten bien</em>. Disfruto especialmente la fase de research — descubrir el \"por qué\" detrás de las cosas." },
  'about.bio3':      { en: "When I'm not designing, you'll probably find me walking my dog, watching a series, or searching for the perfect coffee. I'm naturally curious — always learning and always looking for ways to improve.",
                       es: "Cuando no estoy diseñando, probablemente me encontrarás paseando con mi perro, viendo alguna serie o buscando el café perfecto. Soy curiosa por naturaleza — siempre aprendiendo y buscando mejorar." },
  'about.origin.title':      { en: 'A little bit of my world', es: 'Un poco de mi mundo' },
  'about.origin.video.label':{ en: 'Videomaker', es: 'Videomaker' },
  'about.origin.video.sub':  { en: 'My past life — visual storytelling & digital marketing', es: 'Mi vida pasada — storytelling visual y marketing digital' },
  'about.origin.design.sub': { en: 'My current life — Building my career', es: 'Mi vida actual — Construyendo mi carrera' },
  'about.origin.spain.label':{ en: 'Spain', es: 'España' },
  'about.origin.spain.sub':  { en: 'Open to remote work as well', es: 'Abierta a trabajo remoto' },
  'about.origin.dog.sub':    { en: 'My best working mate', es: 'Mi mejor compañero de trabajo' },
  'about.skills.title':      { en: 'What I can do', es: 'Lo que sé hacer' },
  'about.fun.title':         { en: 'Fun times 📸', es: 'Momentos 📸' },

  // ─── CV ───
  'cv.label':        { en: 'Resume',         es: 'Currículum' },
  'cv.title':        { en: 'My Resume',      es: 'Mi CV' },
  'cv.download':     { en: 'Download CV',    es: 'Descargar CV' },
  'cv.location':     { en: '📍 Malaga, Spain · Open to work remotely', es: '📍 Málaga, España · Disponible para trabajo remoto' },
  'cv.experience':   { en: 'Work Experience', es: 'Experiencia Laboral' },
  'cv.education':    { en: 'EDUCATION',       es: 'FORMACIÓN' },
  'cv.skills':       { en: 'Skills',          es: 'Habilidades' },
  'cv.skills.other': { en: 'Other',           es: 'Otras' },
  'cv.languages':    { en: 'Language',         es: 'Idiomas' },
  'cv.lang.mother':  { en: 'Mother tongue',   es: 'Lengua materna' },
  'cv.lang.beginner':{ en: 'Beginner',        es: 'Principiante' },
};

function getLang(){ return localStorage.getItem('vanesafrz-lang') || 'en' }

function setLang(lang){
  localStorage.setItem('vanesafrz-lang', lang);
  applyLang(lang);
}

function applyLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(T[key] && T[key][lang]) el.innerHTML = T[key][lang];
  });
  // Update all toggle buttons on page
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = lang === 'en' ? '🇪🇸 ES' : '🇬🇧 EN';
  });
}

function toggleLang(){
  setLang(getLang() === 'en' ? 'es' : 'en');
}

// Apply saved language on load
document.addEventListener('DOMContentLoaded', () => applyLang(getLang()));
