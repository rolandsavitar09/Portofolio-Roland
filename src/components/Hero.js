import React from "react";
import { motion } from "framer-motion";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
import email from "../assets/images/email.png";
import wa from "../assets/images/wa.png";
import foto from "../assets/images/Foto Diri.png";
import cv from "../assets/files/CV-Roland.pdf";

function Hero() {
  const socials = [
    {
      icon: linkedin,
      link: "https://www.linkedin.com/in/roland-savitar-709b55275",
    },
    { icon: github, link: "https://github.com/rolandsavitar09" },
    { icon: email, link: "mailto:rolandsavitarherdiansyah@gmail.com" },
    { icon: wa, link: "https://wa.me/6281217027640" },
  ];

  return (
    <section
      id="home"
      // 🔧 Diperbaiki agar tidak "mengunci scroll" di iPhone Safari
      className="w-full flex flex-col md:flex-row justify-center items-center text-center md:text-left
                 px-8 md:px-20 pt-32 pb-20 md:pb-24 overflow-visible"
      style={{
        background:
          "radial-gradient(circle at center, #0A0F1C 35%, #0F2027 100%)",
      }}
    >
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex flex-col justify-center space-y-4"
      >
        <p className="text-[#BCBCBC] text-[36px] font-semibold font-['Poppins']">
          Hi, I am
        </p>

        <h1 className="text-[#BCBCBC] text-[30px] font-semibold font-['Poppins'] leading-tight">
          Roland Savitar Herdiansyah
        </h1>

        <h2 className="text-[48px] font-extrabold font-['Poppins'] text-transparent bg-clip-text 
                       bg-gradient-to-r from-[#00E0FF] to-[#318590] leading-snug">
          WEB DEVELOPMENT &<br />UI/UX DESIGNER
        </h2>

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex gap-6 mt-6 justify-center md:justify-start"
        >
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15 }}
              className="p-3 rounded-full bg-transparent border border-[#00E0FF] hover:bg-[#00E0FF]/20 transition"
            >
              <img src={s.icon} alt="social" className="w-7 h-7" />
            </motion.a>
          ))}
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex gap-4 mt-8 justify-center md:justify-start flex-wrap"
        >
          <a
            href="#contact"
            className="px-6 py-2 text-white text-[18px] font-bold rounded-[20px]
                       bg-gradient-to-r from-[#00E0FF] to-[#0B5D68] shadow-md transition hover:opacity-90"
          >
            Hire Me
          </a>

          {/* ✅ DOWNLOAD CV BUTTON */}
          <a
            href={cv}
            download="CV-Roland-Savitar-Herdiansyah.pdf"
            className="px-6 py-2 text-[18px] font-bold rounded-[20px] border border-[#00E0FF]
                       text-white hover:bg-[#00E0FF]/10 transition"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE (PHOTO FIXED STYLE) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex justify-center mt-16 md:mt-0 relative select-none pointer-events-none"
      >
        {/* Lingkaran latar belakang */}
        <div className="absolute w-[340px] h-[340px] md:w-[400px] md:h-[400px] bg-[#0F2027] rounded-full shadow-[0_0_100px_#00E0FF]/40" />

        {/* Frame lingkaran foto */}
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border-4 
                        border-[#00E0FF]/60 overflow-hidden flex justify-center items-end 
                        shadow-[0_0_40px_#00E0FF]/20">
          <img
            src={foto}
            alt="Roland Savitar"
            className="relative w-[380px] md:w-[480px] object-cover translate-y-10 md:translate-y-16 scale-110 
                       select-none pointer-events-none"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;