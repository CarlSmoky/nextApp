import React from "react";

interface Props {
  VideoId: string;
  title: string;
}

const VideoWrapper: React.FC<Props> = ({ VideoId, title }: Props) => {
  return (
    <div className="m-auto md:mt-0 w-full aspect-video md:w-1/2">
      <iframe
        width="100%"
        height="100%"
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
        loading="lazy"
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
            img, svg {
              position: absolute;
              width: 100%;
              top: 0;
              bottom: 0;
              margin: auto;
            }
            
            svg {
              filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
              transition: all 250ms ease-in-out;
            }
            
            body:hover svg {
              filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
              transform: scale(1.1);
            }
          </style>
          <a href=https://www.youtube.com/embed/${VideoId}?autoplay=1&fs=1>
            <img
              src=https://img.youtube.com/vi/${VideoId}/hqdefault.jpg
              alt=${title}
            >
            <svg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
          </a>`
        }
      />
    </div>
  );
};

export default VideoWrapper;
