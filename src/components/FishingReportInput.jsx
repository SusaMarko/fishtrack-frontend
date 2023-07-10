import React, { useState } from "react";

const FishingReportInput = () => {
  const [createdAt, setCreatedAt] = useState("");
  const [spot, setSpot] = useState("");
  const [waterLevel, setWaterLevel] = useState(0.0);
  const [weather, setWeather] = useState("");
  const [typeOfFishing, setTypeOfFishing] = useState("");
  const [bait, setBait] = useState("");
  const [food, setFood] = useState("");
  const [theCatch, setTheCatch] = useState("");

  const handleButtonClicked = async (e) => {
    e.preventDefault();
    try {
      const reqBody = {
        createdAt,
        spot,
        waterLevel,
        weather,
        typeOfFishing,
        bait,
        food,
        theCatch,
      };
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/fishing-reports`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reqBody),
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className=" pt-10 flex justify-center items-center flex-col ...">
        <h1 className="flex justify-center items-center flex-col ... w-full text-3xl font-bold text-black">
          Napisi izvestaj sa pecanja
        </h1>
        <div className="pt-10">
          <input
            type="text"
            placeholder="Datum i vreme izlaska na vodu"
            onChange={(e) => setCreatedAt(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Mesto pecanja"
            onChange={(e) => setSpot(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Nivo vode tog dana"
            onChange={(e) => setWaterLevel(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Vreme (suncano, oblacno, duva vetar itd.)"
            onChange={(e) => setWeather(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Vrsta pecanja (fider, plovak, dubinka itd.)"
            onChange={(e) => setTypeOfFishing(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Koji mamac je koriscen"
            onChange={(e) => setBait(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Koja hrana je koriscena za primamu"
            onChange={(e) => setFood(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="I na kraju ulov (ne uvelicavati mnogo :))"
            onChange={(e) => setTheCatch(e.target.value)}
          />
        </div>
        <br></br>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={(e) => handleButtonClicked(e)}
        >
          Dodaj izvestaj sa pecanja u bazu
        </button>
        <br></br>
      </div>
    </>
  );
};

export default FishingReportInput;
