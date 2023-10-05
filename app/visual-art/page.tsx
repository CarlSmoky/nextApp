import React from 'react'
import type { Metadata } from 'next'
import Gallery from '../components/Gallery'

export const metadata: Metadata = {
  title: 'Visual art',
}

const VisualArtPage = () => {
  return (
    <div className='margin-global'>
      <Gallery/>
    </div>
  )
}

export default VisualArtPage