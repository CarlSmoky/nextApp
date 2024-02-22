import React from 'react'
import type { Metadata } from "next";
import SectionWrapper from "../components/SectionWrapper";
import GalleryWithStaticImage from '../components/Gallery/GalleryWithStaticImage'

export const metadata: Metadata = {
  title: 'Visual art',
}

const VisualArtPage = () => {
  return (
    <SectionWrapper title="Visual Art">
      <GalleryWithStaticImage/>
    </SectionWrapper>
  )
}

export default VisualArtPage