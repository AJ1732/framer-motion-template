import { motion } from "framer-motion";

const Tile = () => {
  return (
    <motion.div
      whileHover={{
        zIndex: 1,
        backgroundColor: "rgb(240 140 0)",
      }}
      transition={{
        duration: 5,
        ease: "easeOut",
      }}
      className="inline-block w-10 aspect-square border border-neutral-900 bg-neutral-950 transition-colors duration-100 hover:bg-primary-500"
    />
  );
};
export default Tile;
