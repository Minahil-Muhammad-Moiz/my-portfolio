import { CgClose, CgProfile } from "react-icons/cg";
import {MdMenu, MdOutlineLooks3, MdOutlineLooksOne, MdOutlineLooksTwo } from "react-icons/md";
import Logo from '../Assets/transparent_logo.png'
import { FaCss3Alt, FaFigma, FaGitAlt, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export const icons = {
  open: MdMenu,
  close: CgClose
};

export const Navlinks = [
  {
    id: 1,
    name: "Home",
    path: "#home",
  },
  {
    id: 2,
    name: "About",
    path: "#about",
  },
  {
    id: 3,
    name: "Skills",
    path: "#skills",
  },
  {
    id: 4,
    name: "Projects",
    path: "#projects",
  },
  {
    id: 5,
    name: "Contact",
    path: "#contact",
  },
];

export const Images = {
  Logo: Logo
}

export const AboutInfo = [
  {
    icon: MdOutlineLooksOne,
    title: "Frontend Dev",
    text: "I create clean, efficient, and scalable code to build engaging user interfaces."
  },
  {
    icon: MdOutlineLooksTwo,
    title: "Responsive Design",
    text: "Ensuring that websites look and function flawlessly on any device is a top priority for me."
  },
  {
    icon: MdOutlineLooks3,
    title: "UI/UX Design",
    text: "With a strong sense of aesthetics, I design user-friendly interfaces that provide a delightful user experience." 
  }
]

export const SkillsLogo = [
  {
    id: 1,
    icon: FaHtml5,
    title: 'HTML'
  },
  {
    id: 2,
    icon: FaCss3Alt,
    title: 'CSS'
  },
  {
    is: 3,
    icon: IoLogoJavascript,
    title: "Javascript"
  },
  {
    id: 4,
    icon: FaReact,
    title: 'React'
  },
  {
    id: 5,
    icon: SiTypescript,
    title: "Typescript"
  },
  {
    id: 6,
    icon: RiTailwindCssFill,
    title: "Tailwind CSS"
  },
  {
    id: 7,
    icon: SiMongodb,
    title: 'MongoDb'
  },
  {
    id: 8,
    icon: FaPython,
    title: 'Python'
  },
  {
    id: 9,
    icon: FaGitAlt,
    title: 'Github'
  },
  {
    id: 10,
    icon: FaFigma,
    title: 'Figma'
  }
]