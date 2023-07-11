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
      <div className="pt-10 flex justify-center items-center flex-col">
        <h1 className="flex justify-center items-center flex-col w-full text-3xl font-bold text-black">
          Napisi izvestaj sa pecanja
        </h1>
        <div className="pt-10 flex flex-wrap justify-center items-center flex-col">
          <span className="mr-2">Datum i vreme izlaska na vodu:</span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-gray-200 rounded-md placeholder-gray-500 text-gray-800"
            onChange={(e) => setCreatedAt(e.target.value)}
          />

          <br />

          <span className="mr-2">Mesto pecanja:</span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-gray-200 rounded-md placeholder-gray-500 text-gray-800"
            onChange={(e) => setSpot(e.target.value)}
          />

          <br />

          <span className="mr-2">Nivo vode tog dana:</span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-gray-200 rounded-md placeholder-gray-500 text-gray-800"
            onChange={(e) => setWaterLevel(e.target.value)}
          />

          <br />

          <span className="mr-2">
            Vreme (suncano, oblacno, duva vetar itd.):
          </span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-gray-200 rounded-md placeholder-gray-500 text-gray-800"
            onChange={(e) => setWeather(e.target.value)}
          />

          <br />

          <span className="mr-2">
            Vrsta pecanja (fider, plovak, dubinka itd.):
          </span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-gray-200 rounded-md placeholder-gray-500 text-gray-800"
            onChange={(e) => setTypeOfFishing(e.target.value)}
          />

          <br />

          <span className="mr-2">Koji mamac je koriscen:</span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-gray-200 rounded-md placeholder-gray-500 text-gray-800"
            onChange={(e) => setBait(e.target.value)}
          />

          <br />

          <span className="mr-2">Koja hrana je koriscena za primamu:</span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-gray-200 rounded-md placeholder-gray-500 text-gray-800"
            onChange={(e) => setFood(e.target.value)}
          />

          <br />

          <span className="mr-2">
            I na kraju ulov (ne uvelicavati mnogo :):
          </span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-gray-200 rounded-md placeholder-gray-500 text-gray-800"
            onChange={(e) => setTheCatch(e.target.value)}
          />
        </div>
        <br></br>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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
