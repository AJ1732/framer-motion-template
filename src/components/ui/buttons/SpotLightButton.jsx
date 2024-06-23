import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SpotLightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width, height } = e.target.getBoundingClientRect();

      const offsetX = e.offsetX;
      const offsetY = e.offsetY;

      const left = `${(offsetX / width) * 100}%`;
      const top = `${(offsetY / height) * 100}%`;

      spanRef.current.animate(
        { left, top },
        { duration: 250, fill: "forwards" },
      );
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%", top: "50%" },
        { duration: 100, fill: "forwards" },
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current?.removeEventListener("mousemove", handleMouseMove);
      btnRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      ref={btnRef}
      whileTap={{ scale: 0.985 }}
      className="relative h-60 w-full max-w-xs overflow-hidden rounded-lg bg-neutral-900 px-4 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        SpotLightButton
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100"
      ></span>
    </motion.button>
  );
};
export default SpotLightButton;
