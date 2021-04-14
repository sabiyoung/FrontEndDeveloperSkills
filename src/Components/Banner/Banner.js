import React from "react";
import "./banner.css";
import map from "../../images/map.png";
import light from "../../images/light.png";
import invest from "../../images/invest.png";
import group from "../../images/group.png";

function Home() {
  return (
    <section className="home__wrapper">
      <div className="container-fluid">
        <div className="home__banner">
          <img className="map" src={map} alt="" />
          <img className="vector2" src={light} alt="" />

          <div className="vector__group">
            <img className="group" src={group} alt="" />
            <img className="invest" src={invest} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
