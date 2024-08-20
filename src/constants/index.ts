export interface IaboutItems {
  title: string;
  image: string;
}

export const aboutItems: IaboutItems[] = [
  {
    title: "UX",
    image: "/images/ux-icon.png",
  },
  {
    title: "UI",
    image: "/images/ui-icon.png",
  },
  {
    title: "Backend",
    image: "/images/backend-icon.png",
  },
];

export interface IjobHistory {
  date: string;
  company: string;
  title: string;
  location: string;
  description: string;
  logo: string;
  skills: string[];
}

export const jobHistory: IjobHistory[] = [
  {
    date: "Nov 2021 - Present · Ongoing",
    company: "REN",
    title: "Software Engineer",
    location: "Indianapolis, Indiana, United States",
    description: "",
    logo: "/images/company-icons/ren.jpg",
    skills: ["React", "TypeScript", "CSS"],
  },
  {
    date: "May 2016 - Nov 2021 · 5 yrs 7 mos",
    company: "Computerway Food Systems",
    title: "Developer",
    location: "High Point, North Carolina, United States",
    description:
      "Current focus of development is ranging across front-end to back-end development of technologies mainly focused around web API's and AngularJS, as well as integrating all this with the legacy software the company already has to provide a seamless transition from old to new for the customers.",
    logo: "/images/company-icons/cfs.jpg",
    skills: ["NodeJS", "AngularJS", "CSS"],
  },
  {
    date: "Mar 2013 - Jul 2015 · 2 yrs 5 mos",
    company: "Dynamic Quest",
    title: "Developer",
    location: "Greensboro, North Carolina, United States",
    description:
      "Worked with a team to provide a vast array of solutions to many different types of client needs in the programming/web development world. During my time here I worked with programming languages going across the spectrum such as PHP, Jquery/Javascript, C#, C++, Java.",
    logo: "/images/company-icons/dynamic_quest.jpg",
    skills: ["Java", ".NET", "CSS"],
  },
  {
    date: "Jan 2012 - Aug 2012 · 8 mos",
    company: "Graphik Dimensions",
    title: "Web Developer",
    location: "High Point, North Carolina, United States",
    description:
      "Worked with a team to help the company with its creation of its new and improved web site and internet store front.",
    logo: "/images/company-icons/graphik_dimensions.jpg",
    skills: ["HTML", "CSS", "PHP"],
  },
  {
    date: "Mar 2010 - Apr 2010 · 2 mos",
    company: "Greensboro News & Record",
    title: "Web Developer",
    location: "Greensboro, North Carolina, United States",
    description:
      "While present at the company I was part of a 2 man team that developed and implemented an system for employee's to look up and maintain information about individuals that entered contests via the companies web site.",
    logo: "/images/company-icons/greensboro-new-record.jpg",
    skills: ["HTML", "CSS", "PHP"],
  },
];

export interface Iprojects {
  image: string;
  title: string;
  description: string;
  techs: string[];
  links: {
    href: string;
    name: string;
    icon: "website" | "github";
  }[];
}

export const projects: Iprojects[] = [
  {
    image: "/images/southern_district_website_screen_shot.png",
    title: "Southern District BSA Website",
    description:
      "Website built for the Southern District East Carolina Council Scouting group in North Carolina.",
    techs: ["NextJS", "React", "TypeScript", "Tailwind CSS", "CSS", "HTML"],
    links: [
      {
        href: "https://southerndistrictscouting.org/",
        name: "Southern District of ECC Scouting",
        icon: "website",
      },
      {
        href: "https://southerndistrictscouting.org/",
        name: "Github Repo",
        icon: "github",
      },
    ],
  },
];

export const technologies: string[] = [
  "nextjs",
  "react",
  // "javascript",
  "typescript",
  "css3",
  "html5",
  "nodejs",
  "three-js-logo",
  // "git",
  // "github",
  // "threejs",
  // "jquery",
  // "mysql",
  "postgresql",
];
