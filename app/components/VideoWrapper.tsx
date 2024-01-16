import React from "react";

interface Props {
  src: string;
  title: string;
}

const VideoWrapper: React.FC<Props> = ({ src, title }: Props) => {
  return (
    <div className="m-auto md:mt-0 w-full aspect-video md:w-1/2">
      <iframe
        width="100%"
        height="100%"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
      ></iframe>
    </div>
  );
};

export default VideoWrapper;
