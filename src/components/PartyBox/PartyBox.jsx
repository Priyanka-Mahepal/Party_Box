import React from "react";
import "./PartyBox.css";
import pb1 from "../img/pb1.png";
import pb2 from "../img/pb2.png";
import leaf4 from '../img/leas4.png'

const PartyBox = () => {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="d-flex flex-wrap">
          <div className="party-img">
            <img src={pb1} alt="PartyImg" />
          </div>
          <div className="party-content">
            <h1 className="party-title">Bespoke Boxes Champagne and Gift</h1>
            <div className="party-button">
              <a href="/">Find Out More</a>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          <div className="party-content">
            <h1 className="party-box">Party Box</h1>
            <div className="party-now">
              <a href="/">Shop Now</a>
            </div>
          </div>
          <div className="party-img">
            <img src={pb2} alt="PartyImg2" />
          </div>
        </div>
      </div>
      <div className="findout_leaf">
        <img src={leaf4} alt=""/>
      </div>
    </div>
  );
};

export default PartyBox;
