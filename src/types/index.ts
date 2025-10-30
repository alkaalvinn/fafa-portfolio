export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'photography' | 'videography' | 'design' | 'copywriting';
  imageUrl: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}