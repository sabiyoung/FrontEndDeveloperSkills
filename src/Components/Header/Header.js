import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import SearchIcon from "@material-ui/icons/Search";
import "./header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="header__social ">
        <div className="header__socials">
          <Link className="social" to="https://twitter.com/minorityprogram">
            <TwitterIcon />
          </Link>
        </div>
        <div className="header__socials">
          <Link className="social" to="https://www.facebook.com/MinorityProgrammers">
     
            <FacebookIcon />
          </Link>
        </div>
        <div className="header__socials">
          <Link className="social" to="https://www.linkedin.com/company/minority-programmers/">
         
            <LinkedInIcon/>
          </Link>
        </div>
        <div className="header__socials">
          <Link className="social" to="https://www.instagram.com/minorityprogrammers/" >
            <InstagramIcon />
          </Link>
        </div>
      </div>

      <div className="header__wallet">
        <p>Connect Wallet</p>
      </div>

      <div className="service_area">
        <ul className="hover">
          <li class="">
            <Link to="https://minorityprogrammers.com/services">
              Service
            </Link>
          </li>
          <li class="">
            <Link to="https://minorityprogrammers.com/events">
              Events
            </Link>
          </li>
          <li class="">
            <Link to="/learn">
              Learn
            </Link>
          </li>
          <li class="">
            <Link to="https://minorityprogrammers.com/join">
              Join
            </Link>
          </li>
        </ul>
      </div>

      <div className="header__search">
        <Link  to="https://discord.com/invite/zGBrEd7UCn" >
          <SearchIcon className="search" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
