/* eslint-disable react/prop-types */
import { useState } from "react";
import TaskComponent from "./TaskComponent";
import NavButton from "./NavButton";
import cross from "../assets/SVGs/cross.svg";

const ListSection = ({
  isOpen,
  setIsOpen,
  bgColor,
  descBGColor,
  task,
  setTask,
  taskId,
}) => {
  function getRandomPastelColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 41) + 30;
    const lightness = Math.floor(Math.random() * 31) + 60;
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    return color;
  }
  const [isAddWindowOpen, setIsAddWindowOpen] = useState("hidden");
  const [addButtonDisabled, setaddButtonDisabled] = useState(false);
  const [addInput, setAddInput] = useState("");

  function handleAddWindow() {
    if (isAddWindowOpen == "visible") {
      setIsAddWindowOpen("hidden");
      setaddButtonDisabled(false);
    } else {
      setIsAddWindowOpen("visible");
      setaddButtonDisabled(true);
    }
  }

  
  const handleAdd = () => {
    let counter;
    if (!localStorage.getItem('subCounter')) {
      counter = 0;
    }
    counter = JSON.parse(localStorage.getItem('subCounter'));
    counter++;
    localStorage.setItem("subCounter", JSON.stringify(counter));
    const subId = counter;
    const subTask = addInput;
    const subTaskColor = getRandomPastelColor();
    const newTask = { subId, subTask, subTaskColor };
    const listItems = task.map((item) =>
      item.id === taskId
        ? { ...item, subTasks: [...item.subTasks, newTask] }
        : item
    );
    setTask(listItems);
    setAddInput("");
    setIsAddWindowOpen("hidden");
    setaddButtonDisabled(false);
    localStorage.setItem("task", JSON.stringify(listItems));
  };

  function handleClick() {
    setIsOpen("hidden");

    console.log("edit window closed!");
  }

  const [searchValue, setSearchValue] = useState("");
  return (
    <div className={isOpen}>
      <div className="w-full h-full flex justify-center items-center fixed top-0">
        <div
          className="h-[96.5%] w-[70%] rounded-2xl py-4 px-6  border-black border-[1px] bg-gray-800 overflow-hidden overflow-y-auto"
        >
          <div className="text-white text-2xl p-2 mb-1 flex justify-between items-center font-bold">
            {task.map((item) => (item.id === taskId ? item.title : ""))}
            <NavButton bgColor={"rgb(239 68 68)"} svg={cross} func={handleClick} />
          </div>
          <h1
            style={{ backgroundColor: descBGColor ? descBGColor : "#99f191" }}
            className="text-black mb-4 p-2 rounded-lg"
          >
            {task.map((item) => (item.id === taskId ? item.description : ""))}
          </h1>
          <div className="flex justify-between">
            <input
              type="search"
              name="search form"
              id="searchForm"
              className="bg-gray-600 p-2 text-white placeholder-white rounded-lg border-[2px] w-[50%] border-black"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              placeholder="Search"
            />
            <button
              onClick={handleAddWindow}
              disabled={addButtonDisabled}
              className="text-white p-2 bg-gradient-to-r from-emerald-700 to-emerald-400 font-semibold border-[2px] w-[25%] border-yellow-200	rounded-lg text-center"
            >
              Add task
            </button>
            <button className="text-white p-2 bg-gradient-to-r from-teal-700 to-teal-400 font-semibold border-[2px] w-[20%] border-yellow-200 rounded-lg text-center">
              Something
            </button>
          </div>
          <div className={isAddWindowOpen}>
            <div className="bg-black border-black border-[1px] rounded-xl h-[20%] p-2 mt-3 flex justify-between">              
              <textarea
                rows="4"
                cols="50"
                className="w-[80%] rounded-lg bg-gray-600 text-white p-2 border-black border-[1px] text-wrap flex flex-wrap"
                value={addInput}
                onChange={(e) => setAddInput(e.target.value)}
              />

              <div className="w-[20%] flex flex-col justify-between items-center">
                <button
                  className="text-white font-semibold p-2 bg-gradient-to-r from-cyan-700 to-cyan-400 border-[3px] w-[80%] h-[45%] border-yellow-200 rounded-lg flex justify-center items-center"
                  onClick={handleAdd}
                >
                  Save
                  {/* add svg */}
                </button>
                <button
                  onClick={handleAddWindow}
                  className="text-white font-semibold p-2 bg-red-500 border-[3px] w-[80%] h-[45%] border-yellow-200 rounded-lg flex justify-center items-center"
                >
                  Cancel
                  {/* add svg */}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 p-2 flex flex-col justify-center">
            <h1 className="text-white mb-1">Things to do:</h1>
            <div className="flex flex-col w-full">
              {task
                .filter((item) => item.id === taskId)
                .map((item) =>
                  item.subTasks
                    .filter((subItem) =>
                      subItem.subTask.toLowerCase().includes(searchValue.toLowerCase())
                    )
                    .map((filteredSubItem) => (
                      <TaskComponent
                        key={filteredSubItem.subId}
                        taskText={filteredSubItem.subTask}
                        bgColor={filteredSubItem.subTaskColor}
                        task={task}
                        setTask={setTask}
                        subId={filteredSubItem.subId}
                        taskId={taskId}
                      />
                    ))
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSection;
