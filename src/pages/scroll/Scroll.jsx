import React from "react";
import { Link, Outlet } from "react-router-dom";
import Transition from "../../components/ui/Transition";

const Scroll = () => {
  return (
    <main className="space-y-4">
      <nav>
        <ul className="flex items-center justify-start divide-x divide-shade-800 border-b border-shade-800 pb-4 [&>*]:px-5">
          <Link
            to={`/scroll/horizontal`}
            className="rounded-lg py-2 transition-all duration-300 ease-in-out hover:bg-zinc-700 active:bg-primary-500"
          >
            <li>Horizontal Scroll</li>
          </Link>
          <Link
            to={`/scroll/page`}
            className="rounded-lg py-2 transition-all duration-300 ease-in-out hover:bg-zinc-700 active:bg-primary-500"
          >
            <li>Page Scroll</li>
          </Link>
        </ul>
      </nav>

      <Outlet />
    </main>
  );
};

export default Transition(Scroll);
