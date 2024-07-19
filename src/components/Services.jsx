import React from "react";
import { services } from "../content";

const Services = () => {
  return (
    <section className="mb-[35px]">
      <h3 className="mb-[20px] text-[24px] font-fw-500 max-md:text-[22px] max-md:font-fw-600">
        What I'm doing
      </h3>
      <ul className="grid grid-cols-2 gap-x-[25px] gap-y-[20px] max-md:grid-cols-1">
        {services.map((service) => (
          <li
            key={service.id}
            className="flex items-start justify-start gap-[26px] rounded-[14px] border-[1px] border-solid border-jet bg-eerie-black-2 p-[30px] shadow-shadow-2 backdrop-blur-[10px] max-md:flex-col max-md:items-center max-md:p-5"
          >
            <div className="mt-[10px]">
              <img
                src={service.icon}
                alt={service.alt}
                width="50px"
                height="50px"
                loading="lazy" // Added lazy loading for better performance
              />
            </div>
            <div>
              <h4 className="mb-[7px] text-[18px] font-fw-500 max-md:text-center">
                {" "}
                {/* Corrected max-sm to font-fw-500 for consistent font weight */}
                {service.title}
              </h4>
              <p className="text-[14px] font-fw-400 text-light-gray max-md:text-center">
                {service.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
