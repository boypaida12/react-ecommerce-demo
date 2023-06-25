/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ImageProductOne from "../assets/image-product-1.jpg";
import ImageProductTwo from "../assets/image-product-2.jpg";
import ImageProductThree from "../assets/image-product-3.jpg";
import ImageProductFour from "../assets/image-product-4.jpg";
import ImageProduct1 from "../assets/image-product-1-thumbnail.jpg";
import ImageProduct2 from "../assets/image-product-2-thumbnail.jpg";
import ImageProduct3 from "../assets/image-product-3-thumbnail.jpg";
import ImageProduct4 from "../assets/image-product-4-thumbnail.jpg";
import { Figure, Image } from "react-bootstrap";

function LargeScreenSlide() {
  const [displayedImage, setDisplayedImage] = useState("");
  const handleClick = (image) => {
    setDisplayedImage(image);
  };

  const thumbnails = [
    { src: ImageProduct1, alt: "Thumbnail 1", mainImage: ImageProductOne },
    { src: ImageProduct2, alt: "Thumbnail 2", mainImage: ImageProductTwo },
    { src: ImageProduct3, alt: "Thumbnail 3", mainImage: ImageProductThree },
    { src: ImageProduct4, alt: "Thumbnail 4", mainImage: ImageProductFour },
  ];
  return (
    <>
      <div className=" d-none d-lg-block">
        <Image
          src={displayedImage || ImageProductOne}
          className="rounded-3"
          width={430}
        />
        <br />
        <Figure className="d-flex gap-4">
          {thumbnails.map((thumbnail, index) => (
            <Figure.Image
              key={index}
              className="rounded-2"
              style={{ cursor: "pointer" }}
              width={90}
              alt={thumbnail.alt}
              src={thumbnail.src}
              onClick={() => handleClick(thumbnail.mainImage)}
            />
          ))}
        </Figure>
      </div>
    </>
  );
}

export default LargeScreenSlide;
