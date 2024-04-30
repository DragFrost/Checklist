/* eslint-disable react/prop-types */
const NavButton = ({bgColor, func, svg}) => {
    const currentBG = bgColor ? bgColor : "#FFFFFF"; //"#99ff99";
  return (
    <button onClick={func} style={{backgroundColor: currentBG}} className="h-10 w-10 rounded-3xl text-black flex justify-center items-center mt-1 border-[1px] border-black">
      <img src={svg} alt="Logo" />
    </button>
  );
};

export default NavButton;
