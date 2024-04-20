import { useState } from "react";
import arrowLeft from "../../assets/arrowLeftBorder.svg";
import arrowRight from "../../assets/arrowRightBorder.svg";
import brands1 from "../../assets/brands1.png";
import brands2 from "../../assets/brands2.png";
import brands3 from "../../assets/brands3.png";
import brands4 from "../../assets/brands4.png";
import brands5 from "../../assets/brands5.png";
import brands6 from "../../assets/brands6.png";
import brands7 from "../../assets/brands7.png";
import brands8 from "../../assets/brands8.png";

const Brand = () => {
  const [position, setPosition] = useState(0);

  const handleMoveLeft = () => {
    setPosition((prevPosition) => Math.max(0, prevPosition - 1));
  };

  const handleMoveRight = () => {
    setPosition((prevPosition) =>
      Math.min(images.length - 1, prevPosition + 1)
    );
  };

  const images = [
    brands1,
    brands2,
    brands3,
    brands4,
    brands5,
    brands6,
    brands7,
    brands8,
  ];

  const numImagesPerPage = window.innerWidth < 640 ? 2 : 6;
  const visibleImages = images.slice(position, position + numImagesPerPage);

  return (
    <div className="flex flex-col py-8 px-4 sm:px-8">
      <h3 className="text-[0.9rem] font-bold py-4">Top Brands</h3>

      <div className="flex flex-row justify-between items-center">
        <img
          src={arrowLeft}
          alt="left arrow"
          onClick={handleMoveLeft}
          className={`cursor-pointer ${position === 0 ? "opacity-50" : ""}`}
        />
        {visibleImages.map((image, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <img src={image} alt={`brand logo ${index + position}`} />
            <p className="text-sm">Brand Name</p>
          </div>
        ))}
        {position !== images.length - numImagesPerPage && (
          <img
            src={arrowRight}
            alt="right arrow"
            onClick={handleMoveRight}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Brand;
