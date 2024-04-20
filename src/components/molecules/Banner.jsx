import AllCategories from "../atoms/AllCategories";
import BannerB from "../atoms/BannerB";
import BannerBottom from "../atoms/BannerBottom";
import BannerMiddle from "../atoms/BannerMiddle";
import FlashSale from "../atoms/FlashSale";

const Banner = () => {
  return (
    <div className="flex flex-col my-6 mx-8">
      <div className=" lg:flex lg:flex-row lg:gap-x-4">
      <div className="hidden lg:block">
        <AllCategories />
      </div>
      <div className="lg:flex lg:flex-col lg:gap-y-4">
        <BannerMiddle />
        <div className="hidden lg:block">
          <BannerBottom />
        </div>
      </div>
      <div className="hidden lg:block">
        <FlashSale />
      </div>
    </div>
      <BannerB />
    </div>
    
  );
};

export default Banner;
