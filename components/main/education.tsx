"use client";

import { motion } from "framer-motion";

import { EDUCATION } from "@/constants";
import { cardStagger, fadeInUp } from "@/lib/motion";

export const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-20"
    >
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
        Education
      </motion.h1>
      <motion.div
        variants={cardStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-10 max-w-[1100px]"
      >
        {EDUCATION.map((edu) => (
          <motion.div
            key={edu.title}
            variants={fadeInUp}
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#03001427] backdrop-blur-sm p-6"
          >
            <div className="flex flex-row items-center justify-between gap-2">
              <h2 className="text-xl font-semibold text-white">{edu.title}</h2>
              <span className="Welcome-box px-[10px] py-[4px] border border-[#7042f88b] text-[12px] whitespace-nowrap">
                <span className="Welcome-text">{edu.years}</span>
              </span>
            </div>
            <p className="mt-2 text-sm text-[#b49bff]">{edu.institution}</p>
            <p className="mt-3 text-gray-300">{edu.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
