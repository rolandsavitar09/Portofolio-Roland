import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="text-white overflow-x-hidden scroll-smooth bg-[#0A0F1C]"
      style={{
        maxWidth: "100vw",
        position: "relative",
      }}
    >
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN SECTIONS */}
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;