import React from "react";
import Section from "../Components/Section";
import { CircleGrid } from "react-awesome-shapes/dist/shapes/circlegrid";
import { AboutInfo } from "../Constants";

const About = () => {
  return (
    <Section id="about" className={"!md:h-96"}>
      <div className="container grey-container">
        <div className="flex items-center justify-center flex-col">
          <h2>About Me</h2>
          <div className="hidden xl:block m-10 xl:mt-0">
            <CircleGrid
              position="relative"
              color="rgb(228 228 231)"
              size="190px"
              zIndex={1}
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          {AboutInfo.map((item) => (
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
