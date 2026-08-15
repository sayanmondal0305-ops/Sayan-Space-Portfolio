"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import { HeroContent } from "@/components/sub/hero-content";
import { SCROLL_SPRING } from "@/lib/motion";

export const Hero = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduce ? 0 : 300],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reduce ? 1 : 1.15],
  );
  const smoothY = useSpring(y, SCROLL_SPRING);
  const smoothScale = useSpring(scale, SCROLL_SPRING);

  return (
    <div
      ref={sectionRef}
      id="about-me"
      className="relative flex flex-col h-full w-full"
    >
      <motion.video
        autoPlay
        muted
        loop
        style={{ y: smoothY, scale: smoothScale }}
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="videos/blackhole.webm" type="video/webm" />
      </motion.video>

      <HeroContent />
    </div>
  );
};
