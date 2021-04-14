import React from "react";
import "./blockchainFeatured.css";
function BlockchainFeatured({ item }) {
  let name = item.projectName;
  let description = item.projectDescription;
  let title = item.projectTitle;
  let courseCompleted = item.courseCompleted;
  let numberOfCourses = item.numberofCourses;
  let earn = item.earn;
  let learn = item.learnLink;

  let courseswidth = (courseCompleted * 10) / numberOfCourses;
  let modules = (courseCompleted * 1000) / 100;

  console.log(courseswidth);
  return (
    <div className="Startup">
      <div className="startup__card">
        <div className="startup__earn">
          <img className="earn" src={earn} alt="" />
        </div>
        <div className="startup__name">
          <a href="">
            <img src={title} alt={name} />
          </a>
        </div>
        <div className="startup__description">
          <p>{description}</p>
        </div>

        <div className="startup__links">
          <div className="startup__learn">
            <a href={learn}>
              <button className="startup__learnbutton">LEARN</button>
            </a>
          </div>
        </div>
        <div className="startup__barwapper">
          <div className="startup__allCourses">
            <p>{`${courseCompleted + "/" + 10 + " " + "Modules"}`} </p>
          </div>
          <div className="startup__bar">
            <div
              className="startup__goalBar"
              style={{ width: `${courseswidth + "%"}` }}
            ></div>
          </div>
          <div className="startup__completedCourse">
            <p>{modules + "% Completed"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockchainFeatured;
