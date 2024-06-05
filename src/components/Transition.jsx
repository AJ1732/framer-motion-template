import { easeInOut, motion } from "framer-motion";

const Transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="fixed inset-0 w-full h-dvh bg-primary-500 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: easeInOut }}
      />
      <motion.div
        className="fixed inset-0 w-full h-dvh bg-primary-500 origin-bottom"
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
