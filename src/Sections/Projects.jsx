import React from "react";
import Section from "../Components/Section";
import { projects } from "../Constants";
import { MdOpenInNew } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import Button from "../Components/Button";

const Projects = () => {
  return (
    <Section id="projects">
      <div className="!p-0 container">
        <h2>My Projects</h2>
        <div className="text-white flex flex-wrap w-full items-center justify-center gap-6 xl:gap-10 relative mt-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="max-w-[500px] h-auto rounded-2xl p-4 shadow-inner shadow-neutral-500 overflow-hidden hover:scale-[1.05] transition-transform ease-in-out duration-500 relative group"
            >
              <img
                src={project.image}
                width={400}
                height={400}
                alt="project"
                className="w-full rounded-2xl opacity-100 block h-auto transition-opacity ease-in-out duration-500 group-hover:opacity-30"
              />
              <div className="flex text-xl justify-center pt-4 group-hover:scale-[1.1] transition-all duration-500 ease-in-out">
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
