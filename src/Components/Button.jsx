import React from "react";

const Button = ({
  children,
  className,
  href,
  white,
  title,
  target,
  download,
  alt,
  type,
}) => {
  return (
    <a
      className={`${
        className ? className : ""
      } mx-2 py-2 px-6 rounded-xl border text-white font-semibold hover:scale-[1.05] transition-transform cursor-pointer ${
        white
          ? "hover:shadow-inner hover:shadow-white hover:bg-zinc-900 hover:text-white bg-zinc-200 text-zinc-800 "
          : "shadow-inner shadow-white hover:bg-zinc-200 hover:text-zinc-800  bg-zinc-900"
      }`}
      href={href}
      title={title}
      target={target}
      download={download}
      alt={alt}
      type={type}
    >
      {children}
    </a>
  );
};

export default Button;
