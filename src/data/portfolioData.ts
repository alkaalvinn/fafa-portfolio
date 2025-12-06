import type { Experience, Project, Skill } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Bank Indonesia',
    position: 'Communication Specialist',
    period: '2022 - Present',
    description: 'Handling internal and external communication strategies',
    responsibilities: [
      'Develop communication campaigns',
      'Manage social media content',
      'Create visual materials for corporate communications'
    ]
  },
  {
    id: 2,
    company: 'Kraft Heinz',
    position: 'Brand Communication',
    period: '2021 - 2022',
    description: 'Brand communication and content creation',
    responsibilities: [
      'Brand storytelling',
      'Digital content creation',
      'Campaign management'
    ]
  },
  {
    id: 3,
    company: 'GMF AeroAsia',
    position: 'Marketing Communication',
    period: '2020 - 2021',
    description: 'Marketing communication and brand management',
    responsibilities: [
      'Marketing campaign development',
      'Corporate branding',
      'Event management'
    ]
  },
  {
    id: 4,
    company: 'Hangry',
    position: 'Content Creator',
    period: '2019 - 2020',
    description: 'Content creation and social media management',
    responsibilities: [
      'Social media content creation',
      'Visual design',
      'Copywriting'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Corporate Branding Campaign',
    description: 'Complete branding campaign for multinational company',
    category: 'design',
    featured: true
  },
  {
    id: 2,
    title: 'Product Photography Series',
    description: 'Professional product photography for e-commerce',
    category: 'photography',
    featured: true
  },
  {
    id: 3,
    title: 'Corporate Video Documentary',
    description: 'Documentary video production for company anniversary',
    category: 'videography',
    featured: false
  },
  {
    id: 4,
    title: 'Digital Marketing Communication',
    description: 'Strategic communication for digital marketing campaigns',
    category: 'communication',
    featured: false
  }
];

export const skills: Skill[] = [
  { id: 1, name: 'Photography', category: 'Creative', level: 90 },
  { id: 2, name: 'Videography', category: 'Creative', level: 85 },
  { id: 3, name: 'Graphic Design', category: 'Creative', level: 88 },
  { id: 4, name: 'Copywriting', category: 'Creative', level: 82 },
  { id: 5, name: 'Adobe Photoshop', category: 'Software', level: 95 },
  { id: 6, name: 'Adobe Illustrator', category: 'Software', level: 90 },
  { id: 7, name: 'Adobe Premiere Pro', category: 'Software', level: 85 },
  { id: 8, name: 'After Effects', category: 'Software', level: 80 },
  { id: 9, name: 'Communication Strategy', category: 'Professional', level: 92 },
  { id: 10, name: 'Brand Management', category: 'Professional', level: 88 },
  { id: 11, name: 'Content Creation', category: 'Professional', level: 90 },
  { id: 11, name: 'Social Media Marketing', category: 'Professional', level: 85 }
];

export const socialLinks = {
  linkedin: 'https://linkedin.com/in/muhammadfatihabrar',
  instagram: 'https://instagram.com/mv.fath',
  email: 'fatih.abrar@example.com',
  portfolio: 'https://bit.ly/PortfolioFatihAbrar',
  portfolioVideo: 'https://bit.ly/PortfolioVideoFatihAbrar'
};

// === GAMBAR-GAMBAR PORTFOLIO ===
// TODO: Ganti dengan URL foto Anda sendiri
// Format: /images/nama-file.jpg atau /images/nama-file.png

export const portfolioImages = {
  // Hero Section - Tidak perlu diganti (fafa.png)
  hero: '/images/fafa.png',

  // Visual World Section - 24 gambar untuk rotasi
  visualWorld: [
    // TODO: Ganti dengan 24 foto portfolio Anda
    // Contoh format:
    // '/images/portfolio/visual-1.jpg',
    // '/images/portfolio/visual-2.jpg',
    // dst...

    // Temporary placeholder images (akan diganti nanti)
    '/images/Photo/GMF/DSC04682.jpg',
    '/images/placeholder-visual-2.jpg',
    '/images/placeholder-visual-3.jpg',
    '/images/placeholder-visual-4.jpg',
    '/images/placeholder-visual-5.jpg',
    '/images/placeholder-visual-6.jpg',
    '/images/placeholder-visual-7.jpg',
    '/images/placeholder-visual-8.jpg',
    '/images/placeholder-visual-9.jpg',
    '/images/placeholder-visual-10.jpg',
    '/images/placeholder-visual-11.jpg',
    '/images/placeholder-visual-12.jpg',
    '/images/placeholder-visual-13.jpg',
    '/images/placeholder-visual-14.jpg',
    '/images/placeholder-visual-15.jpg',
    '/images/placeholder-visual-16.jpg',
    '/images/placeholder-visual-17.jpg',
    '/images/placeholder-visual-18.jpg',
    '/images/placeholder-visual-19.jpg',
    '/images/placeholder-visual-20.jpg',
    '/images/placeholder-visual-21.jpg',
    '/images/placeholder-visual-22.jpg',
    '/images/placeholder-visual-23.jpg',
    '/images/placeholder-visual-24.jpg'
  ],

  // Experience Section - 4 gambar per perusahaan
  experience: {
    // Bank Indonesia - 4 gambar
    1: [
      '/images/experience/bi-1.jpg',
      '/images/experience/bi-2.jpg',
      '/images/experience/bi-3.jpg',
      '/images/experience/bi-4.jpg'
    ],
    // Kraft Heinz - 4 gambar
    2: [
      '/images/experience/kh-1.jpg',
      '/images/experience/kh-2.jpg',
      '/images/experience/kh-3.jpg',
      '/images/experience/kh-4.jpg'
    ],
    // GMF AeroAsia - 4 gambar
    3: [
      '/images/experience/gmf-1.jpg',
      '/images/experience/gmf-2.jpg',
      '/images/experience/gmf-3.jpg',
      '/images/experience/gmf-4.jpg'
    ],
    // Hangry - 4 gambar
    4: [
      '/images/experience/hangry-1.jpg',
      '/images/experience/hangry-2.jpg',
      '/images/experience/hangry-3.jpg',
      '/images/experience/hangry-4.jpg'
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
    portrait1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop',
    portrait2: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop'
  }
};