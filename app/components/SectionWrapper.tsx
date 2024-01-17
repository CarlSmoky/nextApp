import React, { PropsWithChildren } from 'react'
import SectionTitle from "../components/SectionTitle"
import '../globals.css'

interface Props extends PropsWithChildren {
  title: string;
}

const SectionWrapper: React.FC< Props > = ({ title, children} : Props ) => {
  return (
    <section className="margin-global mb-10 md:mb-16 lg:mb-20 xl:mb-24">
      <SectionTitle
          title={title}
      />
      {children}
    </section>
  )
}

export default SectionWrapper