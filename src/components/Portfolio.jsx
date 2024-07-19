import React, { useState } from "react";
import { portfolioData } from "../content"; // Assuming portfolioData is imported correctly
import { eye } from "../assets/image";

// Functional component for displaying portfolio projects with filtering
const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filtering projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (project) => project.category === selectedCategory,
        );

  return (
    <article className="portfolio">
      {/* Portfolio section header */}
      <header className="relative max-md:left-1">
        <h2 className="article-title mb-[20px] text-[32px] font-fw-500 capitalize text-white-2 max-md:text-[22px] max-md:font-fw-600">
          Portfolio
        </h2>
      </header>

      {/* Projects section with category filters */}
      <section className="projects">
        {/* Category filter list */}
        <ul className="filter-list mb-[30px] flex flex-wrap items-center justify-start gap-6 pl-1 max-md:gap-0">
          {portfolioData.categories.map((category, index) => (
            <li
              className="filter-item mt-[30px] rounded-md border-solid font-fw-400 max-md:ml-2 max-md:mt-[15px] max-md:border-[1px] max-md:border-jet max-md:p-2 max-md:text-center"
              key={index}
            >
              <button
                className={
                  category === selectedCategory
                    ? "duration-400 text-orange-yellow-crayola transition-all"
                    : "text-light-gray"
                }
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* List of projects */}
        <ul className="mb-3 grid grid-cols-3 gap-[30px] max-md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <li
              key={index}
              className="project-item active animate-pop"
              // Add data attributes if needed for filtering or other purposes
              // data-filter-item
              // data-category={project.category.toLowerCase().replace(' ', '-')}
            >
              <a href="#" className="">
                {/* Project image */}
                <figure className="project-img relative mb-2 overflow-hidden rounded-lg">
                  {/* Hover effect */}
                  <div className="project-item-icon-box absolute left-[40%] top-[40%] z-10 grid items-center rounded-lg bg-jet p-[14px] text-[20px] text-orange-yellow-crayola opacity-0 transition-all duration-300 max-md:left-[30%] max-md:top-[30%]">
                    <img src={eye}></img>
                  </div>
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="duration-250 rounded-lg transition-all"
                  />
                </figure>
                {/* Project title */}
                <h3 className="project-title ml-2 max-md:font-fw-500">
                  {project.title}
                </h3>
                {/* Project category */}
                <p className="project-category ml-2 text-light-gray max-md:text-[13px] max-md:font-fw-400">
                  {project.category}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
