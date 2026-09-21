// Public CV updates only. Private source documents and internal projects stay outside the app.
export const profile = {
  name: 'Steven Anthony',
  title: 'SecOps Intern at FEHA | Offensive Security | CTF Competitor',
  status: 'Interning at FEHA',
  location: 'Indonesia',
  email: 'stevenanthony881@gmail.com',
  phone: '+62 812-8889-7723',
  linkedin: 'https://www.linkedin.com/in/stevenn28/',
  github: 'https://github.com/JersYY',
  instagram: 'https://instagram.com/stevanth_',
  summary:
    'I am an Informatics Engineering student at Universitas Brawijaya and a SecOps Intern at FEHA International Consulting B.V., focused on security research, CTF problem solving, and clear technical reporting.',
}

export const navItems = [
  { label: 'Home', path: '/home' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Achievement', path: '/achievement' },
  { label: 'Contact', path: '/contact' },
]

export const education = [
  {
    school: 'Universitas Brawijaya',
    degree: 'Bachelor of Computer Science (Informatics Engineering)',
    period: 'Sep 2023 - Present'
  },
]

export const experience = [
  {
    role: 'SecOps Intern',
    org: 'FEHA International Consulting B.V.',
    period: 'Aug 2026 - Present',
    current: true,
    description: 'Currently interning in SecOps at FEHA International Consulting B.V. FEHA is a cybersecurity and GRC company helping organizations manage security, privacy, risk, and compliance through an AI-powered platform combined with expert guidance.',
    bullets: [],
  },
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

export const projects = [
  {
    name: 'CTF Writeups',
    category: 'Security',
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
    category: 'Development',
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
    category: 'Development',
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM'],
    outcome:
      'A native Android application for parents with an AI chatbot, baby-product marketplace, doctor consultation bookings, and location-based daycare search. Built with Kotlin, Jetpack Compose, and Firebase.',
    status: 'Mobile Project',
    link: 'https://github.com/SakaGintoki/Mobile-App-Development',
    linkLabel: 'GitHub Link',
    linkHint: 'Open Repository',
    image: '/littlesteps.png',
    imageFit: 'cover',
    imagePosition: 'center',
    imageRatio: '2 / 1',
  },
  {
    name: 'Interstellar',
    category: 'Design',
    stack: ['React', 'Three.js', 'WebGL', '3D Models'],
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
    category: 'Security',
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
    category: 'Design',
    stack: ['UI/UX', 'Figma Prototype', 'Mobile Design'],
    outcome:
      'Kiddora helps parents find trusted childcare through verified badges and research-driven design.',
    status: 'Demo Prototype',
    link: 'https://www.figma.com/proto/nKv20vZ0eMc1lbcaPiIww4/Kiddora?page-id=1%3A3&node-id=249-2724&viewport=-3940%2C-2018%2C0.38&t=tl48gWN5NE12ucF8-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=72%3A427&show-proto-sidebar=1',
    linkLabel: 'Open Demo',
    linkHint: 'Open Prototype',
    image: '/kiddora.png',
    imageFit: 'cover',
    imagePosition: 'center',
    imageBackground: '#000000',
    imageRatio: '2 / 1',
  },
]

export const certs = [
  'Certified Associate Penetration Tester - Hackviser (Feb 2026)',
  'Certified Web Red Team Analyst - Cyberwarfare Labs (Jan 2026)',
  'Certified Threat Intelligence and Governance Analyst - CTIGA (Jan 2026)',
  'Certified Red Team Operations Management - CRTOM (Jan 2026)',
  'Cyber Threat Intelligence 101 - arcX (Jan 2026)',
  'Ethical Hacker - Cisco Networking Academy (Jan 2026)',
]

// Optional photo: { src: "/achievements/event.jpg", alt: "Describe the photo", caption: "Optional caption", position: "center" }.
export const achievements = [
  { id: 'intechfest', description: "A Capture the Flag competition organized by PNBCTF in Bali.", title: 'INTECHFEST CTF 2026', result: '1st place', date: 'Sep 2026', year: '2026', photo: null, category: 'Competition', firstPlace: true },
  { id: 'hidc', description: "A cybersecurity competition organized by Hacktrace Indonesia and PT Spentera, with the finals held at the Institut Teknologi Del campus.", title: 'Hacktrace Independence Day Competition (HIDC) 2026', result: 'Top 3', date: 'Sep 2026', year: '2026', photo: null, category: 'Competition' },
  { id: 'meta4sec', description: "A Capture the Flag competition organized by Meta4Sec.", title: 'Meta4Sec 3.0 CTF', result: '1st place', date: 'Aug 2026', year: '2026', photo: null, category: 'Competition', firstPlace: true },
  { id: 'c2c', description: "An annual international Capture the Flag competition bringing together cybersecurity talent from around the world. The 2026 edition was hosted by Universitas Indonesia in Bali.", title: 'Country-to-Country (C2C) CTF', result: '5th place', date: 'Aug 2026', year: '2026', photo: null, category: 'Competition' },
  { id: 'techfest', description: "A Capture the Flag competition organized by BINUS University.", title: 'TECHFEST CTF 2026', result: '1st place', date: 'Jul 2026', year: '2026', photo: null, category: 'Competition', firstPlace: true },
  { id: 'gunadarma', description: 'A Capture the Flag competition organized by Universitas Gunadarma as part of Gunadarma Code Week 2.0.', title: 'Gunadarma Code Week 2.0 CTF', result: '5th place', date: 'Jun 2026', year: '2026', photo: null, category: 'Competition' },
  { id: 'ifest', description: 'A Capture the Flag competition organized by Universitas Padjadjaran (UNPAD) as part of IFEST 13.', title: 'IFEST 13', result: 'Finalist', date: 'May 2025', year: '2025', photo: null, category: 'Competition' },
  { id: 'bizznovation', description: "A business plan competition organized by Universitas Pradita.", title: 'Bizznovation', result: '1st place', date: 'Apr 2025', year: '2025', photo: null, category: 'Competition', firstPlace: true },
  { id: 'thcon', description: "An annual Capture the Flag competition held as part of the Toulouse Hacking Convention in Toulouse, France, welcoming both on-site and online participants.", title: 'THCon 2025 CTF', result: 'Top 12 online / Top 19 overall', date: 'Apr 2025', year: '2025', photo: null, category: 'Competition' },
  { id: 'phoenix', description: "An international Capture the Flag competition organized by WARZONE.", title: 'Rising Phoenix 3.0: The Eternal Flame', result: '2nd place', date: 'Mar 2025', year: '2025', photo: null, category: 'Competition' },
  { id: 'bca', description: "A scholarship program by Bank Central Asia (BCA) supporting undergraduate students through educational assistance and personal development opportunities.", title: 'Bakti BCA Scholarship', result: 'Awardee', date: 'Dec 2024 - Dec 2025', year: '2024', years: ['2024', '2025'], photo: null, category: 'Scholarship' },
  { id: 'technofair', description: "A Capture the Flag competition organized by Gunadarma University as part of TechnoFair 11.0.", title: 'TechnoFair 11.0', result: 'Finalist', date: 'Jul 2024', year: '2024', photo: null, category: 'Competition' },
  { id: 'codex', description: "An internal Capture the Flag competition jointly organized by BCC and POROS at the Faculty of Computer Science, Universitas Brawijaya.", title: 'Capture The Flag - CodEX', result: '2nd place', date: 'Sep 2023', year: '2023', photo: null, category: 'Competition' },
]

export const highlights = achievements.map((item) => `${item.result} - ${item.title} (${item.date})`)
export const firstPlaceCount = achievements.filter((item) => item.firstPlace).length

export const homeSignals = [
  { label: 'CTF Rank Push', value: 'Active', tone: 'good' },
  { label: 'Current Role', value: 'SecOps Intern', tone: 'info' },
  { label: 'Collaboration', value: 'Open', tone: 'good' },
  { label: 'Availability', value: profile.status, tone: 'info' },
]
