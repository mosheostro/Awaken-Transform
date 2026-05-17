// app.jsx — Nav, Tweaks, App root

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "ru"
}/*EDITMODE-END*/;

// ══════════════════════════════════════════════════════
// TWEAKS PANEL
// ══════════════════════════════════════════════════════
function SvargaTweaksPanel({ lang, setLang, onClose }) {
  const panelStyle = {
    position:'fixed', bottom:24, right:24, zIndex:9999,
    background:'oklch(0.13 0.014 252)',
    border:'1px solid oklch(0.79 0.09 84 / 0.22)',
    borderRadius:4,
    padding:'22px 24px',
    width:230,
    boxShadow:'0 24px 64px oklch(0 0 0 / 0.55)',
    backdropFilter:'blur(20px)',
    WebkitBackdropFilter:'blur(20px)',
    fontFamily:'var(--font-body)',
  };
  const sectionLabel = { fontSize:'0.66rem', color:'var(--text-3)', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:10 };
  const segBtn = (active) => ({
    flex:1, padding:'8px 0',
    background: active ? 'var(--gold)' : 'transparent',
    color: active ? 'var(--deep)' : 'var(--text-2)',
    border: `1px solid ${active ? 'var(--gold)' : 'oklch(0.93 0.01 82 / 0.18)'}`,
    borderRadius:2, cursor:'pointer',
    fontSize:'0.78rem', fontFamily:'var(--font-body)',
    transition:'all 0.2s',
  });

  return (
    <div style={panelStyle}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:20 }}>
        <span style={{ fontSize:'0.66rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--gold)' }}>Tweaks</span>
        <button onClick={onClose} style={{ background:'none', border:'none', color:'var(--text-3)', cursor:'pointer', fontSize:'1.1rem', lineHeight:1, padding:0 }}>✕</button>
      </div>

      {/* Language */}
      <div style={{ marginBottom:16 }}>
        <div style={sectionLabel}>Язык / Language</div>
        <div style={{ display:'flex', gap:8 }}>
          <button style={segBtn(lang==='ru')} onClick={() => setLang('ru')}>РУС</button>
          <button style={segBtn(lang==='en')} onClick={() => setLang('en')}>ENG</button>
        </div>
      </div>

      {/* Quick links */}
      <div>
        <div style={sectionLabel}>Перейти</div>
        <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
          {['hero','about','practices','program','teacher','cta'].map(id => (
            <button key={id} onClick={() => svargaScrollTo(id)} style={{
              background:'none', border:'none', cursor:'pointer', textAlign:'left',
              fontSize:'0.76rem', color:'var(--text-3)', fontFamily:'var(--font-body)',
              letterSpacing:'0.06em', padding:'3px 0',
              transition:'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color='var(--gold)'}
              onMouseLeave={e => e.currentTarget.style.color='var(--text-3)'}
            >
              #{id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════
// NAV BAR
// ══════════════════════════════════════════════════════
function NavBar({ lang, setLang }) {
  const t = SVARGA_T[lang].nav;
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    window.addEventListener('scroll', onScroll, { passive:true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: t.about,     id: 'about' },
    { label: t.practices, id: 'practices' },
    { label: t.program,   id: 'program' },
    { label: t.teacher,   id: 'teacher' },
  ];

  const linkStyle = {
    background:'none', border:'none', cursor:'pointer', padding:0,
    fontFamily:'var(--font-body)', fontSize:'0.76rem', fontWeight:400,
    color:'var(--text-2)', letterSpacing:'0.09em', textTransform:'uppercase',
    transition:'color 0.2s',
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''} style={{
      position:'fixed', top:0, left:0, right:0, zIndex:100,
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'0 clamp(24px,6vw,80px)', height:72,
      background:'transparent',
      transition:'background 0.4s, backdrop-filter 0.4s, border-color 0.4s',
    }}>
      {/* Logo mark */}
      <button onClick={() => window.scrollTo({ top:0, behavior:'smooth' })} style={{
        background:'none', border:'none', cursor:'pointer',
        display:'flex', alignItems:'center', gap:10,
      }}>
        <img src="assets/LOGO.jpg" alt="Svarga" style={{ width:36, height:36, borderRadius:'50%', objectFit:'cover', border:'1px solid oklch(0.79 0.09 84 / 0.32)' }} />
        <div style={{ display:'flex', flexDirection:'column', lineHeight:1.15, textAlign:'left' }}>
          <span style={{ fontFamily:'var(--font-display)', fontSize:'1.08rem', fontWeight:400, color:'var(--text-1)', letterSpacing:'0.04em' }}>Moshe Om</span>
          <span style={{ fontFamily:'var(--font-body)', fontSize:'0.58rem', color:'var(--gold)', letterSpacing:'0.22em', textTransform:'uppercase' }}>Svarga International</span>
        </div>
      </button>

      {/* Desktop links */}
      <div className="mobile-hide" style={{ display:'flex', alignItems:'center', gap:36 }}>
        {links.map(lnk => (
          <button key={lnk.id} style={linkStyle}
            onClick={() => svargaScrollTo(lnk.id)}
            onMouseEnter={e => e.currentTarget.style.color='var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color='var(--text-2)'}
          >{lnk.label}</button>
        ))}
      </div>

      {/* Right: lang toggle + CTA */}
      <div className="mobile-hide" style={{ display:'flex', alignItems:'center', gap:16 }}>
        <button onClick={() => setLang(lang==='ru'?'en':'ru')} style={{
          background:'none', border:'1px solid oklch(0.93 0.01 82 / 0.18)',
          borderRadius:2, padding:'6px 12px', cursor:'pointer',
          fontFamily:'var(--font-body)', fontSize:'0.68rem', fontWeight:500,
          color:'var(--text-3)', letterSpacing:'0.12em', textTransform:'uppercase',
          transition:'border-color 0.2s, color 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='var(--gold)'; e.currentTarget.style.color='var(--gold)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='oklch(0.93 0.01 82 / 0.18)'; e.currentTarget.style.color='var(--text-3)'; }}
        >{lang==='ru'?'EN':'RU'}</button>
        <button className="btn-primary" style={{ padding:'10px 26px', fontSize:'0.72rem' }}
          onClick={() => svargaScrollTo('cta')}>{t.cta}</button>
      </div>
    </nav>
  );
}

// ══════════════════════════════════════════════════════
// APP
// ══════════════════════════════════════════════════════
function App() {
  const [lang, setLang] = React.useState(TWEAK_DEFAULTS.lang || 'ru');
  const [tweaksVisible, setTweaksVisible] = React.useState(false);

  React.useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode')   setTweaksVisible(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweaksVisible(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type:'__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  useScrollReveal();

  const handleSetLang = (l) => {
    setLang(l);
    window.parent.postMessage({ type:'__edit_mode_set_keys', edits:{ lang:l } }, '*');
  };

  return (
    <>
      <NavBar lang={lang} setLang={handleSetLang} />
      <HeroSection          lang={lang} />
      <AboutSection         lang={lang} />
      <PracticesSection     lang={lang} />
      <ProgramSection       lang={lang} />
      <TeacherSection       lang={lang} />
      <TestimonialsSection  lang={lang} />
      <CTASection           lang={lang} />
      <FooterSection        lang={lang} />
      {tweaksVisible && (
        <SvargaTweaksPanel
          lang={lang}
          setLang={handleSetLang}
          onClose={() => {
            setTweaksVisible(false);
            window.parent.postMessage({ type:'__edit_mode_dismissed' }, '*');
          }}
        />
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
