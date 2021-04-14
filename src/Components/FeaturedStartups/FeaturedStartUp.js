import React, { useEffect, useState } from "react";
import "./featuredStartUp.css";
import Incubator from "../Incubator/IncubatorPage";

function FeaturedStartUp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./featureStartup.json")
      .then((response) => response.json())
      .then((data) => {

        setData(() => data.projects);
      });
  }, []);

  return (
    <>
      <h2 className="featured">Featured Startups </h2>
      <div className="starupWapper">
        {data?.map((item) => {
          let dataWrapper = <Incubator key={item.id} item={item} />;
          return dataWrapper;
        })}
      </div>
    </>
  );
}

export default FeaturedStartUp;
