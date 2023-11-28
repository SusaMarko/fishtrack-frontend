import React, { useState } from "react";
import FishTrackNavbar from "./FishTrackNavbar";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
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
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

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

      await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/reports/fishing-reports`,
        {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(reqBody),
        }
      );

      window.location = "/reports";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <FishTrackNavbar setAuth={props.setAuth} />
      <div className="pt-10 flex justify-center items-center flex-col">
        <h1 className="flex justify-center items-center flex-col w-full text-3xl font-bold text-white mx-auto text-center">
          Napisi izvestaj sa pecanja
        </h1>

        <div className="pt-10 flex flex-wrap justify-center items-center flex-col">
          <span className="mr-2 text-white">Datum i vreme izlaska na vodu</span>

          <DatePicker
            placeholder=""
            wrapperClassName="w-full"
            className="w-full p-4 bg-emerald-800 rounded-md placeholder-gray-500 text-white"
            selected={createdAt}
            onChange={(date) => setCreatedAt(date)}
            showTimeSelect
            dateFormat="yyyy-MM-dd HH:mm"
          />

          <br />

          <span className="mr-2 text-white">Mesto pecanja</span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-emerald-800 rounded-md placeholder-gray-500 text-white"
            onChange={(e) => setSpot(e.target.value)}
          />

          <br />

          <span className="mr-2 text-white">Nivo vode tog dana</span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-emerald-800 rounded-md placeholder-gray-500 text-white"
            onChange={(e) => setWaterLevel(e.target.value)}
          />

          <br />

          <span className="mr-2 text-white">
            Vreme (suncano, oblacno, itd.)
          </span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-emerald-800 rounded-md placeholder-gray-500 text-white"
            onChange={(e) => setWeather(e.target.value)}
          />

          <br />

          <span className="mr-2 text-white">
            Vrsta pecanja (fider, plovak, itd.)
          </span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-emerald-800 rounded-md placeholder-gray-500 text-white"
            onChange={(e) => setTypeOfFishing(e.target.value)}
          />

          <br />

          <span className="mr-2 text-white">Mamac</span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-emerald-800 rounded-md placeholder-gray-500 text-white"
            onChange={(e) => setBait(e.target.value)}
          />

          <br />

          <span className="mr-2 text-white">Hrana za primamu</span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-emerald-800 rounded-md placeholder-gray-500 text-white"
            onChange={(e) => setFood(e.target.value)}
          />

          <br />

          <span className="mr-2 text-white">Ulov</span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-emerald-800 rounded-md placeholder-gray-500 text-white"
            onChange={(e) => setTheCatch(e.target.value)}
          />
        </div>
        <br></br>
        <button
          className="bg-emerald-800 hover:bg-emerald-950 text-white font-bold py-2 px-4 rounded-full"
          onClick={(e) => handleButtonClicked(e)}
        >
          Napravi izvestaj
        </button>
        <Link
          to="/reports"
          className="bg-emerald-800 hover:bg-emerald-950 text-white font-bold py-2 px-4 rounded-full mt-2"
        >
          Nazad
        </Link>
      </div>
    </>
  );
};

export default FishingReportInput;
