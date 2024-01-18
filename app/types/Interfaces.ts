export interface childrenProps {
  children: React.ReactNode;
}

export interface PhotoSchema {
  id: number;
  src: string;
  alt: string;
  category: string;
  updateTime: string;
  blurredDataUrl?: string;
}

export enum NavState {
  home,
  visualArt,
  peformance,
  nia,
  about,
  contact
}

export interface LinkInfo {
  name: string;
  link: string;
  submenu: boolean;
  sublinks: Sublink[];
  navState: NavState;
}

export interface Sublink {
  name: string;
  link: string;
}

export interface WorkLink {
  name: string;
  linkTo: string;
  src: string;
  navState: NavState;
}

export enum PerformanceType {
  "Mime-Dance",
  "Dance",
  "Silent Storytelling",
  "Mime/Clowning"
}

export interface Performance {
  title: string;
  additionalTitle?: string;
  subTitle?: string;
  description?: string;
  category: PerformanceType;
  date?: string;
  event: string;
  location: string;
  url: string;
}