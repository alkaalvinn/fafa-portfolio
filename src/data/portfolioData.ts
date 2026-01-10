import type { Experience, Project, Skill } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Central Bank of Indonesia',
    position: 'Program Project Management',
    period: 'October 2025 - Present',
    description:
      'Supporting consumer protection initiatives through creative production, campaign support, and event management.',
    responsibilities: [
      'Developed and executed an integrated communication strategy for “Geber PK” to increase public awareness and community advocacy against financial fraud.',
      'Drove community-based campaigns through UGC initiatives, encouraging audiences to actively educate their peers on financial literacy and scam prevention.',
      'Led on-ground activations and educational booths to facilitate direct public engagement and consultation on consumer protection issues.',
      'Managed KOL and stakeholder collaborations to amplify campaign messages and ensure consistent communication across digital platforms.'


    ]
  },
  {
    id: 2,
    company: 'PT Dua Puluh Tiga',
    position: 'Employer Branding Intern',
    period: 'July 2025 - October 2025',
    description:
      'Designed creative assets and audiovisual content to strengthen employer branding visibility and internal communication.',
    responsibilities: [
      'Designed and delivered 20+ monthly creative assets for social media and offline activations, strengthening employer branding visibility and engagement.',
      'Produced 7 monthly audiovisual contents for Instagram and TikTok that boosted audience interaction to help attracting top talent and strengthening internal brand perception.',
      'Developed and implemented visual identity guidelines that streamlined creative production, ensuring design consistency and efficiency across the Employer Branding division.'
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
      'Designed 10+ monthly creative assets for e-commerce platforms (Shopee, Tokopedia, Blibli, Meta, Lazada). Driving stronger online conversion potential.',
      'Produced high quality visuals optimized for various platform display standards, enhancing product discoverability and customer engagement.',
      'Developed and edited 10+ monthly video ads for Meta and TikTok campaigns, contributing to improved campaign performance and visibility.'
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
      'Produced internal mini releases from ideation to execution, delivering targeted communications to 5,000+ employees.',
      'Executed end-to-end content production aligned with brand reputation strategy, strengthening GMF’s corporate image.',
      'Achieved +9.4% increase in account reach, +45.6% engagement rate, and +0.2% follower growth through optimized storytelling and visuals. Generated an average of 23.8K views per reel by leveraging engaging narratives and creative content strategies.',
      'Managed guest visit protocols and documentation, ensuring a professional and cohesive brand experience for stakeholders.'

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
      'Produced and managed over 40 pieces of engaging social media content, utilizing hands-on photography and videography for visual production.',
      'Developing storylines and storyboards to support content creation that strengthen brand tone.',
      'Edited and polished 50+ digital images and 25+ videos for social media platforms, enhancing visual appeal and engagement and ensuring high-quality visuals that align with brand standards.'

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
      'Directed creative operations for 10+ clients, managing timelines, quality control, and deliverables to ensure client satisfaction.',
      'Developed and produced tailored 10+ pieces of content per client each month, to supports their marketing and brand growth objectives.',
      'Pitched and secured 5 advertising projects, successfully addressing and fulfilling client requirements.',
      'Increased clients satisfaction through strategic improvements and effective solutions by streamlining communication and workflow efficiency.'
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

  // Videography Skills
  { id: 3, name: 'Videography', category: 'Creative', level: 85 },
  { id: 4, name: 'Video Editing', category: 'Creative', level: 82 },

  // Design Skills
  { id: 5, name: 'Graphic Design', category: 'Creative', level: 88 },

  // Content Skills
  { id: 6, name: 'Copywriting', category: 'Creative', level: 82 },
  { id: 7, name: 'Content Creation', category: 'Creative', level: 90 },
  { id: 8, name: 'Content Strategy', category: 'Creative', level: 85 },

  // Adobe Software
  { id: 9, name: 'Adobe Photoshop', category: 'Software', level: 95 },
  { id: 10, name: 'Adobe Illustrator', category: 'Software', level: 90 },
  { id: 11, name: 'Adobe Premiere Pro', category: 'Software', level: 85 },
  { id: 12, name: 'After Effects', category: 'Software', level: 80 },

  // Communication Skills
  { id: 13, name: 'Project Management', category: 'Professional', level: 85 },
  { id: 14, name: 'Communication Strategy', category: 'Professional', level: 92 },
  { id: 15, name: 'Brand Management', category: 'Professional', level: 88 },
  { id: 16, name: 'Digital Marketing', category: 'Professional', level: 85 },
  { id: 17, name: 'Social Media Management', category: 'Professional', level: 90 },
  { id: 18, name: 'Public Relations', category: 'Professional', level: 82 },
  { id: 19, name: 'Event Management', category: 'Professional', level: 80 },
  { id: 20, name: 'Presentation Skills', category: 'Professional', level: 88 },

  // Languages
  { id: 21, name: 'Bahasa Indonesia', category: 'Language', level: 95 },
  { id: 22, name: 'English', category: 'Language', level: 85 }
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
  hero: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944105/zlv6aiiwos55oexypezd.webp',

  // Visual World Section - 24 gambar untuk rotasi
  visualWorld: [
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944108/xip7wgbrk2vjl1s7a7k7.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944110/rfwx33yu6mrapzk8upog.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944112/t271dodbhsgjbpvqdggg.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944112/dptbnecqabrfujooyvhf.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944113/dyxhsrlhjahvmj5vjt5x.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944116/v5jwl7kbvex1qhs57cjm.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944113/tx2jofgssm5wq9uqkioa.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944115/zenxcfpvrfqdapqdcyhl.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944114/ea1o1udtzw0o8xzregmo.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944114/iqf93hwcjj4nxyiuvtct.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944108/fpv9dskrpgkia0a9374h.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944108/rqidgjonczwhjzdwzjih.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944108/okf10uxzevnkdtcad9ih.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944108/t4cvjuptsga1jhk3urq4.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944109/xv6jdvb3vfuglihnufto.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944109/mxi6skesntm3ney5upyb.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944110/d9ljfmztpyviystqnj47.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944110/lyulxvertyspx4kkqszi.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944114/hksvrbxyh2iiahelamk0.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944110/ej8vmko3yhnlopfwsufn.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944111/ukygtcrwxyolihpt9bqa.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944111/d535accwdewhwmqk8nln.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944111/su6cjswnwllgghbf5dse.webp',
    'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944111/cvhp7y0doqyaezgujo5m.webp'
  ],

  // Experience Section - 4 gambar per perusahaan
  experience: {
    // Bank Indonesia - 4 gambar
    1: [
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944105/mp9ne0qxn83eyf15iygw.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944117/dnusho0oo1wxc9fhanfa.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944106/abcloamz9twxsox7mz52.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944106/t2ucfaqct8vp9kp3tv20.webp'
    ],
    // PT Dua Puluh Tiga - 4 gambar
    2: [
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944105/bcbifxn0kfcqqqkhz36c.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944106/imwismrhxjpiivi9u8jb.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944116/ykzhvgcucppyu77mzgsv.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944105/q3qwkyflc2t6wdim4hcp.webp'
    ],
    // Kraft Heinz - 4 gambar
    3: [
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944107/laulpayhvqtxw4sdcfj7.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944107/ylqcghrhyxwcg3j1rfiu.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944107/j3dv91obdsbpcbihd7ef.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944107/v6ci1hgnzjwriewpje3i.webp'
    ],
    // GMF AeroAsia - 4 gambar
    4: [
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944115/v0mbv2o7xyarmkrqhspr.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944118/bdwendnc2fnouof7vyuw.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944114/viki0zowxi0oabziqqfz.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944117/uz7gx3y65ifn3nib5z8u.webp'
    ],
    // Hangry - 4 gambar
    5: [
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944120/vfzbr2u5awxigxfgxjxy.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944119/kz4sqgxouml3qyilcazx.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944116/thvm3vc0scu7zxjag5uw.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944118/zbrzdc7rylhpazbuy6rl.webp'
    ],
    6: [
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944107/pn03fzqv6xjwxvkcelzv.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944107/puy9jr04gmdjpgfowryh.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944107/alu6efo56xgruyosd5q4.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944116/zrdkyz1bgiiq4kk2ksw7.webp'
    ]
  },

  // Contact Section - 2 gambar dekoratif
  contact: {
    portrait1: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944105/vacgqbas5qhcbzkruuvn.webp',
    portrait2: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944120/sjyqod0avxciykxtax4r.webp'
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

   contact: {
    portrait1: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944105/vacgqbas5qhcbzkruuvn.webp',
    portrait2: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944120/sjyqod0avxciykxtax4r.webp'
  }

};