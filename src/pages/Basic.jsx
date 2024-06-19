import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Transition from "../components/ui/Transition";
import { useRef } from "react";

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

const headerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.6,
    },
  },
};

const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(252, 211, 77, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252, 211, 77, 1)",
  },
};

const Basic = () => {
  const basicRef = useRef(null);

  const { scrollYProgress: completionProgress } = useScroll({
    target: basicRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="flex flex-col gap-6 overflow-x-hidden">
      {/* STAGGER CHILDREN */}
      <motion.section
        ref={basicRef}
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 place-content-start gap-10 p-5 md:grid-cols-3 xl:grid-cols-4"
      >
        {/* FADE UP */}
        <motion.div
          variants={gridContainerVariants}
          className="flex aspect-square items-center justify-center rounded-lg bg-shade-800 p-4"
        >
          <div className="flex flex-col items-center justify-between gap-4">
            <motion.h3
              variants={headerVariants}
              initial="hidden"
              animate="show"
              className="text-sm md:text-lg"
            >
              Fade Up & Down
            </motion.h3>

            <div className="flex items-center justify-center gap-4">
              <motion.div
                className="size-12 rounded-lg bg-shade-200"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              ></motion.div>
              <motion.div
                className="size-12 rounded-full bg-shade-200"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              ></motion.div>
            </div>
          </div>
        </motion.div>

        {/* KEYFRAMES | SHAPE SHIFTING */}
        <motion.div
          variants={gridSquareVariants}
          className="flex aspect-square items-center justify-center rounded-lg bg-shade-800 p-4"
        >
          <div className="flex flex-col items-center justify-between gap-4">
            <motion.h3
              variants={headerVariants}
              initial="hidden"
              animate="show"
              className="text-sm md:text-lg"
            >
              Keyframes
            </motion.h3>

            <div className="flex items-center justify-center gap-4">
              <motion.div
                className="size-12 rounded-lg bg-shade-500 shadow-md"
                animate={{
                  scale: [1, 1.5, 1.5, 1],
                  rotate: [0, 90, 90, 0],
                  borderRadius: ["10%", "10%", "50%", "10%"],
                  backgroundColor: ["#ADB5BD", "#FFF9DB", "#FFD43B", "#F08C00"],
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              ></motion.div>
            </div>
          </div>
        </motion.div>

        {/* HOVER & CLICKING */}
        <motion.div
          variants={gridSquareVariants}
          className="flex aspect-square items-center justify-center rounded-lg bg-shade-800 p-4"
        >
          <div className="flex flex-col items-start justify-between gap-4">
            <motion.h3
              variants={headerVariants}
              initial="hidden"
              animate="show"
              className="text-sm md:text-lg"
            >
              Hover & Clicking
            </motion.h3>

            <div className="flex items-center justify-center gap-4">
              <motion.button
                className="w-max rounded-lg bg-primary-400 px-4 py-2 text-xl font-semibold text-shade-900 shadow-md"
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.05, backgroundColor: "#F08C00" }}
                transition={{ bounceDamping: 10, bounceStiffness: 600 }}
              >
                Click
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* SCROLL PROGRESS */}
        <motion.div
          variants={gridSquareVariants}
          className="flex aspect-square items-center justify-center rounded-lg bg-shade-800 p-4"
        >
          <div className="flex flex-col items-start justify-between gap-4">
            <motion.h3
              variants={headerVariants}
              initial="hidden"
              animate="show"
              className="text-sm md:text-lg"
            >
              Scroll
            </motion.h3>

            <motion.div className="size-20 rounded-xl bg-shade-500/20">
              <motion.div
                className="size-full h-full origin-bottom rounded-xl bg-primary-400"
                style={{ scaleY: completionProgress }}
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* DRAG */}
        <motion.div
          variants={gridSquareVariants}
          className="flex aspect-square items-center justify-center rounded-lg bg-shade-800 p-4"
        >
          <div className="flex flex-col items-start justify-between gap-4">
            <motion.h3
              variants={headerVariants}
              initial="hidden"
              animate="show"
              className="text-sm md:text-lg"
            >
              Drag
            </motion.h3>

            <div className="flex items-center justify-center gap-4">
              <motion.div
                className="size-12 rounded-lg bg-primary-500 text-xl font-semibold text-shade-900 shadow-md"
                drag
                dragConstraints={{
                  top: -80,
                  bottom: 80,
                  right: 80,
                  left: -80,
                }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
              ></motion.div>
            </div>
          </div>
        </motion.div>

        {/* SVG ANIMATION */}
        <motion.div
          variants={gridSquareVariants}
          className="flex aspect-square items-center justify-center rounded-lg bg-shade-800 p-4"
        >
          <div className="flex flex-col items-center justify-between gap-4">
            <motion.h3
              variants={headerVariants}
              initial="hidden"
              animate="show"
              className="text-sm md:text-lg"
            >
              Svg Animation
            </motion.h3>

            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-1/2 stroke-amber-500 stroke-[0.5]"
            >
              <motion.path
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                variants={svgIconVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  // for the stroke
                  default: {
                    duration: 2,
                    ease: "easeInOut",
                    delay: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  },
                  fill: {
                    duration: 2,
                    ease: "easeIn",
                    delay: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  },
                }}
              />
            </motion.svg>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Transition(Basic);
