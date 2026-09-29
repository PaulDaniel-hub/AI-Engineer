export interface ProfileData {
  name: string;
  role: string;
  degree: string;
  specialization: string;
  year: string;
  tagline: string;
  heroHeadline: string;
  heroSupportingText: string;
  aboutBio: string[];
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  avatarUrl: string;
  illustrationUrl: string;
}

export interface SkillItem {
  name: string;
  level?: 'Beginner' | 'Foundational' | 'Currently Exploring' | 'Active';
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  hasInteractiveDemo: boolean;
  pythonCode: string;
  demoType?: 'voter' | 'calculator' | 'atm' | 'grade';
}

export interface ActivityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  learnings: string[];
}

export interface JourneyStep {
  step: string;
  title: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  description: string;
  highlights: string[];
}

export interface CurrentlyLearningItem {
  id: string;
  topic: string;
  category: string;
  description: string;
}
