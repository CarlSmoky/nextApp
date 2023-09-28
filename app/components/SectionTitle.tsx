import React from "react";

interface Props {
  title: string;
}

const SectionTitle: React.FC<Props> = ({ title }: Props) => {
  return (
    <h2 className="my-6 p-4 text-grey-200 font-bold text-xl uppercase text-center md:text-3xl md:my-16 md:p-10 font-orbitron">
      {title}
    </h2>
  );
};

export default SectionTitle;
