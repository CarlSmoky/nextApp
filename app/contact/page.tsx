import React from 'react'
import type { Metadata } from 'next'
import SectionWrapper from "../components/SectionWrapper";

export const metadata: Metadata = {
  title: 'Contact',
}

const ContactPage: React.FC = () => {
  return (
    <SectionWrapper title="Contact">
    </SectionWrapper>
  )
}

export default ContactPage