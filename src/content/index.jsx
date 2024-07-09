import {
  avatar1,
  iconPhoto,
  iconDesign,
  iconDev,
  iconApp,
  avatar2,
  avatar3,
  avatar4,
  logo1Color,
  logo2Color,
  logo3Color,
  logo4Color,
  logo5Color,
  logo6Color,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  avatarmy,
  email,
  telephone,
  calendar,
  location,
  fb,
  x,
  insta,
  send,
} from "../assets/image";

export const avatar = avatarmy;
export const name = "Ferbcode";
export const title = "Web developer";

export const contacts = [
  {
    type: "Email",
    icon: email,
    value: "ferbcode@example.com",
    link: "mailto:ferbcode@example.com",
  },
  {
    type: "Phone",
    icon: telephone,
    value: "+1 (213) 123-2245",
    link: "tel:+1234567897",
  },
  {
    type: "Birthday",
    icon: calendar,
    value: "June 23, 2001",
    datetime: "2001-01-01",
  },
  {
    type: "Location",
    icon: location,
    value: "Abcde, xyz, INDIA",
  },
];

export const social = [
  {
    platform: "Facebook",
    icon: fb,
    link: "#",
  },
  {
    platform: "Twitter",
    icon: x,
    link: "#",
  },
  {
    platform: "Instagram",
    icon: insta,
    link: "#",
  },
];

// main content

// nav

export const navItems = [
  { id: 1, text: "About", isActive: false, section: "About" },
  { id: 2, text: "Resume", isActive: false, section: "Resume" },
  { id: 3, text: "Portfolio", isActive: false, section: "Portfolio" },
  { id: 4, text: "Blog", isActive: false, section: "Blog" },
  { id: 5, text: "Contact", isActive: false, section: "Contact" },
];

// aboutus

export const pages = [
  {
    id: "about",
    title: "About me",
    content: (
      <>
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful, and intuitive designs.
        </p>
        <br />
        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add a
          personal touch to your product and make sure that it is eye-catching
          and easy to use. My aim is to bring across your message and identity
          in the most creative way. I created web design for many famous brand
          companies.
        </p>
      </>
    ),
  },
  // Add more pages data here if needed
];

// about services?

export const services = [
  {
    id: 1,
    title: "Web design",
    text: "The most modern and high-quality design made at a professional level.",
    icon: iconDesign,
    alt: "design icon",
  },
  {
    id: 2,
    title: "Web development",
    text: "High-quality development of sites at the professional level.",
    icon: iconDev,
    alt: "Web development icon",
  },
  {
    id: 3,
    title: "Mobile apps",
    text: "Professional development of applications for iOS and Android.",
    icon: iconApp,
    alt: "mobile app icon",
  },
  {
    id: 4,
    title: "Photography",
    text: "I make high-quality photos of any category at a professional level.",
    icon: iconPhoto,
    alt: "camera icon",
  },
];

// testimonial

