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
  category: 'photography' | 'videography' | 'design' | 'copywriting' | 'communication';
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface PhotographyImage {
  id: string;
  src: string;
  company: string;
  orientation: 'landscape' | 'square';
}

export interface DesignImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  orientation: 'landscape' | 'square';
}