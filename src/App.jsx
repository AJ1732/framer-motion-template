import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <AnimatePresence mode='wait'>
      <div className='content-grid all min-h-dvh overflow-x-hidden'>
        <Navbar />

        <div className="relative py-4">
          <Outlet />
          {/* BLOB */}
          <span className='h-12 w-20 absolute -z-20 bottom-1/2 -right-10 blur-[20rem] bg-primary-500 rounded-full'></span>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default App
