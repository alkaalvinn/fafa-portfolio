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
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1768733822/ts1fahtwctdi52ubteyp.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1768572865/bweta2xuzimmr4zdmyco.webp'
    ],
    // Kraft Heinz - 4 gambar
    3: [
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944107/laulpayhvqtxw4sdcfj7.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1768039749/knc8rrqrkemwltc0a0h7.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1768040122/xcnanrbif3vtpx9fawtn.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1768039928/nvdqeqgvxd0r4jvglwoe.webp'
    ],
    // GMF AeroAsia - 4 gambar
    4: [
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1768572864/eznoe19cofpouy7gxxdy.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1768572868/fb3mkzkuzazbcoiwhpmx.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1768572870/blh4pldaljgmx67vve8n.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1768572873/do5xfn1ck7xp4u9sozrn.webp'
    ],
    // Hangry - 4 gambar
    5: [
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1768731685/rw6knbxeyvx5dvkv4pll.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1768731684/qdg5ssfl7su2zyu2w2fs.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1768731683/yvgjwdy0vvnzdl0cw05q.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1768731684/v0nfvuqv1kblpygvnur8.webp'
    ],
    6: [
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1768733431/terxy77y75loo55odn4y.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1768733503/gs8bcozqmrpwl2mlhnbt.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1768733442/rduafb4qwa1w6msek35q.webp',
      'https://res.cloudinary.com/doirxg4kz/image/upload/v1768733505/nsrqi4tbptf0axonxerz.webp'
    ]
  },

  // Contact Section - 2 gambar dekoratif
  contact: {
    portrait1: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944105/vacgqbas5qhcbzkruuvn.webp',
    portrait2: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1767944120/sjyqod0avxciykxtax4r.webp'
  },

  // Design Detail Page - Design Projects
  // ============================================
  // INPUT FOTO DESIGN DI SINI
  // ============================================
  design: [
    {
      id: 1,
      src: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1768201142/fqmjqojky1xly0wrvgwv.jpg',
      alt: 'Design Project 1',
      title: 'Visual Guidelines - 1'
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1768201137/yxvbrtl7vv8bxhdqqrpw.jpg',
      alt: 'Design Project 2',
      title: 'Visual Guidelines - 2'
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1768201130/leqvcsa2t6kypm6qxj2m.jpg',
      alt: 'Design Project 3',
      title: 'Visual Guidelines - 3'
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1768201124/nfzbwbqmxrholo2g4jiq.jpg',
      alt: 'Design Project 4',
      title: 'Visual Guidelines - 4'
    },
    {
      id: 5,
      src: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1768201118/mezbigbpo3f5b2pe7uss.jpg',
      alt: 'Design Project 5',
      title: 'Visual Guidelines - 5'
    },
    {
      id: 6,
      src: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1768201121/rltdz3gujnw2k7sb7ujs.jpg',
      alt: 'Design Project 6',
      title: 'Visual Guidelines - 6'
    },
    {
      id: 7,
      src: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1768201110/zyw74kp7infabhbvwsra.png',
      alt: 'Design Project 7',
      title: 'Visual Guidelines - 7'
    },
    {
      id: 8,
      src: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1768201112/wtd4hdiisdjbwg7i2cd3.jpg',
      alt: 'Design Project 8',
      title: 'Visual Guidelines - 8'
    },
    {
      id: 9,
      src: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1768201133/zqbyfgc33uavozbe28gb.jpg',
      alt: 'eComFestiveBanner',
      title: 'eComFestiveBanner TokpedBanner-V2'
    },
    {
      id: 10,
      src: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1768201131/tr4cno47aybie4pfvx40.jpg',
      alt: 'eComFestive2025',
      title: 'eComFestive2025 eComFestive2025BannerAffiliate1000x1000-V1'
    },
    {
      id: 11,
      src: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1768201125/xuqxdomczh5eghujwcpb.jpg',
      alt: 'BannerShopeeAffiliate',
      title: 'BannerShopeeAffiliate'
    },
    {
      id: 12,
      src: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1768201124/d19a4kvwqcsuz2lbu7sc.jpg',
      alt: 'Banner TikTok BNPL Cooperation_7',
      title: 'Banner TikTok BNPL Cooperation_7. ABC Sambal Asli Jerigen 5.5 kg'
    },
    {
      id: 13,
      src: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1768201136/eqyey0h3myqo0hmcfysc.jpg',
      alt: 'Banner TikTok BNPL Cooperation_15',
      title: 'Banner TikTok BNPL Cooperation_15. ABC Sambal Extra Pedas 950 g Multi Pack 3 pcs Free ABC Sambal Extreme Pedas 135 ml'
    },
    {
      id: 14,
      src: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1768201128/sxhkppvj4jmvr01hxjxh.jpg',
      alt: 'eComFestive2025',
      title: 'eComFestive2025 TokpedBanner-V3_1'
    },
    {
      id: 15,
      src: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1768201112/jh5lmbiuxcypegf5yr4c.jpg',
      alt: 'eComFestive2025',
      title: 'eComFestive2025 TokpedBanner-V3_2'
    },
    {
      id: 16,
      src: 'https://res.cloudinary.com/doirxg4kz/image/upload/v1768201141/bnwoewjvycls4m9r154z.jpg',
      alt: 'EcommerceBannerAlfagiftSambalAsliEP1kg',
      title: 'EcommerceBannerAlfagiftSambalAsliEP1kg-DiskonFebruari2025-900x300-V1'
    },
  ]
};

