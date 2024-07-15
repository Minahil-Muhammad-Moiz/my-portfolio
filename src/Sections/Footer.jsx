import React from "react";
import { FaGithub } from "react-icons/fa";
import Section from "../Components/Section";
import Button from '../Components/Button'

const Footer = () => {
  return (
    <Section className=''>
      <footer className=" w-[80%] mx-auto">
        <div className="flex items-center justify-between">
          <p className="!my-auto">&#169; {new Date().getFullYear()}. All rights reserved.</p>
          <Button
            href="https://github.com/Minahil-Muhammad-Moiz"
            alt="github"
            target="_blank"
            title="Github Profile"
            className={`!shadow-none !p-2 !rounded-full`}
          >
            <FaGithub fontSize={20} />
          </Button>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
