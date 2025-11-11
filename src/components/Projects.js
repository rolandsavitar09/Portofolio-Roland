import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import semua thumbnail (perhatikan huruf besar kecil)
import panenmania from "../assets/images/Panen Mania.png";
import personal from "../assets/images/Personal Profile.png";
import tenshoespot from "../assets/images/Ten Shoe Spot.png";
import samadhi from "../assets/images/Samadhi Buddhi.png";
import vokapedia from "../assets/images/Voka pedia.png";
import bookfinity from "../assets/images/Bookfinity.png";
import justicehub from "../assets/images/Justice Hub.png";

function Projects() {
  const categories = ["ALL", "WEBSITE", "UI/UX DESIGN"];
  const [activeCategory, setActiveCategory] = useState("ALL");

  const projects = [
    {
      title: "PanenMania",
      category: "Website",
      image: panenmania,
      link: "https://panenmania.vercel.app/",
    },
    {
      title: "Ten Shoe Spot",
      category: "Website",
      image: tenshoespot,
      link: "https://tenshoespot.infinityfreeapp.com/",
    },
    {
      title: "Personal Profile",
      category: "Website",
      image: personal,
      link: "https://personal-profile-jeus.vercel.app/",
    },
    {
      title: "Samadhi Buddhi",
      category: "UI/UX Design",
      image: samadhi,
      link: "https://www.figma.com/design/M5EVPs3fXWDLOFu7fuPndR/Samadhi-Buddhi?node-id=0-1&t=9Zn1JWOnUF2ALlis-1",
    },
    {
      title: "Vokapedia",
      category: "UI/UX Design",
      image: vokapedia,
      link: "https://www.figma.com/design/H0PTXj4ohgrerfwYkwB5gE/Vokapedia?t=9Zn1JWOnUF2ALlis-1",
    },
    {
      title: "Ten Shoe Spot",
      category: "UI/UX Design",
      image: tenshoespot,
      link: "https://www.figma.com/design/88jSlADA9zKtxN2zowZa65/TEN-SHOE-SPOT?t=9Zn1JWOnUF2ALlis-1",
    },
    {
      title: "BookFinity",
      category: "UI/UX Design",
      image: bookfinity,
      link: "https://www.figma.com/design/QQOuaeqVVuOhYDk5e0eg4Z/BookFinity?t=9Zn1JWOnUF2ALlis-1",
    },
    {
      title: "Justice Hub",
      category: "UI/UX Design",
      image: justicehub,
      link: "https://www.figma.com/design/m1Zb6imp7dPM85bHTqo96X/Justice-Hub?t=9Zn1JWOnUF2ALlis-1",
    },
  ];

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category.toUpperCase() === activeCategory);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center py-20 text-center px-6 md:px-20"
      style={{
        background: "linear-gradient(180deg, #0F2027 35%, #0A0F1C 100%)",
      }}
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#318590] text-[38px] md:text-[44px] font-extrabold font-poppins mb-10"
      >
        PROJECT
      </motion.h2>

      {/* FILTER BUTTONS */}
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

      {/* PROJECT GRID */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl"
        >
          {filteredProjects.map((proj, index) => (
            <motion.a
              key={index}
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,224,255,0.2)] bg-[#0F2027]/50 border border-[#00E0FF]/20 hover:shadow-[0_0_30px_rgba(0,224,255,0.4)] transition-all duration-500"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-[240px] object-cover"
              />

              {/* Overlay info */}
              <div className="absolute bottom-0 w-full bg-[#0B5D68] py-4 px-6 flex justify-between items-center">
                <h3 className="text-white text-[20px] font-bold font-poppins">
                  {proj.title}
                </h3>
                <p className="text-white/80 font-semibold text-[16px]">
                  {proj.category}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Projects;