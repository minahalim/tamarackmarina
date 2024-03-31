import { Link } from "react-router-dom";
import background from "../assets/footer.png";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${background})`,
      }}
      className="w-full h-80 m-auto my-6 text-xl bg-cover bg-top bg-no-repeat flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8"
    >
      <div className="cursor-pointer hover:text-gray-300">
        <Link to="/">Home</Link>
      </div>
      <span className="hidden md:block text-gray-300">|</span>
      <div className="cursor-pointer hover:text-gray-300">
        <Link to="/about-us">About Us</Link>
      </div>
      <span className="hidden md:block text-gray-300">|</span>
      <div className="cursor-pointer hover:text-gray-300">
        <Link to="/services">Services</Link>
      </div>
      <span className="hidden md:block text-gray-300">|</span>
      <div className="cursor-pointer hover:text-gray-300">
        <Link to="/gallery">Gallery</Link>
      </div>
      <span className="hidden md:block text-gray-300">|</span>
      <div className="cursor-pointer hover:text-gray-300">
        <Link to="/rentals">Rentals</Link>
      </div>
      <span className="hidden md:block text-gray-300">|</span>
      <div className="cursor-pointer hover:text-gray-300">
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </div>
  );
};

export default Footer;
