import React from "react";
import { testimonialsData } from "../content";

const Testimonials = () => {
  return (
    <section className="mb-[30px] max-md:mb-3">
      <h3 className="mb-[10px] text-[24px] font-fw-500 capitalize text-white-2 max-md:text-[22px] max-md:font-fw-600">
        Testimonials
      </h3>
      <ul className="has-scrollbar mb-9 flex items-center justify-start gap-3 overflow-x-auto scroll-smooth pb-7 text-white-1 max-md:mb-3 max-md:snap-x max-md:snap-mandatory">
        {testimonialsData.map((testimonial) => (
          <li
            className="relative mt-12 rounded-[14px] border-[1px] border-solid border-jet shadow-shadow-2 max-md:w-[300px] max-md:snap-center"
            key={testimonial.id}
          >
            <div className="scroll-container w-[360px] cursor-pointer overflow-hidden text-ellipsis p-[15px] px-[30px] max-md:w-[300px] max-md:px-3">
              <figure className="absolute -top-8 left-8 rounded-[14px] bg-gradient-onyx shadow-shadow-1">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width="80px"
                  height="80px"
                  loading="lazy" // Added lazy loading for better performance
                />
              </figure>
              <h4 className="mb-[10px] ml-[95px] font-fw-500 max-md:ml-32">
                {testimonial.name}
              </h4>
              <div className="overflow-hidden text-ellipsis p-3">
                <p className="testimonials-text text-[14px] font-fw-400 leading-6 text-light-gray max-md:w-[90%]">
                  {testimonial.text}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
