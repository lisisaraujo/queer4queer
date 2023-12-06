import { useState, useEffect, useRef } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import Link from "next/link";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuList = ["About", "Contact", "Feedback", "Ressources", "Admin"];
  const iconStyles = {
    color: "black",
    width: " 24px",
    height: " 24px",
    cursor: "pointer",
  };
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative flex flex-col items-center sm:w-fit rounded-lg"
      ref={menuRef}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue-450 p-4 flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-black sm:ml-4 sm:w-fit"
      >
        <HiMenuAlt1 style={iconStyles} />
        {isOpen ? (
          <AiOutlineCaretUp className="h-4" />
        ) : (
          <AiOutlineCaretDown className="h-4" />
        )}
      </button>
      {isOpen && (
        <div className="bg-slate-50 opacity-90 absolute top-16 sm:top-20 left-0 sm:left-auto ml-4 sm:ml-10 flex flex-col items-start rounded-lg p-2 sm:w-fit">
          {menuList.map((item) => (
            <div
              className="flex w-full justify-between p-4 hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"
              key={item}
            >
              <Link className="font-bold" href={`/menu/${item.toLowerCase()}`}>
                {item}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
