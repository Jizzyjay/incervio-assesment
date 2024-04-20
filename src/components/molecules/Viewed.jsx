import { useState } from "react";
import PropTypes from "prop-types";
import arrowLeft from "../../assets/arrowLeftBorder.svg";
import arrowRight from "../../assets/arrowRightBorder.svg";
import SFull from "../../assets/starFull.svg";
import star from "../../assets/star.svg";

const products = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/906056/pexels-photo-906056.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Wireless Bluetooth Headset Single Ear ...",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Wireless Bluetooth Headset Single Ear ...",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Wireless Bluetooth Headset Single Ear ...",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/1579240/pexels-photo-1579240.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Wireless Bluetooth Headset Single Ear ...",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/1579240/pexels-photo-1579240.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Wireless Bluetooth Headset Single Ear ...",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Wireless Bluetooth Headset Single Ear ...",
  },
  {
    id: 7,
    image:
      "https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Wireless Bluetooth Headset Single Ear ...",
  },
  {
    id: 8,
    image:
      "https://images.pexels.com/photos/301718/pexels-photo-301718.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Wireless Bluetooth Headset Single Ear ...",
  },
];

const Product = ({ image, title }) => {
  return (
    <div className="flex flex-col p-2">
      <img src={image} alt={title} className="" />
      <div className="bg-white p-4 gap-2">
        <p className="text-sm">{title}</p>
        <div className="flex flex-col items-center gap-2 ">
          <div className="flex flex-row">
            <img src={SFull} alt="star" />
            <img src={SFull} alt="star" />
            <img src={SFull} alt="star" />
            <img src={SFull} alt="star" />
            <img src={star} alt="star" />
          </div>
          <p className="text-sm pl-1">
            {4.5}{" "}
            <span className="text-[#676E6E] text-sm mt-4">(121 Reviews)</span>
          </p>
          <p className="font-bold">
            $8.50{" "}
            <span className="text-[#676E6E] text-[0.75rem] pl-1">$17</span>{" "}
            <span className="text-[#676E6E] text-[0.75rem]">-50%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  discount: PropTypes.number.isRequired,
};

const Viewed = () => {
  const [position, setPosition] = useState(0);

  const handleMoveLeft = () => {
    setPosition((prevPosition) => Math.max(0, prevPosition - 1));
  };

  const handleMoveRight = () => {
    setPosition((prevPosition) =>
      Math.min(products.length - getVisibleProducts(), prevPosition + 1)
    );
  };

  const getVisibleProducts = () => {
    if (window.innerWidth >= 768) {
      return 4;
    } else {
      return 1;
    }
  };

  return (
    <div className="flex flex-row justify-between mt-6 p-2">
      <img
        src={arrowLeft}
        alt="arrow"
        onClick={handleMoveLeft}
        className={`cursor-pointer ${position === 0 ? "opacity-50" : ""}`}
      />
      {products
        .slice(position, position + getVisibleProducts())
        .map((product, index) => (
          <Product key={index} image={product.image} title={product.title} />
        ))}
      <img
        src={arrowRight}
        alt="arrow"
        onClick={handleMoveRight}
        className={`cursor-pointer ${
          position === products.length - getVisibleProducts()
            ? "opacity-50"
            : ""
        }`}
      />
    </div>
  );
};

export default Viewed;
