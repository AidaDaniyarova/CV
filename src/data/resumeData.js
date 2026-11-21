import {
  faEnvelope,
  faCompass,
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export const owner = {
  name: 'Aida Daniyarova',
  title: 'Graduate Software Engineer',
  description:
    'First-Class Computer Science graduate building full-stack applications with Java (Spring Boot), Python (Django REST) and React/TypeScript.',
  // GitHub profile picture. To use a different headshot, add it to
  // src/assets/images and update this path.
  avatar: 'https://github.com/AidaDaniyarova.png',
};

export const heroTagline =
  'Building secure backend services and AI-powered full-stack applications with Java, Python and React.';

export const aboutText =
  "First-Class Computer Science graduate from De Montfort University (92%, Best Final Year Student Prize 2026) based in London. I build full-stack applications with Java (Spring Boot), Python (Django REST Framework) and React/TypeScript. In a Java backend internship I built REST APIs with JWT authentication and role-based access control; at JMart (Jusan Bank) I shipped reusable React and TypeScript components for a production fintech app. For my final year project I built, on my own, an AI career platform with skill extraction, ATS scoring and CV export (mark 91%). I'm looking for a graduate or junior software engineering role in London.";

export const educationData = [
  {
    date: 2023,
    title: 'Started BSc (Hons) Computing Science, De Montfort University',
    text: 'First year (92% average): Computer Programming (99%), Database Design and Implementation, Fundamental Concepts of Computer Science, Operating Systems and Networks.',
  },
  {
    date: 2024,
    title: 'Second year, plus Palo Alto Networks Cybersecurity Foundation',
    text: 'Second year (93% average): Object-Oriented Design and Development (97%), Agile Development Team Project (95%), Data Structures and Algorithms, Web Application Development. Also completed the DMU Carbon Literacy Project.',
  },
  {
    date: 2025,
    title: 'AWS Academy Cloud Foundations, Red Hat System Administration I (RH124)',
    text: 'Also completed the Samsung Innovation Campus Coding and Programming course and BlackBerry Security Awareness Training.',
  },
  {
    date: 2026,
    title: 'Graduated with First-Class Honours (92%), Best Final Year Student Prize',
    text: 'Final year (91% average): Software Development Methods and Standards (95%), Development Project (91%), Big Data and Machine Learning, Advanced Web Development. Also completed EPAM Front-End Development with AI Tools and Databricks Generative AI Fundamentals.',
  },
];

export const experienceData = [
  {
    date: '2025 - Present',
    info: {
      company: 'LLP Orda Tau',
      job: 'IT Specialist (remote, part-time)',
      description:
        'Automated digital certificate generation, signing and distribution, improving operational efficiency by 25%. Coordinate cross-department technical meetings with 10+ IT specialists, resolving 15+ technical issues per session.',
    },
  },
  {
    date: '2025',
    info: {
      company: 'JMart (Jusan Bank)',
      job: 'Junior Web Developer (Frontend)',
      description:
        'Built reusable TypeScript and React components for a production fintech application. Integrated backend APIs into responsive, accessible interfaces and worked in an Agile team with Git workflows and code reviews.',
    },
  },
  {
    date: '2024',
    info: {
      company: 'LLP UCO',
      job: 'Java Backend Developer Intern',
      description:
        'Built backend services and REST APIs with Java, Spring Boot and PostgreSQL, validated with Postman. Implemented JWT authentication and role-based access control, and optimised SQL queries and database schemas.',
    },
  },
  {
    date: '2023 - 2024',
    info: {
      company: 'LLP Bionic.kz',
      job: 'Assistant to the Director',
      description:
        'Drafted protocols, identification cards and certificates; supported technical tasks including online conference setup and workflow automation; ran surveys and analysed the data to improve internal processes.',
    },
  },
];

export const skillsData = [
  { name: 'Java / Spring Boot', range: 85 },
  { name: 'Python / Django REST Framework', range: 85 },
  { name: 'JavaScript / TypeScript', range: 80 },
  { name: 'React / Redux', range: 80 },
  { name: 'PostgreSQL / MySQL / SQL', range: 80 },
  { name: 'REST APIs / JWT / RBAC', range: 85 },
  { name: 'Vue 3 / Node.js / Socket.IO', range: 70 },
  { name: 'NLP / Hugging Face / scikit-learn', range: 65 },
];

export const portfolioData = [
  {
    id: 1,
    title: 'AI Career Pathway Tracker & CV Builder',
    category: 'ai',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&h=300&q=80',
    description:
      'Final year project (91%): Django REST + React/TypeScript platform with a weighted career quiz, progress dashboard, CV builder with PDF/Word export, and a job scanner using a BERT-based NER model, TF-IDF matching and a weighted ATS score.',
    link: 'https://github.com/AidaDaniyarova/career-pathway-tracker',
  },
  {
    id: 2,
    title: 'VueChat: Real-Time Chat',
    category: 'fullstack',
    image:
      'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=400&h=300&q=80',
    description:
      'Discord-style chat built with Vue 3, Pinia and Socket.IO: multiple rooms, live online users, typing indicators, emoji picker and dark mode, with a Node.js/Express backend.',
    link: 'https://github.com/AidaDaniyarova/vue-chat',
  },
  {
    id: 3,
    title: 'User Management System',
    category: 'backend',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&h=300&q=80',
    description:
      'Spring Boot REST API with Spring Security, JWT authentication, role-based access control, Flyway migrations, pagination and caching; tested with Postman and JUnit.',
    link: 'https://github.com/AidaDaniyarova/user-management',
  },
  {
    id: 4,
    title: 'Student Course Hub',
    category: 'fullstack',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&h=300&q=80',
    description:
      'Server-rendered course portal in Deno and SQLite (MVC, custom router) with admin, staff and student roles, bcrypt hashing, secure session cookies, parameterised SQL and accessible design.',
    link: 'https://github.com/AidaDaniyarova/student_course_hub',
  },
  {
    id: 5,
    title: 'I AM MUSIC: AI Lyrics Annotation',
    category: 'ai',
    image:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=400&h=300&q=80',
    description:
      'React + Django REST app that returns an AI-generated interpretation of any lyric line, using a FLAN-T5 model via the Hugging Face Inference API.',
    link: 'https://github.com/AidaDaniyarova/iammusic',
  },
];

// Add real quotes here (with the person's permission), e.g. from a
// supervisor or manager. The Feedback section shows a placeholder while empty.
export const feedbackData = [];

export const contact = [
  {
    label: 'Email',
    icon: faEnvelope,
    value: 'aida.daniyarova5@gmail.com',
    href: 'mailto:aida.daniyarova5@gmail.com',
  },
  {
    label: 'Location',
    icon: faCompass,
    value: 'London, UK',
  },
  {
    label: 'GitHub',
    icon: faGithub,
    value: 'github.com/AidaDaniyarova',
    href: 'https://github.com/AidaDaniyarova',
  },
  {
    label: 'LinkedIn',
    icon: faLinkedin,
    value: 'linkedin.com/in/aida-dani',
    href: 'https://linkedin.com/in/aida-dani',
  },
];

export const socialLinks = [
  { icon: 'github', label: 'GitHub', url: 'https://github.com/AidaDaniyarova' },
  { icon: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/aida-dani' },
];