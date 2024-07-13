import { CgClose, CgProfile } from "react-icons/cg";
import {MdMenu, MdOutlineLooks3, MdOutlineLooksOne, MdOutlineLooksTwo } from "react-icons/md";
import Logo from '../Assets/transparent_logo.png'
import Html from '../Assets/HTML.png';
import Css from '../Assets/CSS.png';
import JS from '../Assets/JS.png';
import React from "../Assets/REACT.png";
import TS from "../Assets/TYPESCRIPT.png";
import git from '../Assets/GIT.png';
import figma from '../Assets/FIGMA.png';
import mongodb from '../Assets/MONGODB.png';
import python from '../Assets/PYTHON.png';
import tailwind from '../Assets/TAILWIND.png';

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
    icon: Html,
    title: 'HTML'
  },
  {
    id: 2,
    icon: Css,
    title: 'CSS'
  },
  {
    is: 3,
    icon: JS,
    title: "Javascript"
  },
  {
    id: 4,
    icon: React,
    title: 'React'
  },
  {
    id: 5,
    icon: TS,
    title: "Typescript"
  },
  {
    id: 6,
    icon: tailwind,
    title: "Tailwind CSS"
  },
  {
    id: 7,
    icon: mongodb,
    title: 'MongoDb'
  },
  {
    id: 8,
    icon: python,
    title: 'Python'
  },
  {
    id: 9,
    icon: git,
    title: 'Github'
  },
  {
    id: 10,
    icon: figma,
    title: 'Figma'
  }
]