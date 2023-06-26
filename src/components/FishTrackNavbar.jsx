import React from "react";

const FishTrackNavbar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1080px] mx-auto px-24">
      <h1 className="w-full text-3xl font-bold text-[green]">FishTrack</h1>
      <ul className="flex">
        <li className="p-4">Dodaj izvestaj sa pecanja</li>
        <li className="p-4">Pregled svih izvestaja sa pecanja</li>
      </ul>
    </div>
  );
};

export default FishTrackNavbar;
