import sell1 from "../../assets/sell1.png";
import sell2 from "../../assets/sell2.png";

const Selling = () => {
  return (
    <div className="flex flex-col py-8 px-4 sm:px-8">
      <h3 className="text-base font-bold py-4">Our Selling Products</h3>
      <div className="flex flex-row gap-x-5">
        <div className="flex-col gap-y-2 hidden lg:flex">
          <img src={sell2} alt="product image" />
          <img src={sell2} alt="product image" />
        </div>
        <img src={sell1} alt="product image" className="h-[310px] w-full" />
        <div className="flex-col gap-y-2 hidden lg:flex">
          <img src={sell2} alt="product image" />
          <img src={sell2} alt="product image" />
        </div>
      </div>
    </div>
  );
};

export default Selling;
