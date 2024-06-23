import { motion } from "framer-motion";

const ShinyButton = ({ children }) => {
  return (
    <motion.button
      initial={{ "--x": "100%" }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="radial-gradient relative rounded-md px-6 py-2 transition-all duration-300 active:scale-95 active:shadow active:shadow-neutral-600"
    >
      <span className="linear-mask relative block size-full font-light tracking-wide text-neutral-100">
        {children}
      </span>
      <span className="linear-overlay absolute inset-0 block rounded-md p-px"></span>
    </motion.button>
  );
};
export default ShinyButton;
