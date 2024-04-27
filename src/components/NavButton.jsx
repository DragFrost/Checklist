/* eslint-disable react/prop-types */
const NavButton = ({bgColor}) => {
    const currentBG = bgColor ? bgColor : "#FFFFFF"; //"#99ff99";
  return (
    <button style={{backgroundColor: currentBG}} className="h-10 w-10 rounded-3xl text-black flex justify-center items-center mt-1 border-[1px] border-black">
      <svg
        height="32px"
        id="Layer_1"
        style={{ enableBackground: "new 0 0 32 32" }}
        version="1.1"
        viewBox="0 0 32 32"
        width="26px"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
      </svg>
    </button>
  );
};

export default NavButton;