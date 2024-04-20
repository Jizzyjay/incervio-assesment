import product from "../../assets/product1.png";

const FlashSale = () => {
  return (
    <div className="bg-white h-[495px] flex flex-col gap-3 px-4">
      <p className="text-sm pt-4">Good Afternoon, John Smith</p>
      <div className="flex flex-col items-center gap-1">
        <p className="font-bold items-center ">Flash Sale for you!</p>
        <p className="text-[#194E8A] text-5xl font-bold">
          40<span className="text-base font-thin">%off</span>
        </p>
      </div>
      <div className="flex flex-row">
        <p className="text-[0.8rem] pr-1">After 12 hr this offer will be end. </p> 
        {""}
        <a href="/" className="text-[#194E8A] text-[0.8rem] font-bold">Get Now</a> 
      </div>
      <img src={product} alt="product" />
      <button className="bg-[#194E8A] text-white p-2">Add to cart</button>
    </div>
  );
};

export default FlashSale;
