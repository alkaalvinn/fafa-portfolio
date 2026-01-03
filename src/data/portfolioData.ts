import type { Experience, Project, Skill } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Central Bank of Indonesia',
    position: 'Program - Consumer Protection',
    period: 'October 2025 - Present',
    description:
      'Supporting consumer protection initiatives through creative production, campaign support, and event management.',
    responsibilities: [
      'Developed Terms of References (ToR) and creative briefs for Geber PK campaign, delivering 5 campaign series that reached 5,000+ participants.',
      'Produced 10+ monthly creative assets for social media and offline campaigns.',
      'Coordinated VIP guest relations and documentation for high-profile federal programs.',
      'Managed end-to-end KOL and speaker handling, from selection and briefing to on-site coordination.',
      'Supported seamless execution of large-scale campaign events across online and offline platforms.'
    ]
  },
  {
    id: 2,
    company: 'PT Dua Puluh Tiga',
    position: 'Graphic Design Intern',
    period: 'July 2025 - October 2025',
    description:
      'Designed creative assets and audiovisual content to strengthen employer branding visibility and internal communication.',
    responsibilities: [
      'Designed and delivered 20+ monthly creative assets for social media and offline activation.',
      'Produced 7 monthly audiovisual contents for Instagram and TikTok to boost internal brand perception.',
      'Developed and implemented visual identity guidelines for employer branding division.',
      'Streamlined creative production workflow to ensure design consistency.',
      'Supported content strategies that enhanced engagement for talent branding.'
    ]
  },
  {
    id: 3,
    company: 'Kraft Heinz',
    position: 'Graphic Design Intern',
    period: 'January 2025 - March 2025',
    description:
      'Created visual and video assets for FMCG e-commerce and digital advertising campaigns.',
    responsibilities: [
      'Designed 10+ monthly creative assets for e-commerce platforms such as Shopee, Tokopedia, and Lazada.',
      'Produced optimized visuals to enhance product discoverability and platform performance.',
      'Developed and edited 10+ monthly video ads for Meta and TikTok campaigns.',
      'Improved campaign performance through visual consistency and market-oriented adaptation.',
      'Collaborated with marketing team to support commercial communication goals.'
    ]
  },
  {
    id: 4,
    company: 'GMF AeroAsia',
    position: 'Corporate Communications Intern',
    period: 'July 2024 - August 2024',
    description:
      'Strengthened corporate image through internal communication, content production, and stakeholder experience management.',
    responsibilities: [
      'Produced internal mini releases distributed to 5,000+ employees.',
      'Executed end-to-end content aligned with corporate reputation strategy.',
      'Achieved +9.4% account reach, +45.6% engagement, and 23.8K average reel views through optimized storytelling.',
      'Managed guest visit protocols and documentation for key stakeholders.',
      'Created narrative-driven visuals to support corporate branding goals.'
    ]
  },
  {
    id: 5,
    company: 'Hangry',
    position: 'Content Production Intern',
    period: 'August 2023 - December 2023',
    description:
      'Produced multimedia content and strengthened brand engagement through visual storytelling for a food-tech startup.',
    responsibilities: [
      'Created and managed 40+ pieces of social media content including photography and videography.',
      'Developed storylines and storyboards to strengthen brand tone.',
      'Edited and polished 50+ images and 25+ videos for social media platforms.',
      'Ensured visuals aligned with brand standards to maximize engagement.',
      'Worked closely with marketing team to support ongoing campaigns.'
    ]
  },
  {
    id: 6,
    company: 'Pana Visual',
    position: 'Chief Operating Officer & Founder',
    period: 'July 2020 - December 2022',
    description:
      'Managed multi-client projects, produced tailored content, supported advertising pitches, and contributed to improved client satisfaction.',
    responsibilities: [
      'Acquired and managed projects for over 10 clients over a 2-year period.',
      'Developed and produced 10+ pieces of content per client each month, tailored to specific needs.',
      'Assisted in pitching 5 advertising decks, successfully addressing and fulfilling client requirements.',
      'Significantly enhanced client customer satisfaction through strategic improvements and effective olutions.'
    ]
  }
];


export const projects: Project[] = [
  {
    id: 1,
    title: 'Product Photography Series',
    description: 'Professional product photography for e-commerce',
    category: 'photography',
  },
  {
    id: 2,
    title: 'Corporate Video Documentary',
    description: 'Documentary video production for company anniversary',
    category: 'videography',
  },
  {
    id: 3,
    title: 'Corporate Branding Campaign',
    description: 'Complete branding campaign for multinational company',
    category: 'design',
  },
  {
    id: 4,
    title: 'Digital Marketing Communication',
    description: 'Strategic communication for digital marketing campaigns',
    category: 'communication',
  }
];

