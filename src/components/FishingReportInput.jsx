import React, { useState } from "react";
import FishTrackNavbar from "./FishTrackNavbar";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const FishingReportInput = (props) => {
  const [image, setImage] = useState(null);
  const [createdAt, setCreatedAt] = useState(new Date());
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
      const formData = new FormData();
      formData.append("createdAt", createdAt);
      formData.append("spot", spot);
      formData.append("waterLevel", waterLevel);
      formData.append("weather", weather);
      formData.append("typeOfFishing", typeOfFishing);
      formData.append("bait", bait);
      formData.append("food", food);
      formData.append("theCatch", theCatch);
      formData.append("image", image);

      await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/reports/fishing-reports`,
        {
          method: "POST",
          headers: { token: localStorage.token },
          body: formData,
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
          
          <span className="mr-2 text-white">Slika sa pecanja</span>
          <div class="flex items-center justify-center w-full">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Klikni</span> za odabir slike</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" onChange={e => setImage(e.target.files[0])} />
            </label>
          </div> 
          <br />

          <span className="mr-2 text-white">Datum i vreme izlaska na vodu</span>

          <DatePicker
            placeholder=""
            wrapperClassName="w-full"
            className="w-full p-4 bg-emerald-900 rounded-md placeholder-gray-500 text-white"
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
            className="w-full p-4 bg-emerald-900 rounded-md placeholder-gray-500 text-white"
            onChange={(e) => setSpot(e.target.value)}
          />

          <br />

          <span className="mr-2 text-white">Nivo vode tog dana</span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-emerald-900 rounded-md placeholder-gray-500 text-white"
            onChange={(e) => setWaterLevel(e.target.value)}
          />

          <br />

          <span className="mr-2 text-white">
            Vreme (suncano, oblacno, itd.)
          </span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-emerald-900 rounded-md placeholder-gray-500 text-white"
            onChange={(e) => setWeather(e.target.value)}
          />

          <br />

          <span className="mr-2 text-white">
            Vrsta pecanja (fider, plovak, itd.)
          </span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-emerald-900 rounded-md placeholder-gray-500 text-white"
            onChange={(e) => setTypeOfFishing(e.target.value)}
          />

          <br />

          <span className="mr-2 text-white">Mamac</span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-emerald-900 rounded-md placeholder-gray-500 text-white"
            onChange={(e) => setBait(e.target.value)}
          />

          <br />

          <span className="mr-2 text-white">Hrana za primamu</span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-emerald-900 rounded-md placeholder-gray-500 text-white"
            onChange={(e) => setFood(e.target.value)}
          />

          <br />

          <span className="mr-2 text-white">Ulov</span>
          <input
            type="text"
            placeholder=""
            className="w-full p-4 bg-emerald-900 rounded-md placeholder-gray-500 text-white"
            onChange={(e) => setTheCatch(e.target.value)}
          />
        </div>
        <br></br>
        <button
          className="bg-emerald-900 hover:bg-emerald-950 text-white font-bold py-2 px-4 rounded-full"
          onClick={(e) => handleButtonClicked(e)}
        >
          Napravi izvestaj
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

export default FishingReportInput;
