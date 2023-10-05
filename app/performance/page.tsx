import React from 'react'
import type { Metadata } from 'next'
import ImageGrid from '../components/ImageGrid'
import Gallery from '../components/GalleryWithStaticImage'

export const metadata: Metadata = {
  title: 'Performance',
}

const PerformancePage = () => {
  return (
    <div>PerformancePage
      <Gallery/>
    </div>
  )
}

export default PerformancePage