import React from "react";
import "./footerTwo.css";
function FooterTwo() {
  return (
    <div className="footerTwo">
      <div className="footerTwo__titles">
        <h5>services</h5>
        <h5>Explore</h5>
        <h5>About</h5>
      </div>
      <div className="footerTwo__container">
        <div className="footertwo__services">
          <ul>
            <li>Consultancy</li>
            <li>Mentorship</li>
            <li>Training/Onboarding</li>
            <li>MPUniversity</li>
            <li>CodeCamp</li>
          </ul>
        </div>
        <div className="footertwo__services">
          <ul>
            <li>About</li>
            <li>Events</li>
            <li>Join a Course</li>
            <li>Became a Sponsor/Partner</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footertwo__about">
          <p>
            We are an international network of <br /> programmers unifying
            together to deliver <br /> socially impactful software solutions.
          </p>
          <div className="footerTwo__buttons">
            <div className="footer__button">
              {" "}
              <button className="join__button">Join</button>
            </div>
            <div className="footer__button">
              {" "}
              <button className="learnone__button">Learn</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footerTwo__copyright">
        <small>© Copyright 2021 by </small>
        <p>Minority Programmers Association</p>
      </div>
    </div>
  );
}

export default FooterTwo;
