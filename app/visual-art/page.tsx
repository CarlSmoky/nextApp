import React from 'react'
import type { Metadata } from "next";
import SectionwithTitle from "../components/SectionwithTitle";
import GalleryWithStaticImage from '../components/Gallery/GalleryWithStaticImage'

export const metadata: Metadata = {
  title: 'Visual art',
}

const VisualArtPage = () => {
  return (
    <SectionwithTitle title="Visual Art">
      <GalleryWithStaticImage/>
    </SectionwithTitle>
  )
}

export default VisualArtPage