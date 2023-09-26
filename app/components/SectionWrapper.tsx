import React, { Children } from 'react'
import SectionTitle from "../components/SectionTitle";

interface Props {
  title: string;
  children: React.ReactNode;
}


const SectionWrapper: React.FC< Props > = ({ title, children} : Props ) => {
  return (
    <section className="mx-6 md:mx-16 lg:mx-28 xl:mx-32">
      <SectionTitle
          title={title}
        />
      {children}
    </section>
  )
}

export default SectionWrapper