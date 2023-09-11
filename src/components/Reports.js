import React, { useEffect, useState } from "react";
import EditFishingReport from "./EditFishingReport";
import FishTrackNavbar from "./FishTrackNavbar";
import jwt_decode from "jwt-decode";

const Reports = (props) => {
  const [fishingReports, setFishingReports] = useState([]);
  const [term, setTerm] = useState("");

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

  return (
    <>
      <FishTrackNavbar setAuth={props.setAuth} />
      <div className="container text-center">
        <form className="d-flex" onSubmit={onSubmitForm}>
          <input
            type="text"
            name="name"
            placeholder="Enter fishing report ..."
            className="form-control"
            value={term}
            onChange={(e) => setTermAndFetchFishingReports(e)}
          ></input>
          <button className="btn btn-success">Search</button>
        </form>
        <table className="table mt-5">
          <thead>
            <tr>
              <th>Datum</th>
              <th>Mesto pecanja</th>
              <th>Nivo vode</th>
              <th>Vreme</th>
              <th>Vrsta pecanja</th>
              <th>Mamac</th>
              <th>Primama</th>
              <th>Ulov</th>
            </tr>
          </thead>
          <tbody>
            {fishingReports.map((fishingReport) => (
              <tr key={fishingReport.id}>
                <td>{fishingReport.created_at}</td>
                <td>{fishingReport.spot}</td>
                <td>{fishingReport.water_level}</td>
                <td>{fishingReport.weather}</td>
                <td>{fishingReport.type_of_fishing}</td>
                <td>{fishingReport.bait}</td>
                <td>{fishingReport.food}</td>
                <td>{fishingReport.the_catch}</td>
                {jwt_decode(localStorage.token).user ===
                fishingReport.user_id ? (
                  <>
                    <td>
                      <EditFishingReport fishingReport={fishingReport} />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteFishingReport(fishingReport.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Reports;
