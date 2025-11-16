import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import panenmania from "../assets/images/Panen Mania.png";
import personal from "../assets/images/Personal Profile.png";
import tenshoespot from "../assets/images/Ten Shoe Spot.png";
import samadhi from "../assets/images/Samadhi Buddhi.png";
import vokapedia from "../assets/images/Voka pedia.png";
import bookfinity from "../assets/images/Bookfinity.png";
import justicehub from "../assets/images/Justice Hub.png";

import reacticon from "../assets/images/Logo Javascript.png";
import tailwindicon from "../assets/images/Logo Tailwind.png";
import figmaicon from "../assets/images/Logo figma.png";
import htmlicon from "../assets/images/Logo HTML.png";

function Projects() {
  const categories = ["ALL", "WEBSITE", "UI/UX DESIGN"];
  const [activeCategory, setActiveCategory] = useState("ALL");

  const projects = [
    {
      title: "PanenMania",
      category: "Website",
      image: panenmania,
      link: "https://panenmania.vercel.app/",
      source: "https://github.com/rolandsavitar09",
      desc: "Website marketplace untuk UMKM hasil panen.",
      stack: [reacticon, tailwindicon],
    },
    {
      title: "Ten Shoe Spot",
      category: "Website",
      image: tenshoespot,
      link: "https://tenshoespot.infinityfreeapp.com/",
      source: "",
      desc: "Website katalog sepatu modern dan responsive.",
      stack: [htmlicon, tailwindicon],
    },
    {
      title: "Personal Profile",
      category: "Website",
      image: personal,
      link: "https://personal-profile-jeus.vercel.app/",
      source: "",
      desc: "Website profile personal dengan animasi halus.",
      stack: [reacticon],
    },
    {
      title: "Samadhi Buddhi",
      category: "UI/UX Design",
      image: samadhi,
      link: "https://www.figma.com/design/M5EVPs3fXWDLOFu7fuPndR/Samadhi-Buddhi",
      source: "",
      desc: "Desain untuk aplikasi perpustakaan online.",
      stack: [figmaicon],
    },
    {
      title: "Vokapedia",
      category: "UI/UX Design",
      image: vokapedia,
      link: "https://www.figma.com/design/H0PTXj4ohgrerfwYkwB5gE/Vokapedia",
      source: "",
      desc: "Desain untuk aplikasi edukasi online.",
      stack: [figmaicon],
    },
    {
      title: "Ten Shoe Spot",
      category: "UI/UX Design",
      image: tenshoespot,
      link: "https://www.figma.com/design/88jSlADA9zKtxN2zowZa65/TEN-SHOE-SPOT",
      source: "",
      desc: "Desain UI modern untuk toko sepatu online.",
      stack: [figmaicon],
    },
    {
      title: "BookFinity",
      category: "UI/UX Design",
      image: bookfinity,
      link: "https://www.figma.com/design/QQOuaeqVVuOhYDk5e0eg4Z/BookFinity",
      source: "",
      desc: "UI e-book library modern dan clean.",
      stack: [figmaicon],
    },
    {
      title: "Justice Hub",
      category: "UI/UX Design",
      image: justicehub,
      link: "https://www.figma.com/design/m1Zb6imp7dPM85bHTqo96X/Justice-Hub",
      source: "",
      desc: "Desain UI untuk sistem bantuan hukum.",
      stack: [figmaicon],
    },
  ];

  const filtered =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category.toUpperCase() === activeCategory);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center py-20 text-center px-6 md:px-20"
      style={{
        background: "linear-gradient(180deg, #0A0F1C 35%, #0F2027 100%)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#318590] 
                   text-[38px] md:text-[44px] font-extrabold font-poppins mb-10"
      >
        PROJECTS
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-semibold text-[16px] md:text-[18px] transition-all duration-300 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-[#00E0FF] to-[#0B5D68] text-white shadow-md"
                : "bg-gray-600/30 text-gray-300 hover:bg-gray-500/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl"
        >
          {filtered.map((proj, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="rounded-2xl overflow-hidden backdrop-blur-md 
                         bg-white/10 border border-white/20 
                         shadow-[0_0_25px_rgba(0,224,255,0.2)] hover:shadow-[0_0_35px_rgba(0,224,255,0.4)]
                         transition-all duration-500"
            >
              <div className="relative">
                <a href={proj.link} target="_blank" rel="noreferrer">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-[220px] object-cover"
                  />
                </a>

                <span
                  className={`absolute top-3 left-3 px-3 py-1 text-[13px] font-semibold rounded-full 
                    backdrop-blur-xl shadow-md 
                    ${
                      proj.category === "Website"
                        ? "bg-[#00E0FF]/20 text-[#00E0FF] border border-[#00E0FF]/40"
                        : "bg-[#A855F7]/20 text-[#A855F7] border border-[#A855F7]/40"
                    }`}
                >
                  {proj.category.toUpperCase()}
                </span>
              </div>

              <div className="p-5 text-left space-y-3">
                <h3 className="text-[20px] font-bold text-white">
                  {proj.title}
                </h3>

                <p className="text-gray-300 text-[15px]">{proj.desc}</p>

                <div className="flex gap-3 mt-2">
                  {proj.stack.map((icon, i) => (
                    <img key={i} src={icon} alt="stack" className="w-6 h-6" />
                  ))}
                </div>

                <div className="flex gap-4 mt-4">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 rounded-lg 
                               bg-gradient-to-r from-[#00E0FF] to-[#0B5D68] text-white font-semibold 
                               hover:opacity-90 transition"
                  >
                    Live Demo
                  </a>

                  {proj.source && (
                    <a
                      href={proj.source}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center py-2 rounded-lg border border-[#00E0FF] text-white 
                                 hover:bg-white/10 transition font-semibold"
                    >
                      Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Projects;
