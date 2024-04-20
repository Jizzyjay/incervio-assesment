import sofa from "../../assets/sofa.png";
import sell1 from "../../assets/sell1.png";
import apple from "../../assets/appl.png";
import sell2 from "../../assets/sell2.png";

const Image = () => {
  return (
    <div className="flex flex-col py-8 px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <img src={apple} alt="Sofa" className="w-[350px] h-[170px]" />
        <img src={sofa} alt="Sofa" className="w-[350px] h-[170px]" />
        <img src={apple} alt="Sofa" className="w-[350px] h-[170px]" />
        <img src={sell1} alt="Sofa" className="w-[350px] h-[170px]" />
        <img src={apple} alt="Sofa" className="w-[350px] h-[170px]" />
        <img src={sell2} alt="Sofa" className="w-[350px] h-[170px]" />
      </div>
    </div>
  );
};

export default Image;
