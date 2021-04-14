import React from "react";
import "./newStartupPage.css";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import PeopleIcon from "@material-ui/icons/People";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import FlagIcon from "@material-ui/icons/Flag";
import PublicIcon from "@material-ui/icons/Public";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import ListAltIcon from "@material-ui/icons/ListAlt";
import logo from "../../../images/ka3j1uh8hvtgmeenkn6x.png";
import tesla from  "../../../images/tesla.png"
import amazon from "../../../images/amazon.jpg"
import apple from "../../../images/apple.png"
import rovualtLogo from "../../../images/rovault.png"
function NewStartupPage() {
  return (
    <div className="startupPage">
      <div className="Container fluid">
        <div className="startupPage__wapper">
          <div className="startupPage__about">
            <div className="about__icon">
              <div className="about">
                <img className="rovalt-logo" src={rovualtLogo} />
              </div>
              <h3> About</h3>
            </div>

            <p>
          Rovualt dictum tellus dui, vitae sollicitudin ipsum tincidunt
              adipiscing <br /> atgfnte tibulum sapien sed mattis.Cras dictum.
          
            </p>

            <div className="icons__location">
              <AddLocationIcon /> Washington DC, USA
            </div>
            <div className="icons__location">
      
              <PeopleIcon /> 5001-10000
            </div>
            <div className="icons__location">
              <AttachMoneyIcon /> Series H
            </div>
            <div className="icons__location">
              <FlagIcon /> Public
            </div>
            <div className="icons__location">
         
              <PublicIcon />  Rovualt.co.us
            </div>
          </div>

          <div className="startupPage__highlight">
            <div className="highlight__title">
              <div className="highlight__left">
                <div className="highlight__icon">
                  <div className="icon">
                    <AssignmentIcon />
                  </div>

                  <h3>Highlights</h3>
                </div>

                <div className="highlight__box">
                  <p>Stock Symbol</p>
                  <h5>LSE:ROO</h5>
                </div>
                <div className="highlight__box">
                  <p>
                    Total Funding <br /> Amount
                  </p>
                  <h5>$1.7B</h5>
                </div>
                <div className="highlight__box">
                  <p>Number of Investors</p>
                  <h5>28</h5>
                </div>
              </div>

              <div className="highlight__right">
                <div className="highlight__box">
                  <p>Number of Acquisitions</p>
                  <h5>2</h5>
                </div>
                <div className="highlight__box">
                  <p>
                    Number of Current <br /> Team Members
                  </p>
                  <h5>27</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="details">
          <div className=" ">
            <div className=" detailDescription ">
              <DescriptionOutlinedIcon />
              <h3>Details</h3>
            </div>

            <div className="founder  one ">
              <ul className="list ">
                <li>Industries</li>
                <ul className="list style1  list__style">
                  <li>Technology, </li>
                  <li>Database, </li>
                  <li>Marketing </li>
                </ul>
              </ul>

              <ul className="list">
                <li>Founded Date</li>
                <li>2012</li>
              </ul>
            </div>
            <div className="founder one ">
              <ul className="list">
                <li>Founders</li>
                <li>Series H</li>
              </ul>
              <ul className="list">
                <li>Also Known As</li>
                <li>Roofoods </li>
              </ul>
            </div>
            <div className="founder one  ">
              <ul className="spacing__two list">
                <li>Legal Name</li>
                <li>Roofoods Limited</li>
              </ul>

              <ul className="list">
                <li>Hub Tags</li>
                <li>Exited Unicorn</li>
              </ul>
            </div>
            <div className="highlight__title2  "></div>
            <div className="founder one  ">
              <ul className="spacing__two list">
                <li>Stock Symbol</li>
                <li>LSE:ROO </li>
              </ul>

              <ul className="list">
                <li>Company Type</li>
                <li>For Profit</li>
              </ul>
            </div>
            <div className="highlight__title2  "></div>
            <div className="founder one  ">
              <ul className="spacing__two list">
                <li>Contact Email</li>
                <li>suppotr@rovualt.com</li>
              </ul>

              <ul className="list">
                <li>Phone Number</li>
                <li>+44 777 777 7777 </li>
              </ul>
            </div>

            <div>
              <p className="padd__one">
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt
              adipiscing atgfnte tibulum sapien sed mattis.Cras dictum
              tellus dui. Sed mollis vestibulum sapien rthsed mattis.Cras
              dictum tellus duvi, vitae 
              sollicitudin ipsum tincidunt adipiscing tibulum sapien sed mattis.
              </p>
            </div>
          </div>
        </div>

        <div className="list__feature">
          <div className="lists__header">
            <ListAltIcon />
            <h3>Lists Featuring This Company</h3>
          </div>

          <div className="lists">
            <img src={amazon} />
            <div className="lists1">
              <p>Amazon Portfolio Companies</p>
              <p>
                72 Number of Organizations • $19.4B Total Funding Amount • 621
                Number of Investors
              </p>
            </div>
          </div>

          <div className="lists">
            <img src={tesla} />
            <div className="lists1">
              <p>Tesla</p>
              <p>
                Number of Organizations • $134B Total Funding Amount • 16,160
                Number of Investors
              </p>
            </div>
          </div>

          <div className="lists">
            <img src={logo} />
            <div className="lists1">
              <p>Companies That Exited</p>
              <p>
                Number of Organizations • $65.9B Total Funding Amount • 4,017
                Number of Investors
              
              </p>
            </div>
          </div>

          <div className="lists">
            <img src={apple} />
            <div className="lists1">
              <p>Hummingbird Ventures</p>
              <p>
                2 Number of Organizations • $19.4B Total Funding Amount • 621
                Number of Investors
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewStartupPage;
