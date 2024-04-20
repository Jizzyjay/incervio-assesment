import ArrowLeft from "../../assets/arrowLeft.svg";
import ArrowRight from "../../assets/arrowRight.svg";

const NavbarTop = () => {
  return (
    <div className="flex flex-row justify-between items-center py-2 px-2 md:px-[4rem] text-sm font-bold">
      <img src={ArrowLeft} alt="ArrowLeft" />
      <p className="text-[#194E8A]">
        Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod
      </p>
      <img src={ArrowRight} alt="ArrowRight" />
    </div>
  );
};

export default NavbarTop;
