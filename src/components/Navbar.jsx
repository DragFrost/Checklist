import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <div className="w-[4.5%] h-screen p-2 flex justify-center">
      <div className="bg-red-400 h-full rounded-lg py-4 px-2 flex flex-col justify-between">
        <div className="h-[30%] flex flex-col justify-between">
            <NavButton bgColor={"#FEF08A"} />
          <div className="h-[68%] flex flex-col justify-between">
            <NavButton bgColor={"#99ff99"}/>
            <NavButton bgColor={"#99ff99"}/>
            <NavButton bgColor={"#99ff99"}/>
          </div>
        </div>
        <div>
          <NavButton bgColor={"#60a5fa"}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
