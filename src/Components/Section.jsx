import React from "react";

const Section = ({ children, className, id }) => {
  return (
    <div
      className={`${
        className ? className : ""
      } h-auto text-white w-full bg-zinc-800 px-10 md:px-20 py-10`}
      id={id}
    >
      {children}
    </div>
  );
};

export default Section;
