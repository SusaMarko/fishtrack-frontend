import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

const EditFishingReport = () => {
  const location = useLocation();

  const [createdAt, setCreatedAt] = useState(
    location.state.fishingReport.createdAt
  );
  const [spot, setSpot] = useState(location.state.fishingReport.spot);
  const [waterLevel, setWaterLevel] = useState(
    location.state.fishingReport.water_level
  );
  const [weather, setWeather] = useState(location.state.fishingReport.weather);
  const [typeOfFishing, setTypeOfFishing] = useState(
    location.state.fishingReport.type_of_fishing
  );
  const [bait, setBait] = useState(location.state.fishingReport.bait);
  const [food, setFood] = useState(location.state.fishingReport.food);
  const [theCatch, setTheCatch] = useState(
    location.state.fishingReport.the_catch
  );

  const editFishingReport = async (id) => {
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      const body = {
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
        `${process.env.REACT_APP_BACKEND_URL}/reports/fishing-reports/${id}`,
        {
          method: "PUT",
          headers: myHeaders,
          body: JSON.stringify(body),
        }
      );
      window.location = "/reports";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="pt-10 bg-emerald-950 flex justify-center items-center flex-col">
        <h1 className="flex justify-center items-center flex-col w-full text-3xl font-bold text-white text-center">
          Izmeni izvestaj sa pecanja
        </h1>

        <div className="pt-10 flex flex-wrap justify-center items-center flex-col">
          <span className="mr-2">Datum i vreme izlaska na vodu:</span>

          <DatePicker
            placeholder={location.state.fishingReport.created_at}
            wrapperClassName="w-full"
            className="w-full p-4 bg-emerald-900 rounded-md placeholder-white text-white"
            selected={createdAt}
            onChange={(date) => setCreatedAt(date)}
            showTimeSelect
            dateFormat="yyyy-MM-dd HH:mm"
          />

          <br />

          <span className="mr-2">Mesto pecanja:</span>
          <input
            type="text"
            placeholder={location.state.fishingReport.spot}
            className="w-full p-4 bg-emerald-900 rounded-md placeholder-white text-white"
            onChange={(e) => setSpot(e.target.value)}
          />

          <br />

          <span className="mr-2">Nivo vode tog dana:</span>
          <input
            type="text"
            placeholder={location.state.fishingReport.water_level}
            className="w-full p-4 bg-emerald-900 rounded-md placeholder-white text-white"
            onChange={(e) => setWaterLevel(e.target.value)}
          />

          <br />

          <span className="mr-2">Vreme (suncano, oblacno, itd.):</span>
          <input
            type="text"
            placeholder={location.state.fishingReport.weather}
            className="w-full p-4 bg-emerald-900 rounded-md placeholder-white text-white"
            onChange={(e) => setWeather(e.target.value)}
          />

          <br />

          <span className="mr-2">Vrsta pecanja (fider, plovak, itd.):</span>
          <input
            type="text"
            placeholder={location.state.fishingReport.type_of_fishing}
            className="w-full p-4 bg-emerald-900 rounded-md placeholder-white text-white"
            onChange={(e) => setTypeOfFishing(e.target.value)}
          />

          <br />

          <span className="mr-2">Mamac:</span>
          <input
            type="text"
            placeholder={location.state.fishingReport.bait}
            className="w-full p-4 bg-emerald-900 rounded-md placeholder-white text-white"
            onChange={(e) => setBait(e.target.value)}
          />

          <br />

          <span className="mr-2">Hrana za primamu:</span>
          <input
            type="text"
            placeholder={location.state.fishingReport.food}
            className="w-full p-4 bg-emerald-900 rounded-md placeholder-white text-white"
            onChange={(e) => setFood(e.target.value)}
          />

          <br />

          <span className="mr-2">Ulov:</span>
          <input
            type="text"
            placeholder={location.state.fishingReport.the_catch}
            className="w-full p-4 bg-emerald-900 rounded-md placeholder-white text-white"
            onChange={(e) => setTheCatch(e.target.value)}
          />
        </div>
        <br></br>
        <button
          className="bg-emerald-900 hover:bg-emerald-950 text-white font-bold py-2 px-4 rounded-full"
          onClick={(e) => editFishingReport(location.state.fishingReport.id)}
        >
          Izmeni izvestaj
        </button>
        <Link
          to="/reports"
          className="bg-emerald-900 hover:bg-emerald-950 text-white font-bold py-2 px-4 rounded-full mt-2"
        >
          Nazad
        </Link>
      </div>
    </>
  );
};

export default EditFishingReport;
