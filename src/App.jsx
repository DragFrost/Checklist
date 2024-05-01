import { useState } from "react";
import Cards from "./components/Cards";
import ListSection from "./components/ListSection";
import Navbar from "./components/Navbar";

function App() {
  const [isOpen, setIsOpen] = useState("hidden");
  const [task, setTask] = useState(() =>
    localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
  );
  const [taskId, setTaskId] = useState("");

  function getRandomPastelColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 41) + 30;
    const lightness = Math.floor(Math.random() * 31) + 60;
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    return color;
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
    const color = getRandomPastelColor();
    const discColor = getRandomPastelColor();
    const subTasks = [];
    const taskObj = { id, title, description, color, discColor, subTasks };
    const newTask = [...task, taskObj];
    setTask(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));
  };

  return (
    <>
      <div className="w-screen h-screen relative">
        <Navbar addTaskfunc={addNewTask} />
        <div className=" pl-[4.5%] p-2 flex flex-wrap justify-center">
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
            />
          ))}
        </div>
        {/* <div className="flex justify-between p-8">
            <NavButton bgColor={"#FF00FF"} svg={plus} func={newTaskAdd} />
          </div> */}

        <ListSection
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          task={task}
          taskId={taskId}
          setTask={setTask}
        />
      </div>
    </>
  );
}

export default App;
