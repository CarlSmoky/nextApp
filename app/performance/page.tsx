import React from 'react'
import type { Metadata } from 'next'
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: 'Performance',
}

const PerformancePage = () => {
  return (
    <SectionWrapper title="Performance">
      <p className='text-center font-paragraph'>Coming soon...</p>
    </SectionWrapper>
  )
}

export default PerformancePage