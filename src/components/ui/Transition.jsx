import { easeInOut, motion } from "framer-motion";

const Transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="fixed inset-0 h-dvh w-full origin-top bg-primary-500"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: easeInOut }}
      />
      <motion.div
        className="fixed inset-0 h-dvh w-full origin-bottom bg-primary-500"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.6, ease: easeInOut }}
      />
    </>
  );
};

export default Transition;
// [0.22, 1, 0.36, 1]
