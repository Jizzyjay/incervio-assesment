import paypal from "../../assets/paypal.svg";
import american from "../../assets/american.svg";
import master from "../../assets/master.svg";
import visa from "../../assets/visa.svg";

const FooterBottom = () => {
  return (
    <div className="hidden sm:flex bg-[#DDDFDF] flex-col py-4 sm:px-8">
      <div className="flex flex-row justify-between items-center">
        <p className="text-sm">
          All Rights Reserved. © 2024{" "}
          <a
            className="text-blue-500"
            href="https://new-portfolio-ochre-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            johnekunola.com
          </a>
        </p>
        <div className="flex flex-row items-center gap-4">
          <p className="text-sm">We are using safe for</p>
          <img src={visa} alt="Visa" />
          <img src={paypal} alt="paypal" />
          <img src={american} alt="american" />
          <img src={master} alt="master" />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
