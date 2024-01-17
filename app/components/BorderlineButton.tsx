import React, { PropsWithChildren } from "react";
import Link from "next/link";

interface Props extends PropsWithChildren {
  url: string;
  text: string;
}

const BorderlineButton: React.FC<Props> = ({ url, text, children }: Props) => {
  return (
    <div className="flex flex-col justify-evenly">
      <button className="border-solid border-2 cursor-pointer text-grey-100 hover:text-prime-100  hover:bg-grey-100/80 focus:outline-none focus:shadow-outline active:ring active:ring-grey-100 active:bg-grey-100 transition-all my-3 xl:my-6">
        <Link
          href={url}
          target="_blank"
          className="mx-auto flex flex-row p-2 lg:p-4"
        >
          {children}
          <p className="m-auto text-center text-base md:text-lg lg:text-xl font-paragraph tracking-wide">{text}</p>
        </Link>
      </button>
    </div>
  );
};

export default BorderlineButton;
