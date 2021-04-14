import React from "react";
import "./learnPage.css";
function UpcomingStartups({ item }) {
  let name = item.projectName;
  let description = item.projectDescription;
  let logo = item.projectLogo;
  let currentFunding = item.currentFunding;
  let fundingGoal = item.fundingGoal;
  let give = item.giveLink;
  let learn = item.learnLink;

  let fundingGoalWidth = (currentFunding * 100) / fundingGoal;
  let currentFund = currentFunding / 1000;


  return (
    <div className="cards_container">
      <div className="startup_card_wrapper startup">
        <div className="logo rovualt_logo">
          <a href={learn}>
            <img src={logo} alt={name} />
          </a>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="position">
          <div className="links">
    
            <div className="learn_button_wrapper">
              <a href={learn}>
                <button className="learning_button">LEARN</button>
              </a>
            </div>
          </div>
          <div className="funding__goal fund_goal">
            <p>{"$" + currentFunding + "/$" + fundingGoal}</p>
          </div>
          <div className="bar">
            <div
              className="goalBar"
              style={{ width: `${fundingGoalWidth + "%"}` }}
            ></div>
          </div>
          <div className="current__funding">
            <p>{currentFund + "% Funded"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingStartups;
