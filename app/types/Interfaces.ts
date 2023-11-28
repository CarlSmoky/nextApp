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