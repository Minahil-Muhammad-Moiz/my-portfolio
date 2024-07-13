import React from "react";
import Section from "../Components/Section";
import { CircleGrid } from "react-awesome-shapes/dist/shapes/circlegrid";
import { AboutInfo } from "../Constants";

const About = () => {
  return (
    <Section id="about" className="h-auto px-10 md:px-20 text-white">
      <div className="flex flex-col items-center justify-center">
        <h1>About Me</h1>
        <div className="flex flex-wrap items-center justify-center">
          <div>
            <CircleGrid
              position="relative"
              color="#fff"
              size="175px"
              zIndex={1}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            {AboutInfo.map((item) => (
              <div className=" w-full flex items-center justify-start">
                <div>{<item.icon fontSize={30} />}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
