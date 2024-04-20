import PropTypes from "prop-types";

const NavbarLink = ({ href, text }) => {
  return (
    <a href={href} className="text-[#194E8A] text-sm">
      {text}
    </a>
  );
};

NavbarLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const NavbarBottom = () => {
  const links = [
    { href: "#", text: "Brand" },
    { href: "#", text: "Vendors" },
    { href: "#", text: "Trending" },
    { href: "#", text: "Events" },
    { href: "#", text: "Sports" },
    { href: "#", text: "Vendors" },
    { href: "#", text: "Auctions" },
  ];

  return (
    <nav className="bg-white hidden md:flex md:flex-row items-center justify-center py-3 gap-x-10">
      {links.map((link, index) => (
        <NavbarLink key={index} href={link.href} text={link.text} />
      ))}
    </nav>
  );
};

export default NavbarBottom;
