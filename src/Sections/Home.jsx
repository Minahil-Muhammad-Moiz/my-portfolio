import React from "react";
import { TypeAnimation } from "react-type-animation";
import resume from "../Assets/Minahil CV.pdf";
import Section from "../Components/Section";
import Button from "../Components/Button";

const Home = () => {
  return (
    <Section id="home" className="!h-[100vh]">
      <div className="items-start lg:items-center !md:w-[80%] container !px-0">
        <h1>Minahil Muhammad Moiz</h1>
        <div className="lg:text-lg sm:font-semibold mb-2 text-xs sm:text-sm">
          <TypeAnimation
            sequence={["Frontend Developer", 1000, "React JS Developer", 1000]}
            wrapper="span"
            speed={200}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <p>
          I'm a Frontend Developer Dedicated to Creating Engaging and Dynamic
          Web Applications.
        </p>

        <div className="w-full flex flex-col md:flex-row md:items-baseline lg:justify-center py-4 text-center">
          <Button href={resume} download={"Resume"} className={"!mb-4"} white>
            Download CV
          </Button>
          <Button href="#contact" className={``}>
            Contact
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Home;
