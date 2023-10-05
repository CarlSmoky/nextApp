import React from 'react'
import type { Metadata } from 'next'
import Gallery from '../components/Gallery'
import GalleryWithStaticImage from '../components/GalleryWithStaticImage'

export const metadata: Metadata = {
  title: 'Visual art',
}

const VisualArtPage = () => {
  return (
    <div className='margin-global'>
      <GalleryWithStaticImage/>
      <Gallery/>
    </div>
  )
}

export default VisualArtPage