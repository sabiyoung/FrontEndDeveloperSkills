import React from "react";
import "./homebanner.css";
import banner from "../../../images/blockchainbanner.png";
import minorityLogo from "../../../images/logo.png"
import { Link } from "react-router-dom";
function HomeBanner() {
  return (
    <div className="homeBanner">
      <img className="homeBanner__img" src={banner} alt="" />
      <div class="container fluid">
        <div className="centered homeBanner__text">
          <Link to="/"> 
          <img className="top-left" src={minorityLogo} />
          </Link>
          <h1>
            Minority Programmers <br /> Association
          </h1>
          <p>Code, Culture, Connunity</p>
          <button>Start Your Journey</button>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
