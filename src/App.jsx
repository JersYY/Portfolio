import { useEffect, useRef, useState } from 'react'

const profile = {
  name: 'Steven Anthony',
  title: 'Offensive Security Learner | CTF Competitor',
  location: 'Malang, East Java, Indonesia',
  email: 'stevenanthony881@gmail.com',
  phone: '+62 812-8889-7723',
  linkedin: 'https://www.linkedin.com/in/stevenn28/',
  github: 'https://github.com/JersYY',
  instagram: 'https://instagram.com/stevanth_',
  summary:
    'I am a cybersecurity learner focused on offensive workflows, vulnerability research, and adversarial thinking through labs, CTFs, and practical penetration testing.',
}

const navItems = [
  { label: 'Home', path: '/home' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Achievement', path: '/achievement' },
  { label: 'Contact', path: '/contact' },
]

const education = [
  {
    school: 'Universitas Brawijaya',
    degree: 'Bachelor of Computer Science (Informatics Engineering)',
    period: 'Sep 2023 - Present'
  },
]

const experience = [
  {
    role: 'Penetration Tester',
    org: 'Client Security Engagement',
    period: 'Jun 2025 - Dec 2025',
    bullets: [
      'Executed vulnerability assessments on web and network assets.',
      'Documented findings with actionable remediation plans.',
    ],
  },
  {
    role: 'Cybersecurity Bootcamp Participant',
    org: 'SMT Security Manpower Training',
    period: 'Jul 2025 - Aug 2025',
    bullets: ['Completed intensive security training with practical defense and offense modules.'],
  },
  {
    role: 'Cybersecurity Student',
    org: 'POROS Open Source Organization',
    period: 'Apr 2024 - Present',
    bullets: ['Active in Linux-focused and open-source cybersecurity learning.'],
  },
]

const projects = [
  {
    name: 'CTF Writeups',
    stack: ['CTF', 'Web Security', 'Forensics', 'Reverse Engineering'],
    outcome: 'Collection of my CTF writeups, solutions, and learning notes from different challenges.',
    status: 'Knowledge Base',
    link: 'https://github.com/JersYY/CTF-Writeups',
    linkLabel: 'GitHub Link',
    linkHint: 'Open Repository',
    image: '/project-ctf-writeups.png',
    imageFit: 'cover',
    imageRatio: '2 / 1',
    imagePosition: 'center',
  },
  {
    name: 'Thrifts.',
    stack: ['Web App', 'Marketplace', 'Frontend', 'Backend'],
    outcome: 'A thrifting marketplace website focused on product discovery, listing flow, and marketplace experience.',
    status: 'Application',
    link: 'https://github.com/G4l1le30/authenYt',
    linkLabel: 'GitHub Link',
    linkHint: 'Open Repository',
    image: '/thrifts.png',
    imageFit: 'contain',
    imagePosition: 'center top',
    imageRatio: '2 / 1',
  },
  {
    name: 'LittleSteps',
    stack: ['Mobile', 'Mother & Baby', 'Service Platform'],
    outcome:
      'An application for mothers and babies with a main babysitter rental feature branded as LittleSteps.',
    status: 'Mobile Project',
    link: 'https://github.com/SakaGintoki/Mobile-App-Development',
    linkLabel: 'GitHub Link',
    linkHint: 'Open Repository',
    image: 'https://cmksgbpzjakscqzqutja.supabase.co/storage/v1/render/image/public/portfolio-assets/img/LittleKids.png?width=1800&quality=82&resize=contain',
    imageFit: 'cover',
    imagePosition: 'center',
    imageRatio: '2 / 1',
  },
  {
    name: 'Interstellar',
    stack: ['UI/UX', '3D Models', 'Audio System', 'Vercel'],
    outcome:
      'Designed UI, created immersive 3D objects from atom to universe scale, implemented atmospheric audio, and deployed to Vercel.',
    status: 'Immersive Experience',
    link: 'https://github.com/SakaGintoki/Interstellar',
    linkLabel: 'GitHub Link',
    linkHint: 'Open Repository',
    image: '/interstellar.png',
    imageFit: 'cover',
    imagePosition: 'center',
    imageRatio: '2 / 1',
  },
  {
    name: 'Hology7 CTF',
    stack: ['CTF Challenge', 'Problem Setter', 'Cybersecurity'],
    outcome: 'Contributed as a problem setter for CTF challenges.',
    status: 'CTF Organizer',
    link: 'https://github.com/hology7-ctf',
    linkLabel: 'GitHub Link',
    linkHint: 'Open Repository',
    image: '/hology.png',
    imageFit: 'contain',
    imagePosition: 'center',
    imageBackground: '#000000',
    imageRatio: '2 / 1',
  },
  {
    name: 'Kiddora',
    stack: ['UI/UX', 'Figma Prototype', 'Mobile Design'],
    outcome:
      'Kiddora helps parents find trusted childcare through verified badges and research-driven design.',
    status: 'Demo Prototype',
    link: 'https://www.figma.com/proto/nKv20vZ0eMc1lbcaPiIww4/Kiddora?page-id=1%3A3&node-id=249-2724&viewport=-3940%2C-2018%2C0.38&t=tl48gWN5NE12ucF8-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=72%3A427&show-proto-sidebar=1',
    linkLabel: 'Open Demo',
    linkHint: 'Open Prototype',
    image: 'https://cmksgbpzjakscqzqutja.supabase.co/storage/v1/render/image/public/portfolio-assets/img/Kiddora.png?width=1800&quality=82&resize=contain',
    imageFit: 'cover',
    imagePosition: 'center middle',
    imageBackground: '#000000',
    imageRatio: '2 / 1',
  },
]

const certs = [
  'Certified Web Red Team Analyst (Jan 2026)',
  'Certified Threat Intelligence and Governance Analyst - CTIGA (Jan 2026)',
  'Certified Red Team Operations Management - CRTOM (Jan 2026)',
  'Cyber Threat Intelligence 101 (Jan 2026)',
  'Ethical Hacker - Cisco Networking Academy (Jan 2026)',
]

const highlights = [
  '1st Winner - Bizznovation (Apr 2025)',
  '2nd Winner - CTF Rising Phoenix 3.0 (Mar 2025)',
  'Top 12 Online / Top 19 Overall - THCon 2025 CTF',
  '2nd Winner - Capture The Flag CodEx (Sep 2023)',
  'Bakti BCA Scholarship Awardee (2024-2025)',
]

const homeSignals = [
  { label: 'CTF Rank Push', value: 'Active', tone: 'good' },
  { label: 'Writeups Progress', value: 'Weekly', tone: 'info' },
  { label: 'Collaboration', value: 'Open', tone: 'good' },
  { label: 'Availability', value: 'Internship Ready', tone: 'info' },
]

const homeNowLearning = [
  'Web exploitation methodology',
  'Privilege escalation patterns',
  'Threat intel structuring',
  'Secure reporting workflow',
]

const homeToolkit = ['Burp Suite', 'Nmap', 'Wireshark', 'Linux', 'Python']

function normalizeRoute(pathname) {
  if (!pathname || pathname === '') return '/'
  const withPrefix = pathname.startsWith('/') ? pathname : `/${pathname}`
  return withPrefix.length > 1 ? withPrefix.replace(/\/+$/, '') : withPrefix
}

function currentRoute() {
  return normalizeRoute(window.location.pathname)
}

function useRoute() {
  const [route, setRoute] = useState(currentRoute())

  useEffect(() => {
    const onPopState = () => setRoute(currentRoute())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (path) => {
    const next = normalizeRoute(path)
    if (next !== route) {
      window.history.pushState({}, '', next)
      setRoute(next)
    }
  }

  return { route, navigate }
}

function RouteLink({ to, navigate, className, children, ...rest }) {
  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
          return
        }
        event.preventDefault()
        navigate(to)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}

function MatrixBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return undefined
    }

    const context = canvas.getContext('2d')
    const chars = '01$#@%&*+=<>/\\[]{}'
    const fontSize = 15
    let columns = 0
    let drops = []
    let rafId = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      columns = Math.floor(canvas.width / fontSize)
      drops = new Array(columns).fill(1)
    }

    const render = () => {
      context.fillStyle = 'rgba(3, 8, 17, 0.1)'
      context.fillRect(0, 0, canvas.width, canvas.height)
      context.fillStyle = 'rgba(66, 255, 210, 0.6)'
      context.font = `${fontSize}px JetBrains Mono`

      for (let index = 0; index < drops.length; index += 1) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = index * fontSize
        const y = drops[index] * fontSize
        context.fillText(char, x, y)
        if (y > canvas.height && Math.random() > 0.976) {
          drops[index] = 0
        }
        drops[index] += 1
      }

      rafId = window.requestAnimationFrame(render)
    }

    resize()
    window.addEventListener('resize', resize)
    rafId = window.requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(rafId)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-canvas" aria-hidden="true" />
}

