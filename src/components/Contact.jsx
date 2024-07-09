import React, { useState } from "react";
import { contactData } from "../content"; // Assuming contactData is imported correctly

// Functional component for displaying contact information and form
const Contact = () => {
  // Initial state with all form inputs initialized
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handler to clear form inputs
  const clearForm = () => {
    setFormInputs({
      name: "",
      email: "",
      message: "",
    });
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any form submission logic here

    // Clear the form inputs after submission
    clearForm();
  };

  // Handler to manage form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <article className="contact max-md:mb-12" data-page="contact">
      {/* Contact section header */}
      <header className="relative mb-12">
        <h2 className="article-title mb-[20px] text-[32px] font-fw-500 capitalize text-white-2">
          {contactData.header.title}
        </h2>
      </header>

      {/* Map section */}
      <section
        className="mapbox mb-[30px] h-[240px] w-full rounded-lg shadow-shadow-1"
        data-mapbox
      >
        <figure className="h-full">
          {/* Embedding map iframe */}
          <iframe
            src={contactData.map.src}
            width={contactData.map.width}
            height={contactData.map.height}
            className="h-full w-full rounded-lg border-none grayscale invert"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      {/* Contact form section */}
      <section className="contact-form">
        {/* Form title */}
        <h3 className="form-title mb-[20px] text-[24px] font-fw-500 capitalize text-white-2">
          {contactData.form.title}
        </h3>

        {/* Form with inputs and textarea */}
        <form action="#" className="form" data-form onSubmit={handleSubmit}>
          <div className="input-wrapper mb-8 grid grid-cols-2 gap-8 max-md:mb-4 max-md:grid-cols-1 max-md:gap-4">
            {/* Mapping through form inputs */}
            {contactData.form.inputs.map((input, index) => (
              <input
                key={index}
                type={input.type}
                name={input.name}
                className="form-input rounded-lg border-[1px] border-solid border-jet bg-eerie-black-2 bg-none px-[20px] py-[15px] text-[15px] font-fw-500 text-white-2 outline-none"
                placeholder={input.placeholder}
                required={input.required}
                value={formInputs[input.name] || ""}
                onChange={handleInputChange}
                data-form-input
              />
            ))}
          </div>

          {/* Textarea for message */}
          <textarea
            name={contactData.form.textarea.name}
            className="form-input mb-[30px] min-h-[100px] w-full resize-none rounded-lg border-[1px] border-solid border-jet bg-eerie-black-2 px-[20px] py-[15px] font-fw-500 text-white-2 outline-none max-md:mb-[12px]"
            placeholder={contactData.form.textarea.placeholder}
            required={contactData.form.textarea.required}
            value={formInputs[contactData.form.textarea.name] || ""}
            onChange={handleInputChange}
            data-form-input
          ></textarea>

          {/* Submit button */}
          <button
            className="form-btn mb-[10px] ml-auto flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-border-gradient-onyx px-[20px] py-[16px] text-orange-yellow-crayola shadow-shadow-4 max-md:w-full"
            type="submit"
            data-form-btn
          >
            {/* Icon and text for submit button */}
            <img src={contactData.form.button.icon}></img>
            <span>{contactData.form.button.text}</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
