import React from "react";
import box from "../img/box.png";
import "./BrandedBox.css";

const BrandedBox = () => {
  return (
    <div className="section-padding">
      <div className=" d-flex flex-wrap container">
        <div className="BEvent">
          <img src={box} alt="Box" />
        </div>
        <div className="branded-background">
          <div className="leaf2">
         </div>
          <div className="brand-content">
          <div className="brand-title">branded event boxes</div>
          <div className="brandp">
            This is an example of one of our branded event boxes. This was done
            for The Cotswolds Picnique and features their brand on a flood fill
            yellow background. We can do 1 colour, 2 colour, 3 colour and full
            colour printing together with our latest flood colour where you can
            cover our boxes with any colour you like and with your logo coming
            through - all of this can be on small runs.
          </div>
          <div className="brand-button">
            <a href="/">More about branded boxes</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandedBox;
