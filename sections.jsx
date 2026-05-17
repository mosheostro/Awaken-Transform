// sections.jsx — All section components for Svarga International Landing Page

// ══════════════════════════════════════════════════════
// TRANSLATIONS
// ══════════════════════════════════════════════════════
const SVARGA_T = {
  ru: {
    nav: { about: 'О марафоне', practices: 'Практики', program: 'Программа', teacher: 'Учитель', cta: 'Записаться' },
    hero: {
      eyebrow: 'Svarga International · 21-дневный марафон',
      h1a: 'Пробудись.', h1b: 'Трансформируйся.',
      h1c: 'Стань собой.',
      sub: 'Интегральное развитие — тело, разум, энергия, сознание.',
      cta: 'Начать трансформацию', cta2: 'Узнать больше',
    },
    about: {
      eyebrow: 'О МАРАФОНЕ',
      h2: 'Интегральное пробуждение для современного человека',
      p1: 'Марафон Svarga — это живой процесс глубокой интеграции четырёх измерений бытия: тела, разума, энергии и сознания. Каждый день вы получаете конкретные практики, которые работают в условиях реальной жизни.',
      p2: 'Мы объединяем древние традиции с современной психологией, телесными практиками и энергетической работой — создавая мощный синергетический эффект трансформации.',
      stats: [{ num: '3 000+', label: 'участников' }, { num: '20+', label: 'лет практики' }, { num: '15+', label: 'стран' }],
    },
    practices: {
      eyebrow: 'ЧТО ВАС ЖДЁТ', h2: 'Практики марафона',
      items: [
        { title: 'Медитации', desc: 'Ежедневные медитативные практики для углубления осознанности и внутреннего покоя.' },
        { title: 'Дыхательные практики', desc: 'Техники пранаямы и дыхательной работы для очищения и активации витальной энергии.' },
        { title: 'Энергетические техники', desc: 'Работа с тонким телом, цигун и практики управления жизненной силой.' },
        { title: 'Трансформация мышления', desc: 'Перепрограммирование ограничивающих убеждений и создание новых нейронных путей.' },
        { title: 'Эмоциональный баланс', desc: 'Принятие, интеграция и трансформация эмоций как источника внутренней силы.' },
        { title: 'Интегральное развитие', desc: 'Целостный подход к росту через работу со всеми аспектами личности.' },
        { title: 'Поддержка сообщества', desc: 'Живое сообщество единомышленников и поддержка куратора на каждом шагу пути.' },
      ],
    },
    program: {
      eyebrow: 'ПРОГРАММА', h2: '21 день трансформации',
      weeks: [
        { num: '01', days: 'Дни 1–7',  title: 'Очищение и Пробуждение',
          desc: 'Снятие накопленного напряжения и активация первичной витальности. Формирование ежедневного ритуала практики и первое знакомство с глубиной собственного тела.',
          tags: ['Медитация очищения', 'Дыхательная активация', 'Тело и осознанность'] },
        { num: '02', days: 'Дни 8–14', title: 'Трансформация и Интеграция',
          desc: 'Глубокая работа с убеждениями и эмоциональными паттернами. Перепрограммирование ума, открытие новых состояний сознания и высвобождение блокировок.',
          tags: ['Работа с тенью', 'Энергетическая интеграция', 'Новые нейронные пути'] },
        { num: '03', days: 'Дни 15–21', title: 'Закрепление и Новая Реальность',
          desc: 'Интеграция всех практик в ткань повседневной жизни. Выход на новый уровень осознанности, витальности и качества жизни.',
          tags: ['Интеграционные практики', 'Видение будущего', 'Новое качество жизни'] },
      ],
    },
    teacher: {
      eyebrow: 'ВАШ ПРОВОДНИК',
      name: 'Моше Ом', title: 'Мастер системы Svarga',
      cert: 'Инструктор Линь Цзи · Железная рубашка · Цигун',
      bio: 'Более 20 лет Моше Ом посвящает себя изучению и передаче интегральных духовных практик. Основатель системы Svarga — уникального синтеза восточных традиций, современной психологии и соматической работы с телом.',
      bio2: 'Провёл сотни ретритов и марафонов на трёх континентах. Более 3 000 участников прошли трансформационный путь под его руководством.',
      stats: [{ num: '20+', label: 'лет опыта' }, { num: '3 000+', label: 'участников' }, { num: '30+', label: 'стран' }],
    },
    testimonials: {
      eyebrow: 'ОТЗЫВЫ', h2: 'Истории трансформации',
      items: [
        { name: 'Анна М.', city: 'Москва',
          text: 'Марафон изменил моё отношение к себе и к жизни. За 21 день я прошла путь, который обычно занимает годы. Моше — невероятный проводник.' },
        { name: 'Дмитрий К.', city: 'Санкт-Петербург',
          text: 'Практики дыхания и медитации стали ежедневным ритуалом. Я почувствовал ясность и силу, которых не было много лет. Это работает.' },
        { name: 'Елена В.', city: 'Киев',
          text: 'Сообщество марафона — это особое пространство. Ощущение, что ты не один в своём пути. Огромная благодарность Моше и всей команде.' },
      ],
    },
    cta: {
      eyebrow: 'НАЧАТЬ ПУТЬ',
      h2a: 'Твоя трансформация', h2b: 'начинается здесь.',
      sub: 'Ограниченное количество мест. Следующий марафон стартует 1 июня 2026 года.',
      btn: 'Записаться на марафон', btn2: 'Задать вопрос',
    },
    footer: {
      copy: '© 2026 Svarga International · Моше Ом. Все права защищены.',
      links: ['О проекте', 'Практики', 'Ретриты', 'Контакты'],
    },
  },

  en: {
    nav: { about: 'About', practices: 'Practices', program: 'Program', teacher: 'Teacher', cta: 'Join Now' },
    hero: {
      eyebrow: 'Svarga International · 21-Day Marathon',
      h1a: 'Awaken.', h1b: 'Transform.',
      h1c: 'Become yourself.',
      sub: 'Integral development — body, mind, energy, consciousness.',
      cta: 'Begin Transformation', cta2: 'Learn More',
    },
    about: {
      eyebrow: 'ABOUT THE MARATHON',
      h2: 'Integral Awakening for Modern Life',
      p1: 'The Svarga Marathon is a living process of deep integration across four dimensions of being: body, mind, energy, and consciousness. Each day you receive concrete practices that work in the conditions of real life.',
      p2: 'We unite ancient traditions with modern psychology, somatic practices, and energy work — creating a powerful synergistic effect of transformation.',
      stats: [{ num: '3,000+', label: 'participants' }, { num: '20+', label: 'years practice' }, { num: '15+', label: 'countries' }],
    },
    practices: {
      eyebrow: 'WHAT YOU WILL RECEIVE', h2: 'Marathon Practices',
      items: [
        { title: 'Meditations', desc: 'Daily meditative practices to deepen awareness and cultivate inner peace.' },
        { title: 'Breathwork', desc: 'Pranayama and breathwork techniques for cleansing and activating vital energy.' },
        { title: 'Energy Techniques', desc: 'Subtle body work, qigong, and life-force management practices.' },
        { title: 'Mindset Transformation', desc: 'Reprogramming limiting beliefs and creating new neural pathways.' },
        { title: 'Emotional Balance', desc: 'Accepting, integrating, and transforming emotions as a source of inner strength.' },
        { title: 'Integral Development', desc: 'A holistic approach to growth through work with all aspects of the self.' },
        { title: 'Community Support', desc: 'A living community of like-minded seekers and support at every step of the way.' },
      ],
    },
    program: {
      eyebrow: 'PROGRAM', h2: '21 Days of Transformation',
      weeks: [
        { num: '01', days: 'Days 1–7',  title: 'Cleansing & Awakening',
          desc: 'Release accumulated tension and activate primary vitality. Form a daily practice ritual and experience the depth of your own body for the first time.',
          tags: ['Cleansing Meditation', 'Breath Activation', 'Body & Awareness'] },
        { num: '02', days: 'Days 8–14', title: 'Transformation & Integration',
          desc: 'Deep work with beliefs and emotional patterns. Reprogramming the mind, opening new states of consciousness and releasing blockages.',
          tags: ['Shadow Work', 'Energy Integration', 'New Neural Pathways'] },
        { num: '03', days: 'Days 15–21', title: 'Anchoring New Reality',
          desc: 'Integrate all practices into the fabric of daily life. Step into a new level of awareness, vitality, and quality of life.',
          tags: ['Integration Practices', 'Future Vision', 'New Quality of Life'] },
      ],
    },
    teacher: {
      eyebrow: 'YOUR GUIDE',
      name: 'Moshe Om', title: 'Master of the Svarga System',
      cert: 'Lin Tzi Instructor · Iron Shirt · Qigong',
      bio: 'For over 20 years, Moshe Om has dedicated himself to studying and transmitting integral spiritual practices. He is the founder of the Svarga system — a unique synthesis of Eastern traditions, modern psychology, and somatic work.',
      bio2: 'He has conducted hundreds of retreats and marathons across three continents. Over 3,000 participants have undergone transformational journeys under his guidance.',
      stats: [{ num: '20+', label: 'years experience' }, { num: '3,000+', label: 'participants' }, { num: '30+', label: 'countries' }],
    },
    testimonials: {
      eyebrow: 'TESTIMONIALS', h2: 'Stories of Transformation',
      items: [
        { name: 'Anna M.', city: 'Moscow',
          text: 'The marathon changed my relationship with myself and life. In 21 days I traveled a path that usually takes years. Moshe is an incredible guide.' },
        { name: 'Dmitry K.', city: 'St. Petersburg',
          text: 'Breathing and meditation practices have become a daily ritual. I felt clarity and strength that hadn\'t been there for many years. It works.' },
        { name: 'Elena V.', city: 'Kyiv',
          text: 'The marathon community is a special space. The feeling that you\'re not alone on your path. Deep gratitude to Moshe and the whole team.' },
      ],
    },
    cta: {
      eyebrow: 'BEGIN YOUR PATH',
      h2a: 'Your transformation', h2b: 'starts here.',
      sub: 'Limited spots available. The next marathon begins June 1, 2026.',
      btn: 'Join the Marathon', btn2: 'Ask a Question',
    },
    footer: {
      copy: '© 2026 Svarga International · Moshe Om. All rights reserved.',
      links: ['About', 'Practices', 'Retreats', 'Contact'],
    },
  },
};

