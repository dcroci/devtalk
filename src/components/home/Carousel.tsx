"use client";
import useMeasure from "react-use-measure";
import CarouselItem from "./Carouseltem";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
function Carousel() {
  const images = [
    "/assets/logos/csharp.png",
    "/assets/logos/css.png",
    "/assets/logos/go.png",
    "/assets/logos/html.svg",
    "/assets/logos/java.png",
    "/assets/logos/js.png",
    "/assets/logos/python.png",
    "/assets/logos/rust.png",
    "/assets/logos/sql.png",
    "/assets/logos/ts.png",
  ];
  const language = [
    "C#",
    "CSS",
    "Go",
    "HTML",
    "Java",
    "JavaScript",
    "Python",
    "Rust",
    "SQL",
    "Typescript",
  ];
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);
  const fast = 25;
  const slow = 75;
  const [duration, setDuration] = useState(fast);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender, mustFinish]);
  return (
    <div className="col-span-full my-[80px] flex  w-full flex-col gap-2 overflow-hidden py-8">
      <h2 className="col-span-full p-6 text-center text-[30px] font-bold text-almostWhite sm:text-[60px]">
        A community for all developers
      </h2>
      <p className="col-start-1 col-end-6 mb-10 px-2 pb-4 text-center text-[16px] font-normal leading-relaxed text-medGray sm:col-start-2 sm:col-end-5 sm:text-[20px] md:px-8">
        Dive into coding with Dev Talk, where every line of code connects you to
        a world of resources, expert insights, and a vibrant developer
        community.
      </p>
      <motion.div
        className=" flex h-[400px] w-full gap-4"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setDuration(slow);
          setMustFinish(true);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(fast);
        }}
      >
        {[...images, ...images].map((image, id) => (
          <CarouselItem image={image} key={id} language={language[id]} />
        ))}
      </motion.div>
    </div>
  );
}

export default Carousel;