export const testimonialsData = [
  {
    id: 1,
    name: "Daniel lewis",
    avatar: avatar1,
    date: "2021-06-14",
    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    id: 2,
    name: "Jessica miller",
    avatar: avatar2,
    date: "2021-06-14",
    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    id: 3,
    name: "Emily evans",
    avatar: avatar3,
    date: "2021-06-14",
    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    id: 4,
    name: "Henry william",
    avatar: avatar4,
    date: "2021-06-14",
    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
];

// client

export const clients = [
  {
    href: "#",
    imgSrc: logo1Color,
    alt: "client logo 1",
  },
  {
    href: "#",
    imgSrc: logo2Color,
    alt: "client logo 2",
  },
  {
    href: "#",
    imgSrc: logo3Color,
    alt: "client logo 3",
  },
  {
    href: "#",
    imgSrc: logo4Color,
    alt: "client logo 4",
  },
  {
    href: "#",
    imgSrc: logo5Color,
    alt: "client logo 5",
  },
  {
    href: "#",
    imgSrc: logo6Color,
    alt: "client logo 6",
  },
];

// Resume

export const resumeData = {
  education: [
    {
      title: "University school of the arts",
      date: "2007 — 2008",
      description:
        "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
    },
    {
      title: "New york academy of art",
      date: "2006 — 2007",
      description:
        "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..",
    },
    {
      title: "High school of art and design",
      date: "2002 — 2004",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
    },
  ],
  experience: [
    {
      title: "Creative director",
      date: "2015 — Present",
      description:
        "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.",
    },
    {
      title: "Art director",
      date: "2013 — 2015",
      description:
        "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
    },
    {
      title: "Web designer",
      date: "2010 — 2013",
      description:
        "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
    },
  ],
};

// skills

export const skills = [
  {
    name: "Web design",
    value: 80,
  },
  {
    name: "Graphic design",
    value: 70,
  },
  {
    name: "Branding",
    value: 90,
  },
  {
    name: "WordPress",
    value: 50,
  },
];

// --------Portfolio

export const portfolioData = {
  categories: ["All", "Web design", "Applications", "Web development"],
  projects: [
    {
      title: "Finance",
      category: "Web development",
      image: project1,
      alt: "finance",
    },
    {
      title: "Orizon",
      category: "Web development",
      image: project2,
      alt: "orizon",
    },
    {
      title: "Fundo",
      category: "Web design",
      image: project3,
      alt: "fundo",
    },
    {
      title: "Brawlhalla",
      category: "Applications",
      image: project4,
      alt: "brawlhalla",
    },
    {
      title: "DSM.",
      category: "Web design",
      image: project5,
      alt: "dsm.",
    },
    {
      title: "MetaSpark",
      category: "Web design",
      image: project6,
      alt: "metaspark",
    },
    {
      title: "Summary",
      category: "Web development",
      image: project7,
      alt: "summary",
    },
    {
      title: "Task Manager",
      category: "Applications",
      image: project8,
      alt: "task manager",
    },
    {
      title: "Arrival",
      category: "Web development",
      image: project9,
      alt: "arrival",
    },
  ],
};

export const blogPosts = [
  {
    id: 1,
    imgSrc: blog1,
    imgAlt: "Design conferences in 2022",
    category: "Design",
    date: "2022-02-23",
    title: "Design conferences in 2022",
    text: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
  },
  {
    id: 2,
    imgSrc: blog2,
    imgAlt: "Best fonts every designer",
    category: "Design",
    date: "2022-02-23",
    title: "Best fonts every designer",
    text: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
  },
  {
    id: 3,
    imgSrc: blog3,
    imgAlt: "Design digest #80",
    category: "Design",
    date: "2022-02-23",
    title: "Design digest #80",
    text: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
  },
  {
    id: 4,
    imgSrc: blog4,
    imgAlt: "UI interactions of the week",
    category: "Design",
    date: "2022-02-23",
    title: "UI interactions of the week",
    text: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    id: 5,
    imgSrc: blog5,
    imgAlt: "The forgotten art of spacing",
    category: "Design",
    date: "2022-02-23",
    title: "The forgotten art of spacing",
    text: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    imgSrc: blog6,
    imgAlt: "Design digest #79",
    category: "Design",
    date: "2022-02-23",
    title: "Design digest #79",
    text: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
  },
];

// contact page -----------------------------------

export const contactData = {
  header: {
    title: "Contact",
  },
  map: {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd",
    width: "400",
    height: "300",
  },
  form: {
    title: "Contact Form",
    inputs: [
      {
        type: "text",
        name: "fullname",
        placeholder: "Full name",
        required: true,
      },
      {
        type: "email",
        name: "email",
        placeholder: "Email address",
        required: true,
      },
    ],
    textarea: {
      name: "message",
      placeholder: "Your Message",
      required: true,
    },
    button: {
      text: "Send Message",
      icon: send,
    },
  },
};
