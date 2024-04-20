import wires from "../../assets/wires.png";
import rug from "../../assets/a-student-sitting-in-a-classroom-looking-over-her-shoulder-15225256.png";
import cement from "../../assets/person-holding-a-phone-15226556.png";
import brush from "../../assets/a-man-holding-a-digital-tablet-6913227.png";
import diffuser from "../../assets/analogue-sound-mixer-in-a-purple-light-15262984.png";
import washer from "../../assets/close-up-of-an-iphone-and-a-dried-palm-leaf-decoration-in-the-background-15229858.png";
import screw from "../../assets/white-smartphone-beside-silver-laptop-computer-1036808.png";
import tap from "../../assets/analogue-sound-mixer-in-a-purple-light-15262993.png";
import ProductCard from "../atoms/ProdCard";

const SellProd = () => {
  return (
    <div className="flex flex-col py-8 px-4 sm:px-8">
      <h3 className="text-[0.9rem] font-bold py-4">On Selling Products</h3>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          bgColor="white"
          image={wires}
          title="Wireless Bluetooth Headset Single Ear Earplugs Ultra"
          price={6}
          discount={16}
          percent="%"
          dash="-"
          dollar="$"
        />
        <ProductCard
          bgColor="white"
          image={screw}
          title="Wireless Bluetooth Headset Single Ear Earplugs Ultra"
          price={6}
          discount={16}
          percent="%"
          dash="-"
          dollar="$"
        />
        <ProductCard
          bgColor="white"
          image={tap}
          title="Wireless Bluetooth Headset Single Ear Earplugs Ultra"
          price={6}
          discount={16}
          percent="%"
          dash="-"
          dollar="$"
        />
        <ProductCard
          bgColor="white"
          image={cement}
          title="Wireless Bluetooth Headset Single Ear Earplugs Ultra"
          price={6}
          discount={16}
          percent="%"
          dash="-"
          dollar="$"
        />
        <ProductCard
          bgColor="white"
          image={washer}
          title="Wireless Bluetooth Headset Single Ear Earplugs Ultra"
          price={6}
          discount={16}
          percent="%"
          dash="-"
          dollar="$"
        />
        <ProductCard
          bgColor="white"
          image={diffuser}
          title="Wireless Bluetooth Headset Single Ear Earplugs Ultra"
          price={6}
          discount={16}
          percent="%"
          dash="-"
          dollar="$"
        />
        <ProductCard
          bgColor="white"
          image={brush}
          title="Wireless Bluetooth Headset Single Ear Earplugs Ultra"
          price={6}
          discount={16}
          percent="%"
          dash="-"
          dollar="$"
        />
        <ProductCard
          bgColor="white"
          image={rug}
          title="Wireless Bluetooth Headset Single Ear Earplugs Ultra"
          price={6}
          discount={16}
          percent="%"
          dash="-"
          dollar="$"
        />
        <ProductCard
          bgColor="white"
          image={rug}
          title="Wireless Bluetooth Headset Single Ear Earplugs Ultra"
          price={6}
          discount={16}
          percent="%"
          dash="-"
          dollar="$"
        />
      </div>
    </div>
  );
};

export default SellProd;
