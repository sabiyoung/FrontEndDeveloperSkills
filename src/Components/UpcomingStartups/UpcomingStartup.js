import "./UpcomingStartup";
import React, { useEffect, useState } from "react";
import LearnPage from "../LearnPage/Learnpage";

function UpcomingStartUp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./upcomingStartup.json")
      .then((response) => response.json())
      .then((data) => {
   
        setData(() => data.projects);
      });
  }, []);

  return (
    <>
      <h2 className="featured">Upcoming Startups </h2>
      <div className="starupWapper">
        {data?.map((item) => {
          let dataWrapper = <LearnPage key={item.id} item={item} />;
          return dataWrapper;
        })}
      </div>
    </>
  );
}

export default UpcomingStartUp;
