import React, { useEffect, useState } from "react";
import FishTrackNavbar from "./FishTrackNavbar";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Comments from "./Comments";

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
        `${process.env.REACT_APP_BACKEND_URL}/reports/fishing-reports/search?term=${term}`,
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
      await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/reports/fishing-reports/${id}`,
        {
          method: "DELETE",
          headers: { token: localStorage.token },
        }
      );

      setFishingReports(
        fishingReports.filter((fishingReport) => fishingReport.id !== id)
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  const getFishingReports = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/reports`, {
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

      <div className="bg-emerald-800 container text-center">
        <br></br>
        <form className="d-flex" onSubmit={onSubmitForm}>
          <input
            type="text"
            name="name"
            placeholder="Pretrazi..."
            className="form-control"
            value={term}
            onChange={(e) => setTermAndFetchFishingReports(e)}
          ></input>

          <button className="btn bg-emerald-950 hover:bg-emerald-800 text-white ml-2">
            Pretraga
          </button>
        </form>
        <br></br>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fishingReports.map((fishingReport) => (
            <li
              className="border bg-emerald-950 p-4 rounded-md shadow-md hover:shadow-lg transition duration-300"
              key={fishingReport.id}
            >
              <div className="bg-emerald-800 text-white mt-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500">
                <span className="font-bold">Datum:</span>
                <span className="ml-2">
                  {dateToTime(new Date(fishingReport.created_at))}
                </span>
              </div>
              <div className="bg-emerald-800 text-white mt-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500">
                <span className="font-bold">Mesto pecanja:</span>
                <span className="ml-2">{fishingReport.spot}</span>
              </div>

              <div className="bg-emerald-800 text-white mt-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500">
                <span className="font-bold">Nivo vode:</span>
                <span className="ml-2">{fishingReport.water_level}</span>
              </div>
              <div className="bg-emerald-800 text-white mt-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500">
                <span className="font-bold">Vreme:</span>
                <span className="ml-2">{fishingReport.weather}</span>
              </div>
              <div className="bg-emerald-800 text-white mt-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500">
                <span className="font-bold">Vrsta pecanja:</span>
                <span className="ml-2">{fishingReport.type_of_fishing}</span>
              </div>
              <div className="bg-emerald-800 text-white mt-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500">
                <span className="font-bold">Mamac:</span>
                <span className="ml-2">{fishingReport.bait}</span>
              </div>
              <div className="bg-emerald-800 text-white mt-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500">
                <span className="font-bold">Primama:</span>
                <span className="ml-2">{fishingReport.food}</span>
              </div>
              <div className="bg-emerald-800 text-white mt-2 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500">
                <span className="font-bold">Ulov:</span>
                <span className="ml-2">{fishingReport.the_catch}</span>
              </div>
              {jwt_decode(localStorage.token).user ===
                fishingReport.user_id && (
                <div className="mt-4 flex justify-center items-center space-x-4">
                  <button
                    className="btn bg-emerald-800 hover:bg-emerald-950 text-white"
                    onClick={() => {
                      navigate("/edit", {
                        state: {
                          fishingReport: fishingReport,
                        },
                      });
                    }}
                  >
                    Izmeni
                  </button>

                  <button
                    className="btn bg-emerald-800 hover:bg-emerald-950 text-white"
                    onClick={() => deleteFishingReport(fishingReport.id)}
                  >
                    Obrisi
                  </button>
                </div>
              )}
              <br />
              {<Comments fishingReportId={fishingReport.id} />}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Reports;
