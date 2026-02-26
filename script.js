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

  // ─── KOREAN AIR CASE STUDY PAGE (korean.html) ───

  'm.korean.c.name': { en: 'Korean Air — Redesigning clarity and trust in a high-cognitive-load app', es: 'Korean Air — Rediseñando claridad y confianza en una app de alta carga cognitiva' },
  'm.korean.c.sub': { en: 'As a real user of Korean Air, I noticed that every time I opened the app, I struggled to find what I needed. This project started from genuine frustration — and became a structured exercise in heuristic evaluation, task-first hierarchy, and scalable UI systems.', es: 'Como usuaria real de Korean Air, noté que cada vez que abría la app me costaba encontrar lo que necesitaba. Este proyecto nació de una frustración real — y se convirtió en un ejercicio estructurado de evaluación heurística, jerarquía task-first y sistemas UI escalables.' },

  // Section labels
  'm.korean.c.l.overview':   { en: 'OVERVIEW',              es: 'CONTEXTO' },
  'm.korean.c.l.challenge':  { en: 'THE CHALLENGE',         es: 'EL RETO' },
  'm.korean.c.l.original':   { en: 'THE ORIGINAL APP',      es: 'LA APP ORIGINAL' },
  'm.korean.c.l.audit':      { en: 'HEURISTIC AUDIT',       es: 'AUDITORÍA HEURÍSTICA' },
  'm.korean.c.l.strategy':   { en: 'REDESIGN STRATEGY',     es: 'ESTRATEGIA DE REDISEÑO' },
  'm.korean.c.l.decisions':  { en: 'KEY DESIGN DECISIONS',  es: 'DECISIONES CLAVE DE DISEÑO' },
  'm.korean.c.l.screens':    { en: 'THE REDESIGN',          es: 'EL REDISEÑO' },
  'm.korean.c.l.home':       { en: 'HOME',                  es: 'INICIO' },
  'm.korean.c.l.trips':      { en: 'MY TRIPS',              es: 'MIS VIAJES' },
  'm.korean.c.l.addtrip':    { en: 'ADD RESERVATION',       es: 'AÑADIR RESERVA' },
  'm.korean.c.l.more':       { en: 'MORE MENU',             es: 'MENÚ MÁS' },
  'm.korean.c.l.system':     { en: 'VISUAL SYSTEM',         es: 'SISTEMA VISUAL' },
  'm.korean.c.l.nav':        { en: 'NAVIGATION',            es: 'NAVEGACIÓN' },
  'm.korean.c.l.learnings':  { en: 'KEY LEARNINGS',         es: 'APRENDIZAJES CLAVE' },
  'm.korean.c.l.next':       { en: 'NEXT STEPS',            es: 'PRÓXIMOS PASOS' },

  // Overview
  'm.korean.c.overview1': { en: 'Korean Air is one of the airlines I use regularly. Over time, I noticed that the app consistently failed me at critical moments: I couldn\'t find my reservation quickly, CTAs were confusing, and the interface felt cluttered with competing elements.', es: 'Korean Air es una de las aerolíneas que uso regularmente. Con el tiempo, noté que la app me fallaba consistentemente en momentos críticos: no encontraba mi reserva rápido, los CTAs eran confusos y la interfaz se sentía saturada con elementos compitiendo entre sí.' },
  'm.korean.c.overview2': { en: 'When the Ironhack bootcamp brief asked us to choose an existing app and perform a heuristic evaluation + UI redesign in 3 days, I saw the opportunity to <b>turn real user frustration into a structured design exercise</b>.', es: 'Cuando el brief del bootcamp de Ironhack nos pidió elegir una app existente y hacer una evaluación heurística + rediseño UI en 3 días, vi la oportunidad de <b>convertir una frustración real de usuario en un ejercicio de diseño estructurado</b>.' },

  // Role
  'm.korean.c.role.label': { en: 'My Role', es: 'Mi Rol' },
  'm.korean.c.role.t1': { en: 'Heuristic evaluation', es: 'Evaluación heurística' },
  'm.korean.c.role.d1': { en: 'Full audit using Nielsen\'s 10 heuristics, severity + ease of fix scoring', es: 'Auditoría completa con las 10 heurísticas de Nielsen, puntuación de severidad + facilidad de corrección' },
  'm.korean.c.role.t2': { en: 'Redesign strategy', es: 'Estrategia de rediseño' },
  'm.korean.c.role.d2': { en: 'Task-first hierarchy, CTA clarity, information grouping', es: 'Jerarquía task-first, claridad de CTAs, agrupación de información' },
  'm.korean.c.role.t3': { en: 'UI design', es: 'Diseño UI' },
  'm.korean.c.role.d3': { en: 'Hi-fi screens: Home, My Trips, Add reservation, More menu', es: 'Pantallas hi-fi: Inicio, Mis viajes, Añadir reserva, Menú Más' },
  'm.korean.c.role.t4': { en: 'Visual system', es: 'Sistema visual' },
  'm.korean.c.role.d4': { en: 'Typography, spacing scale (8/16/24/32px), color palette, iconography', es: 'Tipografía, escala de espaciado (8/16/24/32px), paleta de color, iconografía' },

  // Challenge
  'm.korean.c.challenge1': { en: 'Airline apps are high-stakes, high-cognitive-load environments. Users need to find critical information fast, complete complex tasks under time pressure, and feel confident about irreversible decisions like payments and bookings.', es: 'Las apps de aerolíneas son entornos de alta complejidad cognitiva. Los usuarios necesitan encontrar información crítica rápido, completar tareas complejas bajo presión temporal y sentir confianza en decisiones irreversibles como pagos y reservas.' },
  'm.korean.c.challenge2': { en: 'The Korean Air app failed on these fronts. As a user, I experienced this firsthand — and the heuristic audit confirmed it systematically.', es: 'La app de Korean Air fallaba en estos frentes. Como usuaria, lo experimenté de primera mano — y la auditoría heurística lo confirmó sistemáticamente.' },
  'm.korean.c.stat1': { en: 'usability issues identified across 7 of Nielsen\'s 10 heuristics', es: 'problemas de usabilidad en 7 de las 10 heurísticas de Nielsen' },
  'm.korean.c.stat2': { en: 'screens analyzed in the existing app', es: 'pantallas analizadas en la app existente' },
  'm.korean.c.stat3': { en: 'screens fully redesigned in hi-fi', es: 'pantallas rediseñadas completamente en hi-fi' },

  // Original app
  'm.korean.c.original1': { en: 'Before redesigning anything, I documented the current state. The original home screen shows the core issues at a glance: the user\'s name appears next to a QR code without greeting, a large hero card pushes a previous search with a single ambiguous "Continue" button, and the bottom navigation uses mixed languages ("My" instead of a clear label).', es: 'Antes de rediseñar nada, documenté el estado actual. El home original muestra los problemas centrales de un vistazo: el nombre del usuario aparece junto a un QR sin saludo, una tarjeta hero empuja una búsqueda previa con un único botón ambiguo de "Continue", y la navegación inferior mezcla idiomas ("My" en vez de una etiqueta clara).' },

  // Heuristic audit
  'm.korean.c.audit.intro': { en: 'I applied Nielsen\'s 10 usability heuristics to evaluate the app systematically, scoring each issue by severity and ease of fix. The audit revealed 14 real problems across 7 heuristics:', es: 'Apliqué las 10 heurísticas de usabilidad de Nielsen para evaluar la app sistemáticamente, puntuando cada problema por severidad y facilidad de corrección. La auditoría reveló 14 problemas reales en 7 heurísticas:' },
  'm.korean.c.h1.t': { en: 'Visibility of system status', es: 'Visibilidad del estado del sistema' },
  'm.korean.c.h1.s1': { en: 'CTA "Continue" doesn\'t communicate the next step', es: 'El CTA "Continue" no comunica el siguiente paso' },
  'm.korean.c.h1.s2': { en: 'Login state is implied but never confirmed', es: 'El estado de login se intuye pero nunca se confirma' },
  'm.korean.c.h1.take': { en: ' User doesn\'t know where they are or where they\'re going.', es: ' El usuario no sabe dónde está ni a dónde va.' },
  'm.korean.c.h23.t': { en: 'Match & user control', es: 'Correspondencia y control del usuario' },
  'm.korean.c.h23.s1': { en: 'Mixed languages break the user\'s flow', es: 'La mezcla de idiomas rompe el flujo del usuario' },
  'm.korean.c.h23.s2': { en: 'System forces continuing a previous search — no alternative', es: 'El sistema fuerza a continuar una búsqueda previa — sin alternativa' },
  'm.korean.c.h23.take': { en: ' The app decides for the user instead of offering choices.', es: ' La app decide por el usuario en vez de ofrecer opciones.' },
  'm.korean.c.h4.t': { en: 'Consistency & standards', es: 'Consistencia y estándares' },
  'm.korean.c.h4.s1': { en: 'Inconsistent typography — same font, different spacing', es: 'Tipografía inconsistente — misma fuente, distinto espaciado' },
  'm.korean.c.h4.s2': { en: 'Poor visual hierarchy between content blocks', es: 'Jerarquía visual pobre entre bloques de contenido' },
  'm.korean.c.h4.s3': { en: 'No help, tooltips, or contextual microcopy', es: 'Sin ayuda, tooltips ni microcopy contextual' },
  'm.korean.c.h4.take': { en: ' No design system — every screen feels like a different app.', es: ' Sin sistema de diseño — cada pantalla parece una app distinta.' },
  'm.korean.c.h68.t': { en: 'Recognition, flexibility & minimalism', es: 'Reconocimiento, flexibilidad y minimalismo' },
  'm.korean.c.h68.s1': { en: 'Trip recalled without date or passengers', es: 'Viaje recordado sin fecha ni pasajeros' },
  'm.korean.c.h68.s2': { en: 'Miles appear without explanation (what are they for? do they expire?)', es: 'Las millas aparecen sin explicación (¿para qué sirven? ¿caducan?)' },
  'm.korean.c.h68.s3': { en: 'Too many blocks compete — QR is prominent but rarely the main action', es: 'Demasiados bloques compiten — el QR destaca pero raramente es la acción principal' },
  'm.korean.c.h68.take': { en: ' Information without context creates confusion, not clarity.', es: ' Información sin contexto crea confusión, no claridad.' },

  // Strategy
  'm.korean.c.strategy.intro': { en: 'Instead of redesigning screens "by taste", I reframed the UI around <b>task priority and decision clarity</b>. The strategy was built on three pillars:', es: 'En lugar de rediseñar pantallas "por gusto", replanteé la UI en torno a <b>prioridad de tareas y claridad de decisiones</b>. La estrategia se construyó sobre tres pilares:' },
  'm.korean.c.pillar1.t': { en: 'Task-first hierarchy', es: 'Jerarquía task-first' },
  'm.korean.c.pillar1.d': { en: 'Design the home around what users need to do — not what the brand wants to show.', es: 'Diseñar el home en torno a lo que el usuario necesita hacer — no lo que la marca quiere mostrar.' },
  'm.korean.c.pillar2.t': { en: 'Clarity of actions', es: 'Claridad de acciones' },
  'm.korean.c.pillar2.d': { en: 'Explicit CTAs, predictable next steps, and supportive microcopy.', es: 'CTAs explícitos, siguientes pasos predecibles y microcopy de apoyo.' },
  'm.korean.c.pillar3.t': { en: 'System consistency', es: 'Consistencia del sistema' },
  'm.korean.c.pillar3.d': { en: 'Reusable typography, spacing, and components that scale without drift.', es: 'Tipografía, espaciado y componentes reutilizables que escalan sin deriva.' },
  'm.korean.c.reframe.t': { en: 'The guiding principle', es: 'El principio guía' },
  'm.korean.c.reframe.p': { en: 'In high-stakes apps, every unclear element erodes trust. Clarity is not a visual preference — it\'s a functional requirement.', es: 'En apps de alta complejidad, cada elemento poco claro erosiona la confianza. La claridad no es una preferencia visual — es un requisito funcional.' },

  // Design decisions
  'm.korean.c.decisions.intro': { en: 'Each redesign decision was mapped to a specific problem found in the audit:', es: 'Cada decisión de rediseño se mapeó a un problema específico encontrado en la auditoría:' },
  'm.korean.c.dec1.insight': { en: 'Problem: Login state is implied but never confirmed', es: 'Problema: el estado de login se intuye pero nunca se confirma' },
  'm.korean.c.dec1.t': { en: 'Explicit welcome header', es: 'Header de bienvenida explícito' },
  'm.korean.c.dec1.d': { en: '"¡Bienvenida, Sandra!" — a clear greeting confirms the user is logged in and personalizes the experience immediately.', es: '"¡Bienvenida, Sandra!" — un saludo claro confirma que el usuario está logueado y personaliza la experiencia de inmediato.' },
  'm.korean.c.dec2.insight': { en: 'Problem: Only one CTA — "Continue" — no choice', es: 'Problema: un solo CTA — "Continue" — sin opción' },
  'm.korean.c.dec2.t': { en: 'Dual CTA: Continue search + New search', es: 'Doble CTA: Continuar búsqueda + Nueva búsqueda' },
  'm.korean.c.dec2.d': { en: 'Restoring user control. The previous search now shows full context (dates, route) plus the option to start fresh.', es: 'Devolviendo el control al usuario. La búsqueda previa ahora muestra contexto completo (fechas, ruta) más la opción de empezar de nuevo.' },
  'm.korean.c.dec3.insight': { en: 'Problem: Trip recalled without essential information', es: 'Problema: viaje recordado sin información esencial' },
  'm.korean.c.dec3.t': { en: 'Rich trip cards with dates and countdown', es: 'Tarjetas de viaje con fechas y cuenta atrás' },
  'm.korean.c.dec3.d': { en: 'My Trips shows destination photos, exact dates, and D-countdown badges — all the context users need at a glance.', es: 'Mis Viajes muestra fotos de destino, fechas exactas y badges D-countdown — todo el contexto que el usuario necesita de un vistazo.' },
  'm.korean.c.dec4.insight': { en: 'Problem: No help or contextual guidance anywhere', es: 'Problema: sin ayuda ni guía contextual' },
  'm.korean.c.dec4.t': { en: 'Microcopy and descriptions on every action', es: 'Microcopy y descripciones en cada acción' },
  'm.korean.c.dec4.d': { en: '"Planifica tu próximo viaje" menu with descriptive subtitles: what each option does, in plain language.', es: 'Menú "Planifica tu próximo viaje" con subtítulos descriptivos: qué hace cada opción, en lenguaje claro.' },
  'm.korean.c.dec5.insight': { en: 'Problem: Many blocks compete, no clear hierarchy', es: 'Problema: muchos bloques compiten, sin jerarquía clara' },
  'm.korean.c.dec5.t': { en: 'Grouped content with visual hierarchy', es: 'Contenido agrupado con jerarquía visual' },
  'm.korean.c.dec5.d': { en: 'Reduced competing elements. News section pushed below the fold. Primary actions (search, trips) elevated.', es: 'Elementos compitiendo reducidos. Noticias empujadas bajo el fold. Acciones primarias (búsqueda, viajes) elevadas.' },

  // Screens
  'm.korean.c.screens.intro': { en: 'Four key screens redesigned in hi-fi, each solving specific problems from the audit:', es: 'Cuatro pantallas clave rediseñadas en hi-fi, cada una resolviendo problemas específicos de la auditoría:' },
  'm.korean.c.home.p': { en: 'Personalized welcome, search with full context (route + dates), dual CTA, mascot with clear purpose ("¡Pregúntame!"), and news deprioritized below the fold.', es: 'Bienvenida personalizada, búsqueda con contexto completo (ruta + fechas), doble CTA, mascota con propósito claro ("¡Pregúntame!"), y noticias despriorizadas bajo el fold.' },
  'm.korean.c.trips.p': { en: 'Visual trip cards with destination imagery, exact dates, and D-countdown badges. Clear "add trip" button and help text for users who don\'t see their flights.', es: 'Tarjetas visuales de viaje con imágenes del destino, fechas exactas y badges D-countdown. Botón claro de "añadir viaje" y texto de ayuda para quien no ve sus vuelos.' },
  'm.korean.c.addtrip.p': { en: 'Simplified form flow: barcode scanner as primary action, reference input with placeholder examples, and date picker — clear steps, reduced ambiguity.', es: 'Flujo de formulario simplificado: escáner de código de barras como acción principal, campo de referencia con ejemplos placeholder, y selector de fecha — pasos claros, ambigüedad reducida.' },
  'm.korean.c.more.p': { en: 'Reorganized as "Planifica tu próximo viaje" with two primary quick actions (Contact support, Earn miles) and categorized options with descriptive microcopy — helping users understand what each action does before tapping.', es: 'Reorganizado como "Planifica tu próximo viaje" con dos acciones rápidas principales (Contactar soporte, Ganar millas) y opciones categorizadas con microcopy descriptivo — ayudando a entender qué hace cada acción antes de tocar.' },

  // Visual system
  'm.korean.c.system.intro': { en: 'To prevent inconsistencies and make the redesign scalable, I created lightweight UI guidelines aligned with the Korean Air brand:', es: 'Para evitar inconsistencias y hacer el rediseño escalable, creé guías UI ligeras alineadas con la marca Korean Air:' },
  'm.korean.c.sys1.t': { en: 'Typography', es: 'Tipografía' },
  'm.korean.c.sys1.d': { en: 'Poppins. Consistent hierarchy for headings and body to improve scanability.', es: 'Poppins. Jerarquía consistente para títulos y cuerpo para mejorar la escaneabilidad.' },
  'm.korean.c.sys2.t': { en: 'Spacing', es: 'Espaciado' },
  'm.korean.c.sys2.d': { en: '8 / 16 / 24 / 32px rhythm for predictable, breathable layouts.', es: 'Ritmo de 8 / 16 / 24 / 32px para layouts predecibles y con respiro.' },
  'm.korean.c.sys3.t': { en: 'Icons', es: 'Iconos' },
  'm.korean.c.sys3.d': { en: 'Unified stroke weight and style for navigation and actions.', es: 'Grosor y estilo de trazo unificado para navegación y acciones.' },
  'm.korean.c.sys4.t': { en: 'Color', es: 'Color' },
  'm.korean.c.sys4.d': { en: 'Structured blues for states, emphasis, and readability. Navy, sky, and ice.', es: 'Azules estructurados para estados, énfasis y legibilidad. Navy, cielo y hielo.' },
  'm.korean.c.nav.p': { en: 'Redesigned navigation bar with 5 clear tabs (Home, My Trips, Book, Profile, Flights), replacing the original mixed-language labels. Unified iconography and active state indicators across all screens.', es: 'Barra de navegación rediseñada con 5 pestañas claras (Inicio, Mis Viajes, Reserva, Mi Perfil, Vuelos), reemplazando las etiquetas con idiomas mezclados. Iconografía unificada e indicadores de estado activo en todas las pantallas.' },

  // Learnings
  'm.korean.c.learn1.t': { en: 'UX issues are often structural', es: 'Los problemas de UX suelen ser estructurales' },
  'm.korean.c.learn1.d': { en: 'In complex products (travel, banking, fintech), hierarchy and system feedback matter as much as visual polish.', es: 'En productos complejos (viajes, banca, fintech), la jerarquía y el feedback del sistema importan tanto como el acabado visual.' },
  'm.korean.c.learn2.t': { en: 'Heuristics give you leverage', es: 'Las heurísticas te dan palanca' },
  'm.korean.c.learn2.d': { en: 'A structured audit turns subjective "this feels wrong" into actionable, prioritized recommendations.', es: 'Una auditoría estructurada convierte el subjetivo "esto no funciona" en recomendaciones accionables y priorizadas.' },
  'm.korean.c.learn3.t': { en: 'Microcopy is UX', es: 'El microcopy es UX' },
  'm.korean.c.learn3.d': { en: 'A one-line description under each menu option reduced ambiguity more than any layout change could.', es: 'Una línea de descripción bajo cada opción del menú redujo la ambigüedad más que cualquier cambio de layout.' },
  'm.korean.c.next.p': { en: 'If I continued: <b>usability testing</b> to validate hierarchy improvements, measuring <b>task completion rate</b> for "Add reservation" flow, <b>time on task</b> comparisons before/after, and testing the <b>microcopy effectiveness</b> on the "More" menu.', es: 'Si continuara: <b>test de usabilidad</b> para validar las mejoras de jerarquía, medir la <b>tasa de completado</b> del flujo "Añadir reserva", comparaciones de <b>tiempo en tarea</b> antes/después, y probar la <b>efectividad del microcopy</b> en el menú "Más".' },

  // ─── LUMIX CASE STUDY PAGE (lumix.html) ───

  // Subtitle (updated for case page)
  'm.lumix.sub': { en: 'How might we help young professionals who earn enough but still feel financially anxious? We designed a behavioral fintech app that connects real bank data with emotional awareness — replacing overwhelm with clarity.', es: '¿Cómo podemos ayudar a jóvenes profesionales que ganan lo suficiente pero siguen sintiendo ansiedad financiera? Diseñamos una app fintech conductual que conecta datos bancarios reales con conciencia emocional — reemplazando el agobio por claridad.' },

  // Section labels
  'm.lumix.c.l.overview':       { en: 'OVERVIEW',                es: 'CONTEXTO' },
  'm.lumix.c.l.challenge':      { en: 'THE CHALLENGE',           es: 'EL RETO' },
  'm.lumix.c.l.research':       { en: 'RESEARCH & DISCOVERY',    es: 'INVESTIGACIÓN Y DESCUBRIMIENTO' },
  'm.lumix.c.l.insights':       { en: 'KEY INSIGHTS',            es: 'INSIGHTS CLAVE' },
  'm.lumix.c.l.expert':         { en: 'EXPERT PERSPECTIVE',      es: 'PERSPECTIVA EXPERTA' },
  'm.lumix.c.l.define':         { en: 'DEFINING THE PROBLEM',    es: 'DEFINIENDO EL PROBLEMA' },
  'm.lumix.c.l.strategy':       { en: 'PRODUCT STRATEGY',        es: 'ESTRATEGIA DE PRODUCTO' },
  'm.lumix.c.l.prioritization': { en: 'FEATURE PRIORITIZATION',  es: 'PRIORIZACIÓN DE FUNCIONALIDADES' },
  'm.lumix.c.l.ia':             { en: 'INFORMATION ARCHITECTURE', es: 'ARQUITECTURA DE INFORMACIÓN' },
  'm.lumix.c.l.decisions':      { en: 'KEY DESIGN DECISIONS',    es: 'DECISIONES CLAVE DE DISEÑO' },
  'm.lumix.c.l.prototype':      { en: 'THE PROTOTYPE',           es: 'EL PROTOTIPO' },
  'm.lumix.c.l.clarity':        { en: 'FINANCIAL CLARITY',       es: 'CLARIDAD FINANCIERA' },
  'm.lumix.c.l.conversational': { en: 'CONVERSATIONAL SUPPORT',  es: 'SOPORTE CONVERSACIONAL' },
  'm.lumix.c.l.emotional':      { en: 'EMOTIONAL TRACKING',      es: 'SEGUIMIENTO EMOCIONAL' },
  'm.lumix.c.l.education':      { en: 'EDUCATION & GUIDANCE',    es: 'EDUCACIÓN Y GUÍA' },
  'm.lumix.c.l.learnings':      { en: 'KEY LEARNINGS',           es: 'APRENDIZAJES CLAVE' },
  'm.lumix.c.l.next':           { en: 'NEXT STEPS',              es: 'PRÓXIMOS PASOS' },

  // Overview
  'm.lumix.c.overview1': { en: 'Lumix is a behavioral fintech concept designed during a 10-day design sprint at Ironhack. The brief was open: identify a real problem and design a mobile product from scratch — from research to hi-fi prototype.', es: 'Lumix es un concepto fintech conductual diseñado durante un sprint de diseño de 10 días en Ironhack. El brief era abierto: identificar un problema real y diseñar un producto móvil desde cero — desde la investigación hasta el prototipo hi-fi.' },
  'm.lumix.c.overview2': { en: 'Our team of four chose to explore the intersection of <b>personal finance and mental health</b> after noticing that most financial tools focus on numbers and dashboards, while the real barrier is emotional — anxiety, guilt, and avoidance.', es: 'Nuestro equipo de cuatro eligió explorar la intersección entre <b>finanzas personales y salud mental</b> al notar que la mayoría de herramientas financieras se centran en números y dashboards, cuando la barrera real es emocional — ansiedad, culpa y evitación.' },

  // Role card
  'm.lumix.c.role.label': { en: 'My Role', es: 'Mi Rol' },
  'm.lumix.c.role.t1': { en: 'Core concept', es: 'Concepto central' },
  'm.lumix.c.role.d1': { en: 'Emotional calendar, daily challenges, Discover section, mascot chatbot', es: 'Calendario emocional, retos diarios, sección Descubrir, chatbot mascota' },
  'm.lumix.c.role.t2': { en: 'Research synthesis', es: 'Síntesis de investigación' },
  'm.lumix.c.role.d2': { en: 'Led insight extraction from 85-person survey + expert interview', es: 'Lideré la extracción de insights de encuesta a 85 personas + entrevista experta' },
  'm.lumix.c.role.t3': { en: 'Information architecture', es: 'Arquitectura de información' },
  'm.lumix.c.role.d3': { en: 'App structure, nav system, onboarding flow', es: 'Estructura de app, sistema de navegación, flujo de onboarding' },
  'm.lumix.c.role.t4': { en: 'UI design & tone', es: 'Diseño UI y tono' },
  'm.lumix.c.role.d4': { en: 'Friendly language, non-punitive feedback, key screens in Figma', es: 'Lenguaje friendly, feedback no punitivo, pantallas clave en Figma' },

  // Challenge
  'm.lumix.c.challenge1': { en: 'We started with a hypothesis: <b>young professionals with stable income shouldn\'t feel financially stressed — but they do.</b>', es: 'Partimos de una hipótesis: <b>los jóvenes profesionales con ingresos estables no deberían sentir estrés financiero — pero lo sienten.</b>' },
  'm.lumix.c.challenge2': { en: 'Secondary research confirmed the scale of the problem. The data pointed to a paradox: having income doesn\'t guarantee feeling at peace. And the tools that exist were making it worse.', es: 'La investigación secundaria confirmó la magnitud del problema. Los datos apuntaban a una paradoja: tener ingresos no garantiza sentir paz. Y las herramientas existentes lo estaban empeorando.' },
  'm.lumix.c.stat1': { en: 'of young adults (20–34) at risk of depression due to economic insecurity', es: 'de jóvenes (20–34) en riesgo de depresión por inseguridad económica' },
  'm.lumix.c.stat2': { en: 'feel anxiety when receiving a spending notification', es: 'sienten ansiedad al recibir una notificación de gasto' },
  'm.lumix.c.stat3': { en: 'spend beyond their means and feel guilty about it', es: 'gastan por encima de sus posibilidades y sienten culpa' },

  // Research
  'm.lumix.c.research1': { en: 'We ran a multi-method research approach to understand not just what people do with money, but <b>how they feel about it</b>:', es: 'Realizamos un enfoque de investigación multimétodo para entender no solo qué hace la gente con el dinero, sino <b>cómo se siente al respecto</b>:' },
  'm.lumix.c.meth1.name': { en: 'Quantitative Survey', es: 'Encuesta cuantitativa' },
  'm.lumix.c.meth1.detail': { en: '85 respondents · Ages 22–35', es: '85 participantes · 22–35 años' },
  'm.lumix.c.meth1.desc': { en: 'Financial stress frequency, emotional triggers, tool usage, and savings behavior among active workers.', es: 'Frecuencia de estrés financiero, triggers emocionales, uso de herramientas y comportamiento de ahorro entre trabajadores activos.' },
  'm.lumix.c.meth2.name': { en: 'Expert Interview', es: 'Entrevista experta' },
  'm.lumix.c.meth2.detail': { en: 'Clinical psychologist', es: 'Psicóloga clínica' },
  'm.lumix.c.meth2.desc': { en: 'Emotional relationship with money. Behavioral patterns behind financial avoidance and self-protection.', es: 'Relación emocional con el dinero. Patrones conductuales detrás de la evitación financiera y la autoprotección.' },
  'm.lumix.c.meth3.name': { en: 'Secondary Research', es: 'Investigación secundaria' },
  'm.lumix.c.meth3.detail': { en: 'Multiple sources', es: 'Múltiples fuentes' },
  'm.lumix.c.meth3.desc': { en: 'Financial stress among Spanish youth, mental health data, behavioral finance, and literacy rates.', es: 'Estrés financiero en jóvenes españoles, datos de salud mental, finanzas conductuales y tasas de alfabetización.' },

  // Key Insights
  'm.lumix.c.insights.intro': { en: 'The research revealed four insights that fundamentally shaped our product direction:', es: 'La investigación reveló cuatro insights que moldearon fundamentalmente la dirección del producto:' },
  'm.lumix.c.ins1.t': { en: 'Anxiety is persistent, not situational', es: 'La ansiedad es persistente, no situacional' },
  'm.lumix.c.ins1.s1': { en: '<strong>46%</strong> feel frequent financial stress', es: '<strong>46%</strong> siente estrés financiero frecuente' },
  'm.lumix.c.ins1.s2': { en: '<strong>5.8%</strong> never feel anxiety', es: '<strong>5.8%</strong> nunca siente ansiedad' },
  'm.lumix.c.ins1.s3': { en: '<strong>48%</strong> only mid-level control', es: '<strong>48%</strong> solo control medio' },
  'm.lumix.c.ins1.take': { en: ' Even with stable jobs, stress doesn\'t disappear. The problem is structural.', es: ' Incluso con empleo estable, el estrés no desaparece. El problema es estructural.' },
  'm.lumix.c.ins2.t': { en: 'The future is the biggest trigger', es: 'El futuro es el mayor detonante' },
  'm.lumix.c.ins2.s1': { en: '<strong>18.5%</strong> "thinking about the future"', es: '<strong>18.5%</strong> "pensar en el futuro"' },
  'm.lumix.c.ins2.s2': { en: '<strong>11.4%</strong> unexpected expenses', es: '<strong>11.4%</strong> gastos inesperados' },
  'm.lumix.c.ins2.s3': { en: '<strong>8.5%</strong> checking their balance', es: '<strong>8.5%</strong> revisar el saldo' },
  'm.lumix.c.ins2.take': { en: ' Opportunity: transform uncertainty into predictability.', es: ' Oportunidad: transformar incertidumbre en previsibilidad.' },
  'm.lumix.c.ins3.t': { en: 'People want to save but can\'t sustain it', es: 'Quieren ahorrar pero no lo mantienen' },
  'm.lumix.c.ins3.s1': { en: '<strong>56%</strong> saving = peace of mind', es: '<strong>56%</strong> ahorro = tranquilidad' },
  'm.lumix.c.ins3.s2': { en: '<strong>1/3</strong> can\'t maintain the habit', es: '<strong>1/3</strong> no mantiene el hábito' },
  'm.lumix.c.ins3.s3': { en: '<strong>16.7%</strong> abandon apps', es: '<strong>16.7%</strong> abandonan apps' },
  'm.lumix.c.ins3.take': { en: ' Users don\'t need more data. They need behavioral support.', es: ' Los usuarios no necesitan más datos. Necesitan soporte conductual.' },
  'm.lumix.c.ins4.t': { en: 'Financial apps fail emotionally', es: 'Las apps financieras fallan emocionalmente' },
  'm.lumix.c.ins4.s1': { en: '<strong>3.9%</strong> use budgeting apps', es: '<strong>3.9%</strong> usan apps de presupuesto' },
  'm.lumix.c.ins4.s2': { en: '<strong>15.3%</strong> numbers trigger anxiety', es: '<strong>15.3%</strong> los números generan ansiedad' },
  'm.lumix.c.ins4.s3': { en: '<strong>36%</strong> never used one — fear', es: '<strong>36%</strong> nunca usaron una — miedo' },
  'm.lumix.c.ins4.take': { en: ' The problem isn\'t managing money. It\'s how tools present it.', es: ' El problema no es gestionar dinero. Es cómo lo presentan las herramientas.' },

  // Expert perspective
  'm.lumix.c.expert.intro': { en: 'The psychologist interview added a critical layer that reframed our entire approach:', es: 'La entrevista con la psicóloga añadió una capa crítica que replanteó todo nuestro enfoque:' },
  'm.lumix.c.q1.text': { en: 'Financial anxiety is an identity threat. Money activates shame because people experience it as a measure of personal worth.', es: 'La ansiedad financiera es una amenaza a la identidad. El dinero activa vergüenza porque se experimenta como medida de valor personal.' },
  'm.lumix.c.q1.action': { en: 'Design action → Protect user dignity. Never punitive.', es: 'Acción de diseño → Proteger la dignidad del usuario. Nunca punitivo.' },
  'm.lumix.c.q2.text': { en: 'Not checking the balance isn\'t laziness — it\'s avoiding intense emotional discomfort. A self-protection strategy.', es: 'No revisar el saldo no es dejadez — es evitar un malestar emocional intenso. Una estrategia de autoprotección.' },
  'm.lumix.c.q2.action': { en: 'Design action → Reduce activation, don\'t increase pressure.', es: 'Acción de diseño → Reducir activación, no aumentar presión.' },
  'm.lumix.c.q3.text': { en: 'Saving is an emotional skill. Many adults haven\'t developed the internal maturity to sustain it.', es: 'Ahorrar es una habilidad emocional. Muchos adultos no han desarrollado la madurez interna para sostenerlo.' },
  'm.lumix.c.q3.action': { en: 'Design action → Micro-habits + positive reinforcement.', es: 'Acción de diseño → Micro-hábitos + refuerzo positivo.' },
  'm.lumix.c.q4.text': { en: 'Financial management can become self-care — when reframed as taking responsibility for your time and energy.', es: 'La gestión financiera puede ser autocuidado — cuando se reenfoca como responsabilidad sobre tu tiempo y energía.' },
  'm.lumix.c.q4.action': { en: 'Design action → Empathetic, regulatory tone throughout.', es: 'Acción de diseño → Tono empático y regulador en toda la experiencia.' },
  'm.lumix.c.reframe.t': { en: 'The reframe that changed everything', es: 'El replanteamiento que lo cambió todo' },
  'm.lumix.c.reframe.p': { en: 'We weren\'t designing a budgeting tool — we were designing for emotional regulation.', es: 'No estábamos diseñando una herramienta de presupuesto — estábamos diseñando para la regulación emocional.' },

  // Defining the problem
  'm.lumix.c.define.intro': { en: 'We synthesized the research into a user persona and a clear problem statement:', es: 'Sintetizamos la investigación en una user persona y un problem statement claro:' },
  'm.lumix.c.persona.role': { en: '30 · Teacher · Valencia', es: '30 · Profesora · Valencia' },
  'm.lumix.c.persona.q1': { en: '"I can afford it... but I feel guilty."', es: '"Puedo permitírmelo... pero me da culpa."' },
  'm.lumix.c.persona.q2': { en: '"I check my app daily — control or anxiety?"', es: '"Miro la app todos los días — ¿control o ansiedad?"' },
  'm.lumix.c.persona.bio': { en: 'Stable job, pays bills, saves monthly. But lives with constant financial pressure. Tried budgeting apps — abandoned them. <b>Just wants to feel she\'s making progress.</b>', es: 'Trabajo estable, paga facturas, ahorra mensualmente. Pero vive con presión financiera constante. Probó apps de presupuesto — las abandonó. <b>Solo quiere sentir que avanza.</b>' },
  'm.lumix.c.persona.tag1': { en: '😰 Persistent anxiety', es: '😰 Ansiedad persistente' },
  'm.lumix.c.persona.tag2': { en: '😔 Guilt on spending', es: '😔 Culpa al gastar' },
  'm.lumix.c.persona.tag3': { en: '📉 "Never enough"', es: '📉 "Nunca es suficiente"' },
  'm.lumix.c.persona.tag4': { en: '🏠 Big goal overwhelm', es: '🏠 Agobio ante metas grandes' },
  'm.lumix.c.ps.label': { en: 'Problem Statement', es: 'Problem Statement' },
  'm.lumix.c.ps.text': { en: 'Young professionals with stable employment experience financial anxiety not from lack of income, but from <b>lack of predictability</b>. They need a structured, emotionally intelligent way to understand their money — to transform income into a real sense of security.', es: 'Los jóvenes profesionales con empleo estable experimentan ansiedad financiera no por falta de ingresos, sino por <b>falta de previsibilidad</b>. Necesitan una forma estructurada y emocionalmente inteligente de entender su dinero — para transformar ingresos en una sensación real de seguridad.' },

  // Product strategy
  'm.lumix.c.strategy.intro': { en: 'Instead of another dashboard-heavy finance app, we defined four product pillars from our research:', es: 'En lugar de otra app financiera llena de dashboards, definimos cuatro pilares de producto desde nuestra investigación:' },
  'm.lumix.c.pillar1.t': { en: 'Clarity', es: 'Claridad' },
  'm.lumix.c.pillar1.d': { en: 'Simplified overviews. No complex graphs, no jargon.', es: 'Resúmenes simplificados. Sin gráficos complejos, sin jerga.' },
  'm.lumix.c.pillar2.t': { en: 'Automation', es: 'Automatización' },
  'm.lumix.c.pillar2.d': { en: 'Bank connection with auto-categorization. No manual tracking.', es: 'Conexión bancaria con categorización automática. Sin seguimiento manual.' },
  'm.lumix.c.pillar3.t': { en: 'Projection', es: 'Proyección' },
  'm.lumix.c.pillar3.d': { en: 'Predictive guidance. Uncertainty → visible progress.', es: 'Orientación predictiva. Incertidumbre → progreso visible.' },
  'm.lumix.c.pillar4.t': { en: 'Safety', es: 'Seguridad' },
  'm.lumix.c.pillar4.d': { en: 'Emotionally intelligent feedback. Data feels like self-care.', es: 'Feedback emocionalmente inteligente. Los datos se sienten como autocuidado.' },
  'm.lumix.c.prioritization.intro': { en: 'We used the <b>MoSCoW method</b> and an impact/effort matrix. Core principle: deliberate restraint — what we leave out matters as much as what we include.', es: 'Usamos el <b>método MoSCoW</b> y una matriz de impacto/esfuerzo. Principio clave: restricción deliberada — lo que dejamos fuera importa tanto como lo que incluimos.' },
  'm.lumix.c.moscow.must.label': { en: '✅ Must Have', es: '✅ Imprescindible' },
  'm.lumix.c.moscow.must.1': { en: 'Emotional + financial onboarding', es: 'Onboarding emocional + financiero' },
  'm.lumix.c.moscow.must.2': { en: 'Clean home screen', es: 'Home limpio' },
  'm.lumix.c.moscow.must.3': { en: 'Weekly calendar + mood tracking', es: 'Calendario semanal + seguimiento de ánimo' },
  'm.lumix.c.moscow.must.4': { en: 'Savings goal visualization', es: 'Visualización de meta de ahorro' },
  'm.lumix.c.moscow.must.5': { en: 'Discover section', es: 'Sección Descubrir' },
  'm.lumix.c.moscow.must.6': { en: 'AI companion chatbot (mascot)', es: 'Chatbot IA (mascota)' },
  'm.lumix.c.moscow.wont.label': { en: '🚫 Deliberately Excluded', es: '🚫 Excluido deliberadamente' },
  'm.lumix.c.moscow.wont.1': { en: 'Complex dashboards', es: 'Dashboards complejos' },
  'm.lumix.c.moscow.wont.2': { en: 'Technical graphs & data tables', es: 'Gráficos técnicos y tablas de datos' },
  'm.lumix.c.moscow.wont.3': { en: 'Investment planning', es: 'Planificación de inversiones' },
  'm.lumix.c.moscow.wont.4': { en: 'Professional financial tools', es: 'Herramientas financieras profesionales' },
  'm.lumix.c.moscow.wont.5': { en: 'Anything triggering cognitive overload', es: 'Cualquier cosa que genere sobrecarga cognitiva' },

  // IA
  'm.lumix.c.ia.intro': { en: 'Five core areas, each mapped to a user need:', es: 'Cinco áreas principales, cada una mapeada a una necesidad del usuario:' },
  'm.lumix.c.ia1.t': { en: 'Home', es: 'Inicio' },
  'm.lumix.c.ia1.d': { en: 'Emotional anchor. Daily challenge, mood check-in, weekly summary.', es: 'Ancla emocional. Reto diario, check-in de ánimo, resumen semanal.' },
  'm.lumix.c.ia2.t': { en: 'Management', es: 'Gestión' },
  'm.lumix.c.ia2.d': { en: 'Monthly overview. Categorized expenses, simplified visualization.', es: 'Resumen mensual. Gastos categorizados, visualización simplificada.' },
  'm.lumix.c.ia3.t': { en: 'Savings', es: 'Ahorro' },
  'm.lumix.c.ia3.d': { en: 'One active goal. Clear progress, predictive timeline.', es: 'Un objetivo activo. Progreso claro, timeline predictivo.' },
  'm.lumix.c.ia4.t': { en: 'Discover', es: 'Descubrir' },
  'm.lumix.c.ia4.d': { en: 'Articles, podcasts, meditations, quizzes. Literacy without intimidation.', es: 'Artículos, podcasts, meditaciones, quizzes. Alfabetización sin intimidación.' },
  'm.lumix.c.ia5.t': { en: 'Lumix AI', es: 'Lumix IA' },
  'm.lumix.c.ia5.d': { en: 'Mascot chatbot. Translates bank data into friendly advice.', es: 'Chatbot mascota. Traduce datos bancarios en consejos amigables.' },

  // Design decisions
  'm.lumix.c.decisions.intro': { en: 'Every design choice was mapped back to a research insight:', es: 'Cada decisión de diseño se mapeó a un insight de investigación:' },
  'm.lumix.c.dec1.insight': { en: 'Insight: Facing financial data activates emotional pain', es: 'Insight: Enfrentar datos financieros activa dolor emocional' },
  'm.lumix.c.dec1.t': { en: 'Emotional calendar on home screen', es: 'Calendario emocional en el home' },
  'm.lumix.c.dec1.d': { en: 'Daily mood check-in connects feelings to spending — patterns visible without judgment.', es: 'El check-in diario de ánimo conecta emociones con gastos — patrones visibles sin juicio.' },
  'm.lumix.c.dec2.insight': { en: 'Insight: Saving is an emotional skill, not rational', es: 'Insight: Ahorrar es una habilidad emocional, no racional' },
  'm.lumix.c.dec2.t': { en: 'Daily challenges instead of to-do lists', es: 'Retos diarios en vez de listas de tareas' },
  'm.lumix.c.dec2.d': { en: 'Micro-challenges build habits through small wins, not pressure.', es: 'Los micro-retos construyen hábitos con pequeñas victorias, no presión.' },
  'm.lumix.c.dec3.insight': { en: 'Insight: Decision fatigue increases anxiety', es: 'Insight: La fatiga de decisión aumenta la ansiedad' },
  'm.lumix.c.dec3.t': { en: 'One savings goal at a time', es: 'Un objetivo de ahorro a la vez' },
  'm.lumix.c.dec3.d': { en: 'Limiting goals reduces cognitive load, increases perceived progress.', es: 'Limitar objetivos reduce la carga cognitiva y aumenta el progreso percibido.' },
  'm.lumix.c.dec4.insight': { en: 'Insight: 36% avoid apps — facing numbers is painful', es: 'Insight: 36% evitan apps — enfrentar números duele' },
  'm.lumix.c.dec4.t': { en: 'A mascot as the AI interface', es: 'Una mascota como interfaz de IA' },
  'm.lumix.c.dec4.d': { en: 'Friendly character = psychologically safe layer between user and data.', es: 'Personaje amigable = capa psicológicamente segura entre usuario y datos.' },
  'm.lumix.c.dec5.insight': { en: 'Insight: Only 19% have high financial literacy', es: 'Insight: Solo el 19% tiene alta alfabetización financiera' },
  'm.lumix.c.dec5.t': { en: 'Discover section with curated content', es: 'Sección Descubrir con contenido curado' },
  'm.lumix.c.dec5.d': { en: 'Articles, podcasts, meditations. Gradual knowledge, not overwhelming.', es: 'Artículos, podcasts, meditaciones. Conocimiento gradual, sin agobiar.' },

  // Prototype
  'm.lumix.c.prototype.intro': { en: 'Hi-fi interactive prototype in Figma covering the complete journey: onboarding, emotional calendar, financial overview, savings tracking, content discovery, and the AI companion.', es: 'Prototipo interactivo hi-fi en Figma cubriendo el viaje completo: onboarding, calendario emocional, resumen financiero, seguimiento de ahorro, contenido descubrir y el asistente IA.' },

  // Product screens
  'm.lumix.c.clarity.p': { en: 'The overview replaces dense dashboards with a simplified monthly summary. Categorized bubbles — visually light, easy to scan. Understand your situation in under 5 seconds.', es: 'El resumen reemplaza dashboards densos con un resumen mensual simplificado. Burbujas categorizadas — visualmente ligeras, fáciles de escanear. Entiende tu situación en menos de 5 segundos.' },
  'm.lumix.c.conversational.p': { en: 'The AI companion translates data into friendly recommendations. Context, reassurance, actionable steps. Warm, never punitive.', es: 'El asistente IA traduce datos en recomendaciones amigables. Contexto, tranquilidad, pasos accionables. Cálido, nunca punitivo.' },
  'm.lumix.c.emotional.p': { en: 'Daily mood check-in connects emotional states to spending. From the psychologist: being present with emotions while facing financial data is key to regulation.', es: 'El check-in diario de ánimo conecta estados emocionales con gastos. De la psicóloga: estar presente con las emociones al enfrentar datos financieros es clave para la regulación.' },
  'm.lumix.c.education.p': { en: 'Discover offers articles, podcasts, meditations — not filler, but a core feature. Micro-habits and mindset shifts that make the relationship with money healthier over time.', es: 'Descubrir ofrece artículos, podcasts, meditaciones — no relleno, sino una funcionalidad central. Micro-hábitos y cambios de mentalidad que hacen la relación con el dinero más sana con el tiempo.' },

  // Learnings
  'm.lumix.c.learn1.t': { en: 'Financial products communicate safety', es: 'Los productos financieros comunican seguridad' },
  'm.lumix.c.learn1.d': { en: 'The barrier isn\'t knowledge — it\'s emotional. People avoid finances because numbers feel like personal failure.', es: 'La barrera no es el conocimiento — es emocional. Las personas evitan sus finanzas porque los números se sienten como fracaso personal.' },
  'm.lumix.c.learn2.t': { en: 'What you exclude matters', es: 'Lo que excluyes importa' },
  'm.lumix.c.learn2.d': { en: 'Simplicity increases perceived control. Deliberate restraint is a design decision.', es: 'La simplicidad aumenta el control percibido. La restricción deliberada es una decisión de diseño.' },
  'm.lumix.c.learn3.t': { en: 'Talk to experts early', es: 'Habla con expertos pronto' },
  'm.lumix.c.learn3.d': { en: 'The psychologist shifted us from "show data better" to "make people feel safe." That reframe changed everything.', es: 'La psicóloga nos cambió de "mostrar datos mejor" a "hacer que la gente se sienta segura." Ese replanteamiento lo cambió todo.' },
  'm.lumix.c.next.p': { en: 'If I continued: <b>usability testing</b> to validate emotional calendar impact, <b>behavioral metrics</b> (session frequency, mood tracking consistency, savings completion), <b>accessibility audit</b>, and a <b>content strategy</b> for Discover with expert-backed financial literacy content.', es: 'Si continuara: <b>test de usabilidad</b> para validar el impacto del calendario emocional, <b>métricas conductuales</b> (frecuencia de sesión, consistencia del mood tracking, completado de ahorro), <b>auditoría de accesibilidad</b>, y una <b>estrategia de contenido</b> para Descubrir con contenido de alfabetización financiera respaldado por expertos.' },
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