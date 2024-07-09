import React from "react";
import { resumeData, skills } from "../content"; // Assuming resumeData and skills are imported correctly
import "../index.css"; // Importing CSS styles

// Functional component for displaying resume information and skills
const Resume = () => {
  return (
    <article className="resume">
      {/* Resume section header */}
      <header className="relative">
        <h2 className="article-title mb-[20px] text-[32px] font-fw-500 capitalize text-white-2 max-md:text-[22px] max-md:font-fw-600">
          Resume
        </h2>
      </header>

      {/* Education timeline section */}
      <section className="timeline mb-[30px] max-md:mb-[15px]">
        <div className="title-wrapper mb-[25px] mt-[40px] flex items-center gap-5">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-lg border-[1px] border-solid border-jet bg-eerie-black-1 text-orange-yellow-crayola shadow-shadow-1">
            <ion-icon icon="book-outline"></ion-icon>
          </div>
          <h3 className="text-[20px] font-fw-500 capitalize text-white-2 max-md:text-[18px] max-md:font-fw-600">
            Education
          </h3>
        </div>
        {/* List of education items */}
        <ol className="timeline-list ml-[65px] text-[15px]">
          {resumeData.education.map((item, index) => (
            <li className="timeline-item relative mb-[20px]" key={index}>
              <h4 className="h4 timeline-item-title mb-[7px] text-[15px] capitalize text-white-2">
                {item.title}
              </h4>
              <span className="font-fw-400 text-vegas-gold">{item.date}</span>
              <p className="timeline-text leading-1 font-fw-300 text-light-gray max-md:text-[13px] max-md:leading-5">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Experience timeline section */}
      <section className="timeline">
        <div className="mb-[25px] mt-[40px] flex items-center gap-5">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-lg border-[1px] border-solid border-jet bg-eerie-black-1 text-orange-yellow-crayola shadow-shadow-1">
            <ion-icon icon="book-outline"></ion-icon>
          </div>
          <h3 className="text-[20px] font-fw-500 capitalize text-white-2 max-md:text-[18px] max-md:font-fw-600">
            Experience
          </h3>
        </div>
        {/* List of experience items */}
        <ol className="timeline-list ml-[65px] text-[15px]">
          {resumeData.experience.map((item, index) => (
            <li className="timeline-item relative mb-[20px]" key={index}>
              <h4 className="h4 timeline-item-title mb-[7px] text-[15px] capitalize text-white-2">
                {item.title}
              </h4>
              <span className="font-fw-400 text-vegas-gold">{item.date}</span>
              <p className="timeline-text leading-1 font-fw-300 text-light-gray max-md:text-[13px] max-md:leading-5">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills section */}
      <section className="skill max-md:mb-10">
        <h3 className="mb-[20px] text-[24px] font-fw-500 capitalize text-white-2 max-md:text-[22px]">
          My skills
        </h3>
        {/* List of skills with progress */}
        <ul className="content-card z-1 relative rounded-lg border-[1px] border-solid border-jet p-[30px] shadow-shadow-2">
          {skills.map((skill, index) => (
            <li className="skills-item mb-[25px] max-md:mb-[12px]" key={index}>
              <div className="title-wrapper mb-2 flex items-center gap-[7px]">
                <h5 className="text-[15px] font-fw-500">{skill.name}</h5>
                <data
                  value={skill.value}
                  className="font-fw-300 text-light-gray"
                >
                  {skill.value}%
                </data>
              </div>
              <div className="h-2 w-full rounded-md bg-jet">
                {/* Skill progress bar */}
                <div
                  className="skill-progress-fill h-full rounded-md bg-text-gradient-yellow"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;
