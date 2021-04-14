import React, { useEffect, useState } from "react";
import BlockchainFeatured from "../BlockchainFeature/BlockchainFeatured";
import "./featuredCourses.css";

function FeaturedCourses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./featuredCourses.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(() => data.projects);
      });
  }, []);

  return (
    <>
      <h2 className="featured">Featured Courses </h2>
      <div className="starupWapper">
        {data?.map((item) => {
          let dataWrapper = <BlockchainFeatured key={item.id} item={item} />;
          return dataWrapper;
        })}
      </div>
    </>
  );
}

export default FeaturedCourses;
