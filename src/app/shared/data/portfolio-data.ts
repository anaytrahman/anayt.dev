import { Skill } from '../interfaces/skill.interface';
import { Experience } from '../interfaces/experience.interface';
import { Project } from '../interfaces/project.interface';
import { ServiceOffering, Achievement, SocialLink, NavLink } from '../interfaces/service.interface';

// Replace every placeholder value below with real content when you personalize the site.

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', fragment: 'home' },
  { label: 'About', fragment: 'about' },
  { label: 'Skills', fragment: 'skills' },
  { label: 'Experience', fragment: 'experience' },
  { label: 'Projects', fragment: 'projects' },
  { label: 'Services', fragment: 'services' },
  { label: 'Contact', fragment: 'contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/anaytrahman', icon: 'fa-brands fa-github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/anaytrahman', icon: 'fa-brands fa-linkedin-in' },
  { label: 'Email', url: 'mailto:anaytrahmani1@gmail.com', icon: 'fa-solid fa-envelope' },
];

export const SKILLS: Skill[] = [
  { name: 'Angular', icon: 'fa-brands fa-angular', level: 95 },
   { name: 'React', icon: 'fa-brands fa-angular', level: 86 },
  { name: 'TypeScript', icon: 'fa-solid fa-code', level: 92 },
  { name: 'JavaScript', icon: 'fa-brands fa-js', level: 90 },
  { name: 'RxJS', icon: 'fa-solid fa-diagram-project', level: 85 },
  { name: 'Signals', icon: 'fa-solid fa-wave-square', level: 80 },
  { name: 'NgRx', icon: 'fa-solid fa-layer-group', level: 78 },
  { name: 'HTML5', icon: 'fa-brands fa-html5', level: 95 },
  { name: 'CSS3', icon: 'fa-brands fa-css3-alt', level: 92 },
  { name: 'SCSS', icon: 'fa-brands fa-sass', level: 90 },
  { name: 'SQL', icon: 'fa-brands fa-css3-alt', level: 82 },
  { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', level: 90 },
  { name: 'Angular Material', icon: 'fa-solid fa-gem', level: 85 },
  { name: 'REST API', icon: 'fa-solid fa-plug', level: 88 },
  { name: 'Git', icon: 'fa-brands fa-git-alt', level: 90 },
  { name: 'GitHub', icon: 'fa-brands fa-github', level: 90 },
  { name: 'Responsive Design', icon: 'fa-solid fa-mobile-screen', level: 93 },
  { name: '.Net', icon: 'fa-solid fa-mobile-screen', level: 60 },
  { name: 'GenAi', icon: 'fa-solid fa-mobile-screen', level: 90 },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Tenarai (formerly known as Infogain)',
    position: 'Senior Frontend Developer',
    duration: 'Jul-7-2022 — Present',
    location: 'Remote',
    responsibilities: [
      'Lead the frontend architecture for a suite of enterprise Angular applications.',
      'Introduced a shared component library, cutting new-feature build time by 30%.',
      'Mentored 4+ junior developers on Angular best practices and code reviews.',
    ],
    technologies: ['Angular', 'TypeScript', 'NgRx', 'RxJS', 'SCSS', 'SQL', 'GenAi', 'React', '.Net'],
  },
  {
    company: 'Infogain India',
    position: 'Software Engineer - (Contract)',
    duration: 'Jan-7-2022 — Jul-7- 2022',
    location: 'Noida (Remote)',
    responsibilities: [
      'Built responsive internal project used by 7,000+  active users.',
      'Integrated REST APIs and optimized bundle size, improving load time by 40%.',
      'Collaborated with designers to translate Figma files into pixel-perfect UI.',
    ],
    technologies: ['Angular','React', 'Bootstrap', 'JavaScript', 'REST API'],
  },
  {
    company: 'Freelance / Contract Work',
    position: ' Web Developer',
    duration: 'Jan 2021 — Nov 2021',
    location: 'Hybrid',
    responsibilities: [
      'Developed and maintained marketing websites and landing pages.',
      'Fixed cross-browser and responsive layout issues across product lines.',
      'Assisted in migrating legacy jQuery pages to Angular components.',
    ],
    technologies: ['Angular', 'React', 'HTML', 'CSS', 'jQuery'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Analytics Dashboard',
    description: 'A real-time analytics dashboard with interactive charts, role-based access, and dark-mode support.',
    image: 'assets/images/project-placeholder-1.jpg',
    techStack: ['Angular', 'NgRx', 'Chart.js'],
    liveUrl: 'https://your-project-link.example.com',
    githubUrl: 'https://github.com/your-username/analytics-dashboard',
    featured: true,
  },
  {
    id: 2,
    name: 'E-Commerce Storefront',
    description: 'A fully responsive storefront with cart management, filters, and a Stripe-ready checkout flow.',
    image: 'assets/images/project-placeholder-2.jpg',
    techStack: ['Angular', 'Bootstrap', 'REST API'],
    liveUrl: 'https://your-project-link.example.com',
    githubUrl: 'https://github.com/your-username/ecommerce-storefront',
  },
  {
    id: 3,
    name: 'Task Management App',
    description: 'A Kanban-style task manager with drag-and-drop boards, notifications, and team workspaces.',
    image: 'assets/images/project-placeholder-3.jpg',
    techStack: ['Angular', 'Signals', 'SCSS'],
    liveUrl: 'https://your-project-link.example.com',
    githubUrl: 'https://github.com/your-username/task-manager',
  },
  {
    id: 4,
    name: 'Weather Forecast App',
    description: 'A location-aware weather app with animated conditions and a 7-day forecast view.',
    image: 'assets/images/project-placeholder-4.jpg',
    techStack: ['Angular', 'RxJS', 'REST API'],
    liveUrl: 'https://your-project-link.example.com',
    githubUrl: 'https://github.com/your-username/weather-app',
  },
  {
    id: 5,
    name: 'Recipe Discovery Platform',
    description: 'A recipe search platform with saved favorites, ingredient filters, and print-friendly recipe pages.',
    image: 'assets/images/project-placeholder-5.jpg',
    techStack: ['Angular', 'Bootstrap', 'TypeScript'],
    liveUrl: 'https://your-project-link.example.com',
    githubUrl: 'https://github.com/your-username/recipe-app',
  },
  {
    id: 6,
    name: 'Personal Finance Tracker',
    description: 'A budgeting tool with animated charts, category breakdowns, and monthly spending goals.',
    image: 'assets/images/project-placeholder-6.jpg',
    techStack: ['Angular', 'NgRx', 'Chart.js'],
    liveUrl: 'https://your-project-link.example.com',
    githubUrl: 'https://github.com/your-username/finance-tracker',
  },
];

export const SERVICES: ServiceOffering[] = [
  { title: 'Frontend Development', description: 'Building fast, maintainable web interfaces from the ground up.', icon: 'fa-solid fa-code' },
  { title: 'Angular Development', description: 'Scalable Angular architecture using standalone components and signals.', icon: 'fa-brands fa-angular' },
  { title: 'Responsive Website Development', description: 'Pixel-perfect layouts that work beautifully on every device.', icon: 'fa-solid fa-mobile-screen-button' },
  { title: 'Dashboard Development', description: 'Data-rich dashboards with clean visualizations and role-based views.', icon: 'fa-solid fa-chart-line' },
  { title: 'Performance Optimization', description: 'Improving load times, bundle size, and Lighthouse scores.', icon: 'fa-solid fa-gauge-high' },
  { title: 'REST API Integration', description: 'Connecting frontend apps to APIs with clean, typed service layers.', icon: 'fa-solid fa-plug-circle-bolt' },
  { title: 'Reusable Component Development', description: 'Shared component libraries that keep teams shipping consistently.', icon: 'fa-solid fa-cubes' },
];

export const ACHIEVEMENTS: Achievement[] = [
  { label: 'Years Experience', value: 4, suffix: '+', icon: 'fa-solid fa-briefcase' },
  { label: 'Projects Completed', value: 20, suffix: '+', icon: 'fa-solid fa-diagram-project' },
  { label: 'Responsive', value: 100, suffix: '%', icon: 'fa-solid fa-mobile-screen' },
  { label: 'Users Served', value: 15000, suffix: '+', icon: 'fa-solid fa-users' },
];
