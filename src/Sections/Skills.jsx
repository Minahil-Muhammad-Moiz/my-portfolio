import React from "react";
import Section from "../Components/Section";
import { SkillsLogo } from "../Constants";

const Skills = () => {
  return (
    <Section
      id="skills"
      className="p-8"
    >
      <h1 className="font-item text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-8 my-24">
        {SkillsLogo.map((item) => (
          <div key={item.id} className="w-40 h-auto items-center flex flex-col ">
            <img src={item.icon} alt="skill" width={100}/>
            <p className="p-3 pt-7 font-normal text-xl">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
