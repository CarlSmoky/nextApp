import React, { PropsWithChildren } from 'react'
import SectionTitle from "../components/SectionTitle"
import '../globals.css'

interface Props extends PropsWithChildren {
  title: string;
}

const SectionWrapper: React.FC< Props > = ({ title, children} : Props ) => {
  return (
    <section className="margin-global">
      <SectionTitle
          title={title}
        />
      {children}
    </section>
  )
}

export default SectionWrapper