import React from "react";

const Section = ({ children, className, id }) => {
  return (
    <div
      className={`${className ? className : ""} px-8 md:px-20 py-10`}
      id={id}
    >
      {children}
    </div>
  );
};

export default Section;
