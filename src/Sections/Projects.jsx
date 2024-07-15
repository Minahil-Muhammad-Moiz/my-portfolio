import React from "react";
import Section from "../Components/Section";
import { projects } from "../Constants";
import { MdOpenInNew } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import Button from "../Components/Button";

const Projects = () => {
  return (
    <Section id="projects" >
      <div className=" w-full md:w-[80%] flex flex-col mx-auto items-center">
        <h2>My Projects</h2>
        <div className="text-white flex flex-wrap w-full items-center justify-center gap-6 relative ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="max-w-[500px] h-auto rounded-2xl p-4 shadow-inner shadow-neutral-500 overflow-hidden relative group"
            >
              <img
                src={project.image}
                width={400}
                height={400}
                alt="project"
                className="w-full rounded-2xl opacity-100 block h-auto transition-opacity ease-in-out duration-500 group-hover:opacity-30"
              />
              <div className="flex group-hover:opacity-100 transition-opacity duration-500 ease-in-out absolute opacity-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-2xl">
                <Button
                  href={project.gitUrl}
                  title="Code"
                  target="_blank"
                  alt="code"
                >
                  <HiCode />
                </Button>
                {project.demo && (
                  <Button
                    href={project.demo}
                    title="Visit Site"
                    target="_blank"
                    alt="demo"
                  >
                    <MdOpenInNew />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
