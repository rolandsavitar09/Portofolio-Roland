import React, { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const menu = ["Home", "About", "Projects", "Skills", "Contact"];

  
  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      setMobileOpen(false); 
    }
  };

  
  useEffect(() => {
    const sections = menu.map((m) => document.getElementById(m.toLowerCase()));

    const onScroll = () => {
      const scrollPos = window.scrollY;
      let current = active;

    
      for (let i = 0; i < sections.length; i++) {
        const sec = sections[i];
        if (!sec) continue;
        const rect = sec.getBoundingClientRect();
        const top = rect.top + window.scrollY;
       
        if (scrollPos >= top - window.innerHeight * 0.45) {
          current = menu[i];
        }
      }

      if (current !== active) setActive(current);
    };

   
    window.addEventListener("scroll", onScroll, { passive: true });
    
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
    
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-lg"
      style={{
        background: "radial-gradient(circle at center, #0A0F1C 35%, #0F2027 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-10 font-['Poppins']">
      
        <button
          onClick={() => scrollTo("Home")}
          className="text-white text-2xl md:text-3xl font-extrabold tracking-wide"
        >
          PORTOFOLIO
        </button>

       
        <ul className="hidden md:flex space-x-10 text-lg font-extrabold text-white items-center">
          {menu.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className={`transition duration-300 px-1 py-1 ${
                  active === item
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#0B5D68]"
                    : "hover:text-[#00E0FF]"
                }`}
                aria-current={active === item ? "page" : undefined}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

      
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("Contact");
          }}
          className="hidden md:inline-block px-6 py-2 text-white text-[18px] font-bold rounded-[20px]
                     bg-gradient-to-r from-[#00E0FF] to-[#0B5D68] shadow-md hover:opacity-90 transition"
        >
          Hire Me
        </a>

       
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => {
              setMobileOpen((s) => !s);
            }}
            aria-label="Toggle menu"
            className="text-white text-3xl font-bold"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>


      <div
        className={`md:hidden w-full bg-black/10 backdrop-blur-md transition-max-height duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-3">
          {menu.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`w-full text-left px-4 py-3 rounded-lg font-semibold text-white transition ${
                active === item ? "bg-[#0B5D68]/20" : "hover:bg-white/5"
              }`}
            >
              {item}
            </button>
          ))}

          <button
            onClick={() => scrollTo("Contact")}
            className="mt-2 w-full px-4 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-[#00E0FF] to-[#0B5D68]"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;