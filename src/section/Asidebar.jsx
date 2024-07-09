import React, { useState } from "react";
import { name, contacts, social, title, avatar } from "../content/index";
import "../App.css";
import { arrowdown } from "../assets/image";

const Asidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleHeight = () => {
    setExpanded(!expanded);
  };

  return (
    <aside
      className={`sticky top-[65px] overflow-hidden rounded-2xl border-[1px] border-solid border-jet bg-eerie-black-2 p-5 pt-16 shadow-shadow-5 transition-all duration-500 ease-transition-1 max-xl:static ${
        expanded ? "max-lg:h-[480px]" : "max-lg:h-[120px]"
      } max-xl:w-full max-xl:p-9 max-xl:pt-8 max-lg:p-5 max-md:mb-2 max-md:p-5 max-md:py-4`}
    >
      <div className="flex animate-show flex-col items-center justify-center gap-4 max-xl:flex-row max-xl:justify-start max-lg:ml-2 max-lg:gap-2">
        <figure className="rounded-[35px] bg-gradient-onyx max-lg:rounded-[10px] max-md:rounded-2xl">
          <img
            src={avatar}
            alt={name}
            width="150"
            className="max-lg:w-[70px] max-md:w-[90px]"
          />
        </figure>
        <div className="mb-[10px] flex flex-col text-2xl font-fw-600 text-white-2 max-xl:ml-4 max-xl:justify-start max-lg:text-[20px] max-md:m-0 max-md:text-[18px]">
          <h1
            className="whitespace-nowrap text-center max-xl:ml-2"
            title={name}
          >
            {name}
          </h1>
          <p className="m-auto mt-4 rounded-lg bg-onyx px-3 py-1 text-center text-sm font-light text-white-1 max-xl:ml-2 max-md:mt-2 max-md:text-[10px]">
            {title}
          </p>

          <button
            onClick={toggleHeight}
            className="absolute flex items-center justify-center rounded-lg border-[1px] border-solid border-jet bg-eerie-black-2 p-2 text-vegas-gold max-xl:visible max-xl:right-16 max-xl:top-16 max-md:right-3 max-md:top-3 xl:hidden"
          >
            <span className="text-[10px] max-lg:visible max-md:hidden">
              Show Contacts
            </span>

            <img src={arrowdown} alt="" />
          </button>
        </div>
      </div>
      <div className="sidebar-info_more animate-show">
        <div className="my-[30px] h-[1px] w-full bg-jet"></div>
        <ul className="grid-cols-1">
          {contacts.map((contact, index) => (
            <li
              className="mb-8 flex min-w-[100%] items-center gap-4 max-lg:mb-4 max-md:mb-4"
              key={index}
            >
              <div className="z-2 flex size-[48px] items-center justify-center rounded-[12px] bg-border-gradient-onyx text-[18px] text-orange-yellow-crayola shadow-shadow-1">
                <img src={contact.icon}></img>
              </div>
              <div className="text-fs-7 font-fw-300 text-white-1">
                <p className="contact-title mb-[1px] text-fs-8 uppercase text-light-gray-70">
                  {contact.type}
                </p>
                {contact.link ? (
                  <a href={contact.link}>{contact.value}</a>
                ) : contact.datetime ? (
                  <time dateTime={contact.datetime}>{contact.value}</time>
                ) : (
                  <address>{contact.value}</address>
                )}
              </div>
            </li>
          ))}
        </ul>

        <ul className="m-auto flex size-[48px] items-center justify-center gap-8 rounded-[12px] text-[18px] text-light-gray">
          {social.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="social-link">
                {/* <IonIcon icon={item.icon}></IonIcon> */}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Asidebar;
