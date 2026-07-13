export interface Project {
  id: number;
  name: string;
  description: string;
  image: string; // replace with real screenshot path later
  techStack: string[];
  liveUrl: string; // replace with real deployed URL
  githubUrl: string; // replace with real repo URL
  featured?: boolean;
}
