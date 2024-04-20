import Logo from "../../assets/logo.svg";
import Cart from "../../assets/shopping-cart.svg";
import User from "../../assets/user.svg";
import Search from "../../assets/search.svg";

const NavbarMiddle = () => {
  return (
    <div className="bg-[#194E8A] flex flex-row justify-between items-center py-4 px-2 md:px-16">
      <a href="/">
        <img src={Logo} alt="Logo" className="md:mr-8" />
      </a>
      <div className="relative hidden md:block w-full md:w-auto mb-4 md:mb-0">
        <input
          type="text"
          placeholder="Example: Wallet"
          className="w-full md:w-96 border rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        <img
          src={Search}
          alt="Search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <div className="flex flex-row gap-x-1 items-center">
          <p className="text-white text-sm">Sign In</p>
          <img src={User} alt="User" className="w-5 h-5" />
        </div>
        <div className="flex flex-row gap-x-1 items-center">
          <p className="text-white text-sm">Cart</p>
          <img src={Cart} alt="Cart" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default NavbarMiddle;