// === VIDEO FILES ===
// TODO: Ganti dengan URL Cloudinary video Anda sendiri
export const videoFiles = [
  { name: 'HSS - Stopmotion Hand', path: 'https://res.cloudinary.com/doirxg4kz/video/upload/v1768054955/qrqhwz6c50e76hgqdldp.mp4' },
  { name: 'MC - Tetap Paling Korea', path: 'https://res.cloudinary.com/doirxg4kz/video/upload/v1768054958/idpxf7qxgj4q5a1gbkdo.mp4' },
  { name: 'WTF - Instastory Bean Bag', path: 'https://res.cloudinary.com/dg8mikfls/video/upload/v1768731162/WTF_-_Instastory_Bean_Bag_tmsne3.mp4' },
  { name: 'WTF - Human Element Stopmo', path: 'https://res.cloudinary.com/doirxg4kz/video/upload/v1768054962/s0bf10jaddmoy7ftxlob.mp4' },
  { name: 'WTF - Thai Bestorant', path: 'https://res.cloudinary.com/doirxg4kz/video/upload/v1768054966/ke59lykwasidchhrbf4m.mp4' },
  { name: 'MC - Momoen Akhir Tahun Banyak Rasa', path: 'https://res.cloudinary.com/doirxg4kz/video/upload/v1768054974/jplrojjcaqyx6wy3zscf.mp4' },
  { name: 'WTF - Bestoran', path: 'https://res.cloudinary.com/doirxg4kz/video/upload/v1768054975/zrsnjlrsyegcvvnaelp3.mp4' },
  { name: 'WTF - Shopee Flash Sale', path: 'https://res.cloudinary.com/doirxg4kz/video/upload/v1768054977/qj3vm4lrogxyxtnaqycf.mp4' },
  { name: 'WTF - Tomyum Fried Rice', path: 'https://res.cloudinary.com/doirxg4kz/video/upload/v1768054978/sflmlaxkmmu4wjtjgl3s.mp4' },
  { name: 'GMF - Spirit of August', path: 'https://res.cloudinary.com/doirxg4kz/video/upload/v1768054984/iohtp766xhntvezuslc2.mp4' },
  { name: 'Aurelia - Canvas Apalagi VHS', path: 'https://res.cloudinary.com/doirxg4kz/video/upload/v1768054986/rbwbd3tkbloeqyx9hw8h.mp4' },
  { name: 'GMF - HUT RI 79', path: 'https://res.cloudinary.com/doirxg4kz/video/upload/v1768054994/dyoykrrbpp05qvmmhc6u.mp4' },
  { name: 'ADIML KEENAN FINAL', path: 'https://res.cloudinary.com/doirxg4kz/video/upload/v1768055080/dtiqvgvbm0h516bpas5j.mp4' },
  { name: 'Korea Style', path: 'https://res.cloudinary.com/doirxg4kz/video/upload/v1768055052/aj7eoecvfd0dxovrb61o.mp4' },
  { name: 'TikTokNative1STBSardines', path: 'https://res.cloudinary.com/dg8mikfls/video/upload/v1768731228/TikTokNative1STBSardines_f13fvo.mp4' },
  { name: 'TikTokNative2STBSardines', path: 'https://res.cloudinary.com/dg8mikfls/video/upload/v1768731171/TikTokNative2STBSardines_rzunyr.mp4' },
];

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