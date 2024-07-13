import React from "react";
import Navbar from "../Components/Navbar";
import { TypeAnimation } from "react-type-animation";
import resume from "../Assets/Minahil Moiz.(Resume)docx.pdf";
import Section from "../Components/Section";

const Home = () => {
  return (
    <Section id='home' className="h-[100vh] text-white mx-auto font-sans">
      <Navbar />
      <div className="px-10 flex justify-center h-full w-full items-center">
        <div className="flex flex-col items-start justify-center">
          <h1 className="font-bold mb-4">
            <span className="text-4xl md:text-6xl">Minahil Muhammad Moiz</span>
            <br />
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "React JS Developer",
                1000,
              ]}
              wrapper="span"
              speed={200}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
              className="z-0"
            />
          </h1>
          <p className="text-zinc-300 mb-4 text-base md:text-lg font-thin">
            I'm a Frontend Developer Dedicated to Creating Engaging and Dynamic
            Web Applications.
          </p>

          <div className="w-[80%] h-12 flex items-center justify-start font-semibold">
            <a
              href={resume}
              download={"Resume"}
              className="mr-4 py-2 rounded-xl border-[3px] hover:bg-zinc-900 px-6 hover:text-white bg-zinc-200 text-zinc-800 "
            >
              Download CV
            </a>
            <a
              href='#contact'
              className="py-2 rounded-xl border-[3px] hover:bg-zinc-200 hover:text-zinc-900 px-6 bg-zinc-900"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
