import { ReactComponent as Logo } from "../assets/logo.svg";

const MobileNavBar = ({ isOpen, handleOnOpen }) => {
  return (
    <div className="sm:hidden flex items-center w-full h-20 p-2 bg-white">
      <Logo className="p-2 h-10" />

      <div
        className={`${
          (isOpen && "hidden") || ""
        } flex flex-col justify-between w-20 h-10 p-3 cursor-pointer`}
        onClick={() => handleOnOpen(!isOpen)}
      >
        <div className="border border-textPrimary"></div>
        <div className="border border-textPrimary"></div>
        <div className="border border-textPrimary"></div>
      </div>
      <div
        className={`${
          (!isOpen && "hidden") || ""
        } flex flex-col justify-between w-12 h-10 p-3 cursor-pointer text-textPrimary text-2xl`}
        onClick={() => handleOnOpen(!isOpen)}
      >
        &#x2715;
      </div>
    </div>
  );
};

export default MobileNavBar;
