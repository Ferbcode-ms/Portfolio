import React from "react";
import { clients } from "../content"; // Assuming clients array is imported from content file
import "../index.css"; // Importing CSS styles

// Functional component for displaying client logos
const Clients = () => {
  return (
    <section className="my-[15px]">
      {/* Section title */}
      <h3 className="mb-[25px] text-[24px] font-fw-500 capitalize text-white-2">
        Clients
      </h3>
      <ul className="client-list has-scrollbar -m-[15px] flex items-start justify-start gap-[30px] overflow-x-auto scroll-smooth whitespace-nowrap p-[25px] pb-[35px]">
        {/* Mapping through clients array to display each client logo */}
        {clients.map((client, index) => (
          <li className="min-w-[22%] max-md:min-w-[50%]" key={index}>
            <a href={client.href}>
              {/* Client logo image */}
              <img
                src={client.imgSrc}
                className="w-[100%] grayscale ease-transition-1 hover:grayscale-0"
                alt={client.alt}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Clients;
