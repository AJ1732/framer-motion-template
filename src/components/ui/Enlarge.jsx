import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Enlarge = ({ item }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="min-h-80 w-full rounded bg-zinc-500 px-4 py-3"
    >
      <section className="min-h-80 w-full rounded bg-zinc-400 px-4 py-3">
        EnlargeScroll {item}
      </section>
    </motion.div>
  );
};
export default Enlarge;