export const skills: Skill[] = [
  // Photography Skills
  { id: 1, name: 'Photography', category: 'Creative', level: 90 },
  { id: 2, name: 'Photo Editing', category: 'Creative', level: 88 },
  { id: 3, name: 'DSLR Photography', category: 'Creative', level: 85 },

  // Videography Skills
  { id: 4, name: 'Videography', category: 'Creative', level: 85 },
  { id: 5, name: 'Video Editing', category: 'Creative', level: 82 },

  // Design Skills
  { id: 6, name: 'Graphic Design', category: 'Creative', level: 88 },
  { id: 7, name: 'Brand Design', category: 'Creative', level: 85 },

  // Content Skills
  { id: 8, name: 'Copywriting', category: 'Creative', level: 82 },
  { id: 9, name: 'Content Creation', category: 'Creative', level: 90 },
  { id: 10, name: 'Content Strategy', category: 'Creative', level: 85 },

  // Adobe Software
  { id: 11, name: 'Adobe Photoshop', category: 'Software', level: 95 },
  { id: 12, name: 'Adobe Illustrator', category: 'Software', level: 90 },
  { id: 13, name: 'Adobe Premiere Pro', category: 'Software', level: 85 },
  { id: 14, name: 'After Effects', category: 'Software', level: 80 },

  // Communication Skills
  { id: 15, name: 'Communication Strategy', category: 'Professional', level: 92 },
  { id: 16, name: 'Brand Management', category: 'Professional', level: 88 },
  { id: 17, name: 'Digital Marketing', category: 'Professional', level: 85 },
  { id: 18, name: 'Social Media Management', category: 'Professional', level: 90 },
  { id: 19, name: 'Public Relations', category: 'Professional', level: 82 },
  { id: 20, name: 'Event Management', category: 'Professional', level: 80 },
  { id: 21, name: 'Presentation Skills', category: 'Professional', level: 88 },

  // Languages
  { id: 22, name: 'Bahasa Indonesia', category: 'Language', level: 95 },
  { id: 23, name: 'English', category: 'Language', level: 85 }
];

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/fatihabrar/',
  instagram: 'https://www.instagram.com/mv.fath/',
  email: 'fatihabrar@gmail.com',
  portfolio: 'https://bit.ly/PortfolioFatihAbrar',
  portfolioVideo: 'https://bit.ly/PortfolioVideoFatihAbrar'
};

// === GAMBAR-GAMBAR PORTFOLIO ===
// TODO: Ganti dengan URL foto Anda sendiri
// Format: /images/nama-file.jpg atau /images/nama-file.png

export const portfolioImages = {
  // Hero Section - Tidak perlu diganti (fafa.png)
  hero: '/images/fafa.webp',

  // Visual World Section - 24 gambar untuk rotasi
  visualWorld: [
    // TODO: Ganti dengan 24 foto portfolio Anda
    // Contoh format:
    // '/images/portfolio/visual-1.jpg',
    // '/images/portfolio/visual-2.jpg',
    // dst...

    // Temporary placeholder images (akan diganti nanti)
    '/images/visualworld/1.webp',
    '/images/visualworld/2.webp',
    '/images/visualworld/3.webp',
    '/images/visualworld/4.webp',
    '/images/visualworld/5.webp',
    '/images/visualworld/6.webp',
    '/images/visualworld/7.webp',
    '/images/visualworld/8.webp',
    '/images/visualworld/9.webp',
    '/images/visualworld/10.webp',
    '/images/visualworld/11.webp',
    '/images/visualworld/12.webp',
    '/images/visualworld/13.webp',
    '/images/visualworld/14.webp',
    '/images/visualworld/15.webp',
    '/images/visualworld/16.webp',
    '/images/visualworld/17.webp',
    '/images/visualworld/18.webp',
    '/images/visualworld/19.webp',
    '/images/visualworld/20.webp',
    '/images/visualworld/21.webp',
    '/images/visualworld/22.webp',
    '/images/visualworld/23.webp',
    '/images/visualworld/24.webp'
  ],

  // Experience Section - 4 gambar per perusahaan
  experience: {
    // Bank Indonesia - 4 gambar
    1: [
      '/images/experience/bi-1.webp',
      '/images/experience/bi-2.webp',
      '/images/experience/bi-3.webp',
      '/images/experience/bi-4.webp'
    ],
    // PT Dua Puluh Tiga - 4 gambar
    2: [
      '/images/experience/23-1.webp',
      '/images/experience/23-2.webp',
      '/images/experience/23-3.webp',
      '/images/experience/23-4.webp'
    ],
    // Kraft Heinz - 4 gambar
    3: [
      '/images/experience/kh-1.webp',
      '/images/experience/kh-2.webp',
      '/images/experience/kh-3.webp',
      '/images/experience/kh-4.webp'
    ],
    // GMF AeroAsia - 4 gambar
    4: [
      '/images/experience/ga-1.webp',
      '/images/experience/ga-2.webp',
      '/images/experience/ga-3.webp',
      '/images/experience/ga-4.webp'
    ],
    // Hangry - 4 gambar
    5: [
      '/images/experience/ha-1.webp',
      '/images/experience/ha-2.webp',
      '/images/experience/ha-3.webp',
      '/images/experience/ha-4.webp'
    ],
    6: [
      '/images/experience/pa-1.webp',
      '/images/experience/pa-2.webp',
      '/images/experience/pa-3.webp',
      '/images/experience/pa-4.webp'
    ]
  },

  // Contact Section - 2 gambar dekoratif
  contact: {
    portrait1: '/images/contact/portrait-1.jpg',
    portrait2: '/images/contact/portrait-2.jpg'
  }
};

// Gambar placeholder untuk sementara (bisa dihapus setelah ada foto asli)
export const placeholderImages = {
  // Visual World placeholders
  visual: [
    'https://images.unsplash.com/photo-1542038784456-1b839f078944?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1599421498721-88ba9224cd2f?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1561708321-e45b04e8cfee?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=500&fit=crop'
  ],

  // Contact placeholders
  contact: {
    portrait1: '/images/co-1.webp',
    portrait2: '/images/co-2.webp'
  }
};