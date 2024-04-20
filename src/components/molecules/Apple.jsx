import arrowRight from "../../assets/arrowRight.svg";
import prod from "../../assets/brand2.svg";
import airpod from "../../assets/airpod.png";
import airpods from "../../assets/airpods.png";
import mac from "../../assets/Mac.png";
import maclap from "../../assets/maclap.png";
import aub from "../../assets/Frame 39908.png";
import phone from "../../assets/phone.png";

const Apple = () => {
  return (
    <div className="flex flex-col py-8 px-4 sm:px-8">
      <div className="flex flex-row flex-wrap justify-between items-center">
        <div className="flex flex-row items-center mb-4 sm:mb-0">
          <img src={prod} alt="product" className="w-14 h-14" />
          <h3 className="text-sm font-bold p-4">Apple</h3>
        </div>
        <div className="flex flex-row items-center">
          <h4 className="text-xs font-bold">See more items</h4>
          <img src={arrowRight} alt="arrowRight" className="" />
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        <div className="flex flex-col gap-4">
          <img
            src={airpod}
            alt="airpod"
            className="w-[100px] max-w-xs mx-auto"
          />
          <p className="text-sm font-bold text-center">Airpod</p>
        </div>
        <div className="flex flex-col gap-4">
          <img
            src={maclap}
            alt="maclap"
            className="w-[100px] max-w-xs mx-auto"
          />
          <p className="text-sm font-bold text-center">Mac</p>
        </div>
        <div className="flex flex-col gap-4">
          <img src={mac} alt="mac" className="w-[100px] max-w-xs mx-auto" />
          <p className="text-sm font-bold text-center">MacBook</p>
        </div>
        <div className="flex flex-col gap-4">
          <img
            src={airpods}
            alt="airpods"
            className="w-[100px] max-w-xs mx-auto"
          />
          <p className="text-sm font-bold text-center">Airpod</p>
        </div>
        <div className="flex flex-col gap-4">
          <img src={phone} alt="phone" className="w-[100px] max-w-xs mx-auto" />
          <p className="text-sm font-bold text-center">Phone</p>
        </div>
        <div className="flex flex-col gap-4">
          <img src={aub} alt="aub" className="w-[100px] max-w-xs mx-auto" />
          <p className="text-sm font-bold text-center">Airpod</p>
        </div>
      </div>
    </div>
  );
};

export default Apple;
