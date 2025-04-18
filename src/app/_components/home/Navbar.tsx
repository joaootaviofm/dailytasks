import { IoMdAdd } from "react-icons/io";
// import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Navbar() {
  const navItems = ["Home", "My Tasks"];

  return (
    <nav className="z-1 fixed w-full flex items-center justify-between text-[#D1D1D1] bg-white/5 backdrop-blur-lgs py-[30px] px-[30px] drop-shadow-lg border-b border-b-white/10">
      <div>
        <h1 className="cursor-default hover:scale-105 hover:text-white duration-300 text-[24px]">
          Taskly
        </h1>
      </div>
      <ul className="flex gap-[40px]">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={item == "Home" ? "/" : item == "My Tasks" ? "/tasks" : ""}
              className="flex items-center gap-[4px] hover:text-white hover:scale-105 duration-300"
            >
              {item == "My Tasks" ? (
                <>
                  {item} <TiArrowSortedDown />
                </>
              ) : (
                item
              )}
            </a>
          </li>
        ))}
      </ul>
      <a href="/create" className="cursor-pointer border bg-black/20 backdrop-blur-md px-5 py-2 rounded-lg flex items-center gap-[5px] hover:scale-110 text-white duration-300 transition-all">
        Add Task
        <span className="text-lg">
          <IoMdAdd />
        </span>
      </a>
    </nav>
  );
}
