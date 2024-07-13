import React from "react";
import Section from "../Components/Section";
import { SkillsLogo } from "../Constants";

const Skills = () => {
  return (
    <Section
      id="skills"
      className="p-8 bg-stone-800"
    >
      <h1 className="font-item text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-8 my-24">
        {SkillsLogo.map((item) => (
          <div key={item.id} className="w-40 h-auto items-center flex flex-col ">
            {<item.icon fontSize={100} className="bg-white"/>}
            <p className="p-3 pt-7 font-normal text-xl text-white">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
