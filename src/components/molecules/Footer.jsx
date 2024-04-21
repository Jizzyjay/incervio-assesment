import FooterBottom from "../atoms/FooterBottom";
import Logo from "../../assets/logoFooter.svg";
import App from "../../assets/appstore.svg";
import play from "../../assets/playstore.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/X svg.svg";
import linkdln from "../../assets/linkdln.svg";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-center py-8 px-4 sm:px-8">
        <div className="flex flex-col gap-2">
          <img src={Logo} alt="Logo" className="w-[8rem] h-[4rem]" />
          <div className="flex flex-col gap-2">
            <p className="text-sm">Got Question? Call us 24/7</p>
            <p className="text-sm">+2348141153727</p>
            <p className="text-sm">
              Register now & get you 10% <br /> offer from first order!
            </p>
            <input
              type="text"
              placeholder="English (USA)"
              className="w-[9rem] px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-14">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Company</h4>
            <div className="flex flex-col gap-3">
              <a className="text-sm" href="/">
                About us
              </a>
              <a className="text-sm" href="/">
                Career
              </a>
              <a className="text-sm" href="/">
                Contact us
              </a>
              <a className="text-sm" href="/">
                Start Selling
              </a>
              <a className="text-sm" href="/">
                Order History
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">My Account</h4>
            <div className="flex flex-col gap-3">
              <a className="text-sm" href="/">
                Track my order
              </a>
              <a className="text-sm" href="/">
                View Cart
              </a>
              <a className="text-sm" href="/">
                Sign in
              </a>
              <a className="text-sm" href="/">
                Help
              </a>
              <a className="text-sm" href="/">
                Wishlist
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Customer Service</h4>
            <div className="flex flex-col gap-3">
              <a className="text-sm" href="/">
                Payment Method
              </a>
              <a className="text-sm" href="/">
                Money Return Policy
              </a>
              <a className="text-sm" href="/">
                Product Return
              </a>
              <a className="text-sm" href="/">
                Contact Seller
              </a>
              <a className="text-sm" href="/">
                Terms and Condition
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:hidden lg:block flex-col items-center gap-y-7">
          <div className="flex flex-col items-center">
            <p className="font-normal text-2xl">Download app</p>
            <div className="flex flex-row gap-2">
              <img src={App} alt="App Store" className="w-24 h-24" />
              <img src={play} alt="Play Store" className="w-28 h-24" />
            </div>
          </div>
          <div className="flex flex-row">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="insagram" />
            <img src={twitter} alt="twittr" />
            <img src={linkdln} alt="linkdln" />
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default Footer;