// ══════════════════════════════════════════════════════
// UTILITIES
// ══════════════════════════════════════════════════════
function useScrollReveal() {
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function svargaScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - 72;
  window.scrollTo({ top, behavior: 'smooth' });
}

// ══════════════════════════════════════════════════════
// PARTICLE CANVAS
// ══════════════════════════════════════════════════════
function ParticleCanvas() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.3 + 0.4,
      vx: (Math.random() - 0.5) * 0.22,
      vy: -(Math.random() * 0.32 + 0.07),
      o: Math.random() * 0.45 + 0.12,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,168,110,${p.o})`; ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.y < -4) { p.y = h + 4; p.x = Math.random() * w; }
        if (p.x < -4) p.x = w + 4;
        if (p.x > w + 4) p.x = -4;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);
  return <canvas ref={ref} style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:2 }} />;
}

// ══════════════════════════════════════════════════════
// HERO
// ══════════════════════════════════════════════════════
function HeroSection({ lang }) {
  const t = SVARGA_T[lang].hero;
  return (
    <section id="hero" style={{ position:'relative', height:'100vh', minHeight:640, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, zIndex:0, backgroundImage:'url(assets/gen1.png)', backgroundSize:'cover', backgroundPosition:'center 30%' }} />
      <div style={{ position:'absolute', inset:0, zIndex:1, background:`radial-gradient(ellipse 75% 65% at 50% 48%, transparent 0%, oklch(0.09 0.016 258 / 0.52) 100%), linear-gradient(to bottom, oklch(0.09 0.016 258 / 0.58) 0%, oklch(0.09 0.016 258 / 0.22) 38%, oklch(0.09 0.016 258 / 0.68) 72%, oklch(0.09 0.016 258 / 0.97) 100%)` }} />
      <ParticleCanvas />
      <div style={{ position:'relative', zIndex:3, maxWidth:880, padding:'0 24px' }}>
        <div className="hero-line-1" style={{ marginBottom:28 }}>
          <img src="assets/LOGO.jpg" alt="Moshe Om · Svarga International"
            style={{ width:88, height:88, borderRadius:'50%', objectFit:'cover', margin:'0 auto', border:'1px solid oklch(0.79 0.09 84 / 0.35)', boxShadow:'0 0 48px oklch(0.79 0.09 84 / 0.22)' }} />
        </div>
        <div className="eyebrow hero-line-2" style={{ marginBottom:30, opacity:0.82 }}>{t.eyebrow}</div>
        <h1 className="hero-line-3" style={{ fontFamily:'var(--font-display)', fontSize:'clamp(52px,8.5vw,104px)', fontWeight:300, lineHeight:1.04, letterSpacing:'-0.01em', marginBottom:6 }}>
          {t.h1a}<br />{t.h1b}
        </h1>
        <h2 className="hero-line-4" style={{ fontFamily:'var(--font-display)', fontSize:'clamp(30px,4.8vw,58px)', fontWeight:300, fontStyle:'italic', color:'var(--gold)', lineHeight:1.1, marginBottom:28 }}>
          {t.h1c}
        </h2>
        <p className="hero-line-5" style={{ fontFamily:'var(--font-body)', fontSize:'clamp(14px,1.6vw,17px)', color:'var(--text-2)', fontWeight:300, lineHeight:1.75, letterSpacing:'0.03em', maxWidth:520, margin:'0 auto 48px' }}>
          {t.sub}
        </p>
        <div className="hero-line-5" style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
          <button className="btn-primary glow-pulse" onClick={() => svargaScrollTo('cta')}>{t.cta}</button>
          <button className="btn-ghost" onClick={() => svargaScrollTo('about')}>{t.cta2}</button>
        </div>
      </div>
      <div className="scroll-drop" style={{ position:'absolute', bottom:32, zIndex:3, display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
        <div style={{ width:1, height:52, background:'linear-gradient(to bottom, transparent, var(--gold))', opacity:0.55 }} />
        <div style={{ width:5, height:5, borderRadius:'50%', background:'var(--gold)', opacity:0.6 }} />
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════
// ABOUT
// ══════════════════════════════════════════════════════
function AboutSection({ lang }) {
  const t = SVARGA_T[lang].about;
  const labelStyle = { fontFamily:'var(--font-display)', fontSize:'clamp(32px,4.5vw,52px)', fontWeight:400, color:'var(--sage)', lineHeight:1 };
  const captionStyle = { fontSize:'0.78rem', color:'var(--text-dark-2)', marginTop:7, letterSpacing:'0.04em' };
  return (
    <section id="about" style={{ background:'var(--cream)', color:'var(--text-dark)' }}>
      <div className="section-pad max-w" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,460px),1fr))', gap:'clamp(48px,7vw,96px)', alignItems:'center' }}>
        <div>
          <div className="reveal" style={{ display:'flex', alignItems:'center', gap:14, marginBottom:28 }}>
            <div style={{ width:40, height:1, background:'linear-gradient(90deg,var(--sage),transparent)', opacity:0.7 }} />
            <span className="eyebrow eyebrow-sage">{t.eyebrow}</span>
          </div>
          <h2 className="reveal d1" style={{ fontFamily:'var(--font-display)', fontSize:'clamp(30px,4.2vw,52px)', fontWeight:400, lineHeight:1.15, letterSpacing:'-0.01em', color:'var(--text-dark)', marginBottom:26 }}>
            {t.h2}
          </h2>
          <p className="reveal d2" style={{ fontSize:'0.97rem', lineHeight:1.82, color:'var(--text-dark-2)', fontWeight:300, marginBottom:18 }}>{t.p1}</p>
          <p className="reveal d3" style={{ fontSize:'0.97rem', lineHeight:1.82, color:'var(--text-dark-2)', fontWeight:300 }}>{t.p2}</p>
          <div className="reveal d4" style={{ display:'flex', gap:40, marginTop:48, flexWrap:'wrap' }}>
            {t.stats.map((s,i) => (
              <div key={i}>
                <div style={labelStyle}>{s.num}</div>
                <div style={captionStyle}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal-right" style={{ position:'relative' }}>
          <img src="assets/gen2.png" alt="Spiritual practice at golden hour"
            style={{ width:'100%', aspectRatio:'3/4', objectFit:'cover', objectPosition:'center top', borderRadius:4 }} />
          <div style={{ position:'absolute', top:-14, right:-14, width:64, height:64, border:'1px solid var(--sage)', borderLeft:'none', borderBottom:'none', opacity:0.3 }} />
          <div style={{ position:'absolute', bottom:-14, left:-14, width:64, height:64, border:'1px solid var(--sage)', borderRight:'none', borderTop:'none', opacity:0.3 }} />
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════
// PRACTICES
// ══════════════════════════════════════════════════════
const PRACTICE_ICONS = [
  <svg key="med" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="16" cy="16" r="11"/><circle cx="16" cy="16" r="5.5"/><circle cx="16" cy="16" r="1.8" fill="currentColor" stroke="none"/></svg>,
  <svg key="br"  viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 16 Q7.5 9 11 16 Q14.5 23 18 16 Q21.5 9 25 16 Q26.5 19.5 28 16"/></svg>,
  <svg key="en"  viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4 L18.5 13.5 L28 16 L18.5 18.5 L16 28 L13.5 18.5 L4 16 L13.5 13.5 Z"/></svg>,
  <svg key="mn"  viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 5 L29 27 L3 27 Z"/><circle cx="16" cy="21" r="2.8"/></svg>,
  <svg key="hrt" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 27 C16 27 5 19.5 5 12C5 8.7 7.7 6 11 6C13 6 14.8 7 16 8.6C17.2 7 19 6 21 6C24.3 6 27 8.7 27 12C27 19.5 16 27 16 27Z"/></svg>,
  <svg key="int" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="16" cy="16" r="11"/><path d="M16 5 L16 27 M5 16 L27 16 M8.5 8.5 L23.5 23.5 M23.5 8.5 L8.5 23.5"/></svg>,
  <svg key="com" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="16" cy="9" r="4.5"/><circle cx="8" cy="23" r="4"/><circle cx="24" cy="23" r="4"/><path d="M12.5 13 L10 19 M19.5 13 L22 19 M12 23 L20 23"/></svg>,
];

function PracticeCard({ icon, title, desc, idx }) {
  const delay = `d${Math.min(idx + 1, 7)}`;
  return (
    <div className={`practice-card glass-card reveal ${delay}`} style={{ padding:'34px 26px', display:'flex', flexDirection:'column', gap:14 }}>
      <div style={{ width:34, height:34, color:'var(--gold)' }}>{icon}</div>
      <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.3rem', fontWeight:400, letterSpacing:'0.01em' }}>{title}</h3>
      <p style={{ fontSize:'0.86rem', color:'var(--text-2)', lineHeight:1.78, fontWeight:300 }}>{desc}</p>
    </div>
  );
}

function PracticesSection({ lang }) {
  const t = SVARGA_T[lang].practices;
  return (
    <section id="practices" style={{ background:'var(--deep)', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:'url(assets/gen5.png)', backgroundSize:'cover', backgroundPosition:'center', opacity:0.07, zIndex:0 }} />
      <div className="section-pad max-w" style={{ position:'relative', zIndex:1 }}>
        <div className="mobile-center" style={{ display:'flex', flexDirection:'column', alignItems:'center', marginBottom:'clamp(48px,6vw,80px)', textAlign:'center' }}>
          <div className="reveal" style={{ display:'flex', alignItems:'center', gap:14, marginBottom:20 }}>
            <div className="gold-line" /><span className="eyebrow">{t.eyebrow}</span><div className="gold-line gold-line-rev" />
          </div>
          <h2 className="reveal d1" style={{ fontFamily:'var(--font-display)', fontSize:'clamp(30px,4.2vw,52px)', fontWeight:400, lineHeight:1.15, letterSpacing:'-0.01em' }}>
            {t.h2}
          </h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(100%,240px),1fr))', gap:20 }}>
          {t.items.map((item, i) => <PracticeCard key={i} icon={PRACTICE_ICONS[i]} title={item.title} desc={item.desc} idx={i} />)}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════
// PROGRAM
// ══════════════════════════════════════════════════════
function ProgramSection({ lang }) {
  const t = SVARGA_T[lang].program;
  return (
    <section id="program" style={{ background:'var(--surface)' }}>
      <div className="section-pad max-w" style={{ maxWidth:1100 }}>
        <div style={{ textAlign:'center', marginBottom:'clamp(48px,6vw,80px)' }}>
          <div className="reveal" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:14, marginBottom:20 }}>
            <div className="gold-line" /><span className="eyebrow">{t.eyebrow}</span><div className="gold-line gold-line-rev" />
          </div>
          <h2 className="reveal d1" style={{ fontFamily:'var(--font-display)', fontSize:'clamp(30px,4.2vw,52px)', fontWeight:400, lineHeight:1.15, letterSpacing:'-0.01em' }}>
            {t.h2}
          </h2>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:40 }}>
          {t.weeks.map((w, i) => (
            <div key={i} className={`program-block reveal d${i+1}`} style={{ paddingLeft:32, paddingBottom:8 }}>
              <div style={{ fontSize:'0.68rem', color:'var(--gold-dim)', letterSpacing:'0.18em', textTransform:'uppercase', fontFamily:'var(--font-body)', marginBottom:10 }}>{w.days}</div>
              <div style={{ display:'flex', alignItems:'baseline', gap:20, marginBottom:14, flexWrap:'wrap' }}>
                <span style={{ fontFamily:'var(--font-display)', fontSize:'clamp(56px,7vw,88px)', fontWeight:300, lineHeight:0.82, color:'oklch(0.79 0.09 84 / 0.11)', letterSpacing:'-0.02em', userSelect:'none' }}>{w.num}</span>
                <h3 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(22px,2.8vw,34px)', fontWeight:400 }}>{w.title}</h3>
              </div>
              <p style={{ fontSize:'0.9rem', color:'var(--text-2)', lineHeight:1.78, fontWeight:300, maxWidth:620, marginBottom:20 }}>{w.desc}</p>
              <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
                {w.tags.map((tag, j) => (
                  <span key={j} style={{ padding:'6px 16px', border:'1px solid oklch(0.79 0.09 84 / 0.18)', borderRadius:2, fontSize:'0.72rem', color:'var(--text-3)', letterSpacing:'0.05em', fontFamily:'var(--font-body)' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════
// TEACHER
// ══════════════════════════════════════════════════════
function TeacherSection({ lang }) {
  const t = SVARGA_T[lang].teacher;
  return (
    <section id="teacher" style={{ background:'var(--deep)', overflow:'hidden' }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,460px),1fr))', minHeight:600 }}>
        <div style={{ position:'relative', minHeight:480, overflow:'hidden' }}>
          <img src="assets/vipassana.png" alt="Moshe Om leading retreat"
            style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' }} />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, transparent 55%, var(--deep) 100%)' }} />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, var(--deep) 0%, transparent 30%)' }} />
        </div>
        <div className="section-pad" style={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
          <div className="reveal" style={{ display:'flex', alignItems:'center', gap:14, marginBottom:28 }}>
            <div className="gold-line" /><span className="eyebrow">{t.eyebrow}</span>
          </div>
          <h2 className="reveal d1" style={{ fontFamily:'var(--font-display)', fontSize:'clamp(40px,5vw,64px)', fontWeight:400, lineHeight:1.08, letterSpacing:'-0.01em', marginBottom:8 }}>{t.name}</h2>
          <div className="reveal d2" style={{ fontFamily:'var(--font-display)', fontSize:'1.15rem', fontStyle:'italic', color:'var(--gold)', marginBottom:8 }}>{t.title}</div>
          <div className="reveal d2" style={{ fontSize:'0.72rem', color:'var(--text-3)', letterSpacing:'0.12em', marginBottom:32 }}>{t.cert}</div>
          <p className="reveal d3" style={{ fontSize:'0.93rem', color:'var(--text-2)', lineHeight:1.82, fontWeight:300, marginBottom:16 }}>{t.bio}</p>
          <p className="reveal d4" style={{ fontSize:'0.93rem', color:'var(--text-2)', lineHeight:1.82, fontWeight:300, marginBottom:40 }}>{t.bio2}</p>
          <div className="reveal d5" style={{ display:'flex', gap:36, flexWrap:'wrap' }}>
            {t.stats.map((s,i) => (
              <div key={i}>
                <div style={{ fontFamily:'var(--font-display)', fontSize:'clamp(26px,3.2vw,40px)', fontWeight:400, color:'var(--gold)', lineHeight:1 }}>{s.num}</div>
                <div style={{ fontSize:'0.72rem', color:'var(--text-3)', marginTop:6, letterSpacing:'0.08em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════
// TESTIMONIALS
// ══════════════════════════════════════════════════════
function TestimonialsSection({ lang }) {
  const t = SVARGA_T[lang].testimonials;
  return (
    <section id="testimonials" style={{ background:'var(--deep)', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:'url(assets/retreat3.png)', backgroundSize:'cover', backgroundPosition:'center', opacity:0.055, zIndex:0 }} />
      <div className="section-pad max-w" style={{ position:'relative', zIndex:1 }}>
        <div style={{ textAlign:'center', marginBottom:'clamp(48px,6vw,80px)' }}>
          <div className="reveal" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:14, marginBottom:20 }}>
            <div className="gold-line" /><span className="eyebrow">{t.eyebrow}</span><div className="gold-line gold-line-rev" />
          </div>
          <h2 className="reveal d1" style={{ fontFamily:'var(--font-display)', fontSize:'clamp(30px,4.2vw,52px)', fontWeight:400, lineHeight:1.15, letterSpacing:'-0.01em' }}>
            {t.h2}
          </h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(100%,300px),1fr))', gap:24 }}>
          {t.items.map((item, i) => (
            <div key={i} className={`testimonial-card glass-card reveal d${i+1}`} style={{ padding:'34px 30px' }}>
              <div style={{ display:'flex', gap:3, marginBottom:16 }}>
                {[...Array(5)].map((_,j) => <span key={j} style={{ color:'var(--gold)', fontSize:13 }}>★</span>)}
              </div>
              <p style={{ fontFamily:'var(--font-display)', fontSize:'1.12rem', fontWeight:400, fontStyle:'italic', lineHeight:1.68, color:'var(--text-1)', marginBottom:24 }}>"{item.text}"</p>
              <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                <div style={{ width:36, height:36, borderRadius:'50%', background:'oklch(0.79 0.09 84 / 0.12)', border:'1px solid oklch(0.79 0.09 84 / 0.28)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontSize:'0.9rem', color:'var(--gold)', fontFamily:'var(--font-display)' }}>
                  {item.name[0]}
                </div>
                <div>
                  <div style={{ fontSize:'0.86rem', fontWeight:500 }}>{item.name}</div>
                  <div style={{ fontSize:'0.72rem', color:'var(--text-3)', letterSpacing:'0.06em' }}>{item.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════
// CTA
// ══════════════════════════════════════════════════════
function CTASection({ lang }) {
  const t = SVARGA_T[lang].cta;
  return (
    <section id="cta" style={{ position:'relative', padding:'clamp(100px,13vw,180px) clamp(24px,7.5vw,112px)', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:'url(assets/gen9.png)', backgroundSize:'cover', backgroundPosition:'center', zIndex:0 }} />
      <div style={{ position:'absolute', inset:0, zIndex:1, background:`radial-gradient(ellipse 85% 75% at 50% 55%, oklch(0.09 0.016 258 / 0.48) 0%, oklch(0.09 0.016 258 / 0.90) 100%), linear-gradient(to bottom, oklch(0.09 0.016 258 / 0.75), oklch(0.09 0.016 258 / 0.45) 50%, oklch(0.09 0.016 258 / 0.75))` }} />
      <div style={{ position:'relative', zIndex:2, textAlign:'center', maxWidth:740 }}>
        <div className="reveal" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:14, marginBottom:28 }}>
          <div className="gold-line" /><span className="eyebrow">{t.eyebrow}</span><div className="gold-line gold-line-rev" />
        </div>
        <h2 className="reveal d1" style={{ fontFamily:'var(--font-display)', fontSize:'clamp(40px,6vw,80px)', fontWeight:300, lineHeight:1.1, letterSpacing:'-0.01em', marginBottom:22 }}>
          {t.h2a}<br /><em style={{ fontStyle:'italic', color:'var(--gold)' }}>{t.h2b}</em>
        </h2>
        <p className="reveal d2" style={{ fontSize:'0.92rem', color:'var(--text-2)', fontWeight:300, lineHeight:1.78, letterSpacing:'0.025em', marginBottom:48 }}>{t.sub}</p>
        <div className="reveal d3" style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
          <button className="btn-primary glow-pulse">{t.btn}</button>
          <button className="btn-ghost">{t.btn2}</button>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════
// FOOTER
// ══════════════════════════════════════════════════════
function FooterSection({ lang }) {
  const t = SVARGA_T[lang].footer;
  return (
    <footer style={{ background:'var(--surface)', borderTop:'1px solid oklch(0.79 0.09 84 / 0.10)', padding:'44px clamp(24px,7.5vw,112px)', display:'flex', flexWrap:'wrap', gap:20, alignItems:'center', justifyContent:'space-between' }}>
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <img src="assets/LOGO.jpg" alt="Svarga" style={{ width:32, height:32, borderRadius:'50%', objectFit:'cover', border:'1px solid oklch(0.79 0.09 84 / 0.28)' }} />
        <span style={{ fontSize:'0.72rem', color:'var(--text-3)', letterSpacing:'0.06em' }}>{t.copy}</span>
      </div>
      <nav style={{ display:'flex', gap:28, flexWrap:'wrap' }}>
        {t.links.map((l,i) => (
          <a key={i} href="#" style={{ fontSize:'0.72rem', color:'var(--text-3)', textDecoration:'none', letterSpacing:'0.06em', transition:'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color='var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color='var(--text-3)'}>{l}</a>
        ))}
      </nav>
    </footer>
  );
}

// ══════════════════════════════════════════════════════
// EXPORTS
// ══════════════════════════════════════════════════════
Object.assign(window, {
  SVARGA_T, useScrollReveal, svargaScrollTo,
  HeroSection, AboutSection, PracticesSection, ProgramSection,
  TeacherSection, TestimonialsSection, CTASection, FooterSection,
});
