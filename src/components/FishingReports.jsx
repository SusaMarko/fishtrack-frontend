import React, { useState, useEffect } from "react";
import FishTrackNavbar from "./FishTrackNavbar";

const FishingReports = () => {
  const [fishingReports, setFishingReports] = useState([]);

  useEffect(() => {
    getFishingReports();
  }, []);

  const getFishingReports = async () => {
    try {
      const res = await fetch("http://localhost:5000/reports/fishing-reports");
      const data = await res.json();
      setFishingReports(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <FishTrackNavbar />
      <div>
        <h1 className="flex justify-center items-center flex-col w-full text-3xl font-bold text-black underline">
          Pregled svih izveštaja
        </h1>
      </div>
      {fishingReports.map((fishingReport) => (
        <div
          className="flex justify-center items-center relative"
          key={fishingReport.id}
        >
          <ul className="pb-8 rounded-lg p-4 space-y-4 text-center">
            <li>
              <strong>Datum:</strong> {fishingReport.created_at}
            </li>
            <li>
              <strong>Mesto pecanja:</strong> {fishingReport.spot}
            </li>
            <li>
              <strong>Nivo vode:</strong> {fishingReport.water_level}
            </li>
            <li>
              <strong>Vreme:</strong> {fishingReport.weather}
            </li>
            <li>
              <strong>Vrsta pecanja:</strong> {fishingReport.type_of_fishing}
            </li>
            <li>
              <strong>Mamac:</strong> {fishingReport.bait}
            </li>
            <li>
              <strong>Primama:</strong> {fishingReport.food}
            </li>
            <li>
              <strong>Ulov:</strong> {fishingReport.the_catch}
            </li>
          </ul>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
        </div>
      ))}
    </>
  );
};

export default FishingReports;
