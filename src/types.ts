export interface Project {
  discussionForum: string | undefined;
  demoVideo: any;
  pitchDeck: string | undefined;
  fundingDetails: ReactNode;
  githubRepo: string | undefined;
  techStack: any;
  id: string;
  title: string;
  description: string;
  requiredSkills: string[];
  teamSize: number;
  deadline: string;
  branches: string[];
  creator: User;
  team: User[];
  status: 'open' | 'in-progress' | 'completed';
  githubLink?: string;
  documents?: string[];
}

export interface User {
  id: string;
  name: string;
  branch: string;
  skills: string[];
  avatar: string;
  email: string;
  github?: string;
  linkedin?: string;
  bio?: string;
  projects: string[]; // Project IDs
  role: 'student' | 'admin';
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  assignedTo: string[]; // User IDs
  status: 'todo' | 'in-progress' | 'completed';
  deadline: string;
  priority: 'low' | 'medium' | 'high';
}