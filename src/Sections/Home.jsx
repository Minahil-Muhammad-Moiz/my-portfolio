import React from "react";
import Navbar from "../Components/Navbar";
import { TypeAnimation } from "react-type-animation";
import resume from "../Assets/Minahil Moiz.(Resume)docx.pdf";

const Home = () => {
  return (
    <section className="w-[100vw] h-[100vh] bg-zinc-800 text-white mx-auto font-sans">
      <Navbar />
      <div className="p-6 flex justify-center h-full w-full items-center">
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
            />
          </h1>
          <p className="text-zinc-300 mb-4 text-base md:text-lg font-thin">
            I'm a Frontend Developer Dedicated to Creating Engaging and Dynamic
            Web Applications.
          </p>
          <a
            href={resume}
            download={"Resume"}
            className="py-2 rounded-xl border-[3px] hover:bg-zinc-200 hover:text-zinc-900 px-6 "
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
