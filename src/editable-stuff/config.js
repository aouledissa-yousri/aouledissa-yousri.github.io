// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  //gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  gradientColors: "#003f8a, #2068d1, #4484ce, #6ca0e2, #a1c4f6, #d0e4ff",
  firstName: "Yousri",
  middleName: "",
  lastName: "Aouledissa",
  message: " Software engineer focused on driving transformative technological innovation.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/aouledissa-yousri",
      color: "#24292e"
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/yousri-aouled-issa/",
      color: "#0077B5"
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/yousri-aouledissa.jpeg"),
  imageSize: 375,
  message:
    `I’m a software engineer specializing in blockchain development, full-stack web, and mobile applications. Through internships at Datarox and Tabhotel Digital, I gained practical experience building React-based NFT marketplaces, cross-platform Ionic apps, and Flutter applications.
     I hold a Bachelor’s degree in Information Technology and am currently pursuing further studies in Computer Science and Multimedia Engineering. My skill set includes a variety of programming languages, frameworks, and tools that I apply to deliver efficient, scalable solutions.
     Focused on applying technical skills to solve real-world problems and delivering impactful projects in dynamic development environments.`,
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]

const repos = {
  show: true,
  heading: "Personal Projects",
  gitHubUsername: "aouledissa-yousri", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [

    {
      name: "Safezone",
      description: "SafeZone is a secure mobile platform designed to enhance public safety by allowing users to report incidents in real time, visualize threat zones, and receive intelligent safety recommendations. Built with precision and reliability, SafeZone empowers communities to stay informed and protected.",
      svn_url: "https://github.com/Safezone-project/Safezone-releases",
      stargazers_count: 1,
      languages_url: "https://api.github.com/repos/Safezone-project/Safezone-mobile-application/languages",
      tools: ["Flutter", "NestJS", "PostgreSQL", "Firebase", "IPFS", "Docker", "Render Cloud"],
      pushed_at: "2025-05-26T12:00:00Z",
    },

    {
      name: "Wyrmx",
      description: "Wyrmx is a blazing-fast, opinionated Python web framework built atop FastAPI, inspired by modular architectures like NestJS. It streamlines development with type safety, intuitive decorators, dependency injection, and intelligent automation all while maintaining performance and flexibility.",
      svn_url: "https://github.com/Wyrmx/Wyrmx-CLI",
      stargazers_count: 1,
      languages_url: "https://api.github.com/repos/Wyrmx/Wyrmx-CLI/languages",
      tools: ["Python", "Pytest", "FastAPI", "Alembic", "Poetry"],
      pushed_at: "2025-07-29T12:00:00Z",
    },


    {
      name: "E-Recycle",
      description: "Developed a mobile application integrated with a service-oriented distributed server system to optimize performance, availability, and security. Designed to connect Tunisian citizens with local waste collectors, streamlining the collection process and improving overall efficiency. Successfully delivered the project on time and within budget, achieving production and installation costs 30% lower than initial estimates.",
      svn_url: "https://github.com/aouledissa-yousri/E-Recycle_mobile_app",
      stargazers_count: 1,
      languages_url: "",
      tools: ["Flutter", "Django", "ExpressTS", "ASP.NET Core", "SpringBoot", "PostgreSQL", "Railway"],
      pushed_at: "2022-10-16T12:00:00Z",
    },


    {
      name: "Parki",
      description: "Led a team of three IT students to develop a digital parking management system that enables drivers to book parking spots in zones closest to their destinations, saving them up to 70% of their time for other tasks. The solution includes two cross-platform mobile applications built with Flutter and a desktop back-office application developed with Tauri, providing seamless management and user experience across platforms.",
      svn_url: "https://github.com/aouledissa-yousri/parki_driver_app",
      stargazers_count: 1,
      languages_url: "",
      tools: ["Ionic", "Django", "Tauri", "PostgreSQL"],
      pushed_at: "2022-10-16T12:00:00Z",
    },

    {
      name: "Best Tunisia Travel",
      description: "Developed a comprehensive travel agency platform consisting of a public website that allows foreign tourists to explore and book organized trips to popular Tunisian destinations, alongside a desktop back-office application enabling administrators to efficiently manage trip offers. Successfully completed development and deployment one week ahead of schedule, ensuring timely delivery and client satisfaction.",
      svn_url: "https://github.com/aouledissa-yousri/BestTunisiaTravel",
      stargazers_count: 1,
      languages_url: "",
      tools: ["Angular", "Firebase", "Electron"],
      pushed_at: "2021-11-05T12:00:00Z",
    }

  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  
  programmingLanguages: [
    { name: "Python", value: 90, logo: require("../editable-stuff/logos/programming-languages/python.png") },
    { name: "PHP", value: 75, logo: require("../editable-stuff/logos/programming-languages/php.png")},
    { name: "Java", value: 85, logo: require("../editable-stuff/logos/programming-languages/java.png") },
    { name: "C", value: 65, logo: require("../editable-stuff/logos/programming-languages/c.png") },
    { name: "C++", value: 65, logo: require("../editable-stuff/logos/programming-languages/cpp.png") },
    { name: "C#", value: 65, logo: require("../editable-stuff/logos/programming-languages/cs.png") },
    { name: "Kotlin", value: 90, logo: require("../editable-stuff/logos/programming-languages/kotlin.png") },
    { name: "Dart", value: 65, logo: require("../editable-stuff/logos/programming-languages/dart.png") },
    { name: "Javascript", value: 55, logo: require("../editable-stuff/logos/programming-languages/js.png") },
    { name: "Typescript", value: 55, logo: require("../editable-stuff/logos/programming-languages/ts.png") },
    { name: "Bash", value: 80, logo: require("../editable-stuff/logos/programming-languages/bash.png") },
    { name: "Solidity", value: 85, logo: require("../editable-stuff/logos/programming-languages/sol.png") },
  ],

  web: [
    { name: "Angular", value: 90, logo: require("../editable-stuff/logos/web/angular.png") },
    { name: "React", value: 75, logo: require("../editable-stuff/logos/web/react.png") },
    { name: "Next", value: 85, logo: require("../editable-stuff/logos/web/next.png") },
    { name: "Nest", value: 65, logo: require("../editable-stuff/logos/web/nest.png") },
    { name: "Express", value: 90, logo: require("../editable-stuff/logos/web/express.png") },
    { name: "Symfony", value: 65, logo: require("../editable-stuff/logos/web/symfony.png") },
    { name: "Django", value: 55, logo: require("../editable-stuff/logos/web/django.png") },
    { name: "FastAPI", value: 80, logo: require("../editable-stuff/logos/web/fastapi.png") },
    { name: "SpringBoot", value: 80, logo: require("../editable-stuff/logos/web/springboot.png") },
    { name: "ASP.NET Core", value: 80, logo: require("../editable-stuff/logos/web/asp-net-core.png") },
  ],


  web3: [
    { name: "Truffle", value: 90, logo: require("../editable-stuff/logos/web3/truffle.png") },
    { name: "Hardhat", value: 75, logo: require("../editable-stuff/logos/web3/hardhat.png") },
    { name: "IPFS", value: 65, logo: require("../editable-stuff/logos/web3/ipfs.png") },
    { name: "Ethereum", value: 90, logo: require("../editable-stuff/logos/web3/ethereum.png") },
    { name: "Laika", value: 85, logo: require("../editable-stuff/logos/web3/laika.png") },
  ],

  mobile: [
    { name: "Flutter", value: 90, logo: require("../editable-stuff/logos/mobile/flutter.png") },
    { name: "Ionic", value: 75, logo: require("../editable-stuff/logos/mobile/ionic.png") },
    { name: "Android Studio (Java/Kotlin)", value: 85, logo: require("../editable-stuff/logos/mobile/android-studio.png") },
  ],


  devTools: [
    { name: "git", value: 90, logo: require("../editable-stuff/logos/dev-tools/git.png") },
    { name: "Docker", value: 75, logo: require("../editable-stuff/logos/dev-tools/docker.png") },
    { name: "VSCode", value: 85, logo: require("../editable-stuff/logos/dev-tools/vscode.png") },
    { name: "Eclipse", value: 65, logo: require("../editable-stuff/logos/dev-tools/eclipse.png") },
    { name: "intelliJ IDEA", value: 90, logo: require("../editable-stuff/logos/dev-tools/intellij.png") },
    { name: "Postman", value: 65, logo: require("../editable-stuff/logos/dev-tools/postman.png") },
    { name: "Insomnia", value: 55, logo: require("../editable-stuff/logos/dev-tools/insomnia.png") },
    { name: "SoapUI", value: 80, logo: require("../editable-stuff/logos/dev-tools/soap-ui.png") },
    { name: "PyCharm", value: 85, logo: require("../editable-stuff/logos/dev-tools/pycharm.png") },
    { name: "Burp Suite", value: 85, logo: require("../editable-stuff/logos/dev-tools/burp.png") },
  ],


  databases: [
    { name: "MySQL", value: 90, logo: require("../editable-stuff/logos/databases/mysql.png") },
    { name: "PostgreSQL", value: 90, logo: require("../editable-stuff/logos/databases/postgres.png") },
    { name: "OracleDB", value: 90, logo: require("../editable-stuff/logos/databases/oracle.png") },
    { name: "MongoDB", value: 90, logo: require("../editable-stuff/logos/databases/mongo.png") },
    { name: "Firebase", value: 90, logo: require("../editable-stuff/logos/databases/firebase.png") },
  ],

  modeling: [
    { name: "Blender", value: 90, logo: require("../editable-stuff/logos/modeling/blender.png") },
  ],


  gameDev: [
    { name: "Unity", value: 90, logo: require("../editable-stuff/logos/game-dev/unity.png") },
  ],

 
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, collaboration ideas, or just want to connect, feel free to reach out to me at",
  email: "aouledissayousri@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../editable-stuff/logos/companies/it-youb.png'),
      date: 'June 2024 – Present',
    },
    {
      role: 'Blockchain Developer',
      companylogo: require('../editable-stuff/logos/companies/datarox.png'),
      date: 'Feb 2023 – June 2023',
    },

    {
      role: 'Software Engineer',
      companylogo: require('../editable-stuff/logos/companies/tabhotel.png'),
      date: 'Jan 2022 – Feb 2022',
    },


    {
      role: 'Front-End Developer',
      companylogo: require('../editable-stuff/logos/companies/telecom.png'),
      date: 'June 2021 – July 2021',
    },

  ]
}



const education = {
  show: true,
  heading: "Education",
  data: [
    {
      degree: "Engineering Degree (Master's Degree) in Computer Science and Multimedia",
      instituteLogo: require('../editable-stuff/logos/institutes/isamm.png'),
      date: 'September 2023 – Present',
    },
    {
      degree: "Bachelor's Degree in Information Technology",
      instituteLogo: require('../editable-stuff/logos/institutes/isetch.png'),
      date: 'September 2020 – June 2023',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, education };
