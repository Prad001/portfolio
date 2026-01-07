declare module "@cv" {
  /* ---------- ROOT EXPORT ---------- */
  const CV: CV;
  export default CV;

  /* ---------- NAMED EXPORTS ---------- */
  export const analyticsCode: string;
  export const basics: Basics;
  export const skills: Skill[];
  export const work: Work[];
  export const education: Education[];
  export const certificates: Certificate[];
  export const publications: Publication[];
  export const languages: Language[];
  export const interests: Interests[];
  export const references: Reference[];
  export const projects: Project[];
}

/* ---------- TYPES ---------- */

interface CV {
  analyticsCode: string;
  basics: Basics;
  skills: Skill[];
  work?: Work[];
  education?: Education[];
  certificates?: Certificate[];
  publications?: Publication[];
  languages: Language[];
  interests?: Interests[];
  references?: Reference[];
  projects?: Project[];
}

interface Basics {
  name: string;
  label: string;

  /* 🔹 Hero / animation-specific fields */
  animated_main_label?: string;
  animated_secondary_initial_label?: string;

  /* 🔹 Theme / layout */
  theme?: string;

  image: string;
  email: string;
  phone?: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Profile[];
}


interface Location {
  address: string;
  city: string;
  postalCode?: string;
  countryCode: string;
  region: string;
}

interface Profile {
  icon: string;
  network: string;
  username: string;
  url: string;
  color?: string;
}

interface Work {
  name: string;
  position: string;
  url?: string;
  startDate: DateStr;
  endDate?: DateStr | null;
  summary: string;
  responsibilities: string[];
  skills?: string[];
  location?: string;
  location_type?: string;
}

type DateStr = `${string}-${string}-${string}`;

interface Skill {
  icon: string;
  name: string;
  level: string;
  keywords: string[];
}

interface Certificate {
  name: string;
  date: DateStr;
  issuer: string;
  url: string;
}

interface Publication {
  name: string;
  publisher: string;
  releaseDate: DateStr;
  url: string;
  summary: string;
}

interface Education {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: DateStr;
  endDate: DateStr;
  score?: string;
  courses?: string[];
}

interface Language {
  language: string;
  fluency: string;
}

interface Project {
  name: string;
  isActive: boolean;
  description: string;
  highlights: string[];
  stack?: Record<string, string>;
  url?: string;
  github?: string;
}

interface Interests {
  name: string;
  keywords: string[];
}

interface Reference {
  name: string;
  reference: string;
}
