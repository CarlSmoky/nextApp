import React from "react";
import SectionTitle from "../components/SectionTitle";
import AboutContents from "../components/AboutContents";

const AboutPage = () => {
  return (
    <div className="mx-6 md:mx-16 lg:mx-28 xl:mx-32">
      <SectionTitle
        title="Noriko Yamamoto"
      />
      <AboutContents />
    </div>
  );
};

export default AboutPage;
