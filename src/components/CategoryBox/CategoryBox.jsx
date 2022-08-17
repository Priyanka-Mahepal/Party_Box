import React from "react";
import "./CategoryBox.css";
import p1 from "../img/p1.png";
import p2 from "../img/p2.png";
import p3 from "../img/p3.png";
import p4 from "../img/p4.png";
import p5 from "../img/p5.png";

const CategoryBox = () => {
  return (
    <div className="section-padding">
      <div className=" d-flex flex-wrap justify-content-center container">
        <div className="left-imgs">
          <div className="d-flex flex-wrap img-container ">
            <div className="first">
              <img src={p1} alt="Box" />
              <p className="img-content">plain event boxes</p>
            </div>
            <div className="second">
              <img src={p2} alt="Box" />
              <p className="s-content">Leakproof Food Cartons</p>
            </div>
            <div className="third">
              <img src={p3} alt="Box" />
              <p className="t-content">Personalised Gift Boxes</p>
            </div>
            <div className="forth">
              <img src={p4} alt="Box" />
              <p className="f-content">Coffee cups</p>
            </div>
          </div>
        </div>
        <div className="right-img">
          <div className="cat-button">
            <a href="/">Shop Now</a>
          </div>
          <img src={p5} alt="Box" />
          <p className="r-content">mailer Box</p>
        </div>
      </div>
      <div className="shop-button">
          <a href="/">Shop Now</a>
        </div>
    </div>
  );
};

export default CategoryBox;
