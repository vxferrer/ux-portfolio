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

// CV download dropdown
document.addEventListener('click',e=>{if(!e.target.closest('.btn-download-wrap')){document.querySelectorAll('.btn-download-wrap').forEach(w=>w.classList.remove('open'))}});


// ═══════════════════════════════════════
// i18n — LANGUAGE SYSTEM
// ═══════════════════════════════════════

const T = {

  // ─── NAV ───
  'nav.home':        { en: 'Home',       es: 'Inicio' },
  'nav.about':       { en: 'About me',   es: 'Sobre mí' },
  'nav.projects':    { en: 'Projects',   es: 'Proyectos' },
  'nav.cv':          { en: 'Resume',     es: 'CV' },
  'nav.cta':         { en: "Let's talk!", es: '¡Hablemos!' },

  'case.back':       { en: 'Back to projects', es: 'Volver a proyectos' },

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
  'card.btn.case':   { en: 'View case study', es: 'Ver case study' },

  // ─── PROJECTS PAGE ───
  'projects.page.title': { en: 'All projects', es: 'Todos los proyectos' },
  'projects.page.sub':   { en: 'Browse by category and filter by tags.', es: 'Explora por categoría y filtra por etiquetas.' },
  'projects.tab.ux':     { en: 'UX designs', es: 'Diseños UX' },
  'projects.tab.video':  { en: 'Videos',     es: 'Vídeos' },
  'projects.filter.title': { en: 'Filter by tags', es: 'Filtrar por etiquetas' },
  'projects.filter.clear': { en: 'Clear filters', es: 'Limpiar filtros' },
  'projects.empty':      { en: 'No projects match the selected tags.', es: 'No hay proyectos que coincidan con las etiquetas seleccionadas.' },
  'projects.video.empty':{ en: 'Video projects coming soon.', es: 'Proyectos de vídeo próximamente.' },

  // ─── DOMAIN TAGS (for filters + case studies) ───
  'tag.domain.viajes':     { en: 'Travel',    es: 'Viajes' },
  'tag.domain.finanzas':   { en: 'Finance',   es: 'Finanzas' },
  'tag.domain.bienestar':  { en: 'Wellness',  es: 'Bienestar' },
  'tag.domain.ocio':       { en: 'Leisure',   es: 'Ocio' },
  'tag.domain.ecommerce':  { en: 'Ecommerce', es: 'Ecommerce' },
  'tag.domain.saas':       { en: 'SaaS',      es: 'SaaS' },
  'tag.domain.fintech':    { en: 'Fintech',   es: 'Fintech' },
  'tag.domain.cultura':    { en: 'Culture',   es: 'Cultura' },

  // ─── Common tags ───
  'tag.skill.app':         { en: 'App', es: 'App' },
  'tag.skill.mobileapp':   { en: 'Mobile App', es: 'App móvil' },
  'tag.skill.uxresearch':  { en: 'UX Research', es: 'UX Research' },
  'tag.skill.productdesign': { en: 'Product Design', es: 'Product Design' },
  'tag.skill.heuristics':  { en: 'Heuristics / Redesign', es: 'Heurísticas / Rediseño' },

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

  // ─── MUSEEK MODAL ───
  'm.museek.name': { en: 'Museek — Designing behavioral engagement through gamification', es: 'Museek — Diseñando engagement conductual a través de la gamificación' },
  'm.museek.sub': { en: 'A mobile product concept that transforms traditional museum visits into interactive, challenge-based experiences to increase local cultural engagement among young adults.', es: 'Un concepto de producto móvil que transforma las visitas tradicionales a museos en experiencias interactivas basadas en retos para aumentar la participación cultural local entre jóvenes.' },
  'm.museek.tag.team': { en: ' 3 teammates', es: ' 3 personas' },
  'm.museek.tag.sector': { en: ' Leisure / Culture ', es: ' Ocio / Cultura ' },
  'm.museek.tag.time': { en: '8 days', es: '8 días' },
  'm.museek.l1': { en: 'THE CHALLENGE', es: 'EL RETO' },
  'm.museek.l2': { en: 'PRODUCT STRATEGY', es: 'ESTRATEGIA DE PRODUCTO' },
  'm.museek.l3': { en: 'INTERACTION DESIGN DECISIONS', es: 'DECISIONES DE DISEÑO DE INTERACCIÓN' },
  'm.museek.l4': { en: 'MY ROLE', es: 'MI ROL' },
  'm.museek.l5': { en: 'VALIDATION & LEARNINGS', es: 'VALIDACIÓN Y APRENDIZAJES' },
  'm.museek.p1': { en: 'While young adults actively consume cultural experiences when traveling, they rarely visit museums in their own cities. <b>Our research revealed a behavioral gap between cultural interest and local participation.</b>', es: 'Aunque los jóvenes consumen activamente experiencias culturales al viajar, raramente visitan museos en sus propias ciudades. <b>Nuestra investigación reveló una brecha conductual entre el interés cultural y la participación local.</b>' },
  'm.museek.p2': { en: 'Through 5 qualitative interviews (ages 25–35, urban and rural), we identified three consistent patterns:', es: 'A través de 5 entrevistas cualitativas (25–35 años, urbano y rural), identificamos tres patrones consistentes:' },
  'm.museek.p3': { en: 'This reframed the opportunity from "promoting museums" to <b>redesigning the experience to create intrinsic motivation and emotional engagement.</b>', es: 'Esto replanteó la oportunidad de "promocionar museos" a <b>rediseñar la experiencia para crear motivación intrínseca y engagement emocional.</b>' },
  'm.museek.p4': { en: 'Instead of designing another event listing app, we focused on solving two structural friction points:', es: 'En lugar de diseñar otra app de listado de eventos, nos enfocamos en resolver dos puntos de fricción estructurales:' },
  'm.museek.p5': { en: 'Inspired by escape-room mechanics, we introduced a challenge-based system to increase perceived value, session duration and social motivation.', es: 'Inspirados por las mecánicas de escape rooms, introdujimos un sistema basado en retos para aumentar el valor percibido, la duración de la sesión y la motivación social.' },
  'm.museek.p6': { en: 'The goal was not gamification for aesthetics, but as a behavioral nudge to drive participation.', es: 'El objetivo no era gamificación por estética, sino como un empujón conductual para impulsar la participación.' },
  'm.museek.p7': { en: 'To ensure clarity and reduce friction, key design decisions included:', es: 'Para asegurar claridad y reducir fricción, las decisiones clave de diseño incluyeron:' },
  'm.museek.p8': { en: 'These decisions aimed to balance excitement with usability — ensuring engagement without sacrificing clarity.', es: 'Estas decisiones buscaban equilibrar la emoción con la usabilidad — asegurando engagement sin sacrificar claridad.' },
  'm.museek.p9': { en: 'I led user interviews, synthesized research insights into opportunity areas, and defined the primary user flow. I designed low-fidelity wireframes and developed the high-fidelity interactive prototype in Figma.', es: 'Lideré las entrevistas con usuarios, sinteticé los insights de investigación en áreas de oportunidad y definí el flujo principal. Diseñé wireframes de baja fidelidad y desarrollé el prototipo interactivo de alta fidelidad en Figma.' },
  'm.museek.p10': { en: 'During usability testing, users responded positively to the challenge-based concept, highlighting increased perceived excitement and clarity of purpose.', es: 'Durante las pruebas de usabilidad, los usuarios respondieron positivamente al concepto basado en retos, destacando un mayor entusiasmo percibido y claridad de propósito.' },
  'm.museek.p11': { en: 'However, early testing revealed confusion around progression mechanics. We iterated by simplifying the task flow and clarifying reward feedback.', es: 'Sin embargo, las pruebas tempranas revelaron confusión en las mecánicas de progresión. Iteramos simplificando el flujo de tareas y clarificando el feedback de recompensas.' },
  'm.museek.p13': { en: '<b>Key learning:</b> Gamification increases engagement only when supported by strong information architecture and clear feedback systems.', es: '<b>Aprendizaje clave:</b> La gamificación aumenta el engagement solo cuando está respaldada por una arquitectura de información sólida y sistemas de feedback claros.' },
  'm.museek.p12': { en: 'In future iterations, I would validate behavioral impact through measurable metrics such as completion rate, session duration and return visits.', es: 'En futuras iteraciones, validaría el impacto conductual a través de métricas medibles como tasa de completado, duración de sesión y visitas recurrentes.' },

  // ─── KOREAN AIR MODAL ───
  'm.korean.name': { en: 'Korean Air — Redesigning clarity and trust in a high-cognitive-load app', es: 'Korean Air — Rediseñando claridad y confianza en una app de alta carga cognitiva' },
  'm.korean.sub': { en: 'Concept redesign based on a heuristic audit to reduce cognitive overload, clarify primary actions, and establish a scalable visual system for a travel product.', es: 'Rediseño conceptual basado en una auditoría heurística para reducir la sobrecarga cognitiva, clarificar acciones primarias y establecer un sistema visual escalable para un producto de viajes.' },
  'm.korean.tag.team': { en: 'Solo project', es: 'Proyecto individual' },
  'm.korean.tag.sector': { en: 'Travel', es: 'Viajes' },
  'm.korean.tag.time': { en: '3 days', es: '3 días' },
  'm.korean.l1': { en: 'THE CHALLENGE', es: 'EL RETO' },
  'm.korean.l2': { en: 'HEURISTIC AUDIT', es: 'AUDITORÍA HEURÍSTICA' },
  'm.korean.l3': { en: 'REDESIGN STRATEGY', es: 'ESTRATEGIA DE REDISEÑO' },
  'm.korean.l4': { en: 'KEY DESIGN MOVES', es: 'DECISIONES CLAVE DE DISEÑO' },
  'm.korean.l5': { en: 'VISUAL SYSTEM', es: 'SISTEMA VISUAL' },
  'm.korean.l6': { en: 'OUTCOME & NEXT STEPS', es: 'RESULTADO Y PRÓXIMOS PASOS' },
  'm.korean.p1': { en: 'Airline apps are high-stakes and high-cognitive-load environments: users need to find critical information fast, complete complex tasks under time pressure, and feel confident about irreversible decisions (payments, bookings).', es: 'Las apps de aerolíneas son entornos de alta complejidad cognitiva: los usuarios necesitan encontrar información crítica rápido, completar tareas complejas bajo presión temporal y sentir confianza en decisiones irreversibles (pagos, reservas).' },
  'm.korean.p2': { en: 'In the original Korean Air app, multiple UI blocks compete for attention, CTAs are unclear, and the hierarchy doesn\'t reflect user priorities.', es: 'En la app original de Korean Air, múltiples bloques de UI compiten por la atención, los CTAs son poco claros y la jerarquía no refleja las prioridades del usuario.' },
  'm.korean.p8': { en: '<b>Goal:</b> reduce cognitive overload, clarify primary actions (e.g., trips and reservations), and create a consistent UI system that can scale.', es: '<b>Objetivo:</b> reducir la sobrecarga cognitiva, clarificar acciones primarias (ej: viajes y reservas) y crear un sistema UI consistente y escalable.' },
  'm.korean.p3': { en: 'I ran a heuristic evaluation to identify usability issues, assess severity, and prioritize fixes based on impact and ease of implementation. Key issues found:', es: 'Realicé una evaluación heurística para identificar problemas de usabilidad, evaluar su severidad y priorizar soluciones por impacto y facilidad de implementación. Problemas clave encontrados:' },
  'm.korean.p4': { en: 'Instead of redesigning screens "by taste", I reframed the UI around task priority and decision clarity. The strategy focused on three pillars:', es: 'En lugar de rediseñar pantallas "por gusto", replanteé la UI en torno a prioridad de tareas y claridad de decisiones. La estrategia se centró en tres pilares:' },
  'm.korean.p5': { en: 'Here are the most impactful design decisions mapped to the problems found:', es: 'Estas son las decisiones de diseño más impactantes mapeadas a los problemas encontrados:' },
  'm.korean.p6': { en: 'To prevent inconsistencies and make the redesign scalable, I created lightweight UI guidelines: spacing scale, typography hierarchy, iconography and a refined blue palette aligned with the brand.', es: 'Para evitar inconsistencias y hacer el rediseño escalable, creé guías UI ligeras: escala de espaciado, jerarquía tipográfica, iconografía y una paleta azul refinada alineada con la marca.' },
  'm.korean.p7': { en: 'This redesign focuses on clarity and trust: fewer competing elements, more explicit actions, and a scalable system. If I continued the project, I would validate improvements with usability testing and measurable product metrics: task completion rate (Add reservation), time on task, and drop-offs on key flows.', es: 'Este rediseño se centra en claridad y confianza: menos elementos compitiendo, acciones más explícitas y un sistema escalable. Si continuara el proyecto, validaría las mejoras con pruebas de usabilidad y métricas de producto medibles: tasa de completado (Añadir reserva), tiempo en tarea y abandonos en flujos clave.' },
  'm.korean.p9': { en: '<b>Key learning:</b> In complex products (travel, banking, fintech), UX issues are often structural — hierarchy, system feedback and clarity matter as much as visual polish.', es: '<b>Aprendizaje clave:</b> En productos complejos (viajes, banca, fintech), los problemas de UX suelen ser estructurales — la jerarquía, el feedback del sistema y la claridad importan tanto como el acabado visual.' },

  // ─── LUMIX MODAL ───
  'm.lumix.name': { en: 'Lumix — Designing financial clarity through emotional regulation', es: 'Lumix — Diseñando claridad financiera a través de la regulación emocional' },
  'm.lumix.sub': { en: 'A behavioral fintech concept that integrates real financial data with emotional support to reduce anxiety and increase perceived control among young professionals.', es: 'Un concepto fintech conductual que integra datos financieros reales con apoyo emocional para reducir la ansiedad y aumentar el control percibido entre jóvenes profesionales.' },
  'm.lumix.tag.team': { en: ' 4 teammates', es: ' 4 personas' },
  'm.lumix.tag.sector': { en: ' Fintech / Wellness ', es: ' Fintech / Bienestar ' },
  'm.lumix.tag.time': { en: '10 days', es: '10 días' },
  'm.lumix.l1': { en: 'THE CHALLENGE', es: 'EL RETO' },
  'm.lumix.l2': { en: 'FINANCIAL CLARITY', es: 'CLARIDAD FINANCIERA' },
  'm.lumix.l3': { en: 'EMOTIONAL TRACKING', es: 'SEGUIMIENTO EMOCIONAL' },
  'm.lumix.l4': { en: 'EDUCATION & GUIDANCE', es: 'EDUCACIÓN Y GUÍA' },
  'm.lumix.l5': { en: 'CONVERSATIONAL SUPPORT', es: 'SOPORTE CONVERSACIONAL' },
  'm.lumix.l6': { en: 'MY ROLE', es: 'MI ROL' },
  'm.lumix.l7': { en: 'KEY LEARNINGS', es: 'APRENDIZAJES CLAVE' },
  'm.lumix.p1': { en: 'Many young professionals with stable income still experience persistent financial stress. Traditional financial apps often amplify anxiety through dense dashboards and data-heavy interfaces.', es: 'Muchos jóvenes profesionales con ingresos estables siguen experimentando estrés financiero persistente. Las apps financieras tradicionales a menudo amplifican la ansiedad con dashboards densos e interfaces cargadas de datos.' },
  'm.lumix.p2': { en: 'Our research showed that financial stress is less about numbers and more about perceived lack of control.', es: 'Nuestra investigación mostró que el estrés financiero tiene menos que ver con los números y más con la percepción de falta de control.' },
  'm.lumix.p14': { en: 'The opportunity was clear: <b>Design a financial experience that prioritizes clarity and emotional regulation over feature density.</b>', es: 'La oportunidad era clara: <b>Diseñar una experiencia financiera que priorice la claridad y la regulación emocional sobre la densidad de funcionalidades.</b>' },
  'm.lumix.p3': { en: 'Instead of overwhelming users with complex graphs, Lumix provides a simplified monthly overview and focused savings tracking.', es: 'En lugar de abrumar a los usuarios con gráficos complejos, Lumix ofrece un resumen mensual simplificado y un seguimiento de ahorro enfocado.' },
  'm.lumix.p4': { en: 'Key principles:', es: 'Principios clave:' },
  'm.lumix.p5': { en: 'Financial decisions are deeply emotional. Lumix integrates daily mood tracking to identify patterns between spending behavior and emotional states.', es: 'Las decisiones financieras son profundamente emocionales. Lumix integra seguimiento diario del estado de ánimo para identificar patrones entre comportamiento de gasto y estados emocionales.' },
  'm.lumix.p6': { en: 'This transforms the product from a budgeting tool into a behavioral awareness system.', es: 'Esto transforma el producto de una herramienta de presupuesto a un sistema de conciencia conductual.' },
  'm.lumix.p7': { en: 'Instead of passive dashboards, Lumix includes an educational section designed to build financial literacy in a non-intimidating way.', es: 'En lugar de dashboards pasivos, Lumix incluye una sección educativa diseñada para construir alfabetización financiera de forma no intimidante.' },
  'm.lumix.p8': { en: 'Content focuses on practical micro-habits, mindset shifts and long-term clarity.', es: 'El contenido se centra en micro-hábitos prácticos, cambios de mentalidad y claridad a largo plazo.' },
  'm.lumix.p9': { en: 'A conversational assistant translates financial data into actionable insights and empathetic feedback.', es: 'Un asistente conversacional traduce datos financieros en insights accionables y feedback empático.' },
  'm.lumix.p10': { en: 'The goal is to reduce avoidance behavior and create a safe interaction layer when facing financial data.', es: 'El objetivo es reducir el comportamiento de evitación y crear una capa de interacción segura al enfrentarse a datos financieros.' },
  'm.lumix.p11': { en: 'I led research synthesis, defined behavioral opportunity areas and structured the MVP experience. I designed core interaction flows and contributed to visual hierarchy decisions to reduce cognitive load.', es: 'Lideré la síntesis de investigación, definí áreas de oportunidad conductual y estructuré la experiencia MVP. Diseñé los flujos de interacción principales y contribuí a decisiones de jerarquía visual para reducir la carga cognitiva.' },
  'm.lumix.p12': { en: 'Financial products do not only communicate data — they communicate safety.', es: 'Los productos financieros no solo comunican datos — comunican seguridad.' },
  'm.lumix.p13': { en: 'Simplicity increases perceived control. Emotional tone influences behavioral consistency. Reducing cognitive load can directly impact trust.', es: 'La simplicidad aumenta el control percibido. El tono emocional influye en la consistencia conductual. Reducir la carga cognitiva puede impactar directamente en la confianza.' },

  // ─── MUSEEK OLs ───
  'm.museek.ol1': { en: '<li>Museums are perceived as passive and static experiences.</li><li>Cultural events lack discoverability and clarity.</li><li>Social influence and novelty strongly drive decision-making.</li>', es: '<li>Los museos se perciben como experiencias pasivas y estáticas.</li><li>Los eventos culturales carecen de descubribilidad y claridad.</li><li>La influencia social y la novedad impulsan fuertemente la toma de decisiones.</li>' },
  'm.museek.ol2': { en: '<li><b>Discovery</b> — Reducing cognitive effort when finding relevant cultural activities.</li><li><b>Engagement</b> — Transforming passive visits into interactive, goal-driven experiences.</li>', es: '<li><b>Descubrimiento</b> — Reducir el esfuerzo cognitivo al encontrar actividades culturales relevantes.</li><li><b>Engagement</b> — Transformar visitas pasivas en experiencias interactivas orientadas a objetivos.</li>' },
  'm.museek.ol3': { en: '<li>Minimizing onboarding steps to reduce entry friction.</li><li>Using progressive disclosure to avoid cognitive overload.</li><li>Structuring navigation around challenges instead of static listings.</li><li>Designing clear visual hierarchy to support task completion.</li>', es: '<li>Minimizar pasos de onboarding para reducir fricción de entrada.</li><li>Usar revelación progresiva para evitar sobrecarga cognitiva.</li><li>Estructurar la navegación en torno a retos en lugar de listados estáticos.</li><li>Diseñar una jerarquía visual clara para facilitar la completación de tareas.</li>' },

  // ─── KOREAN OLs ───
  'm.korean.ol1': { en: '<li><b>Unclear primary CTA:</b> "Continue" doesn\'t communicate the next step clearly.</li><li><b>Low visual hierarchy:</b> many blocks compete; everything feels equally important.</li><li><b>Inconsistent language and copy:</b> mixed languages reduce cohesion and trust.</li><li><b>Information without context:</b> e.g., miles appear without explanation or guidance.</li><li><b>Help not embedded:</b> lack of microcopy/tooltips for complex actions.</li>', es: '<li><b>CTA primario poco claro:</b> "Continuar" no comunica el siguiente paso con claridad.</li><li><b>Baja jerarquía visual:</b> muchos bloques compiten; todo parece igual de importante.</li><li><b>Lenguaje e idioma inconsistentes:</b> mezcla de idiomas reduce cohesión y confianza.</li><li><b>Información sin contexto:</b> ej: las millas aparecen sin explicación ni guía.</li><li><b>Ayuda no integrada:</b> falta de microcopy/tooltips para acciones complejas.</li>' },
  'm.korean.ol2': { en: '<li><b>Task-first hierarchy</b> → design the home around what users need to do (not what the brand wants to show).</li><li><b>Clarity of actions</b> → explicit CTAs and predictable next steps, with supportive microcopy.</li><li><b>System consistency</b> → reusable typography, spacing and components to scale without drift.</li>', es: '<li><b>Jerarquía task-first</b> → diseñar el home en torno a lo que el usuario necesita hacer (no lo que la marca quiere mostrar).</li><li><b>Claridad de acciones</b> → CTAs explícitos y siguientes pasos predecibles, con microcopy de apoyo.</li><li><b>Consistencia del sistema</b> → tipografía, espaciado y componentes reutilizables para escalar sin deriva.</li>' },
  'm.korean.ol3': { en: '<li><b>Explicit logged-in state:</b> added a clear welcome header to confirm status and personalize the experience.</li><li><b>Primary CTA clarity:</b> separated "Continue search" and "New search" to restore user control.</li><li><b>Information hierarchy:</b> reduced competing blocks; grouped content into clear categories.</li><li><b>Progress + feedback:</b> introduced clearer flow steps for "Add reservation" and reduced form ambiguity.</li><li><b>Contextual help:</b> added short descriptions where users typically hesitate (documents, baggage, alerts).</li>', es: '<li><b>Estado de login explícito:</b> se añadió un header de bienvenida claro para confirmar el estado y personalizar la experiencia.</li><li><b>Claridad del CTA principal:</b> se separó "Continuar búsqueda" y "Nueva búsqueda" para devolver el control al usuario.</li><li><b>Jerarquía de información:</b> se redujeron bloques que competían; se agrupó contenido en categorías claras.</li><li><b>Progreso + feedback:</b> se introdujeron pasos de flujo más claros para "Añadir reserva" y se redujo ambigüedad en formularios.</li><li><b>Ayuda contextual:</b> se añadieron descripciones cortas donde los usuarios suelen dudar (documentos, equipaje, alertas).</li>' },
  'm.korean.ol4': { en: '<li><b>Typography:</b> consistent hierarchy for headings/body to improve scanability.</li><li><b>Spacing:</b> 8/16/24/32px rhythm for predictable layouts.</li><li><b>Icons:</b> unified stroke and style for navigation and actions.</li><li><b>Color:</b> structured blues for states, emphasis, and readability.</li>', es: '<li><b>Tipografía:</b> jerarquía consistente para títulos/cuerpo para mejorar la escaneabilidad.</li><li><b>Espaciado:</b> ritmo de 8/16/24/32px para layouts predecibles.</li><li><b>Iconos:</b> trazo y estilo unificado para navegación y acciones.</li><li><b>Color:</b> azules estructurados para estados, énfasis y legibilidad.</li>' },

  // ─── LUMIX OL ───
  'm.lumix.ol1': { en: '<li>One active savings goal to reduce decision fatigue.</li><li>Clear progress visualization with predictive guidance.</li><li>Reduced visual noise and structured hierarchy.</li>', es: '<li>Un único objetivo de ahorro activo para reducir fatiga de decisión.</li><li>Visualización clara del progreso con orientación predictiva.</li><li>Reducción de ruido visual y jerarquía estructurada.</li>' },
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

// ═══════════════════════════════════════
// PROJECTS PAGE — TABS + TAG FILTERS
// ═══════════════════════════════════════

function normalizeTag(t){
  return (t || '').trim().toLowerCase();
}

function initProjectsPage(){
  const root = document.getElementById('projectsPage');
  if(!root) return;

  const tabBtns = Array.from(document.querySelectorAll('[data-tab]'));
  const tabPanels = Array.from(document.querySelectorAll('[data-tab-panel]'));
  const filterWrap = document.getElementById('tagFilters');
  const clearBtn = document.getElementById('clearFilters');
  const emptyUx = document.getElementById('emptyUx');
  const emptyVideo = document.getElementById('emptyVideo');

  const selected = new Set();

  const chips = Array.from(filterWrap?.querySelectorAll('[data-tag]') || []);
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const tag = normalizeTag(chip.getAttribute('data-tag'));
      if(!tag) return;
      if(selected.has(tag)) selected.delete(tag);
      else selected.add(tag);
      chip.classList.toggle('active', selected.has(tag));
      applyFilters();
    });
  });

  clearBtn?.addEventListener('click', () => {
    selected.clear();
    chips.forEach(c => c.classList.remove('active'));
    applyFilters();
  });

  function showTab(tab){
    tabBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-tab') === tab));
    tabPanels.forEach(p => p.classList.toggle('active', p.getAttribute('data-tab-panel') === tab));
  }

  tabBtns.forEach(btn => btn.addEventListener('click', () => {
    showTab(btn.getAttribute('data-tab'));
  }));

  function cardMatches(card){
    if(selected.size === 0) return true;
    const tags = (card.getAttribute('data-tags') || '')
      .split(',')
      .map(normalizeTag)
      .filter(Boolean);
    for(const s of selected){
      if(tags.includes(s)) return true;
    }
    return false;
  }

  function applyFilters(){
    const uxPanel = document.querySelector('[data-tab-panel="ux"]');
    const uxCards = Array.from(uxPanel?.querySelectorAll('.project-card') || []);
    let uxVisible = 0;
    uxCards.forEach(card => {
      const ok = cardMatches(card);
      card.style.display = ok ? '' : 'none';
      if(ok) uxVisible += 1;
    });
    if(emptyUx) emptyUx.style.display = (uxCards.length && uxVisible === 0) ? 'block' : 'none';

    const videoPanel = document.querySelector('[data-tab-panel="video"]');
    const videoCards = Array.from(videoPanel?.querySelectorAll('.project-card') || []);
    let videoVisible = 0;
    videoCards.forEach(card => {
      const ok = cardMatches(card);
      card.style.display = ok ? '' : 'none';
      if(ok) videoVisible += 1;
    });
    if(emptyVideo) emptyVideo.style.display = (videoCards.length === 0) ? 'block' : (videoVisible === 0 ? 'block' : 'none');
  }

  showTab('ux');
  applyFilters();
}

// Apply saved language on load
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => { applyLang(getLang()); initProjectsPage(); });
} else {
  applyLang(getLang());
  initProjectsPage();
}

/* ═══════════════════════════════════════
   LUMIX CASE STUDY — Animated counters
   ═══════════════════════════════════════ */

(function(){
  // Animate numbers when they scroll into view
  const counters = document.querySelectorAll('.cs-stat-number[data-count]');
  if(!counters.length) return;

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1200;
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * ease);
      if(progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));

  // Stagger-in animation for grids
  const grids = document.querySelectorAll('.cs-insight-grid, .cs-quote-grid, .cs-method-grid, .cs-decision-grid, .cs-learnings-grid, .cs-pillar-grid');
  
  const gridObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const children = entry.target.children;
        Array.from(children).forEach((child, i) => {
          child.style.opacity = '0';
          child.style.transform = 'translateY(20px)';
          child.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0)';
            });
          });
        });
        gridObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  grids.forEach(g => gridObserver.observe(g));
})();
