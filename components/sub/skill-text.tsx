"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  cardStagger,
  fadeInUp,
  slideInFromLeft,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <motion.div
      variants={cardStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="w-full h-auto flex flex-col items-center justify-center"
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Prompt Engineering &amp; Generative AI
        </h1>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Building content systems with modern AI.
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Precision prompts. Calibrated systems. A voice that holds.
      </motion.div>
    </motion.div>
  );
};
