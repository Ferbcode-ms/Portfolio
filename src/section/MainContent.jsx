import React, { useState } from "react";
import { navItems } from "../content";
import "../index.css";
import {
  Services,
  About,
  Clients,
  Contact,
  Portfolio,
  Resume,
  Testimonials,
  Blog,
} from "../components/index";

const MainContent = () => {
  const [activeSection, setActiveSection] = useState("About");

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="relative w-[65%] rounded-[20px] border-[1px] border-solid border-jet bg-eerie-black-2 p-[30px] max-xl:w-full max-md:p-4">
      {/* Navigation */}
      <nav className="absolute right-0 top-0 z-40 w-max rounded-bl-[20px] rounded-tr-[20px] border-[1px] border-solid border-jet bg-eerie-black-1 px-[8px] shadow-none backdrop-blur-[10px] max-md:fixed max-md:bottom-0 max-md:right-0 max-md:top-auto max-md:w-full max-md:rounded-lg max-md:p-0">
        <ul className="flex flex-wrap items-center justify-center gap-7 max-lg:gap-1">
          {navItems.map((item) => (
            <li key={item.id} className="bottom-2 font-fw-500 text-light-gray">
              <button
                onClick={() => handleClick(item.section)}
                className={`p-4 text-center text-[15px] transition-all duration-100 max-lg:p-3 max-md:text-[12px] ${
                  item.section === activeSection
                    ? "text-orange-yellow-crayola"
                    : ""
                }`}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Render Active Section */}

      {activeSection === "About" && (
        <div className="animate-show">
          <About />
          <Services />
          <Testimonials />
          <Clients />
        </div>
      )}

      {activeSection === "Portfolio" && (
        <div className="animate-show">
          <Portfolio />
        </div>
      )}

      {activeSection === "Resume" && (
        <div className="animate-show">
          <Resume />
        </div>
      )}

      {activeSection === "Blog" && (
        <div className="animate-show">
          <Blog />
        </div>
      )}

      {activeSection === "Contact" && (
        <div className="animate-show">
          <Contact />
        </div>
      )}
    </div>
  );
};

export default MainContent;
