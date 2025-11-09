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