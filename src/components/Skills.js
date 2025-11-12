import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import semua logo (perhatikan huruf besar kecil)
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
  // Daftar semua kategori dan skill
  const categories = [
    {
      group: "Technical Skills",
      title: "Front End",
      skills: [
        { name: "HTML", logo: html },
        { name: "CSS", logo: css },
        { name: "JAVASCRIPT", logo: js },
      ],
    },
    {
      group: "Technical Skills",
      title: "Styling Frameworks",
      skills: [
        { name: "TAILWIND CSS", logo: tailwind },
        { name: "BOOTSTRAP", logo: bootstrap },
      ],
    },
    {
      group: "Technical Skills",
      title: "Version Control",
      skills: [
        { name: "GIT", logo: git },
        { name: "GITHUB", logo: github },
      ],
    },
    {
      group: "Design",
      title: "Prototyping Tools",
      skills: [
        { name: "FIGMA", logo: figma },
        { name: "CANVA", logo: canva },
      ],
    },
    {
      group: "Development Tools",
      title: "Tools",
      skills: [
        { name: "VSCODE", logo: vscode },
        { name: "POSTMAN", logo: postman },
        { name: "XAMPP", logo: xampp },
      ],
    },
  ];

  // State aktif tiap kategori
  const [activeIndex, setActiveIndex] = useState(
    categories.map(() => 0)
  );

  const handleNext = (catIndex) => {
    setActiveIndex((prev) =>
      prev.map((idx, i) =>
        i === catIndex
          ? (idx + 1) % categories[i].skills.length
          : idx
      )
    );
  };

  const handlePrev = (catIndex) => {
    setActiveIndex((prev) =>
      prev.map((idx, i) =>
        i === catIndex
          ? (idx - 1 + categories[i].skills.length) %
            categories[i].skills.length
          : idx
      )
    );
  };

  // Untuk menampilkan judul grup hanya sekali (Technical Skills, Design, Development Tools)
  const groupTitlesShown = new Set();

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center py-20 text-center px-6 md:px-20"
      style={{
        background: "linear-gradient(180deg, #0F2027 35%, #0A0F1C 100%)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#318590] text-[38px] md:text-[44px] font-extrabold font-poppins mb-6"
      >
        SKILLS
      </motion.h2>

      <div className="w-full flex flex-col items-center gap-24">
        {categories.map((category, catIndex) => {
          const activeSkill = category.skills[activeIndex[catIndex]];
          const showGroupTitle = !groupTitlesShown.has(category.group);
          groupTitlesShown.add(category.group);

          return (
            <div key={catIndex} className="w-full flex flex-col items-center">
              {/* Judul besar per grup */}
              {showGroupTitle && (
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#318590] text-[28px] md:text-[32px] font-extrabold font-poppins mb-8"
                >
                  {category.group.toUpperCase()}
                </motion.h3>
              )}

              {/* Card kategori */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-4xl rounded-2xl border border-[#00E0FF]/30 bg-white/5 backdrop-blur-md py-10 px-4 md:px-10 relative shadow-[0_0_40px_rgba(0,224,255,0.2)]"
              >
                {/* Judul kategori */}
                <h4 className="text-white text-[22px] md:text-[26px] font-bold font-poppins mb-8 flex justify-center items-center gap-3">
                  <button
                    onClick={() => handlePrev(catIndex)}
                    className="text-[#00E0FF] hover:scale-125 transition"
                  >
                    ◀
                  </button>
                  {category.title.toUpperCase()}
                  <button
                    onClick={() => handleNext(catIndex)}
                    className="text-[#00E0FF] hover:scale-125 transition"
                  >
                    ▶
                  </button>
                </h4>

                {/* Skill carousel */}
                <div className="flex justify-center items-center gap-6">
                  <AnimatePresence mode="wait">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i < activeIndex[catIndex] ? -50 : 50 }}
                        animate={{
                          opacity: i === activeIndex[catIndex] ? 1 : 0.2,
                          scale: i === activeIndex[catIndex] ? 1 : 0.8,
                          x: i === activeIndex[catIndex] ? 0 : i < activeIndex[catIndex] ? -100 : 100,
                        }}
                        exit={{ opacity: 0, x: i < activeIndex[catIndex] ? -50 : 50 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center"
                      >
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className={`w-[160px] md:w-[200px] drop-shadow-[0_0_25px_rgba(0,224,255,0.2)] transition-all duration-500 ${
                            i === activeIndex[catIndex]
                              ? "opacity-100 scale-100"
                              : "opacity-30 scale-90"
                          }`}
                        />
                        <p
                          className={`mt-4 text-[18px] md:text-[20px] font-bold font-poppins ${
                            i === activeIndex[catIndex]
                              ? "text-white"
                              : "text-gray-500"
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