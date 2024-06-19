import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="content-grid all min-h-dvh overflow-x-hidden">
        <Navbar />

        <div className="relative py-4">
          <Outlet />
          {/* BLOB */}
          {/* <span className="absolute -right-10 bottom-1/2 -z-20 h-12 w-20 rounded-full bg-primary-500 blur-[20rem]"></span> */}
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
