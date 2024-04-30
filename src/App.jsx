import { useState } from 'react'
import Cards from './components/Cards'
import ListSection from './components/ListSection'
import NavButton from './components/NavButton'
import Navbar from './components/Navbar'

import plus from "./assets/SVGs/plus1.svg"

function App() {
  const [isOpen, setIsOpen] = useState("hidden");
  const [task, setTask] = useState(() => localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []);
  const [taskId, setTaskId] = useState('');

  
  function getRandomPastelColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 41) + 30;
    const lightness = Math.floor(Math.random() * 31) + 60;
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    return color;
  }


  const newTaskAdd = () => {
    let counter;
    if (!localStorage.getItem('counter')) {
      counter = 0;
    }
    counter = JSON.parse(localStorage.getItem('counter'));
    counter++;
    localStorage.setItem('counter', JSON.stringify(counter));
    const id = counter;
    const title = `Task ${counter}`;
    const description = 'Write your description';
    const color = getRandomPastelColor();
    const discColor = getRandomPastelColor();
    const subTasks = [];
    const taskObj = {id, title, description, color, discColor, subTasks};
    const newTask = [...task, taskObj];
    setTask(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));
  }


  return (
    <>
      <div className='flex'>
        <Navbar />
        <div className="w-[95.5%] relative">

          <div className="h-[85%] p-2 flex">
            {task.map((item) =>
              <Cards key={item.id} setIsOpen={setIsOpen} id={item.id} setTaskId={setTaskId} taskName={item.title} description={item.description} bgColor={item.color} discColor={item.discColor} />
            )}
          </div>
          <div className='flex justify-between p-8'>
            <NavButton bgColor={"#FF00FF"} svg={plus} func={newTaskAdd} />
          </div>

          <ListSection isOpen={isOpen} setIsOpen={setIsOpen} task={task} taskId={taskId} setTask={setTask} />
        </div>
      </div>
    </>
  )
}

export default App
