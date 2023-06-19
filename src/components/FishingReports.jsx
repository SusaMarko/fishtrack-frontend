import React, { useState, useEffect } from "react";

const FishingReports = () => {
  const [fishingReports, setFishingReports] = useState([]);

  useEffect(() => {
    getFishingReports();
  }, []);

  const getFishingReports = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/fishing-reports`
      );
      const data = await res.json();
      setFishingReports(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      {fishingReports.map((fishingReport) => (
        <div className="container" key={fishingReport.id}>
          <p>{fishingReport.created_at}</p>
          <p>{fishingReport.spot}</p>
          <p>{fishingReport.water_level}</p>
          <br />
        </div>
      ))}
    </>
  );
};

export default FishingReports;
