import React, { useEffect, useState } from "react";
import Blockchain from "../Blockchain/Blockchain";
import "./myCourse.css";

function MyCourse() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./myCourses.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(() => data.projects);
      });
  }, []);

  return (
    <>
      <h2 className="featured">My Courses </h2>
      <div className="starupWapper">
        {data?.map((item) => {
          let dataWrapper = <Blockchain key={item.id} item={item} />;
          return dataWrapper;
        })}
      </div>
    </>
  );
}

export default MyCourse;
