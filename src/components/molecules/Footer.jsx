import FooterBottom from "../atoms/FooterBottom";
import Logo from "../../assets/logo.svg";
import App from "../../assets/appstore.svg";
import play from "../../assets/playstore.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/X svg.svg";
import linkdln from "../../assets/linkdln.svg";

const Footer = () => {
  return (
    <div className="flex flex-col py-8 px-4 sm:px-8">
      <div className="flex flex-row justify-between items-center py-8">
        <div>
          <img src={Logo} alt="Logo" />

          <p>Got Question? Call us 24/7</p>
          <p>_2348141153727</p>
          <p>Register now & get you 10% <br /> offer from first order!</p>
        </div>
        <div className="flex flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-3">
            <h4 className="font-bold">Company</h4>

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
          <div className="flex flex-col gap-3">
            <h4 className="font-bold">Company</h4>

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
          <div className="flex flex-col gap-3">
            <h4 className="font-bold">Company</h4>

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
        <div className="flex flex-col">
          <div className="flex flex-col gap-y-2 items-center">
            <p className="font-normal text-2xl">Download app</p>
            <div className="flex flex-row gap-2">
              <img src={App} alt="App Store" />
              <img src={play} alt="Play Store" />
            </div>
            <div className="flex flex-row">
              {/* <div className="bg-#F7F8F8"> */}
              <img src={facebook} alt="facebook" />
              {/* </div> */}

              <img src={instagram} alt="insagram" />
              <img src={twitter} alt="twittr" />
              <img src={linkdln} alt="linkdln" />
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default Footer;