function SectionHeader({ k, title, subtitle }) {
  return (
    <header className="section-header">
      <div className="section-bar">
        <span className="section-led" />
        <p className="key">{k}</p>
        <span className="section-line" />
        <p className="section-status">[ ONLINE ]</p>
      </div>
      <h1>{title}</h1>
      {subtitle ? <p className="subtitle">{subtitle}</p> : null}
    </header>
  )
}

function LandingPage({ navigate }) {
  return (
    <section className="landing-wrap">
      <article className="panel landing-panel">
        <p className="landing-kicker">INITIAL ACCESS</p>
        <h1 className="landing-title">Steven Anthony</h1>
        <p className="landing-subtitle">Cybersecurity Learner | Offensive Security | CTF Competitor</p>
        <blockquote className="landing-quote">
          "Security is not a product. It is a process of constant learning, testing, and improving."
        </blockquote>
        <div className="landing-cta">
          <RouteLink to="/contact" navigate={navigate} className="cta-btn primary">
            Contact Me
          </RouteLink>
          <RouteLink to="/home" navigate={navigate} className="cta-btn">
            Enter Portfolio
          </RouteLink>
        </div>
      </article>
    </section>
  )
}

function HomePage({ navigate }) {
  return (
    <>
      <SectionHeader
        k="DASHBOARD"
        title="Steven's Portfolio"
        subtitle="Clean overview of my profile, current direction, and the fastest way to navigate this site."
      />
      <div className="home-layout">
        <article className="terminal-card">
          <div className="terminal-top">
            <span />
            <span />
            <span />
            <p>ops-shell://steven/home</p>
          </div>
          <div className="terminal-body">
            <p>
              <span className="prompt">$</span> whoami
            </p>
            <p className="neon">{profile.name}</p>
            <p>{profile.title}</p>
            <p>{profile.location}</p>
            <p>
              <span className="prompt">$</span> objective
            </p>
            <p>{profile.summary}</p>
          </div>
        </article>

        <article className="panel home-actions">
          <h2>Start Here</h2>
          <p>Use these shortcuts to jump directly to the most important sections.</p>
          <div className="action-grid">
            <RouteLink to="/about" navigate={navigate} className="action-btn">
              About Me
            </RouteLink>
            <RouteLink to="/projects" navigate={navigate} className="action-btn">
              View Projects
            </RouteLink>
            <RouteLink to="/achievement" navigate={navigate} className="action-btn">
              Achievements
            </RouteLink>
            <RouteLink to="/contact" navigate={navigate} className="action-btn primary">
              Contact Me
            </RouteLink>
          </div>
          <div className="home-notes">
            <p>Current Track: Red Team Fundamentals</p>
            <p>Primary Stack: Linux + Python</p>
            <p>Mode: Labs, CTF, and practical reporting</p>
          </div>
        </article>
      </div>
      <section className="home-extra-grid">
        <article className="panel home-signal-panel">
          <h2>Live Status</h2>
          <div className="signal-grid">
            {homeSignals.map((item) => (
              <div key={item.label} className={`signal-item ${item.tone}`}>
                <p className="signal-label">{item.label}</p>
                <p className="signal-value">{item.value}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <h2>Recent Wins</h2>
          <ul className="clean-list compact">
            {highlights.slice(0, 4).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="panel">
          <h2>Now Learning</h2>
          <ul className="clean-list compact">
            {homeNowLearning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className="sub-head">Toolkit</h3>
          <div className="tags">
            {homeToolkit.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </article>
      </section>
    </>
  )
}

function ProfilePhoto() {
  const [failed, setFailed] = useState(false)
  const src = '/profile.png'

  return (
    <div className="profile-photo-slot">
      {!failed ? (
        <img src={src} alt="Steven Anthony profile" className="profile-photo" onError={() => setFailed(true)} />
      ) : (
        <div className="profile-photo-fallback">
          <p>Add `public/profile.jpg`</p>
          <span>Image will appear as a circle</span>
        </div>
      )}
    </div>
  )
}

function AboutPage() {
  const focusAreas = [
    { label: 'Web Exploitation', level: 86 },
    { label: 'Penetration Testing', level: 78 },
    { label: 'Reverse Engineering', level: 64 },
    { label: 'Threat Intelligence', level: 72 },
  ]

  const aboutStats = [
    { label: 'CTF Wins', value: '04+' },
    { label: 'Certs', value: '05' },
    { label: 'Focus', value: 'Red Team' },
  ]

  return (
    <>
      <SectionHeader k="ABOUT" title="About Me" subtitle="Short personal background and current professional direction." />

      <article className="panel about-id">
        <div className="about-id-photo">
          <ProfilePhoto />
          <span className="about-id-scan" aria-hidden="true" />
        </div>
        <div className="about-id-info">
          <p className="about-id-tag">// OPERATOR DOSSIER</p>
          <h2 className="about-id-name">{profile.name}</h2>
          <p className="about-id-role">{profile.title}</p>
          <ul className="about-meta">
            <li>
              <span>LOCATION</span>
              <strong>{profile.location}</strong>
            </li>
            <li>
              <span>CLEARANCE</span>
              <strong className="ok">Internship Ready</strong>
            </li>
            <li>
              <span>DISCIPLINE</span>
              <strong>Offensive Security</strong>
            </li>
          </ul>
          <div className="about-stats">
            {aboutStats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </article>

      <div className="about-grid">
        <article className="panel about-bio">
          <h2>My Background</h2>
          <p>
            I am a Computer Science student at Universitas Brawijaya, focused on cybersecurity with strong interest in
            offensive security workflows.
          </p>
          <p>
            I regularly train through CTFs, hands-on labs, and penetration testing practice while improving how I
            communicate findings into practical remediation steps.
          </p>
          <h3 className="sub-head">Education</h3>
          {education.map((item) => (
            <div className="entry" key={item.school}>
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
              <p className="muted">{item.period}</p>
              {item.detail ? <p className="muted">{item.detail}</p> : null}
            </div>
          ))}
        </article>

        <article className="panel about-focus">
          <h2>Focus Areas</h2>
          <div className="focus-list">
            {focusAreas.map((area) => (
              <div className="focus-item" key={area.label}>
                <div className="focus-top">
                  <span>{area.label}</span>
                  <span className="focus-pct">{area.level}%</span>
                </div>
                <div className="focus-bar">
                  <span style={{ width: `${area.level}%` }} />
                </div>
              </div>
            ))}
          </div>
          <h3 className="sub-head">Toolkit</h3>
          <div className="tags about-toolkit">
            {homeToolkit.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </article>
      </div>
    </>
  )
}

function ExperiencePage() {
  const itemRefs = useRef([])
  const railRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0

    const update = () => {
      const vh = window.innerHeight

      itemRefs.current.forEach((node) => {
        if (!node) return
        const rect = node.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const delta = (center - vh / 2) / vh
        node.style.setProperty('--shift', `${(delta * 46).toFixed(1)}px`)
        node.style.setProperty('--ghost', `${(delta * -70).toFixed(1)}px`)
        const vis = 1 - Math.min(Math.abs(delta) * 1.15, 0.72)
        node.style.setProperty('--vis', vis.toFixed(3))
      })

      if (railRef.current) {
        const rect = railRef.current.getBoundingClientRect()
        const total = rect.height || 1
        const scrolled = Math.min(Math.max(vh * 0.5 - rect.top, 0), total)
        setProgress((scrolled / total) * 100)
      }

      raf = 0
    }

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <SectionHeader
        k="TIMELINE"
        title="Experience Chain"
        subtitle="Learning, training, and practical engagements that built offensive security depth."
      />

      <div className="xp-parallax" ref={railRef}>
        <div className="xp-spine">
          <span className="xp-spine-fill" style={{ height: `${progress}%` }} />
        </div>

        {experience.map((item, index) => (
          <section
            className={`xp-node ${index % 2 === 0 ? 'left' : 'right'}`}
            key={`${item.role}-${item.org}`}
            ref={(el) => {
              itemRefs.current[index] = el
            }}
          >
            <span className="xp-dot" aria-hidden="true" />
            <span className="xp-ghost" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <article className="xp-card">
              <div className="xp-card-top">
                <span className="xp-period">{item.period}</span>
                <span className="xp-tag">LOG_{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{item.role}</h3>
              <p className="xp-org">{item.org}</p>
              <ul className="clean-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          </section>
        ))}
      </div>

      <article className="panel">
        <h2>Certifications</h2>
        <div className="cert-grid">
          {certs.map((item) => (
            <div className="cert-chip" key={item}>
              <span className="cert-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 2 4 5v6c0 4.4 3.1 8.3 8 9 4.9-.7 8-4.6 8-9V5l-8-3Zm-1.2 13.2L7.3 11.7l1.4-1.4 2.1 2.1 4.5-4.5 1.4 1.4-5.9 5.9Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="cert-text">{item}</span>
            </div>
          ))}
        </div>
      </article>
    </>
  )
}

function ProjectsPage() {
  const openProjectLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleProjectMouseMove = (event) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rx = ((y / rect.height) - 0.5) * -8
    const ry = ((x / rect.width) - 0.5) * 10
    card.style.setProperty('--tilt-rx', `${rx.toFixed(2)}deg`)
    card.style.setProperty('--tilt-ry', `${ry.toFixed(2)}deg`)
  }

  const handleProjectMouseLeave = (event) => {
    const card = event.currentTarget
    card.style.setProperty('--tilt-rx', '0deg')
    card.style.setProperty('--tilt-ry', '0deg')
  }

  function ProjectImage({ src, name, fit = 'cover', position = 'center', ratio, background }) {
    const [failed, setFailed] = useState(false)
    const slotStyle = {
      ...(ratio ? { aspectRatio: ratio, height: 'auto' } : {}),
      ...(background ? { background } : {}),
    }

    return (
      <div className="project-image-slot" style={slotStyle}>
        <span className="img-grid" aria-hidden="true" />
        <span className="img-flag">SECURE</span>
        {!failed ? (
          <img
            src={src}
            alt={`${name} preview`}
            className={`project-image ${fit === 'contain' ? 'contain' : 'cover'}`}
            style={{ objectPosition: position }}
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="project-image-placeholder">
            <p>Add image</p>
            <span>{src.replace('/', 'public/')}</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <SectionHeader
        k="PROJECT LAB"
        title="My Projects"
      />
      <div className="cards3">
        {projects.map((project, index) => (
          <article
            className="panel project-module"
            key={project.name}
            role="button"
            tabIndex={0}
            onClick={() => openProjectLink(project.link)}
            onMouseMove={handleProjectMouseMove}
            onMouseLeave={handleProjectMouseLeave}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                openProjectLink(project.link)
              }
            }}
          >
            <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
            <ProjectImage
              src={project.image}
              name={project.name}
              fit={project.imageFit}
              position={project.imagePosition}
              ratio={project.imageRatio}
              background={project.imageBackground}
            />
            <div className="project-head">
              <h2>{project.name}</h2>
              <span>
                <span className="led" />
                {project.status}
              </span>
            </div>
            <div className="tags">
              {project.stack.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
            <p>{project.outcome}</p>
            <div className="module-footer">
              <span>{project.linkHint}</span>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                onClick={(event) => event.stopPropagation()}
              >
                {project.linkLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}

function AchievementPage() {
  return (
    <>
      <SectionHeader
        k="ACHIEVEMENT"
        title="Milestones and Recognition"
        subtitle="Competitions, rankings, and awards that mark concrete progress."
      />
      <article className="panel">
        <ul className="clean-list achievement-list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </>
  )
}

function ContactPage({ navigate }) {
  const [copied, setCopied] = useState(false)
  const [phoneCopied, setPhoneCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1400)
    } catch {
      setCopied(false)
    }
  }

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(profile.phone)
      setPhoneCopied(true)
      window.setTimeout(() => setPhoneCopied(false), 1400)
    } catch {
      setPhoneCopied(false)
    }
  }

  return (
    <>
      <SectionHeader
        k="CHANNEL"
        title="Let's Connect"
        subtitle="If you have an opportunity, idea, or collaboration in mind, I am ready to talk."
      />
      <section className="contact-modern">
        <article className="contact-left">
          <p className="availability">
            <span />
            AVAILABLE FOR WORK
          </p>
          <h2 className="contact-title">Let's start a project together.</h2>
          <p className="contact-lead">
            Have an idea? I can help you build it. Open for internships, security projects, and long-term technical
            collaboration.
          </p>
          <div className="contact-pill">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <button type="button" onClick={copyEmail}>
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </article>

        <article className="contact-right">
          <div className="contact-info-card">
            <p className="contact-card-label">PHONE / WHATSAPP</p>
            <p className="contact-card-value">{profile.phone}</p>
            <div className="contact-card-actions">
              <a className="contact-mini-btn" href={`tel:${profile.phone.replace(/\s+/g, '')}`}>
                Call
              </a>
              <button type="button" className="contact-mini-btn" onClick={copyPhone}>
                {phoneCopied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          <div className="contact-info-card">
            <p className="contact-card-label">LOCATION</p>
            <p className="contact-card-value">{profile.location}</p>
            <p className="contact-card-sub">Available for remote collaboration</p>
          </div>

          <div className="contact-social">
            <p>Connect with me</p>
            <div className="contact-social-row">
              <a className="social-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile" title="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6.94 8.5a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88Zm1.2 2.1v8.02H5.73V10.6h2.41Zm3.83 0v1.1h.03c.34-.65 1.17-1.33 2.42-1.33 2.58 0 3.05 1.7 3.05 3.9v4.35h-2.41v-3.85c0-.92-.02-2.1-1.28-2.1-1.29 0-1.49 1-1.49 2.03v3.92h-2.41V10.6h2.09Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a className="social-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="Open GitHub profile" title="GitHub">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.69-.22.69-.48v-1.68c-2.8.61-3.38-1.2-3.38-1.2-.45-1.16-1.12-1.47-1.12-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.93.84.08-.65.35-1.1.63-1.36-2.24-.25-4.59-1.12-4.59-5A3.9 3.9 0 0 1 6.66 8c-.1-.25-.45-1.27.1-2.66 0 0 .84-.27 2.75 1.02A9.48 9.48 0 0 1 12 6c.85 0 1.7.11 2.49.33 1.9-1.29 2.74-1.02 2.74-1.02.56 1.39.2 2.41.1 2.66.66.73 1.06 1.66 1.06 2.8 0 3.88-2.35 4.74-4.6 4.99.37.32.69.95.69 1.9V21c0 .26.18.57.7.48A10 10 0 0 0 12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a className="social-btn" href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Open Instagram profile" title="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm9.6 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <RouteLink to="/projects" navigate={navigate} className="social-btn" aria-label="Open projects page" title="Projects">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13Zm3.2 2.2v2.7h2.7V7.7H7.2Zm4 0v2.7h5.6V7.7h-5.6Zm0 4v5.1h5.6v-5.1h-5.6Zm-4 0v5.1h2.7v-5.1H7.2Z" fill="currentColor" />
                </svg>
              </RouteLink>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

function NotFound() {
  return (
    <article className="panel">
      <h2>Route Error</h2>
      <p className="muted">Unknown page. Use navigation to access valid routes.</p>
    </article>
  )
}

function App() {
  const { route, navigate } = useRoute()
  const [displayRoute, setDisplayRoute] = useState(route)
  const [transitionState, setTransitionState] = useState('in')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackTop, setShowBackTop] = useState(false)
  const [commandOpen, setCommandOpen] = useState(false)
  const [commandQuery, setCommandQuery] = useState('')
  const [activeCommand, setActiveCommand] = useState(0)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [cursorVisible, setCursorVisible] = useState(false)
  const [now, setNow] = useState(() => new Date())
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const commandItems = [
    ...navItems.map((item) => ({
      id: `route-${item.path}`,
      label: `Go to ${item.label}`,
      meta: 'Navigation',
      run: () => navigate(item.path),
    })),
    {
      id: 'contact-email',
      label: 'Email Me',
      meta: 'Action',
      run: () => window.open(`mailto:${profile.email}`, '_self'),
    },
    {
      id: 'open-linkedin',
      label: 'Open LinkedIn',
      meta: 'External',
      run: () => window.open(profile.linkedin, '_blank', 'noopener,noreferrer'),
    },
    {
      id: 'open-github',
      label: 'Open GitHub',
      meta: 'External',
      run: () => window.open(profile.github, '_blank', 'noopener,noreferrer'),
    },
    {
      id: 'open-instagram',
      label: 'Open Instagram',
      meta: 'External',
      run: () => window.open(profile.instagram, '_blank', 'noopener,noreferrer'),
    },
  ]

  const filteredCommands = commandItems.filter((item) => {
    const q = commandQuery.trim().toLowerCase()
    if (!q) {
      return true
    }
    return `${item.label} ${item.meta}`.toLowerCase().includes(q)
  })

  useEffect(() => {
    if (route === displayRoute) {
      return undefined
    }

    setTransitionState('out')
    const outTimer = window.setTimeout(() => {
      setDisplayRoute(route)
      setTransitionState('in')
    }, 170)

    return () => window.clearTimeout(outTimer)
  }, [route, displayRoute])

  useEffect(() => {
    setCommandOpen(false)
    setCommandQuery('')
    setActiveCommand(0)
    setMenuOpen(false)
  }, [displayRoute])

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      setScrollProgress(progress)
      setShowBackTop(scrollTop > 340)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer:fine)').matches
    if (!finePointer) {
      return undefined
    }

    const onMouseMove = (event) => {
      setCursorVisible(true)
      setCursorPos({ x: event.clientX, y: event.clientY })
    }
    const onMouseLeave = () => setCursorVisible(false)
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseout', onMouseLeave)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseout', onMouseLeave)
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setCommandOpen((prev) => !prev)
        return
      }

      if (!commandOpen) {
        return
      }

      if (event.key === 'Escape') {
        setCommandOpen(false)
        return
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setActiveCommand((prev) => {
          if (filteredCommands.length === 0) return 0
          return (prev + 1) % filteredCommands.length
        })
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault()
        setActiveCommand((prev) => {
          if (filteredCommands.length === 0) return 0
          return (prev - 1 + filteredCommands.length) % filteredCommands.length
        })
      }

      if (event.key === 'Enter') {
        const selected = filteredCommands[activeCommand]
        if (selected) {
          selected.run()
          setCommandOpen(false)
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [commandOpen, filteredCommands, activeCommand])

  useEffect(() => {
    setActiveCommand(0)
  }, [commandQuery])

  useEffect(() => {
    const targets = document.querySelectorAll(
      '.section-header, .panel, .terminal-card, .landing-panel, .topbar'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 }
    )

    targets.forEach((node) => {
      node.classList.add('reveal')
      observer.observe(node)
    })

    return () => observer.disconnect()
  }, [displayRoute])

  const onBrandKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      navigate('/home')
    }
  }

  const view =
    {
      '/': <LandingPage navigate={navigate} />,
      '/home': <HomePage navigate={navigate} />,
      '/about': <AboutPage />,
      '/experience': <ExperiencePage />,
      '/projects': <ProjectsPage />,
      '/achievement': <AchievementPage />,
      '/contact': <ContactPage navigate={navigate} />,
    }[displayRoute] ?? <NotFound />

  const navIndex = Math.max(0, navItems.findIndex((item) => item.path === route))
  const activeLabel = navItems[navIndex]?.label ?? 'Root'
  const clock = now.toLocaleTimeString('en-GB', { hour12: false })

  return (
    <div className="console">
      <div className="hud-frame" aria-hidden="true">
        <span className="hud-corner tl" />
        <span className="hud-corner tr" />
        <span className="hud-corner bl" />
        <span className="hud-corner br" />
        <span className="hud-scan" />
      </div>
      <div
        className={`cursor-glow ${cursorVisible ? 'show' : ''}`}
        style={{ transform: `translate(${cursorPos.x - 120}px, ${cursorPos.y - 120}px)` }}
        aria-hidden="true"
      />
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <MatrixBackground />
      <div className="noise" />
      <div className="vignette" />

      <header className="mobile-bar">
        <div
          className="mobile-logo"
          role="button"
          tabIndex={0}
          onClick={() => navigate('/home')}
          onKeyDown={onBrandKeyDown}
        >
          SA
        </div>
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <span className="mobile-menu-watermark" aria-hidden="true">SA</span>
        <nav className="mobile-menu-nav">
          {navItems.map((item, index) => (
            <button
              key={item.path}
              type="button"
              className={item.path === route ? 'active' : ''}
              onClick={() => navigate(item.path)}
            >
              <span className="mm-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="mm-label">{item.label}</span>
            </button>
          ))}
        </nav>
        <button
          type="button"
          className="mobile-contact"
          onClick={() => navigate('/contact')}
        >
          CONTACT ME <span aria-hidden="true">→</span>
        </button>
        <div className="mobile-menu-foot">
          <span>STATUS: ONLINE</span>
          <span>LAT: -7.98 // LNG: 112.62</span>
        </div>
      </div>

      <aside className="rail">
        <div
          className="rail-brand"
          role="button"
          tabIndex={0}
          onClick={() => navigate('/home')}
          onKeyDown={onBrandKeyDown}
        >
          <span className="rail-logo">SA</span>
          <span className="rail-brand-text">
            <strong>Steven Anthony</strong>
            <small>OFFENSIVE SECURITY</small>
          </span>
        </div>

        <nav className="rail-nav">
          {navItems.map((item, index) => (
            <button
              key={item.path}
              className={item.path === route ? 'active' : ''}
              type="button"
              onClick={() => navigate(item.path)}
            >
              <span className="rail-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="rail-label">{item.label}</span>
              <span className="rail-marker" />
            </button>
          ))}
        </nav>

        <div className="rail-foot">
          <button type="button" className="cmd-trigger" onClick={() => setCommandOpen(true)}>
            <span>Quick Actions</span>
            <kbd>Ctrl K</kbd>
          </button>
          <div className="rail-status">
            <p>
              <span className="rail-dot" /> SYSTEM ONLINE
            </p>
            <p className="rail-clock">{clock} UTC+7</p>
          </div>
        </div>
      </aside>

      <div className="workspace">
        <div className="statusbar">
          <div className="crumbs">
            <span className="crumb-root">root@steven</span>
            <span className="crumb-sep">:</span>
            <span className="crumb-path">~{route === '/' ? '/init' : route}</span>
            <span className="crumb-caret">▮</span>
          </div>
          <div className="status-meta">
            <span className="meta-chip">
              SEC {String(navIndex + 1).padStart(2, '0')}/{String(navItems.length).padStart(2, '0')}
            </span>
            <span className="meta-chip">{activeLabel.toUpperCase()}</span>
            <span className="meta-chip live">
              <span className="meta-led" /> LIVE
            </span>
          </div>
        </div>

        <main>
          <section className={`page-transition ${transitionState}`}>{view}</section>
        </main>
      </div>

      {showBackTop ? (
        <button type="button" className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ▲ TOP
        </button>
      ) : null}
      {commandOpen ? (
        <div className="command-overlay" role="dialog" aria-modal="true" onClick={() => setCommandOpen(false)}>
          <div className="command-modal" onClick={(event) => event.stopPropagation()}>
            <div className="command-head">
              <input
                type="text"
                autoFocus
                placeholder="Type a command or search..."
                value={commandQuery}
                onChange={(event) => setCommandQuery(event.target.value)}
              />
              <button type="button" onClick={() => setCommandOpen(false)} aria-label="Close quick actions">
                Esc
              </button>
            </div>
            <div className="command-list">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    className={index === activeCommand ? 'active' : ''}
                    onMouseEnter={() => setActiveCommand(index)}
                    onClick={() => {
                      item.run()
                      setCommandOpen(false)
                    }}
                  >
                    <span>{item.label}</span>
                    <small>{item.meta}</small>
                  </button>
                ))
              ) : (
                <p className="command-empty">No matching action.</p>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App
