import React from "react";
import "./bannerLearn.css";
import butterfly from "../../images/butterfly.png";
import learn from "../../images/learn.png";
import mapone from "../../images/map.png";
import group from "../../images/group.png";
import powered from "../../images/powered.png";

function BannerLearn() {
  return (
    <div className="banner1">
      <div className="banner1__wrapper">
        <img className="map1" src={mapone} alt="" />
        <img className="butterfly" src={butterfly} alt="" />

        <div className="vector1__group">
          <img className="group" src={group} alt="" />
          <img className="learn" src={learn} alt="" />
          <img className="powered" src={powered} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BannerLearn;
