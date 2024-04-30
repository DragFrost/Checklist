/* eslint-disable react/prop-types */
import NavButton from "./NavButton";
// import cross from "../assets/SVGs/cross.svg"
import home from "../assets/SVGs/home1.svg";
import settings from "../assets/SVGs/settings1.svg";
import plus from "../assets/SVGs/plus2.svg";
import sun from "../assets/SVGs/sun.svg";
import filter from "../assets/SVGs/filter.svg";
// import cross from "../assets/SVGs/cross.svg"

const Navbar = ({ addTaskfunc }) => {
  return (
    <div className="w-[4.5%] h-screen p-2 flex justify-start fixed">
      <div className="bg-transparent h-full rounded-lg py-4 px-2 flex flex-col justify-between">
        <div className="h-[30%] flex flex-col justify-between">
          <NavButton bgColor={"#FEF08A"} svg={home} />
          <div className="h-[68%] flex flex-col justify-between">
            <NavButton bgColor={"#99ff99"} svg={filter} />
            <NavButton bgColor={"#99ff99"} svg={sun} />
            <NavButton bgColor={"#99ff99"} svg={plus} func={addTaskfunc} alt={"new task button"} />
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
