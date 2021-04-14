import React from "react";
import "./courseCategory.css";

function CourseCategory({ item }) {
  let name = item.projectName;
  let map = item.projectLogoMap;
  let setting = item.projectLogoSetting;
  let setting1 = item.projectLogoSetting1;
  let light = item.projectLogoLight;
  let hand = item.projectLogoHand;

  return (
    <div className="startup__card">
      <div className="startup__name">
        <p className="name">{name}</p>
      </div>
      <div className="startup__logo">
        <img className="setting" src={setting} alt="" />
        <img className="mapone" src={map} alt="" />
        <img className="settingOne" src={setting1} alt="" />
      </div>
      <div className="logos">
        <img className="hand" src={hand} alt="" />
        <img className="light" src={light} alt="" />
      </div>
    </div>
  );
}

export default CourseCategory;
