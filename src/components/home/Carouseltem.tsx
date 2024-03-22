"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function CarouselItem({ image, language }: any) {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
      className="relative flex h-[300px] min-w-[125px] items-center justify-center overflow-hidden rounded-xl sm:min-w-[200px]"
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex items-center justify-center"
          >
            <div className="pointer-events-none absolute h-full w-full bg-black opacity-50" />
            <motion.h2
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              className="z-10 flex items-center gap-1 rounded-full bg-white px-3 py-2 text-small font-semibold hover:opacity-75"
            >
              <Link href={`/${language.toLowerCase()}`}>{language}</Link>
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>
      <img src={image} alt={image} className="h-min w-full" />
    </motion.div>
  );
}

export default CarouselItem;
