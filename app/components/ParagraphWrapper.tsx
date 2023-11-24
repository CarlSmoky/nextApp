import React from 'react'

interface Props {
  paragraph: string;
}

const ParagraphWrapper: React.FC<Props> = ({ paragraph }: Props) => {
  return (
    <div className="w-auto mt-10 md:mx-10 md:mt-0 md:w-2/3">
        <p className="text-left text-grey-100 text-sm sm:text-base md:text-lg lg:text-xl font-paragraph">
          {paragraph}
        </p>
      </div>
  )
}

export default ParagraphWrapper