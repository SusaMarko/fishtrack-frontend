import React, { useState } from "react";
import FishTrackNavbar from "./FishTrackNavbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FishingReportInput = (props) => {
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

      await fetch("http://localhost:5000/reports/fishing-reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <FishTrackNavbar setAuth={props.setAuth} />
      <div className="pt-10 flex justify-center items-center flex-col">
        <h1 className="flex justify-center items-center flex-col w-full text-3xl font-bold text-black">
          Napisi izvestaj sa pecanja
        </h1>
        <div className="pt-10 flex flex-wrap justify-center items-center flex-col">
          <span className="mr-2">Datum i vreme izlaska na vodu:</span>
          <DatePicker
            placeholder=""
            className="w-full p-4 bg-gray-200 rounded-md placeholder-gray-500 text-gray-800"
            selected={createdAt} // Use 'createdAt' as the selected date
            onChange={(date) => setCreatedAt(date)}
            showTimeSelect
            // dateFormat="dd/MM/yyyy HH:mm" // 2023-06-11 11:15:32
            dateFormat="yyyy-MM-dd HH:mm"
          />
          {/* <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-gray-200 rounded-md placeholder-gray-500 text-gray-800"
            onChange={(e) => setCreatedAt(e.target.value)}
          /> */}

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

          <span className="mr-2">Mamac koji je koriscen:</span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-gray-200 rounded-md placeholder-gray-500 text-gray-800"
            onChange={(e) => setBait(e.target.value)}
          />

          <br />

          <span className="mr-2">Hrana koja je koriscena za primamu:</span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-gray-200 rounded-md placeholder-gray-500 text-gray-800"
            onChange={(e) => setFood(e.target.value)}
          />

          <br />

          <span className="mr-2">ulov:</span>
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
          Kreiraj izvestaj
        </button>
        <br></br>
      </div>
    </>
  );
};

export default FishingReportInput;
