import Prev from "../../assets/scan-eye.svg";
import Com from "../../assets/columns.svg";
import SFull from "../../assets/starFull.svg";
import star from "../../assets/star.svg";
import arrowRight from "../../assets/arrowRight.svg";
import sofa from "../../assets/sofa.png";

const Deal = () => {
  return (
    <div className="flex flex-col py-8 px-4 sm:px-8">
      <div className="flex flex-row justify-between">
        <h3 className="text-[0.9rem] font-bold py-4">Shop by Department</h3>
        <div className="flex flex-row items-center">
          <h4 className="text-xs font-bold">See more items</h4>
          <img src={arrowRight} alt="arrowRight" className="text-black" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-y-3">
          <div className="bg-white flex flex-col md:flex-row gap-x-2 p-4">
            <img
              src="https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg"
              alt="Product"
              className="w-full md:w-[250px] h-[250px]"
            />
            <div className="flex flex-col gap-y-1">
              <h3 className="font-bold">
                Wireless Bluetooth Headset Single Ear Earplugs Ultra
              </h3>
              <div className="flex flex-row items-center content-center">
                <img src={SFull} alt="star" />
                <img src={SFull} alt="star" />
                <img src={SFull} alt="star" />
                <img src={SFull} alt="star" />
                <img src={star} alt="star" />
                <p className="text-sm pl-1">
                  4.5 <span className="text-sm mt-4">(121)</span>
                </p>
              </div>
              <p>
                $6{" "}
                <span className="text-[#676E6E] text-[0.75rem] pl-1">$16</span>{" "}
                <span className="text-[#676E6E] text-[0.75rem]">-50%</span>
              </p>
              <p className="text-[#676E6E] text-sm pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor...
              </p>
              <div className="bg-[#F7F8F8] flex flex-row items-center px-4 py-2 gap-x-10 mb-2">
                <button className="flex flex-row gap-2 cursor-pointer">
                  <img src={Prev} alt="Preview" />
                  <p className="text-[#676E6E] text-base">Preview</p>
                </button>
                <button className="flex flex-row gap-2 cursor-pointer">
                  <img src={Com} alt="Compare" />
                  <p className="text-[#676E6E] text-base">Compare</p>
                </button>
              </div>

              <button className="bg-[#194E8A] text-white p-2">
                Add to cart
              </button>
            </div>
          </div>
          <img src={sofa} alt="Sofa" />
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="bg-white flex flex-col md:flex-row gap-x-2 p-4">
            <img
              src="https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Product"
              className="w-full md:w-[250px] h-[250px]"
            />
            <div className="flex flex-col gap-y-1">
              <h3 className="font-bold">
                Wireless Bluetooth Headset Single Ear Earplugs Ultra
              </h3>
              <div className="flex flex-row items-center content-center">
                <img src={SFull} alt="star" />
                <img src={SFull} alt="star" />
                <img src={SFull} alt="star" />
                <img src={SFull} alt="star" />
                <img src={star} alt="star" />
                <p className="text-sm pl-1">
                  4.5 <span className="text-sm mt-4">(121)</span>
                </p>
              </div>
              <p>
                $6{" "}
                <span className="text-[#676E6E] text-[0.75rem] pl-1">$16</span>{" "}
                <span className="text-[#676E6E] text-[0.75rem]">-50%</span>
              </p>
              <p className="text-[#676E6E] text-sm pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor...
              </p>
              <div className="bg-[#F7F8F8] flex flex-row items-center px-4 py-2 gap-x-10 mb-2">
                <button className="flex flex-row gap-2 cursor-pointer">
                  <img src={Prev} alt="Preview" />
                  <p className="text-[#676E6E] text-base">Preview</p>
                </button>
                <button className="flex flex-row gap-2 cursor-pointer">
                  <img src={Com} alt="Compare" />
                  <p className="text-[#676E6E] text-base">Compare</p>
                </button>
              </div>
              <button className="bg-[#194E8A] text-white p-2">
                Add to cart
              </button>
            </div>
          </div>
          <img src={sofa} alt="Sofa" />
        </div>
      </div>
    </div>
  );
};

export default Deal;
