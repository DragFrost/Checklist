/* eslint-disable react/prop-types */
import { useState } from "react";
import TaskComponent from "./TaskComponent";
import NavButton from "./NavButton";
import cross from "../assets/SVGs/cross.svg";

const ListSection = ({ isOpen, setIsOpen, bgColor, descBGColor }) => {
  function getRandomPastelColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 41) + 30;
    const lightness = Math.floor(Math.random() * 31) + 60;
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    return color;
  }
  const [isAddWindowOpen, setIsAddWindowOpen] = useState("hidden");
  const [addButtonDisabled, setaddButtonDisabled] = useState(false)

  function handleAddWindow() {
    if (isAddWindowOpen == "visible") {
      setIsAddWindowOpen("hidden");
      setaddButtonDisabled(false)
    } else {
      setIsAddWindowOpen("visible");
      setaddButtonDisabled(true)
    }

    console.log("anurag laura");
  }

  function handleClick() {
    setIsOpen("hidden");

    console.log("anurag laura");
  }

  const [searchValue, setSearchValue] = useState("");
  return (
    <div className={isOpen}>
      <div className="w-full h-full flex justify-center items-center absolute top-0">
        <div className="h-[96.5%] w-[70%] bg-green-300 rounded-2xl py-4 px-6  border-black border-[1px]">
          <div className="text-black text-2xl p-2 mb-2 flex justify-between">
            Task1
            <NavButton bgColor={"#FF0000"} svg={cross} func={handleClick} />
          </div>
          <div className="flex justify-evenly">
            <input
              type="search"
              name="search form"
              id="searchForm"
              className="bg-yellow-300 p-2 text-black rounded-lg border-[1px] w-[50%] border-black"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              placeholder="Search"
            />
            <button
              onClick={handleAddWindow}
              disabled={addButtonDisabled}
              className="text-black p-2 bg-blue-400 border-[1px] w-[20%] border-black rounded-lg text-center"
            >
              add task
            </button>
            <button className="text-black p-2 bg-pink-400 border-[1px] w-[20%] border-black rounded-lg text-center">
              something
            </button>
          </div>
          <div className={isAddWindowOpen}>
            <div className="bg-slate-400 border-black border-[1px] rounded-xl w-[95%] h-[20%] p-2 m-1 ml-6 flex justify-between">
              <input
                type="text"
                className="w-[80%] rounded-lg bg-orange-200 text-black p-2 border-black border-[1px]"
              />
              <div className="w-[20%] flex flex-col justify-between items-center">
                <button className=" text-slate-800 p-2 bg-purple-400 border-[1px] w-[60%] h-[45%] border-black rounded-lg flex justify-center items-center">
                  Save
                  {/* add svg */}
                </button>
                <button
                  onClick={handleAddWindow}
                  className=" text-slate-800 p-2 bg-purple-400 border-[1px] w-[60%] h-[45%] border-black rounded-lg flex justify-center items-center"
                >
                  Cancel
                  {/* add svg */}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 p-2 flex flex-col justify-center">
            <h1 className="text-black mb-1">Things to do:</h1>
            <div className="flex flex-col w-full">
              <TaskComponent
                taskText={"Anurag ka gaand maarna hai"}
                bgColor={getRandomPastelColor()}
              />
              <TaskComponent
                taskText={"Anurag ka cheda karna hai"}
                bgColor={getRandomPastelColor()}
              />
              <TaskComponent
                taskText={"Anurag ka pani nikalna hai"}
                bgColor={getRandomPastelColor()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSection;
