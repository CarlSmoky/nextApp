import React, { PropsWithChildren } from 'react'
import SectionTitle from "./SectionTitle"

interface Props extends PropsWithChildren {
  title: string;
  isPageHeading?: boolean;
}

const SectionwithTitle: React.FC< Props > = ({ title, children, isPageHeading = true} : Props ) => {
  return (
    <section className="margin-global mb-10 md:mb-16 lg:mb-20 xl:mb-24">
      <SectionTitle
          title={title}
          isPageHeading={isPageHeading}
      />
      {children}
    </section>
  )
}

export default SectionwithTitle