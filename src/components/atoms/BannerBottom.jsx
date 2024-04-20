import { useState } from "react";
import PropTypes from "prop-types";
import arrowLeft from "../../assets/arrowLeftBorder.svg";
import arrowRight from "../../assets/arrowRightBorder.svg";
import brand1 from "../../assets/brand1.svg";
import brand2 from "../../assets/brand2.svg";
import brand3 from "../../assets/brand3.svg";
import brand4 from "../../assets/brand4.svg";
import brand5 from "../../assets/brand5.svg";
import brand6 from "../../assets/brand6.svg";
import brand7 from "../../assets/brand7.svg";
import brand8 from "../../assets/brand8.svg";
import brand9 from "../../assets/brand9.svg";

const brands = [
  { id: 1, image: brand1, name: "Brand 1" },
  { id: 2, image: brand2, name: "Brand 2" },
  { id: 3, image: brand3, name: "Brand 3" },
  { id: 4, image: brand4, name: "Brand 4" },
  { id: 5, image: brand5, name: "Brand 5" },
  { id: 6, image: brand6, name: "Brand 6" },
  { id: 7, image: brand7, name: "Brand 7" },
  { id: 8, image: brand8, name: "Brand 8" },
  { id: 9, image: brand9, name: "Brand 9" },
];

const Brand = ({ image, name }) => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <img src={image} alt={name} className="w-16 h-16" />
      <p className="text-sm">{name}</p>
    </div>
  );
};

Brand.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const BannerBottom = () => {
  const [position, setPosition] = useState(0);

  const handleMoveLeft = () => {
    setPosition((position) => Math.max(0, position - 1));
  };

  const handleMoveRight = () => {
    setPosition((position) => Math.min(brands.length - 5, position + 1));
  };

  return (
    <div className="bg-white flex flex-row justify-between mt-6 p-2">
      <img
        src={arrowLeft}
        alt="arrow"
        onClick={handleMoveLeft}
        className="cursor-pointer"
      />
      {brands.slice(position, position + 5).map((brand) => (
        <Brand key={brand.id} image={brand.image} name={brand.name} />
      ))}
      <img
        src={arrowRight}
        alt="arrow"
        onClick={handleMoveRight}
        className="cursor-pointer"
      />
    </div>
  );
};

export default BannerBottom;
