import React from 'react'
import type { Metadata } from "next";
import SectionWrapper from "../components/SectionWrapper";
import ItalicWrapper from "../components/ItalicWrapper";
import GalleryWithStaticImage from '../components/Gallery/GalleryWithStaticImage'

export const metadata: Metadata = {
  title: 'Visual art',
}

const VisualArtPage = () => {
  return (
    <SectionWrapper title="Visual Art">
      <ItalicWrapper>Page under construction&nbsp;&nbsp;. . .&nbsp;&nbsp;more coming</ItalicWrapper>
      <GalleryWithStaticImage/>
    </SectionWrapper>
  )
}

export default VisualArtPage