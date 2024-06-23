import React from "react";
import { NavLink } from "react-router-dom";

const DropMenu = () => {
  const navlinks = [
    "Stagger",
    "Basic",
    "Text",
    "Scroll",
    "Hamburger",
    "Buttons",
    "Gradient",
  ];

  return (
    <div className="h-fit w-64 rounded-md bg-neutral-800 p-1 shadow-xl">
      <ul>
        {navlinks.map((navlink, index) => (
          <NavLink key={index} to={`/${navlink.toLowerCase()}`}>
            <li className="rounded px-4 py-2 text-lg font-thin hover:bg-primary-500 active:bg-primary-400">
              {navlink}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default DropMenu;
