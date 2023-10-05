import React from 'react';
import Image from 'next/image';

const ImageGrid = () => {
   const items = [
    {
      id: 1,
      src: '/images/performance.jpg',
      link: 'link here',
    },
    {
      id: 2,
      src: '/images/performance.jpg',
      link: 'link here',
    },
    {
      id: 3,
      src: '/images/performance.jpg',
      link: 'link here',
    },
    {
      id: 4,
      src: '/images/performance.jpg',
      link: 'link here',
    },
    {
      id: 5,
      src: '/images/performance.jpg',
      link: 'link here',
    },
  ];
  return (
    <>
      <div
        className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen text-center md:text-left'
      >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
Title            </p>
            <p className='py-6'>subtitle</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5'>
            {items.map(({ id, src, link }) => (
              <div
                key={id}
                className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'
              >
                <Image
                  src={src}
                  alt=''
                  width={200}
                  height={200}
                  className='rounded-md duration-200 hover:scale-105'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageGrid;