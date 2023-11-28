export interface childrenProps {
  children: React.ReactNode;
}

export interface PhotoSchema {
  id: number;
  url: string;
  src: string;
  alt: string;
  blurredDataUrl?: string;
}