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

export const images = [
{
  id: 1,
  url: '/images/fading_memories.jpg',
  src: '/images/fading_memories.jpg',
  alt: 'fading memories'
},
{
  id: 2,
  url: '/images/shadow_impression_2.jpg',
  src: '/images/shadow_impression_2.jpg',
  alt: 'shadow impression'
},
{
  id: 3,
  url: '/images/shadow_impression_3.jpg',
  src: '/images/shadow_impression_3.jpg',
  alt: 'shadow impression'
},
{
  id: 4,
  url: '/images/shadow_impression_4.jpg',
  src: '/images/shadow_impression_4.jpg',
  alt: 'shadow impression'
},
{
  id: 5,
  url: '/images/shadow_impression_5.jpg',
  src: '/images/shadow_impression_5.jpg',
  alt: 'shadow impression'
},
{
  id: 6,
  url: '/images/shadow_impression_6.jpg',
  src: '/images/shadow_impression_6.jpg',
  alt: 'shadow impression'
},
{
  id: 7,
  url: '/images/revealing_shadows.jpg',
  src: '/images/revealing_shadows.jpg',
  alt: 'dance'
},
{
  id: 8,
  url: '/images/sweet_dream.jpg',
  src: '/images/sweet_dream.jpg',
  alt: 'dance'
},
{
  id: 9,
  url: '/images/water.jpg',
  src: '/images/water.jpg',
  alt: 'water'
}
]


// {
//   id: 1,
//   url: '/images/dance.jpg',
//   src: '/images/dance.jpg',
//   alt: 'dance'
// },
// {
//   id: 2,
//   url: '/images/performance.jpg',
//   src: '/images/performance.jpg',
//   alt: 'dance'
// },