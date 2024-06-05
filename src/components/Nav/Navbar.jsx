import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import DropMenu from "./DropMenu";

const Navbar = () => {
  const [ open, setOpen ] = useState(false);

  return (
    <header className="full-width content-grid">
      <nav className=" flex justify-between items-center border-b border-shade-800">
        
        <h1 className="relative font-bold text-2xl">
          {/* BLOB */}
          <span className='size-32 absolute -z-20 inset-x-0 blur-[40rem] bg-primary-500 rounded-full'></span>

          <NavLink to={`/`}>Framer Motion</NavLink>
        </h1>

        <div 
          onMouseEnter={() => setOpen(true)} 
          onMouseLeave={() => setOpen(false)} 
          className="relative right-0 group h-fit w-fit"
        >
          <motion.button
            whileTap={{ scale: 0.98 }}
            whileHover={{ backgroundColor: "#F08C00" }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="w-max py-2 px-4 text-shade-900 font-semibold text-xl bg-primary-400 shadow-md rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-align-right"
            >
              <line x1="21" x2="3" y1="6" y2="6" />
              <line x1="21" x2="9" y1="12" y2="12" />
              <line x1="21" x2="7" y1="18" y2="18" />
            </svg>
          </motion.button>

          {open && (
            <div className="absolute z-50 right-0 top-full">
              <DropMenu />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
