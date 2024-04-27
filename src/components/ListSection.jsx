import { useState } from "react";
import TaskComponent from "./TaskComponent";

const ListSection = () => {
    function getRandomPastelColor() {
        const hue = Math.floor(Math.random() * 360);
        const saturation = Math.floor(Math.random() * 41) + 30;
        const lightness = Math.floor(Math.random() * 31) + 60;
        const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        
        return color;
    }
    const [searchValue, setSearchValue] = useState("")
  return (
    <div className="w-full h-full flex justify-center items-center fixed">
      <div className="h-[96.5%] w-[70%] bg-green-300 rounded-2xl py-4 px-6">
        <div className="flex justify-evenly">
            <input
            type="search"
            name="search form"
            id="searchForm"
            className="bg-yellow-300 p-2 text-black rounded-lg border-[1px] w-[50%] border-black"
            value={searchValue}
            onChange={(e) => {
                setSearchValue(e.target.value)
                // console.log(searchValue)
            }}
            placeholder="Search"
            />
            <button className="text-black p-2 bg-blue-400 border-[1px] w-[20%] border-black rounded-lg text-center">
                add task
            </button>
            <button className="text-black p-2 bg-pink-400 border-[1px] w-[20%] border-black rounded-lg text-center">
                something
            </button>
        </div>
        <h1 className="text-black">Things to do:</h1>
        <div className="mt-12 p-2 flex justify-center">
            <div className="flex flex-col w-full">
                <TaskComponent taskText={"Anurag ka gaand maarna hai"} bgColor={getRandomPastelColor()} />
                <TaskComponent taskText={"Anurag ka cheda karna hai"} bgColor={getRandomPastelColor()} />
                <TaskComponent taskText={"Anurag ka pani nikalna hai"} bgColor={getRandomPastelColor()} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ListSection;
