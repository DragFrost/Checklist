/* eslint-disable react/prop-types */
import NavButton from "./NavButton";
import cross from "../assets/SVGs/cross.svg";
// import { useState } from "react";

const PopupWindow = ({
  isOpen,
  setIsOpen,
  bgColor,
//   type
}) => {
  function handleClick() {
    setIsOpen("hidden");
    console.log("popup window closed!");
  }
  return (
    <div className={isOpen}>
      <div className="w-full h-full flex justify-center items-center fixed top-0">
        <div
          style={{ backgroundColor: bgColor ? bgColor : "#99ff99" }}
          className="h-[96.5%] w-[70%] rounded-2xl py-4 px-6  border-black border-[1px]"
        >
          <div className="text-black text-2xl p-2 mb-1 flex justify-between items-center">
            {"Settings"}
            <NavButton bgColor={"#FF0000"} svg={cross} func={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupWindow