import React from "react";

interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <h2 className="my-6 p-4 font-bold text-xl uppercase text-center md:text-3xl md:my-16 md:p-10">
      {title}
    </h2>
  );
};

export default SectionTitle;
