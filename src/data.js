const data = {
  webTech: [
    { tech: "Show-All" },
    { tech: "React.js" },
    { tech: "Front-End" },
    { tech: "Full-Stack" },
    { tech: "Back-End" },
    { tech: "Redux" },
    { tech: "Mongodb" },
    { tech: "HTML5" },
    { tech: "Bootstrap" },
    { tech: "UI/UX" },
    { tech: "Firebase" }
  ],
  mobileTech: [
    { tech: "Show-All" },
    { tech: "React-Native" },
    { tech: "Firebase" },
    { tech: "Front-End" },
    { tech: "Full-Stack" },
    { tech: "Back-End" },
    { tech: "Redux" },
    { tech: "Mongodb" },
    { tech: "UI/UX" }
  ],
  projects: [
    {
      id: "1",
      title: "Richhomes",

      info: "Real estate web app built on React",
      logo: require("./images/logos/richhomesg&b.png"),
      images: [
        require("./images/rh/rh1.jpeg"),
        require("./images/rh/rh2.jpg"),
        require("./images/rh/rh3.png"),
        require("./images/rh/rh4.jpg"),
        require("./images/rh/rh5.jpg")
      ],
      tech: ["React", "CSS", "UI/UX", "HTML5", "Front-End"],
      description:
        "Richhomes is a real estate company that deals in the selling & renting of affordable luxury properties, the web app was created for prospective clients to be able to go through listings available by the company and to get access to the company at all times from any location without a physical barrier, whilst engaging enough to retain them.",
      url: "https://richhomesgh.com",
      githubUrl: "https://github.com/tosebikan/richhomesgh",
      type: "web"
    },
    {
      id: "2",
      title: "Axtella",
      info: "Real estate web app built on React",
      logo: require("./images/logos/axtella.png"),
      images: [
        require("./images/ax/ax2.jpg"),
        require("./images/ax/ax1.jpg"),

        require("./images/ax/ax3.jpg"),
        require("./images/ax/ax4.jpg")
      ],
      tech: ["Gatsby", "Front-End", "UI/UX"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis.",
      url: "https://www.axtellagh.com",
      githubUrl: "https://github.com/tosebikan/axtella",
      type: "web"
    },
    {
      id: "3",
      title: "Carparts",
      info:
        "A niche Fullstack Ecommerce Web App for selling car parts built with react, redux, node.js, mongoDB... ",
      logo: null,
      images: [
        require("./images/cp/cp1.jpg"),
        require("./images/cp/cp2.jpg"),
        require("./images/cp/cp3.jpg"),
        require("./images/cp/cp4.jpg")
      ],
      tech: [
        "React",
        "Redux",
        "MongoDB",
        "Full-Stack",
        "Front-End",
        "UI/UX",
        "Back-End",
        "Node.Js"
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis.",
      url: "https://richhomesgh.com",
      githubUrl: "https://richhomesgh.com",
      type: "web"
    },
    {
      id: "4",
      title: "Todos",
      logo: null,
      images: [
        require("./images/todo/todo1.jpg"),
        require("./images/todo/todo2.jpg")
      ],
      tech: [
        "React",
        "Redux",
        "Full-Stack",
        "Front-End",
        "UI/UX",
        "MongoDB",
        "Back-End"
      ],
      description: "A simple todo application built with redux.",
      url: "https://todoredux.netlify.app",
      githubUrl: "https://github.com/tosebikan/redux-todo",
      type: "web"
    },
    {
      id: "5",
      title: "Pharma",
      info: "Real estate web app built on React",
      logo: 'require("./images/logos/axtella")',
      images: [require("./images/webimg.png"), require("./images/web2img.png")],
      tech: [
        "React",
        "Full-Stack",
        "Front-End",
        "UI/UX",
        "Firebase",
        "Back-End"
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis.",
      url: "https://pharma.com",
      githubUrl: "https://richhomesgh.com",
      type: "web"
    },

    {
      id: "6",
      title: "Spineup",
      info: "Medical Appointment app built with React-Native & Firebase",
      logo: 'require("./images/logos/axtella")',
      images: [require("./images/webimg.png"), require("./images/web2img.png")],
      tech: [
        "React-Native",
        "Firebase",
        "Front-End",
        "Back-End",
        "Full-Stack",
        "UI/UX",
        "Redux"
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis.",
      url: "https://richhomesgh.com",
      githubUrl: "https://richhomesgh.com",
      type: "mobile"
    },
    {
      id: "7",
      title: "Enroute",
      info:
        "Recurring vehicle hailing service mobile app built on React-Native",
      logo: 'require("./images/logos/axtella")',
      images: [require("./images/webimg.png"), require("./images/web2img.png")],
      tech: [
        "React-Native",
        "Front-End",
        "UI/UX",
        "Socket",
        "Back-End",
        "Redux"
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis.",
      url: "https://richhomesgh.com",
      githubUrl: "https://richhomesgh.com",
      type: "mobile"
    },
    {
      id: "8",
      title: "Newsify",
      info: "News mobile app built on React-Native",
      logo: 'require("./images/logos/axtella")',
      images: [require("./images/webimg.png"), require("./images/web2img.png")],
      tech: ["React-Native", "Front-End", "UI/UX"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis.",
      url: "https://richhomesgh.com",
      githubUrl: "https://richhomesgh.com",
      type: "mobile"
    },
    {
      id: "9",
      title: "Movees",
      info: "Movie Directory mobile app built on React-Native",
      logo: 'require("./images/logos/axtella")',
      images: [require("./images/webimg.png"), require("./images/web2img.png")],
      tech: ["React-Native", "Front-End", "UI/UX"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis.",
      url: "https://richhomesgh.com",
      githubUrl: "https://richhomesgh.com",
      type: "mobile"
    },
    {
      id: "10",
      title: "Chatter",
      info: "Real estate web app built on React",
      logo: 'require("./images/logos/axtella.png")',
      images: [require("./images/webimg.png"), require("./images/web2img.png")],
      tech: [
        "React-Native",
        "Full-Stack",
        "Front-End",
        "UI/UX",
        "Firebase",
        "Back-End",
        "Mongodb"
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis.",
      url: "https://pharma.com",
      githubUrl: "https://richhomesgh.com",
      type: "mobile"
    },
    {
      id: "11",
      title: "ForexNation",
      info: "Web site for a forex trading servive built with bootstrap",
      logo: require("./images/logos/axtella.png"),
      images: [
        require("./images/ax/ax2.jpg"),
        require("./images/ax/ax1.jpg"),

        require("./images/ax/ax3.jpg"),
        require("./images/ax/ax4.jpg")
      ],
      tech: ["Bootstrap", "Front-End", "UI/UX"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis.",
      url: "https://www.axtellagh.com",
      githubUrl: "https://github.com/tosebikan/axtella",
      type: "web"
    },
    {
      id: "12",
      title: "Pakam",
      info: "Waste Recycling mobile app for users built with React-Native",
      logo: 'require("./images/logos/axtella.png")',
      images: [require("./images/webimg.png"), require("./images/web2img.png")],
      tech: [
        "React-Native",
        "Front-End",
        "UI/UX",
        "Firebase",
        "Open-Tok",
        "Google-Map"
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis.",
      url: "https://pharma.com",
      githubUrl: "https://richhomesgh.com",
      type: "mobile"
    },
    {
      id: "12",
      title: "PakamRecycler",
      info:
        "Waste Recycling Collection mobile app for recyclers built with React-Native",
      logo: 'require("./images/logos/axtella.png")',
      images: [require("./images/webimg.png"), require("./images/web2img.png")],
      tech: [
        "React-Native",
        "Front-End",
        "UI/UX",
        "Firebase",
        "Open-Tok",
        "Google-Map"
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis.",
      url: "https://pharma.com",
      githubUrl: "https://richhomesgh.com",
      type: "mobile"
    },
    {
      id: "13",
      title: "AGS",
      info:
        "Social Network for women empowerment mobile app for recyclers built with React-Native",
      logo: 'require("./images/logos/axtella.png")',
      images: [require("./images/webimg.png"), require("./images/web2img.png")],
      tech: ["React-Native", "Front-End", "UI/UX"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis.",
      url: "https://pharma.com",
      githubUrl: "https://richhomesgh.com",
      type: "mobile"
    }
  ]
};

export default data;
