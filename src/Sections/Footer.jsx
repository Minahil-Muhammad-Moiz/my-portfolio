import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <p >
          &#169; {new Date().getFullYear()}. All rights reserved.
        </p>
        <a href="https://github.com/Minahil-Muhammad-Moiz" alt='github' target="_blank"><FaGithub/></a>
      </div>
    </footer>
  );
};

export default Footer;
