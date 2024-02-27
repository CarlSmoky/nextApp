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

export interface imageLink {
  name: "string"
  linkTo: "string"
  src: "string"
}

export interface LinkInfo {
  name: string;
  link: string;
  submenu: boolean;
  sublinks: Sublink[];
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
  mimeDance = "mime_dance",
  dance = "dance",
  silentStoryTelling = "silent_storytelling",
  mimeClowning = "mime_clowning"
}

export interface Performance {
  title: string;
  subTitle?: string
  description?: string;
  type: PerformanceType;
  date?: string;
  event: string;
  location: string;
  VideoId: string;
}

export enum VisualArtType {
  washi = "washi",
  mixMedia = "mix_media",
  sculpture = "sculpture"
}

export interface VisualArtSeries {
  id: number;
  title: string;
  descriptions? : string;
  type: VisualArtType;
  images: VisualArtImage[];
}
export interface VisualArtImage {
  id: number;
  src: string;
  title: string;
  subTitle?: string;
  size?: string;
  media?: string;
  year?: number;
}


