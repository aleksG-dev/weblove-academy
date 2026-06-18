export type Classroom = {
  no: string;
  title: string;
  blurb: string;
  meta: string;
  pillar: 'craft' | 'business' | 'compound';
};

export type Pillar = {
  id: 'craft' | 'business' | 'compound';
  index: string;
  name: string;
  line: string;
};

export const pillars: Pillar[] = [
  {
    id: 'craft',
    index: '01',
    name: 'Craft',
    line: 'Build award-grade AI websites. Direct the machine; let your taste win.',
  },
  {
    id: 'business',
    index: '02',
    name: 'Business',
    line: 'Turn the skill into recurring revenue. Sell, market, retain.',
  },
  {
    id: 'compound',
    index: '03',
    name: 'Compound',
    line: 'Stay current and build a brand that compounds for years.',
  },
];

export const classrooms: Classroom[] = [
  { no: '01', pillar: 'craft', title: 'AI Websites Mastery', blurb: 'From beginner to paid client — 20+ tools, the full Halo Coffee build.', meta: '8 levels · 60+ quests · 1 boss' },
  { no: '02', pillar: 'craft', title: 'Claude Mastery', blurb: 'Every Claude surface — prompts, Projects, Artifacts, Code, MCP, Agents, the API.', meta: '9 levels · 60+ quests' },
  { no: '03', pillar: 'craft', title: 'Claude Animations', blurb: 'GSAP, Framer Motion, R3F, shaders, Lottie, scroll, performance — the full tour.', meta: '9 levels · cinematic portfolio' },
  { no: '04', pillar: 'craft', title: 'Lovable Mastery', blurb: 'Idea to MVP in 8 hours, polished to award-grade. Lovable + Cursor + Claude.', meta: '5 levels · 1-day MVP' },
  { no: '05', pillar: 'craft', title: 'Backend, CMS & E-commerce', blurb: 'Sanity, Webflow, Supabase, Auth, Stripe, Forms — the 70% of jobs with a backend.', meta: '7 levels · 25+ quests' },
  { no: '06', pillar: 'craft', title: 'Design Taste', blurb: 'Train the eye. Typography, colour, grid, motion taste, polish — the taste that wins.', meta: '7 levels · boss redesign' },
  { no: '07', pillar: 'craft', title: 'AI Imagery & Video', blurb: 'Midjourney, Imagen, Sora, Runway, ElevenLabs, Suno — branded visuals on demand.', meta: '6 levels · generative brand' },
  { no: '08', pillar: 'craft', title: 'Studio Sessions', blurb: 'Live build playbooks — restaurant, agency, portfolio, SaaS, e-commerce. Stream them.', meta: '7 levels · 5 playbooks' },
  { no: '09', pillar: 'business', title: 'Sales & Business', blurb: 'Mindset, pricing, outreach, discovery, proposals, contracts. The 10k boss battle.', meta: '8 levels · 30+ quests · boss' },
  { no: '10', pillar: 'business', title: 'Marketing & Lead Gen', blurb: 'Content engine, TikTok, LinkedIn, X, awards, email, Clay + Apollo + n8n pipeline.', meta: '9 levels · 3000-follower flywheel' },
  { no: '11', pillar: 'business', title: 'SEO & AEO 2026', blurb: 'Dual-write for Google + LLMs. llms.txt, local SEO, analytics, citation engineering.', meta: '6 levels · 25+ quests' },
  { no: '12', pillar: 'business', title: 'Post-Delivery & Retainers', blurb: 'Handover, hosting, care plans, quarterly upsells, renewals, site-as-a-service.', meta: '6 levels · MRR flywheel' },
  { no: '13', pillar: 'business', title: 'First 10k', blurb: '90-day field op. 100 dials a day. One vertical, one city, one offer. Brutal.', meta: '7 levels · 90-day hunt · boss' },
  { no: '14', pillar: 'compound', title: 'AI Daily', blurb: 'Sources, filters, 30-min tool tests, the monthly ship rule, thought leader in 12 months.', meta: '7 levels · 12-month arc' },
];

export type Path = {
  letter: string;
  title: string;
  line: string;
  steps: string[];
};

export const paths: Path[] = [
  {
    letter: 'A',
    title: "I'm starting from zero",
    line: 'Brand new to all of this? Take these four classrooms in order.',
    steps: ['AI Websites Mastery', 'Claude Mastery', 'Animations', 'First 10k'],
  },
  {
    letter: 'B',
    title: 'I build already — I want premium',
    line: 'Level up your craft to award-grade.',
    steps: ['Animations', 'Design Taste', 'Studio Sessions', 'AI Imagery'],
  },
  {
    letter: 'C',
    title: 'I have clients — I want to grow',
    line: 'Turn skills into recurring revenue.',
    steps: ['Sales & Business', 'Post-Delivery', 'Marketing', 'SEO'],
  },
];

export const marqueeWords = [
  'GSAP',
  'Framer Motion',
  'React Three Fiber',
  'Lenis',
  'Tailwind',
  'Shaders',
  'Lottie',
  'Supabase',
  'Stripe',
  'Sanity',
  'Midjourney',
  'llms.txt',
  'Claude Code',
  'Design Taste',
];
