import React from "react";
// import yellow from "../img/s1.png";
import second from "../img/s2.png";
import leaf from "../img/leaf.png";
import "./GiftBox.css";
const GiftBox = () => {
  return (
    <div className="banner">
      <div className="giftbox">
        <div className="first-img">
          {/* <img src={yellow} alt="FirstImg" /> */}
        </div>
        <div className="background">
          <div className="all-content">
            <div className="small-title">Kraft Brown</div>
            <div className="big-title">Pop up gift box</div>
            <div className="content">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
              consectetur adipisci velit sed quia non numquam eius modi tempora
              incidunto.
            </div>
            <div className="common-button">
              <a href="/">Shop Now</a>
            </div>
            <div className="leaf">
              <img src={leaf} alt="img" />
            </div>
          </div>
        </div>
        <div className="second-img">
          <img src={second} alt="SecondImg" />
        </div>
      </div>
    </div>
  );
};

export default GiftBox;
