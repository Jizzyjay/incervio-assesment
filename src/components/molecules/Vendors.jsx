import brand1 from "../../assets/brand1.svg";
import brand2 from "../../assets/brand2.svg";
import brand3 from "../../assets/brand3.svg";
import brand4 from "../../assets/brand4.svg";
import ven1 from "../../assets/ven1.png";
import ven2 from "../../assets/ven2.png";
import ven3 from "../../assets/ven3.png";
import ven4 from "../../assets/ven4.png";
import SFull from "../../assets/starFull.svg";

const Vendors = () => {
  return (
    <div className="flex flex-col py-8 px-4 sm:px-8">
      <h3 className="text-[0.9rem] font-bold py-4">Weekly Top Vendors</h3>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className=" bg-white flex flex-col gap-4 p-4 ">
          <div className="flex flex-row gap-4 items-center">
            <img src={brand1} alt="brand" className="w-14 h-14" />
            <div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">Pizza Hut</p>
                <div className="flex flex-row gap-x-6">
                  <div className="flex flex-col">
                    <p>Items</p>
                    <p className="text-sm">(400)</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <img src={SFull} alt="star" />
                      <img src={SFull} alt="star" />
                      <img src={SFull} alt="star" />
                      <img src={SFull} alt="star" />
                      <img src={SFull} alt="star" />
                    </div>
                    <p className="text-sm text-[#676E6E] pl-1">(121 Review)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={ven1} alt="Vendor" className="w-[200px] h-[200px]" />
        </div>
        <div className=" bg-white flex flex-col gap-4 p-4 ">
          <div className="flex flex-row gap-4 items-center">
            <img src={brand2} alt="brand" className="w-14 h-14" />
            <div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">Lious Vuitton</p>
                <div className="flex flex-row gap-x-6">
                  <div className="flex flex-col">
                    <p>Items</p>
                    <p className="text-sm">(400)</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <img src={SFull} alt="star" />
                      <img src={SFull} alt="star" />
                      <img src={SFull} alt="star" />
                      <img src={SFull} alt="star" />
                      <img src={SFull} alt="star" />
                    </div>
                    <p className="text-sm text-[#676E6E] pl-1">(121 Review)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={ven2} alt="Vendor" />
        </div>
        <div className=" bg-white flex flex-col gap-4 p-4 ">
          <div className="flex flex-row gap-4 items-center">
            <img src={brand3} alt="brand" className="w-14 h-14" />
            <div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">Mistibuishi</p>
                <div className="flex flex-row gap-x-6">
                  <div className="flex flex-col">
                    <p>Items</p>
                    <p className="text-sm">(400)</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <img src={SFull} alt="star" />
                      <img src={SFull} alt="star" />
                      <img src={SFull} alt="star" />
                      <img src={SFull} alt="star" />
                      <img src={SFull} alt="star" />
                    </div>
                    <p className="text-sm text-[#676E6E] pl-1">(121 Review)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={ven3} alt="Vendor" />
        </div>
        <div className=" bg-white flex flex-col gap-4 p-4 ">
          <div className="flex flex-row gap-4 items-center">
            <img src={brand4} alt="brand" className="w-14 h-14" />
            <div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">Ferrari</p>
                <div className="flex flex-row gap-x-6">
                  <div className="flex flex-col">
                    <p>Items</p>
                    <p className="text-sm">(400)</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <img src={SFull} alt="star" />
                      <img src={SFull} alt="star" />
                      <img src={SFull} alt="star" />
                      <img src={SFull} alt="star" />
                      <img src={SFull} alt="star" />
                    </div>
                    <p className="text-sm text-[#676E6E] pl-1">(121 Review)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={ven4} alt="Vendor" />
        </div>
      </div>
    </div>
  );
};

export default Vendors;
