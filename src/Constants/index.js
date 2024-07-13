import { CgClose, CgProfile } from "react-icons/cg";
import {MdMenu, MdOutlineLooks3, MdOutlineLooksOne, MdOutlineLooksTwo } from "react-icons/md";
import Logo from '../Assets/transparent_logo.png'

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