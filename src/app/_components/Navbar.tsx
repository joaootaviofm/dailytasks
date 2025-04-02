import { IoMdAdd } from "react-icons/io";
// import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Navbar() {
  const navItems = ["About", "Home", "My Habits"];
  return (
    <nav className="flex items-center justify-between text-[#D1D1D1] bg-white/20 backdrop-blur-lgs py-[30px] px-[30px] drop-shadow-lg border-b border-b-white/10">
      <div>
        <h1 className="cursor-default hover:scale-105 hover:text-white duration-300 text-[24px]">
          Taskly
        </h1>
      </div>
      <ul className="flex gap-[40px]">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className="flex items-center gap-[4px] hover:text-white hover:scale-105 duration-300"
            >
              {item == "My Habits" ? (
                <>
                  {item} <TiArrowSortedDown />{" "}
                </>
              ) : (
                item
              )}
            </a>
          </li>
        ))}
      </ul>
      <button className="cursor-pointer bg-white/30 backdrop-blur-md px-5 py-2 rounded-lg border flex items-center gap-[5px] hover:scale-105 text-white duration-300">
        Add Habit
        <span className="text-lg">
          <IoMdAdd />
        </span>
      </button>
    </nav>
  );
}
