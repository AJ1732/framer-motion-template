import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const InViewScroll = () => {
  const viewRef = useRef(null);
  const isInView = useInView(viewRef, {
    amount: "all",
    margin: "-60px"
    // once: true,
  });

  const textRef = useRef(null);
  const isTextInView = useInView(textRef, {
    amount: "all",
    // once: true,
  });

  // useEffect(() => {
  //   console.log("Element is in view: ", isInView);
  // }, [isInView]);

  // USE SCROLL BASIC
  // const { scrollYProgress } = useScroll();
  // const bgColor = useTransform(scrollYProgress, [0, 1], ["#FFFFFF", "#f08c00"]);

  // useMotionValueEvent(scrollYProgress, "change", (latest) =>
  //   console.log(latest),
  // );
  // console.log(bgColor);

  // USE SCROLL ADVANCED
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
    // offset: ["start start", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"]);

  // USE SCROLL WITH CONTAINER
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  const { scrollXProgress } = useScroll({
    container: containerRef,
    target: targetRef,
    axis: "x",
    offset: ["end start", "start start"],
  });

  return (
    <div className="py-28">
      <div className="min-h-dvh text-center uppercase">Scroll</div>

      <div className="min-h-dvh space-y-[40rem]">
        {/* WHILE IN VIEW */}
        <section>
          <header>
            <span className="font-semibold uppercase text-neutral-500">
              WHILE IN VIEW
            </span>
          </header>
          <div className="relative mx-auto grid h-32 w-96 place-content-center">
            <h1 className="relative z-0 text-3xl font-black uppercase">
              Show me on Scroll
            </h1>

            <motion.div
              initial={{
                opacity: 1,
              }}
              whileInView={{
                opacity: 0,
              }}
              viewport={{
                // amount: "all",
                margin: "-200px",
                // once: true,
              }}
              onViewportEnter={() => console.log("Enter")}
              onViewportLeave={() => console.log("Exit")}
              className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-primary-500"
            />
          </div>
        </section>

        {/* USE IN VIEW */}
        <section ref={viewRef} className="">
          <header>
            <span className="font-semibold uppercase text-neutral-500">
              USE IN VIEW
            </span>
          </header>
          <div className="relative mx-auto grid h-32 w-96 place-content-center">
            <h1 className="relative z-0 text-3xl font-black uppercase">
              Show me on Scroll
            </h1>

            <motion.div
              animate={{
                y: isInView ? "-100%" : "0%",
              }}
              className="absolute inset-0 left-0 z-10 w-1/3 bg-primary-500"
            />
            <motion.div
              animate={{
                y: isInView ? "100%" : "0%",
              }}
              className="left absolute inset-0 left-1/3 z-10 w-1/3 bg-primary-400"
            />
            <motion.div
              animate={{
                y: isInView ? "-100%" : "0%",
              }}
              className="absolute inset-0 left-2/3 z-10 w-1/3 bg-primary-300"
            />
          </div>
        </section>

        {/* USE TEXT IN VIEW */}
        <section ref={textRef} className="">
          <header>
            <span className="font-semibold uppercase text-neutral-500">
              USE IN VIEW
            </span>
          </header>
          <div className="relative mx-auto grid h-32 w-96 place-content-center">
            <motion.h1
              initial={{
                opacity: 0,
                y: "1rem"
              }}
              whileInView={{
                opacity: 1,
                y: "0",
              }}
              viewport={{
                margin: "-200px",
                once: true,
              }}
              transition={{ duration: 1 }}
              className="relative z-0 text-3xl font-black uppercase"
            >
              Show me on Scroll
            </motion.h1>
          </div>
        </section>

        {/* USE SCROLL BASIC */}
        {/* <section className="">
          <header>
            <span className="font-semibold uppercase text-neutral-500">
              USE SCROLL BASIC
            </span>
          </header>
          <div className="relative mx-auto grid h-32 w-96 place-content-center">
            <motion.div
              style={{
                scaleX: scrollYProgress,
                transformOrigin: "left",
                x: "0%",
                y: "100%",
                // x: "-50%",
                // y: "-50%",
              }}
              className="fixed left-0 top-0 h-4 w-screen bg-primary-500"
            />
          </div>
        </section> */}

        {/* USE SCROLL ADVANCED */}
        <section className="space-y-20">
          <header>
            <span className="font-semibold uppercase text-neutral-500">
              USE SCROLL ADVANCED
            </span>
          </header>
          <div className="relative mx-auto grid h-32 w-96 place-content-center">
            <motion.div
              ref={targetRef}
              style={{ rotate }}
              className="mx-auto size-48 bg-primary-500"
            />
          </div>
        </section>

        {/* USE SCROLL WITH CONTAINER */}
        <section className="space-y-20">
          <header>
            <span className="font-semibold uppercase text-neutral-500">
              USE SCROLL WITH CONTAINER
            </span>
          </header>
          <div
            ref={containerRef}
            className="flex w-[calc(100vw-4rem)] overflow-x-scroll bg-primary-500/50 py-8"
          >
            <div className="w-[calc(100vw-4rem)] shrink-0" />
            <motion.div
              ref={innerRef}
              style={{ opacity: scrollXProgress }}
              className="mx-auto size-48 shrink-0 bg-zinc-50"
            />
            <div className="w-[calc(100vw-4rem)] shrink-0" />
          </div>
        </section>
      </div>

      <div className="min-h-dvh" />
    </div>
  );
};
export default InViewScroll;
