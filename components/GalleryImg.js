import React from "react";
import Image from "next/image";

const GalleryImg = ({ galleryImageUrl }) => {
  return (
    <div className="cursor-pointer hover:scale-105 ease-in duration-300">
      <Image
        src={galleryImageUrl}
        alt="Image on gallery"
        width={400}
        height={225}
      />
    </div>
  );
};

export default GalleryImg;
