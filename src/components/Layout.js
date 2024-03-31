import { Outlet, Navigate } from "react-router-dom";

import settings from "../config/settings.json";

import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Footer from "./Footer";
import { useState } from "react";

const Layout = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const animation = "-translate-x-3/4 sm:translate-x-0";

  if (settings.comingSoon) {
    return <Navigate to="/coming-soon" />;
  }

  return (
    <div className=" text-textPrimary h-full">
      <Navbar setIsNavBarOpen={setIsNavBarOpen} />

      <div
        className={`w-full h-full absolute right-0 left-0 top-0 z-0 ease-out duration-700 ${
          (isNavBarOpen && animation) || ""
        }`}
      >
        <MobileNavbar isOpen={isNavBarOpen} handleOnOpen={setIsNavBarOpen} />

        <div className="flex flex-col w-full bg-white sm:pt-40">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
