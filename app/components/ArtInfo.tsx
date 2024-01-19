import React, { PropsWithChildren } from "react";

interface Props {
  alt: string;
  size: string;
  price: number;
}

const ArtInfo: React.FC<Props> = ({ alt, size, price }: Props) => {
  return (
    <div className="w-auto mt-4 mb-10 md:mt-0 md:ml-8 md:w-1/2 text-left text-grey-100  tracking-wide">
      <h3 className="font-title font-bold text-lg md:text-xl lg:text-2xl">
        {alt}
      </h3>
      {size && (
        <p>
          <span className="text-sm">Size: </span>
          {size}
        </p>
      )}
      {(price || price > 0) && (
        <p>
          <span className="text-sm">Price: CAD$</span>
          {price}
        </p>
      )}
    </div>
  );
};

export default ArtInfo;
