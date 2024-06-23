import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect } from "react";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "DD335C"];

const AuroraButton = ({ children }) => {
  const color = useMotionValue(COLORS[0]);
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.button
      whileHover={{
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.985,
      }}
      style={{
        border,
        boxShadow,
      }}
      className="w-fit rounded-full bg-gray-950/10 px-4 py-2 font-bold uppercase text-inherit transition-colors hover:bg-gray-950/50"
    >
      {children}
    </motion.button>
  );
};
export default AuroraButton;
