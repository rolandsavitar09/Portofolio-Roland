import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import html from "../assets/images/Logo HTML.png";
import css from "../assets/images/Logo css.png";
import js from "../assets/images/Logo Javascript.png";
import tailwind from "../assets/images/Logo Tailwind.png";
import bootstrap from "../assets/images/Logo bootstrap.png";
import git from "../assets/images/Logo git.png";
import github from "../assets/images/Logo github.png";
import figma from "../assets/images/Logo figma.png";
import canva from "../assets/images/Logo canva.png";
import vscode from "../assets/images/Logo vscode.png";
import postman from "../assets/images/Logo postman.png";
import xampp from "../assets/images/Logo xampp.png";

function Skills() {
  const categories = [
    {
      group: "Technical Skills",
      title: "Front End",
      badgeColor: "from-[#00E0FF] to-[#318590]",
      badgeName: "FRONTEND",
      skills: [
        { name: "HTML", logo: html },
        { name: "CSS", logo: css },
        { name: "JAVASCRIPT", logo: js }
      ]
    },
    {
      group: "Technical Skills",
      title: "Styling Frameworks",
      badgeColor: "from-[#4ADE80] to-[#22C55E]",
      badgeName: "STYLING",
      skills: [
        { name: "TAILWIND CSS", logo: tailwind },
        { name: "BOOTSTRAP", logo: bootstrap }
      ]
    },
    {
      group: "Technical Skills",
      title: "Version Control",
      badgeColor: "from-[#FACC15] to-[#EAB308]",
      badgeName: "VERSION CONTROL",
      skills: [
        { name: "GIT", logo: git },
        { name: "GITHUB", logo: github }
      ]
    },
    {
      group: "Design",
      title: "Prototyping Tools",
      badgeColor: "from-[#A855F7] to-[#9333EA]",
      badgeName: "UI / UX TOOLS",
      skills: [
        { name: "FIGMA", logo: figma },
        { name: "CANVA", logo: canva }
      ]
    },
    {
      group: "Development Tools",
      title: "Tools",
      badgeColor: "from-[#EC4899] to-[#DB2777]",
      badgeName: "DEV TOOLS",
      skills: [
        { name: "VSCODE", logo: vscode },
        { name: "POSTMAN", logo: postman },
        { name: "XAMPP", logo: xampp }
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(categories.map(() => 0));

  const handleNext = (i) =>
    setActiveIndex((prev) =>
      prev.map((x, idx) => (idx === i ? (x + 1) % categories[i].skills.length : x))
    );

  const handlePrev = (i) =>
    setActiveIndex((prev) =>
      prev.map((x, idx) =>
        idx === i ? (x - 1 + categories[i].skills.length) % categories[i].skills.length : x
      )
    );

  const groupShown = new Set();

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center py-20 text-center px-6 md:px-20"
      style={{
        background: "linear-gradient(180deg, #0F2027 35%, #0A0F1C 100%)"
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#318590]
                   text-[38px] md:text-[44px] font-extrabold font-poppins mb-6"
      >
        SKILLS
      </motion.h2>

      <div className="w-full flex flex-col items-center gap-24">
        {categories.map((category, catIndex) => {
          const showGroup = !groupShown.has(category.group);
          groupShown.add(category.group);

          return (
            <div key={catIndex} className="w-full flex flex-col items-center">
              {showGroup && (
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#318590]
                             text-[28px] md:text-[32px] font-extrabold mb-8"
                >
                  {category.group.toUpperCase()}
                </motion.h3>
              )}

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-4xl rounded-2xl border border-[#00E0FF]/30 
                           bg-white/5 backdrop-blur-md py-10 px-4 md:px-10
                           shadow-[0_0_40px_rgba(0,224,255,0.2)]"
              >
                {/* BADGE TEKNOLOGI */}
                <div className="flex justify-center mb-4">
                  <span
                    className={`px-5 py-2 text-[14px] font-semibold rounded-full 
                      text-white bg-gradient-to-r ${category.badgeColor} shadow-lg
                      border border-white/20 backdrop-blur-xl`}
                  >
                    {category.badgeName}
                  </span>
                </div>

                <h4 className="text-white text-[22px] md:text-[26px] font-bold mb-8 
                               flex justify-center items-center gap-4">
                  <button onClick={() => handlePrev(catIndex)} className="transition hover:scale-125">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="#00E0FF"
                      className="w-7 h-7 drop-shadow-[0_0_10px_#00E0FF]"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {category.title.toUpperCase()}

                  <button onClick={() => handleNext(catIndex)} className="transition hover:scale-125">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="#00E0FF"
                      className="w-7 h-7 drop-shadow-[0_0_10px_#00E0FF]"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </h4>

                <div className="flex justify-center items-center gap-6">
                  <AnimatePresence mode="wait">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i < activeIndex[catIndex] ? -50 : 50 }}
                        animate={{
                          opacity: i === activeIndex[catIndex] ? 1 : 0.25,
                          scale: i === activeIndex[catIndex] ? 1 : 0.8,
                          x:
                            i === activeIndex[catIndex]
                              ? 0
                              : i < activeIndex[catIndex]
                              ? -100
                              : 100
                        }}
                        exit={{ opacity: 0, x: i < activeIndex[catIndex] ? -50 : 50 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center"
                      >
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className={`w-[160px] md:w-[200px] drop-shadow-[0_0_25px_rgba(0,224,255,0.2)]
                            transition-all duration-500 ${
                              i === activeIndex[catIndex]
                                ? "opacity-100 scale-100"
                                : "opacity-30 scale-90"
                            }`}
                        />
                        <p
                          className={`mt-4 text-[18px] md:text-[20px] font-bold ${
                            i === activeIndex[catIndex] ? "text-white" : "text-gray-500"
                          }`}
                        >
                          {skill.name}
                        </p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
