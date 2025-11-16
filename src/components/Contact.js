import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
import email from "../assets/images/email.png";
import wa from "../assets/images/wa.png";

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(null);

    emailjs
      .sendForm(
        "service_z42y01b", // Service ID
        "template_dnmqoma", // Template ID 
        form.current,
        "aCfu9iWs88JwS0PLM" // Public Key 
      )
      .then(
        () => {
          setIsSending(false);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setIsSending(false);
          setSuccess(false);
        }
      );
  };

  const socials = [
    {
      icon: linkedin,
      link: "www.linkedin.com/in/roland-savitar-herdiansyah",
    },
    { icon: github, link: "https://github.com/rolandsavitar09" },
    { icon: email, link: "mailto:rolandsavitarherdiansyah@gmail.com" },
    { icon: wa, link: "https://wa.me/6281217027640" },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20 text-center"
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
                   text-[38px] md:text-[44px] font-extrabold font-poppins mb-4"
      >
        CONTACT ME
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-[#BCBCBC] text-[18px] md:text-[20px] mb-10 font-poppins"
      >
        Let’s collaborate or just say hi 👋
      </motion.p>

 
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-xl bg-white/5 backdrop-blur-lg border border-[#00E0FF]/30 
                   rounded-2xl p-8 flex flex-col gap-6 shadow-[0_0_25px_rgba(0,224,255,0.1)]"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full bg-transparent border-b border-gray-500 focus:border-[#00E0FF] 
                     outline-none text-white py-2 text-lg transition font-poppins"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full bg-transparent border-b border-gray-500 focus:border-[#00E0FF] 
                     outline-none text-white py-2 text-lg transition font-poppins"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          className="w-full bg-transparent border-b border-gray-500 focus:border-[#00E0FF] 
                     outline-none text-white py-2 text-lg transition font-poppins resize-none"
        ></textarea>
        <button
          type="submit"
          disabled={isSending}
          className={`mt-4 py-3 text-[18px] font-bold rounded-[20px] text-white 
                     bg-gradient-to-r from-[#00E0FF] to-[#0B5D68] 
                     shadow-[0_0_25px_rgba(0,224,255,0.4)] transition 
                     ${isSending ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"}`}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </motion.form>

   
      {success === true && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-400 mt-6 font-semibold font-poppins"
        >
          ✅ Message sent successfully!
        </motion.p>
      )}
      {success === false && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-400 mt-6 font-semibold font-poppins"
        >
          ❌ Failed to send. Please try again.
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex gap-6 mt-12 justify-center"
      >
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15 }}
            className="p-3 rounded-full border border-[#00E0FF] hover:bg-[#00E0FF]/20 transition"
          >
            <img src={s.icon} alt="social" className="w-7 h-7" />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

export default Contact;