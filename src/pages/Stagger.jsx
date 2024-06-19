import { motion } from "framer-motion";
import Transition from "../components/ui/Transition";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delay: 0.6,
    },
  },
};

const gridSquareVariants = { hidden: { opacity: 0 }, show: { opacity: 1 } };

const Stagger = () => {
  return (
    <main className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 place-content-start gap-10 p-10"
      >
        <motion.div
          variants={gridContainerVariants}
          className="aspect-square rounded-lg bg-shade-800"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="aspect-square rounded-lg bg-shade-800"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="aspect-square rounded-lg bg-shade-800"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="aspect-square rounded-lg bg-shade-800"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="aspect-square rounded-lg bg-shade-800"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="aspect-square rounded-lg bg-shade-800"
        ></motion.div>
      </motion.section>
    </main>
  );
};

export default Transition(Stagger);
