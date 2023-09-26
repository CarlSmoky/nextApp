import React, { PropsWithChildren } from 'react'
import SectionTitle from "../components/SectionTitle";

interface Props extends PropsWithChildren {
  title: string;
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