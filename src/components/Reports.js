import React, { useEffect, useState } from "react";
import FishTrackNavbar from "./FishTrackNavbar";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Reports = (props) => {
  const [fishingReports, setFishingReports] = useState([]);
  const [term, setTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getFishingReports();
  }, []);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/reports/fishing-reports/search?term=${term}`,
        {
          headers: { token: localStorage.token },
        }
      );

      const parseResponse = await response.json();

      setFishingReports(parseResponse);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteFishingReport = async (id) => {
    try {
      await fetch(`http://localhost:5000/reports/fishing-reports/${id}`, {
        method: "DELETE",
        headers: { token: localStorage.token },
      });

      setFishingReports(
        fishingReports.filter((fishingReport) => fishingReport.id !== id)
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  const getFishingReports = async () => {
    const res = await fetch("http://localhost:5000/reports", {
      headers: { token: localStorage.token },
    });
    const fishingReportArray = await res.json();
    setFishingReports(fishingReportArray);
  };

  const setTermAndFetchFishingReports = (e) => {
    setTerm(e.target.value);
    if (e.target.value === "") {
      getFishingReports();
    }
  };

  const dateToTime = (date) =>
    date.toLocaleString("en-GB", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

  return (
    <>
      <FishTrackNavbar setAuth={props.setAuth} />
      <br></br>
      <br></br>
      <div className="container text-center">
        <form className="d-flex" onSubmit={onSubmitForm}>
          <input
            type="text"
            name="name"
            placeholder="Unesi za pretragu ..."
            className="form-control"
            value={term}
            onChange={(e) => setTermAndFetchFishingReports(e)}
          ></input>
          <button className="btn btn-success">Pretraga</button>
        </form>
        <br></br>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fishingReports.map((fishingReport) => (
            <li
              className="border p-4 rounded-md shadow-md hover:shadow-lg transition duration-300"
              key={fishingReport.id}
            >
              <div className="text-gray-700">
                <span className="font-bold">Datum:</span>
                <span className="ml-2">
                  {dateToTime(new Date(fishingReport.created_at))}
                </span>
              </div>
              <div className="text-gray-700 mt-2">
                <span className="font-bold">Mesto pecanja:</span>
                <span className="ml-2">{fishingReport.spot}</span>
              </div>
              <div className="text-gray-700 mt-2">
                <span className="font-bold">Nivo vode:</span>
                <span className="ml-2">{fishingReport.water_level}</span>
              </div>
              <div className="text-gray-700 mt-2">
                <span className="font-bold">Vreme:</span>
                <span className="ml-2">{fishingReport.weather}</span>
              </div>
              <div className="text-gray-700 mt-2">
                <span className="font-bold">Vrsta pecanja:</span>
                <span className="ml-2">{fishingReport.type_of_fishing}</span>
              </div>
              <div className="text-gray-700 mt-2">
                <span className="font-bold">Mamac:</span>
                <span className="ml-2">{fishingReport.bait}</span>
              </div>
              <div className="text-gray-700 mt-2">
                <span className="font-bold">Primama:</span>
                <span className="ml-2">{fishingReport.food}</span>
              </div>
              <div className="text-gray-700 mt-2">
                <span className="font-bold">Ulov:</span>
                <span className="ml-2">{fishingReport.the_catch}</span>
              </div>
              {jwt_decode(localStorage.token).user ===
                fishingReport.user_id && (
                <div className="mt-4">
                  <div className="flex space-x-4">
                    <button
                      className="btn bg-yellow-500 hover:bg-yellow-400 text-white"
                      onClick={() => {
                        navigate("/edit", {
                          state: {
                            // setAuth: props.setAuth,
                            fishingReport: fishingReport,
                          },
                        });
                      }}
                    >
                      Izmeni
                    </button>

                    <button
                      className="btn bg-red-500 hover:bg-red-400 text-white"
                      onClick={() => deleteFishingReport(fishingReport.id)}
                    >
                      Obrisi
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Reports;
