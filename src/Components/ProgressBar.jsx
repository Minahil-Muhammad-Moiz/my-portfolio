import React, { useEffect, useState } from "react";

export const ProgressBar = () => {
  const [scrolled, setscrolled] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollWidth = (scrollTop / height) * 100;
    setscrolled(scrollWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="h-1">
      <div
        className="h-1 bg-zinc-300"
        style={{ width: `${scrolled}%` }}
      ></div>
    </div>
  );
};
