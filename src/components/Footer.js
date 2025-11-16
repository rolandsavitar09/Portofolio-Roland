import React from "react";
import { motion } from "framer-motion";

function Footer() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className="w-full py-10 flex flex-col items-center justify-center text-center font-poppins"
      style={{
        background: "linear-gradient(180deg, #0F2027 35%, #0A0F1C 100%)",
      }}
    >
      
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#318590] 
                   text-[28px] md:text-[32px] font-extrabold mb-3"
      >
        Roland Savitar Herdiansyah
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-[#BCBCBC] text-[16px] mb-6"
      >
        Web Development & UI/UX Designer
      </motion.p>

     
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
        className="flex flex-wrap justify-center gap-6 mb-6"
      >
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-gray-400 hover:text-[#00E0FF] transition-all text-[16px] font-semibold"
            >
              {link.name}
            </a>
          </li>
        ))}
      </motion.ul>

     
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-gray-500 text-sm mt-4"
      >
        © {new Date().getFullYear()} Roland Savitar Herdiansyah — All rights reserved.
      </motion.div>

    
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="mt-6 w-40 h-[2px] bg-gradient-to-r from-[#00E0FF] to-[#318590] rounded-full"
      ></motion.div>
    </footer>
  );
}

export default Footer;