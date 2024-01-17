import React, { PropsWithChildren }  from "react";

interface Props extends PropsWithChildren {
  paragraph: string;
}

const ParagraphWrapper: React.FC<Props> = ({ paragraph, children }: Props) => {
  return (
    <div className="w-auto mt-10 md:mt-0 md:ml-8 md:w-1/2">
        <p className="text-left text-grey-100 text-base md:text-lg lg:text-xl font-paragraph tracking-wide mb-3">
          {paragraph}
        </p>
        {children}
      </div>
  )
}

export default ParagraphWrapper