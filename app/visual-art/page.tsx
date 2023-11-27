import React from 'react'
import type { Metadata } from 'next'
import GalleryWithStaticImage from '../components/Gallery/GalleryWithStaticImage'

export const metadata: Metadata = {
  title: 'Visual art',
}

const VisualArtPage = () => {
  return (
    <div className='margin-global'>
      <GalleryWithStaticImage/>
    </div>
  )
}

export default VisualArtPage