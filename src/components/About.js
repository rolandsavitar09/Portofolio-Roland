import React from "react";
import { motion } from "framer-motion";
import unesa from "../assets/images/Logo unesa.png";
import smanta from "../assets/images/Logo smanta.png";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-24 py-20 text-center"
      style={{
        background: "linear-gradient(180deg, #0F2027 35%, #0A0F1C 100%)",
      }}
    >
      {/* ABOUT ME */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#318590] text-[36px] md:text-[42px] font-extrabold font-poppins mb-10"
      >
        ABOUT ME
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-[#E5E5E5] text-[18px] md:text-[20px] font-semibold font-poppins leading-relaxed max-w-5xl"
      >
        Merupakan mahasiswa aktif program studi D4 Manajemen Informatika yang
        memiliki minat dan kemampuan dalam bidang Web Development serta UI/UX
        Design. Selama masa studi, saya telah mengembangkan berbagai proyek
        berbasis web dengan fokus pada fungsionalitas, pengalaman pengguna, dan
        tampilan antarmuka yang intuitif. Saya memiliki pemahaman yang baik
        terhadap proses pengembangan sistem informasi, mulai dari analisis
        kebutuhan hingga implementasi dan pengujian. Selain itu, saya juga
        terbiasa bekerja secara kolaboratif dalam tim, memiliki semangat belajar
        tinggi, serta berkomitmen untuk terus meningkatkan kemampuan teknis dan
        kreativitas dalam dunia teknologi informasi.
      </motion.p>

      {/* EDUCATION SECTION */}
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#318590] text-[32px] md:text-[38px] font-extrabold font-poppins"
      >
        EDUCATION
      </motion.h3>

      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
        {/* UNESA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-6"
        >
          <img
            src={unesa}
            alt="UNESA Logo"
            className="w-[100px] md:w-[120px] object-contain"
          />
          <div className="text-left">
            <h4 className="text-white text-[22px] md:text-[24px] font-bold font-poppins">
              Universitas Negeri Surabaya
            </h4>
            <p className="text-[#E5E5E5] text-[16px] font-semibold font-poppins">
              Diploma 4 Manajemen Informatika <br /> 2023 – sekarang
            </p>
          </div>
        </motion.div>

        {/* SMAN 1 TALUN */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-6"
        >
          <img
            src={smanta}
            alt="SMAN 1 Talun Logo"
            className="w-[100px] md:w-[120px] object-contain"
          />
          <div className="text-left">
            <h4 className="text-white text-[22px] md:text-[24px] font-bold font-poppins">
              SMAN 1 Talun
            </h4>
            <p className="text-[#E5E5E5] text-[16px] font-semibold font-poppins">
              Matematika dan IPA <br /> 2020 – 2023
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;