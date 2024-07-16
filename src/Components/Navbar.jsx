import React, { useState } from "react";
import { Navlinks, icons, Images } from "../Constants/index";

const Navbar = () => {
  const [navigation, setnavigation] = useState(false);
  const handleToggle = () => {
    setnavigation(!navigation);
  };
  return (
    <header className="fixed z-10 w-full">
      <nav className="bg-neutral-900 h-20 flex justify-between items-center text-white px-6 md:px-10 font-sans opacity-95">
        <a href="/">
          <img src={Images.Logo} alt="MMM logo" width={60} height={30} />
        </a>
        <ul className="hidden lg:flex w-[550px] items-center justify-between h-full ">
          {Navlinks.map((link) => (
            <a
              href={link.path}
              key={link.id}
              className="cursor-pointer p-4 hover:text-zinc-400 transition-colors"
              onClick={handleToggle}
            >
              {link.name}
            </a>
          ))}
        </ul>
        <button onClick={handleToggle} className="block lg:hidden">
          {navigation ? (
            <icons.close fontSize={30} title="close" />
          ) : (
            <icons.open fontSize={30} title="open" />
          )}
        </button>
        <div
          className={`lg:hidden fixed bg-neutral-900 text-white h-full w-60 top-20 ease-in-out duration-700 text-center opacity-95 ${
            navigation ? `right-0` : `-right-[100%] `
          }`}
        >
          <ul className="flex flex-col items-center p-4">
            {Navlinks.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer px-auto py-4 hover:text-zinc-400 transition-colors"
              >
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
