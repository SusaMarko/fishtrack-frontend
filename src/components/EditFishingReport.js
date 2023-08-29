import React, { useState } from "react";

const EditFishingReport = ({ fishingReport }) => {
  const [createdAt, setCreatedAt] = useState(fishingReport.createdAt);
  const [spot, setSpot] = useState(fishingReport.spot);
  const [waterLevel, setWaterLevel] = useState(fishingReport.waterLevel);
  const [weather, setWeather] = useState(fishingReport.weather);
  const [typeOfFishing, setTypeOfFishing] = useState(
    fishingReport.typeOfFishing
  );
  const [bait, setBait] = useState(fishingReport.bait);
  const [food, setFood] = useState(fishingReport.food);
  const [theCatch, setTheCatch] = useState(fishingReport.theCatch);

  const editFishingReport = async (id) => {
    try {
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
      await fetch(`http://localhost:5000/reports/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.token,
        },
        body: JSON.stringify(body),
      });
      window.location = "/reports";
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleModalOperation = () => {
    setCreatedAt(fishingReport.createdAt);
    setSpot(fishingReport.spot);
    setWaterLevel(fishingReport.waterLevel);
    setWeather(fishingReport.weather);
    setTypeOfFishing(fishingReport.typeOfFishing);
    setBait(fishingReport.bait);
    setFood(fishingReport.food);
    setTheCatch(fishingReport.theCatch);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${fishingReport.id}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${fishingReport.id}`}
        onClick={() => handleModalOperation()}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Fishing Report</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => handleModalOperation()}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Created at"
                value={createdAt}
                onChange={(e) => setCreatedAt(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Spot"
                value={spot}
                onChange={(e) => setSpot(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Water level"
                value={waterLevel}
                onChange={(e) => setWaterLevel(e.target.value)}
              />
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Weather"
                value={weather}
                onChange={(e) => setWeather(e.target.value)}
              />
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Type of fishing"
                value={typeOfFishing}
                onChange={(e) => setTypeOfFishing(e.target.value)}
              />
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Bait"
                value={bait}
                onChange={(e) => setBait(e.target.value)}
              />
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Food"
                value={food}
                onChange={(e) => setFood(e.target.value)}
              />
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="the catch"
                value={theCatch}
                onChange={(e) => setTheCatch(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={() => editFishingReport(fishingReport.id)}
              >
                Edit
              </button>

              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => handleModalOperation()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditFishingReport;
