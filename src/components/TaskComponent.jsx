/* eslint-disable react/prop-types */
const TaskComponent = ({taskText, bgColor, task, setTask, subId, taskId}) => {
  const handleSubTaskDelete = (id) => {
    const listItems = task.map((item) => 
      item.id === taskId ? { ...item, subTasks: item.subTasks.filter((subItem) => subItem.subId !== id) } : item
    );
    setTask(listItems);
    localStorage.setItem("task", JSON.stringify(listItems));
  }


  return (
    <div className="flex justify-between py-1 px-2 m-[4px] rounded-lg bg-sky-950">
      <div className="text-white p-2 w-[75%] rounded-lg text-center font-semibold border-white border-[1px]">
        {taskText? taskText : "Task"}
      </div>
      <div className="w-[25%] flex justify-evenly">
        <button className=" text-white p-2 bg-gradient-to-r from-sky-700 to-sky-400 border-[1px] w-[30%] border-yellow-200 rounded-lg flex justify-center items-center">
            Edit 
            {/* add svg */}
        </button>
        {/* Error below */}
        <button onClick={() => handleSubTaskDelete(subId)} className="text-white p-2 bg-red-500 border-[1px] w-[35%] border-yellow-200 rounded-lg flex justify-center items-center">
            Remove
            {/* add svg */}
        </button>
        <button className=" text-white p-2 bg-gradient-to-r from-cyan-700 to-cyan-400 border-[1px] w-[25%] border-yellow-200 rounded-full flex justify-center items-center">
            C
            {/* add svg */}
        </button>
      </div>
    </div>
  );
};

export default TaskComponent;
