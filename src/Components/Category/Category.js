import React, { useEffect, useState } from "react";
import "./category.css";
import CourseCategory from "../CourseCategory/CourseCategory";

function Category() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./byCategory.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(() => data.projects);
      });
  }, []);

  return (
    <>
      <h2 className="featured">By Category </h2>
      <div className="starupWapper">
        {data?.map((item) => {
          let dataWrapper = <CourseCategory item={item} />;
          return dataWrapper;
        })}
      </div>
    </>
  );
}

export default Category;
