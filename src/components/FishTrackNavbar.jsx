import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const FishTrackNavbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[green]">FishTrack</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Dodaj izvestaj sa pecanja</li>
        <li className="p-4">Pregled svih izvestaja sa pecanja</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-red-900 bg-blue-400 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-4xl font-bold text-[green] m-4">
          FishTrack
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b">Dodaj izvestaj sa pecanja</li>
          <li className="p-4 border-b">Pregled svih izvestaja sa pecanja</li>
        </ul>
      </div>
    </div>
  );
};

export default FishTrackNavbar;
