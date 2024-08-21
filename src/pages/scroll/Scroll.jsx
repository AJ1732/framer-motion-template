import React from "react";
import { Link, Outlet } from "react-router-dom";
import Transition from "../../components/ui/Transition";

const links = [
  {
    id: 1,
    link: "/scroll/horizontal",
    text: "Horizontal Scroll"
  },
  {
    id: 2,
    link: "/scroll/page",
    text: "Page Scroll"
  },
  {
    id: 3,
    link: "/scroll/enlarge",
    text: "Enlarge Scroll"
  },
  {
    id: 4,
    link: "/scroll/inview",
    text: "InView Scroll"
  },
  {
    id: 5,
    link: "/scroll/marquee",
    text: "Marquee"
  },
]
const Scroll = () => {
  return (
    <main className="space-y-4">
      <nav className="">
        <ul className="flex items-center justify-start overflow-x-scroll divide-shade-800 border-b border-shade-800 pb-4 [&>*]:px-5">
          {links.map(({id, link, text}) => (
            <Link
              key={id}
              to={link}
              className="rounded-lg py-2 transition-all duration-300 ease-in-out hover:bg-zinc-700 active:bg-primary-500"
            >
              <li>{text}</li>
            </Link>
          ))}
        </ul>
      </nav>

      <Outlet />
    </main>
  );
};

export default Transition(Scroll);
