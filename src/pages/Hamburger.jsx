import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import Transition from "../components/ui/Transition";

const HamburgerIcon = () => {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        onClick={() => setActive((prev) => !prev)}
        className="relative size-20 rounded-full bg-primary-100/0 transition-colors *:rounded hover:bg-primary-100/20"
        animate={active ? "open" : "closed"}
      >
        <motion.span
          style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
          className="absolute h-1 w-10 bg-white"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "35%", "35%"],
            },
          }}
        />

        <motion.span
          style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
          className="absolute h-1 w-10 bg-white"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />

        <motion.span
          style={{ left: "calc(50% + 10px)", top: "65%", x: "-50%", y: "-50%" }}
          className="absolute h-1 w-5 bg-white"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
              left: "50%",
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "65%"],
              left: "calc(50% + 10px)",
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const Hamburger = () => {
  return (
    <div className="flex min-h-80 items-center justify-center">
      <HamburgerIcon />
    </div>
  );
};
export default Transition(Hamburger);
