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