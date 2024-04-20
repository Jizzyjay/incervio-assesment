import PropTypes from "prop-types";

const ProductB = ({
  image,
  title,
  price,
  discount,
  bgColor,
  dollar,
  percent,
  dash,
}) => {
  return (
    <div className="flex flex-col">
      <img src={image} alt="Product" />
      <div className={`bg-${bgColor} flex flex-col justify-center p-3 gap-y-1`}>
        <h3 className="text-sm font-bold">{title}</h3>
        <p>
          {dollar}
          {price}{" "}
          <span className="text-[#676E6E] text-[0.75rem] pl-1">
            {dollar}
            {discount}
          </span>{" "}
          <span className="text-[#676E6E] text-[0.75rem]">
            {dash}
            {discount}
            {percent}
          </span>
        </p>
      </div>
    </div>
  );
};

ProductB.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
  dash: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  dollar: PropTypes.string.isRequired,
};

export default ProductB;
