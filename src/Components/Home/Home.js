import React from "react";
import "./home.css";
import logo from "../../images/logo.png";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import FeaturedStartUps from "../FeaturedStartups/FeaturedStartUp";
import UpcomingStartUp from "../UpcomingStartups/UpcomingStartup";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Header />

       <Link to="/" >
      <div className="logo">
        <img src={logo} />
      </div>
      </Link>
      <div className="home_backgroundWapper">
        <div className="home_background"></div>
        <div className="home">
          <div className="banner">
            <Banner />
            <FeaturedStartUps />
            <UpcomingStartUp />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
