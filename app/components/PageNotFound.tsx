import React from "react";
import BorderlineButton from "../components/BorderlineButton"

interface Props  {
  text: string;
  src: string;
}

const PageNotFound:React.FC<Props> = ({ text, src }: Props) => {
  return (
    <section className="margin-global mb-10 md:mb-16 lg:mb-20 xl:mb-24 min-h-[calc(100vh-390px)] relative">
      <h2 className="text-xl font-bold ">Page Not Found</h2>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <BorderlineButton url={src} text={text}/>
      </div>
    </section>
  );
};

export default PageNotFound;
