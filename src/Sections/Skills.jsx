import React from "react";
import Section from "../Components/Section";
import { SkillsLogo } from "../Constants";

const Skills = () => {
  return (
    <Section id="skills" >
      <div className="h-full w-full lg:w-[80%] mx-auto flex flex-col items-center justify-center">
        <h2>Skills</h2>
        <div className="flex flex-wrap items-center justify-center gap-8 mt-8 ">
          {SkillsLogo.map((item) => (
            <div
              key={item.id}
              className="w-40 items-center flex flex-col rounded-2xl p-4 shadow-inner shadow-neutral-400"
            >
              {<item.icon fontSize={100} className="text-neutral-200" />}
              <p className="font-bold pt-2 !mb-0 ">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
