export interface Profile {
  name: string;
  title: string;
  heroSummary: string;
  professionalPositioning: string;
  aboutSummary: string;
  technicalIdentity: string;
  location: string;
  email: string;
  resumePath: string;
  seoDescription: string;
  keywords: string[];
  currentFocus: string[];
  researchInterests: string[];
  engineeringApproach: string[];
  bio: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'linkedin' | 'github' | 'mail';
  note?: string;
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  completed: string;
  highlight?: string;
  gpa?: string;
  award?: string;
  focus?: string;
}

export interface ExperienceItem {
  organization: string;
  location: string;
  role: string;
  dateRange: string;
  bullets: string[];
  category: 'research' | 'teaching' | 'industry';
}

export interface PublicationItem {
  authorshipRole: string;
  title: string;
  venue: string;
  year: string;
  doi: string;
  summary: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
