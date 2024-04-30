/* eslint-disable react/prop-types */
import NavButton from "./NavButton";
// import cross from "../assets/SVGs/cross.svg"
import home from "../assets/SVGs/home.svg";
import settings from "../assets/SVGs/settings.svg";
import plus from "../assets/SVGs/plus.svg";
// import cross from "../assets/SVGs/cross.svg"

const Navbar = ({ addTaskfunc }) => {
  return (
    <div className="w-[4.5%] h-screen p-2 flex justify-center fixed">
      <div className="bg-red-400 h-full rounded-lg py-4 px-2 flex flex-col justify-between">
        <div className="h-[30%] flex flex-col justify-between">
          <NavButton bgColor={"#FEF08A"} svg={home} />
          <div className="h-[68%] flex flex-col justify-between">
            <NavButton bgColor={"#99ff99"} svg={home} />
            <NavButton bgColor={"#99ff99"} svg={home} />
            <NavButton bgColor={"#99ff99"} svg={plus} func={addTaskfunc} />
          </div>
        </div>
        <div>
          <NavButton bgColor={"#60a5fa"} svg={settings} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
