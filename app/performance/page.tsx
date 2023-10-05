import React from 'react'
import type { Metadata } from 'next'
import ImageGrid from '../components/ImageGrid'

export const metadata: Metadata = {
  title: 'Performance',
}

const PerformancePage = () => {
  return (
    <div>PerformancePage
      <ImageGrid/>
    </div>
  )
}

export default PerformancePage