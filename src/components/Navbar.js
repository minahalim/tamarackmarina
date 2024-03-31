import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Navbar = ({ setIsNavBarOpen }) => {
  return (
    <div
      className="flex justify-center items-center p-20 text-lg text-textPrimary absolute top-0 right-0 sm:top-auto sm:right-auto sm:relative h-full sm:h-10 w-3/4 sm:w-full  bg-white z-0 sm:z-10 gap-8
    "
    >
      <div className="hidden sm:block">
        <Link to="/">
          <Logo className="w-60" />
        </Link>
      </div>

      <div className="flex flex-col p-4 sm:p-0 items-start sm:justify-end sm:gap-2 sm:flex-row sm:items-center h-full">
        <div className="py-2 sm:p-4 hover:cursor-pointer hover:text-gray-400">
          <Link onClick={() => setIsNavBarOpen(false)} to="/">
            Home
          </Link>
        </div>
        <div className="py-2 sm:p-4 hover:cursor-pointer hover:text-gray-400">
          <Link onClick={() => setIsNavBarOpen(false)} to="/services">
            Services
          </Link>
        </div>
        <div className="py-2 sm:p-4 hover:cursor-pointer hover:text-gray-400">
          <Link onClick={() => setIsNavBarOpen(false)} to="/about-us">
            About Us
          </Link>
        </div>
        <div className="py-2 sm:p-4 hover:cursor-pointer hover:text-gray-400">
          <Link onClick={() => setIsNavBarOpen(false)} to="/gallery">
            Gallery
          </Link>
        </div>
        <div className="py-2 sm:p-4 hover:cursor-pointer hover:text-gray-400">
          <Link onClick={() => setIsNavBarOpen(false)} to="/rentals">
            Rentals
          </Link>
        </div>
        <div className="py-2 sm:p-4 hover:cursor-pointer hover:text-gray-400">
          <Link onClick={() => setIsNavBarOpen(false)} to="/contact-us">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
