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
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        srcDoc={
          `<style>
            * {
              padding: 0;
              margin: 0;
              overflow: hidden
            }
            html,body {
              height:  100%
            }
            img,span {
              position: absolute; 
              width:  100%;
              top: 0;
              bottom: 0;
              margin: auto
            }
            span {
              height: 1.5em;
              text-align:center;
              font: 48px/1.5 sans-serif;
              color: white;
              text-shadow: 0 0 0.5em black
            }
          </style>
          <a href=https://www.youtube.com/embed/${src}?autoplay=1&fs=0>
            <img
              src=https://img.youtube.com/vi/${src}/hqdefault.jpg
              alt=${title}
            >
            <span>▶</span>
          </a>`
        }
          loading="lazy"
      />
    </div>
  );
};

export default VideoWrapper;
