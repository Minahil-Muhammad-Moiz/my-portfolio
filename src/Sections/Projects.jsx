import React from "react";
import Section from "../Components/Section";
import { projects } from "../Constants";
import { MdOpenInNew } from "react-icons/md";
import { HiCode } from "react-icons/hi";

const Projects = () => {
  return (
    <Section id='projects'>
      <h1>Projects</h1>
      <div className="text-white">
        {projects.map((project) => (
          <div key={project.id}>
            <img src={project.image} width={200} height={200} alt="project" />
            {project.demo && 
            <a href={project.demo} target="_blank" alt='demo'><MdOpenInNew /></a>}
            <a href={project.gitUrl} target="_blank" alt='code'>
              <HiCode />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
