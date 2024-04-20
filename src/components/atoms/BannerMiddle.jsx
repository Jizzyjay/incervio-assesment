import banner from "../../assets/banner.png";

const BannerMiddle = () => {
  return (
    <div>
      <img src={banner} alt="banner" className="w-full lg:w-auto bg-cover" />
    </div>
  );
};

export default BannerMiddle;
