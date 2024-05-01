import { useState } from "react";
import Cards from "./components/Cards";
import ListSection from "./components/ListSection";
import Navbar from "./components/Navbar";
import PopupWindow from "./components/PopupWindow";

function App() {
  const [isOpen, setIsOpen] = useState("hidden");
  const [task, setTask] = useState(() =>
    localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
  );
  const [taskId, setTaskId] = useState("");
  const [settingsWindowOpen, setSettingsWindowOpen] = useState("hidden");

  function handleSettingsMenu() {
    if (settingsWindowOpen == "visible") {
      setSettingsWindowOpen("hidden");
    } else {
      setSettingsWindowOpen("visible");
    }
    console.log(settingsWindowOpen);
  }

  const addNewTask = () => {
    let counter;
    if (!localStorage.getItem("counter")) {
      counter = 0;
    }
    counter = JSON.parse(localStorage.getItem("counter"));
    counter++;
    localStorage.setItem("counter", JSON.stringify(counter));
    const id = counter;
    const title = `Task`;
    const description = "Text description";
    const color = "#94d6b9"//"#b8e5da"; //getRandomPastelColor();
    const discColor = "#dad68b" // "#d6c3ea"; // getRandomPastelColor();
    const subTasks = [];
    const taskObj = { id, title, description, color, discColor, subTasks };
    const newTask = [...task, taskObj];
    setTask(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));
  };

  return (
    <>
      <div className="w-screen h-screen relative">
        <Navbar addTaskfunc={addNewTask} settingsFunc={handleSettingsMenu} />
        <div className="main max-w-[95%] p-2 flex flex-wrap justify-center ml-[5%]">
          {task.map((item, index) => (
            <Cards
              key={item.id}
              setIsOpen={setIsOpen}
              id={item.id}
              setTaskId={setTaskId}
              taskName={item.title + ' ' + (index + 1)}
              description={item.description}
              bgColor={item.color}
              discColor={item.discColor}
              task={task}
              setTask={setTask}
              subTaskCount={item.subTasks.length}
            />
          ))}
        </div>
        <ListSection
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          task={task}
          taskId={taskId}
          setTask={setTask}
        />
        <PopupWindow isOpen={settingsWindowOpen} setIsOpen={setSettingsWindowOpen} bgColor={"#FFFF00"} type={"settings"}/>
      </div>
    </>
  );
}

export default App;
