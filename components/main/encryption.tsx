"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [-80, 80],
  );
  const smoothY = useSpring(y, { stiffness: 60, damping: 20 });

  return (
    <div
      ref={sectionRef}
      className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20"
    >
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Precision{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          clarity.
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042F88B] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Prompt Engineered</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Calibrated prompts, disciplined output — a voice that holds.
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <motion.video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          style={{ y: smoothY }}
          className="w-full h-auto"
        >
          <source src="videos/encryption-bg.webm" type="video/webm" />
        </motion.video>
      </div>
    </div>
  );
};
