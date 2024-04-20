import tick from "../../assets/tick.svg";

const BannerB = () => {
  return (
    <div className="hidden sm:flex flex-row justify-between my-6 flex-wrap gap-y-4">
      <div className="flex flex-col sm:flex-row bg-[#F7F8F8] py-4 px-6 gap-2 w-full sm:w-auto">
        <img src={tick} alt="tick" />
        <div>
          <h4 className="font-bold">Quick and Easy store pickup</h4>
          <p className="text-sm">Get your order as little as 1hr</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row bg-[#F7F8F8] py-4 px-6 gap-2 w-full sm:w-auto">
        <img src={tick} alt="tick" />
        <div>
          <h4 className="font-bold">Quick and Easy store pickup</h4>
          <p className="text-sm">Get your order as little as 1hr</p>
        </div>
      </div>
      <div className="hidden sm:flex flex-col sm:flex-row bg-[#F7F8F8] py-4 px-6 gap-2 w-full sm:w-auto">
        <img src={tick} alt="tick" />
        <div>
          <h4 className="font-bold">Quick and Easy store pickup</h4>
          <p className="text-sm">Get your order as little as 1hr</p>
        </div>
      </div>
      <div className="hidden sm:flex flex-col sm:flex-row bg-[#F7F8F8] py-4 px-6 gap-2 w-full sm:w-auto">
        <img src={tick} alt="tick" />
        <div>
          <h4 className="font-bold">Quick and Easy store pickup</h4>
          <p className="text-sm">Get your order as little as 1hr</p>
        </div>
      </div>
    </div>
  );
};

export default BannerB;
