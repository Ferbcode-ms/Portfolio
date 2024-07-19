import React from "react";
import { pages } from "../content";

// Functional component for About section
const About = () => {
  return (
    // Container div with margin bottom
    <div className="mb-[40px] max-md:mb-5">
      {pages.map((page) => (
        // Map through pages and return an article for each
        <article key={page.id}>
          <header className="relative">
            {/* Title of the article */}
            <h2 className="article-title mb-[20px] text-[32px] font-fw-500 capitalize text-white-2 max-md:text-[22px] max-md:font-fw-600">
              {page.title}
            </h2>
          </header>
          {/* Content section of the article */}
          <section className="leading-1 mt-10 text-fs-6 font-fw-400 text-light-gray">
            {page.content}
          </section>
        </article>
      ))}
    </div>
  );
};

export default About;
