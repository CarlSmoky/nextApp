import React from "react";

interface Props {
  title: string;
}

const SectionTitle: React.FC<Props> = ({ title }: Props) => {
  return (
    <h1 className="my-3 p-4 text-grey-100 font-bold text-2xl text-center md:text-3xl md:my-2 md:p-10 font-title tracking-wide">
      {title}
    </h1>
  );
};

export default SectionTitle;
