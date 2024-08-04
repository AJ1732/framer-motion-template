"use client";

import {
  // KeyframeOptions,
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { useRef } from "react";

const Counter = ({ from, to, animationOptions }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    // Set initial value
    element.textContent = String(from);

    // If reduced motion is enabled in system's preferences
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = String(to);
      return;
    }

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        if (typeof value === "number") {
          element.textContent = value.toFixed(0);
        } else {
          console.warn("Animated value is not a number:", value);
        }
      },
    });

    // Cancel on unmount
    return () => {
      controls.stop();
    };
  }, [ref, inView]);

  return <span ref={ref} className="text-4xl font-black" />;
};

export default Counter;
