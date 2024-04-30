/* eslint-disable react/prop-types */
const TaskComponent = ({taskText, bgColor, task, setTask, subId}) => {



  return (
    <div style={{backgroundColor: bgColor}} className="flex justify-between py-1 px-2 m-[4px] rounded-lg border-black border-[1px]">
      <div className="text-black p-2 bg-yellow-100 border-[1px] w-[80%] border-black rounded-lg text-center">
        {taskText? taskText : "Task"}
      </div>
      <div className="w-[19%] flex justify-evenly">
        <button className=" text-slate-800 p-2 bg-purple-400 border-[1px] w-[30%] border-black rounded-lg flex justify-center items-center">
            Edit 
            {/* add svg */}
        </button>
        {/* Error below */}
        <button className="text-slate-800 p-2 bg-red-400 border-[1px] w-[35%] border-black rounded-lg flex justify-center items-center">
            Remove
            {/* add svg */}
        </button>
        <button className=" text-slate-800 p-2 bg-blue-400 border-[1px] w-[25%] border-black rounded-full flex justify-center items-center">
            C
            {/* add svg */}
        </button>
      </div>
    </div>
  );
};

export default TaskComponent;
