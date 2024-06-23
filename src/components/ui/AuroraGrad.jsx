import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect } from "react";
import AuroraButton from "./buttons/AuroraButton";

// rgb(250 176 5)
const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "DD335C"];

const AuroraGrad = () => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.div
      style={{
        backgroundImage,
      }}
      className="relative flex size-full flex-col items-center justify-center gap-4 overflow-hidden bg-gray-500 px-4 py-24 text-gray-200"
    >
      <span className="font-semibold uppercase text-neutral-300">
        Aurora Gradient
      </span>
      <AuroraButton>Aurora Button</AuroraButton>
    </motion.div>
  );
};
export default AuroraGrad;
