import React from "react";
import "./newLearnPage.css";
import bitcoin from "../../../images/bitcoin.jpg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VideocamIcon from "@material-ui/icons/Videocam";
import MicIcon from "@material-ui/icons/Mic";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";
import SportsSoccerRoundedIcon from "@material-ui/icons/SportsSoccerRounded";
import PhoneAndroidRoundedIcon from "@material-ui/icons/PhoneAndroidRounded";
function NewLearnPage() {
  return (
    <div className="newLearnPage">
      <div className="newLearnPage__container">
        <div className="newLearnPage__title">
       
          <h1>Fundamentals of Blockchain</h1>
          <p>
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollcitudin.
          </p>
        </div>
        <div className="newLearnPage__contents">
          <div className="newLearnPage__courses">
            <h6> FINANCE</h6>
            <h6>COMPUTER SCIENCE</h6>
            <h6>CYRIPTOGRAPHY</h6>
            <h6>INFORNATION TECHNOLOGY</h6>
            <h6>ALGORITHMS AND DATA STRUCTURES</h6>
          </div>
         
          <div className="newLearnPage__image">
            <img src={bitcoin} alt="" />
          </div>
          <div className="newLearnPage__text">
            <h4>Introduction to Blockchain</h4>
            <p>
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt
              adipiscing <br />
              atgfnte varius at. Sed mollis vestibulum sapien sed mattis.Cras
              <br /> dictum tellus duvi, vitae sollicitudin ipsum tincidunt
              adipiscing ante <br /> varius at. Sed mollis ves tibulum sapien
              sed mattis.
            </p>
            <p>
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt
              adipiscing <br /> atgfnte tibulum sapien sed mattis.Cras dictum
              tellus dui. Sed mollis <br /> vestibulum sapien rthsed mattis.Cras
              dictum tellus duvi, vitae <br />
              sollicitudin ipsum tincidunt adipiscing tibulum sapien sed mattis.
            </p>
          </div>
        </div>
      </div>

      <div className="newLearnPage__membership">
        <div className="newLearnPage__title">
          <h2>MEMBERSHIPS</h2>
          <h1>INCLUDE</h1>
          <p>
            Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
            <br />
            Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
            tincidunt tristique enim sed sollcitudin.
          </p>
        </div>
        <div className="newLearnPage__acesses">
          <div className="newLearnPage__firstRow">
            <div className="newLearnPage__member">
              <LockOpenIcon className="member_icon" />
              <div className="newLearnPage__describtion">
                <h6>Unlimited access</h6>
                <p>
                  Morbi leo risus, porta ac consectetur, <br /> vestibulum at
                  eros. Vivamus sagittis lacus vel
                  <br /> augue laoreet rutrum faucibus dolor
                </p>
              </div>
            </div>

            <div className="newLearnPage__member">
              <VideocamIcon className="member_icon" />
              <div className="newLearnPage__describtion">
                <h6>4500 video courses</h6>
                <p>
                  Morbi leo risus, porta ac consectetur, <br /> vestibulum at
                  eros. Vivamus sagittis lacus vel <br /> augue laoreet rutrum
                  faucibus dolor
                </p>
              </div>
            </div>

            <div className="newLearnPage__member">
              <MicIcon className="member_icon" />
              <div className="newLearnPage__describtion">
                <h6>Expert teachers</h6>
                <p>
                  Morbi leo risus, porta ac consectetur, <br /> vestibulum at
                  eros. Vivamus sagittis lacus vel <br /> augue laoreet rutrum
                  faucibus dolor
                </p>
              </div>
            </div>
          </div>

          <div className="newLearnPage__secondRow">
            <div className="newLearnPage__member">
              <DescriptionRoundedIcon className="member_icon" />
              <div className="newLearnPage__describtion">
                <h6>Valid Certification</h6>
                <p>
                  Morbi leo risus, porta ac consectetur, <br /> vestibulum at
                  eros. Vivamus sagittis lacus vel <br /> augue laoreet rutrum
                  faucibus dolor
                </p>
              </div>
            </div>
            <div className="newLearnPage__member">
              <PhoneAndroidRoundedIcon className="member_icon" />
              <div className="newLearnPage__describtion">
                <h6>24x7 Super Support</h6>
                <p>
                  Morbi leo risus, porta ac consectetur, <br /> vestibulum at
                  eros. Vivamus sagittis lacus vel <br /> augue laoreet rutrum
                  faucibus dolor
                </p>
              </div>
            </div>
            <div className="newLearnPage__member">
              <SportsSoccerRoundedIcon className="member_icon" />
              <div className="newLearnPage__describtion">
                <h6>24x7 Super Support</h6>
                <p>
                  Morbi leo risus, porta ac consectetur, <br /> vestibulum at
                  eros. Vivamus sagittis lacus vel <br /> augue laoreet rutrum
                  faucibus dolor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLearnPage;
