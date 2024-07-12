import React, { useState } from "react";
import { Navlinks, icons, Images } from "../Constants/index";

const Navbar = () => {
  const [navigation, setnavigation] = useState(false);
  const handleToggle = () => {
    setnavigation(!navigation);
  };
  return (
    <nav>
      <div className="w-full fixed bg-zinc-900 h-20 flex justify-between items-center text-white px-6 md:px-10 backdrop-blur-lg font-mono">
        <a href={'#home'} className="">
        <img src={Images.Logo} alt="MMM logo" width={60} height={30}/>
        </a>
        <ul className="hidden md:flex w-[550px] items-center justify-between h-full ">
          {Navlinks.map((link) => (
            <li key={link.id} className="cursor-pointer p-4 hover:text-zinc-400 transition-colors">
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
        <button onClick={handleToggle} className="block md:hidden">
          {navigation ? (
            <icons.close fontSize={30} />
          ) : (
            <icons.open fontSize={30} />
          )}
        </button>
      </div>
      <div
        className={`md:hidden fixed bg-zinc-900 text-white z-50 h-full w-60 top-20 ease-in-out duration-700 text-center ${
          navigation ? `right-0` : `-right-[100%] `
        }`}
      >
        <ul className="flex flex-col items-center p-4">
          {Navlinks.map((link) => (
            <li key={link.id} className="cursor-pointer px-auto py-4 ">
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
