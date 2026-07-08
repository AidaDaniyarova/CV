import {
  faEnvelope,
  faPhone,
  faCompass,
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faLinkedin,
  faTwitter,
  faSkype,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

export const owner = {
  name: 'Aida Daniyarova',
  title: 'Software Engineer',
  description:
    'Computer Science student with hands-on experience in Java (Spring Boot), REST APIs, PostgreSQL, and full-stack web applications.',
  // No photo supplied — generated initials avatar as a placeholder.
  // Swap for a real headshot in src/assets/images and update this path.
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

export const heroTagline =
  'Building secure, high-availability backend systems and AI-powered full-stack platforms — with a keen interest in electronic trading and financial markets technology.';

export const aboutText =
  "Motivated, self-directed Computer Science student at De Montfort University (92% GPA) with hands-on experience in Java (Spring Boot), REST API development, PostgreSQL, and full-stack web applications. Proven ability to design secure, high-availability backend systems with JWT authentication and role-based access control. Final Year Project involved architecting a production-grade AI-powered platform using Django, React, PostgreSQL, and NLP pipelines, directly analogous to building intelligent trading and automation tools. Keen interest in electronic trading and financial markets technology.";

export const educationData = [
  {
    date: 2023,
    title: 'BSc (Hons) Computer Science — De Montfort University, Leicester',
    text: 'Started a Computer Science degree, building a foundation in object-oriented design, data structures and algorithms, and web application development.',
  },
  {
    date: 2024,
    title: 'AWS Academy Cloud Foundations, Palo Alto Networks Cybersecurity Foundation',
    text: 'Completed cloud and cybersecurity foundations coursework alongside the DMUK Carbon Literacy Workshop.',
  },
  {
    date: 2025,
    title: 'Red Hat System Administration I (RH124), Samsung Innovation Campus',
    text: 'Completed Red Hat RH124, BlackBerry Security Awareness Training, and the Samsung Innovation Campus Coding & Programming course.',
  },
  {
    date: 2026,
    title: 'BSc (Hons) Computer Science — Expected Graduation',
    text: 'Relevant modules: Object-Oriented Design & Development (Java), Data Structures & Algorithms, Web Application Development, Agile Team Project (Django, PostgreSQL), Database Design & Implementation (MySQL), Operating Systems & Networks.',
  },
];

export const experienceData = [
  {
    date: '2025-Present',
    info: {
      company: 'Orda Tau',
      job: 'IT Specialist',
      description:
        'Automated digital certificate creation, signing, and distribution, achieving a 25% efficiency improvement. Coordinated cross-departmental virtual meetings with 10+ IT specialists, resolving 15+ technical issues per session.',
    },
  },
  {
    date: '2025',
    info: {
      company: 'JMart',
      job: 'Junior Web Developer (Frontend)',
      description:
        'Built responsive, high-performance web interfaces using HTML, CSS, JavaScript, and TypeScript in a production fintech environment. Developed dynamic React components to improve user experience and performance, collaborating with senior engineers in agile code reviews.',
    },
  },
  {
    date: '2024',
    info: {
      company: 'LLP UCO',
      job: 'Java Backend Developer Intern',
      description:
        'Designed and tested REST APIs using Spring Boot and Postman. Implemented JWT-based authentication and role-based access control, reducing unauthorised access by 40% in the User Management System. Developed and managed PostgreSQL databases including schema design, query optimisation, and UML diagramming.',
    },
  },
];

export const skillsData = [
  { name: 'Java / Spring Boot', range: 90 },
  { name: 'Python', range: 85 },
  { name: 'JavaScript / TypeScript', range: 85 },
  { name: 'React', range: 80 },
  { name: 'PostgreSQL / MySQL', range: 85 },
  { name: 'Django REST Framework', range: 75 },
  { name: 'REST APIs / JWT Auth', range: 88 },
  { name: 'NLP / Hugging Face / BERT', range: 65 },
];

export const portfolioData = [
  {
    id: 1,
    title: 'Career Pathway Tracker & CV Builder',
    category: 'ai',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&h=300&q=80',
    description:
      'Full-stack AI-powered career platform: diagnostic quiz engine, AI recommendation engine, ATS-optimised CV builder, and a hybrid BERT + TF-IDF NLP pipeline for CV analysis and skill-gap detection.',
    link: 'https://github.com/AidaDaniyarova',
  },
  {
    id: 2,
    title: 'Student Course Hub',
    category: 'fullstack',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&h=300&q=80',
    description:
      'University programme discovery and registration platform with role-based access, admin CRUD workflows, and WCAG2-compliant, mobile-responsive design.',
    link: 'https://github.com/AidaDaniyarova',
  },
  {
    id: 3,
    title: 'ITracker',
    category: 'backend',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&h=300&q=80',
    description:
      'Django + PostgreSQL app deployed on Render delivering personalised IT career roadmaps, skill assessments, and progress tracking at scale.',
    link: 'https://github.com/AidaDaniyarova',
  },
  // {
  //   id: 4,
  //   title: 'User Management System',
  //   category: 'backend',
  //   image:
  //     'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&h=300&q=80',
  //   description:
  //     'Spring Boot + PostgreSQL system with JWT authentication and role-based access control, reducing unauthorised access by 40%.',
  //   link: 'https://github.com/AidaDaniyarova',
  // },
  {
    id: 4,
    title: 'I AM MUSIC — AI Lyrics Annotation',
    category: 'ai',
    image:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=400&h=300&q=80',
    description:
      'React + Django REST app with Hugging Face NLP integration enabling real-time AI lyric interpretation and annotation.',
    link: 'https://github.com/AidaDaniyarova',
  },
];

export const feedbackData = [
  {
    feedback:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
    reporter: {
      photoUrl: 'https://i.pravatar.cc/100?img=33',
      name: 'Jordan Lee',
      citeUrl: 'somesite.com',
    },
  },
  {
    feedback:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
    reporter: {
      photoUrl: 'https://i.pravatar.cc/100?img=45',
      name: 'Priya Shah',
      citeUrl: 'somesite.com',
    },
  },
];

export const contact = [
  {
    label: 'Phone',
    icon: faPhone,
    value: '+77771234567',
    href: 'tel:+77771234567',
  },
  {
    label: 'Email',
    icon: faEnvelope,
    value: 'aida.daniyarova5@gmail.com',
    href: 'mailto:aida.daniyarova5@gmail.com',
  },
  // {
  //   label: 'Location',
  //   icon: faCompass,
  //   value: 'Leicester, UK',
  // },
  // {
  //   label: 'GitHub',
  //   icon: faGithub,
  //   value: 'github.com/AidaDaniyarova',
  //   href: 'https://github.com/AidaDaniyarova',
  // },
  // {
  //   label: 'LinkedIn',
  //   icon: faLinkedin,
  //   value: 'linkedin.com/in/aida-dani',
  //   href: 'https://linkedin.com/in/aida-dani',
  // },
  {
    label: 'Twitter',
    icon: faTwitter,
    value: 'twitter.com',
    href: 'https://twitter.com/',
  },
  {
    label: 'Skype',
    icon: faSkype,
    value: 'join.skype.com/invite/',
    href: 'https://join.skype.com/invite/',
  },
  {
    label: 'Facebook',
    icon: faFacebook,
    value: 'facebook.com',
    href: 'https://facebook.com/',
  },
];

export const socialLinks = [
  { icon: 'github', label: 'GitHub', url: 'https://github.com/AidaDaniyarova' },
  { icon: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/aida-dani' },
];
