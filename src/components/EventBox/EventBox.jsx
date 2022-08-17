import React from "react";
import "./EvenBox.css";
import e1 from "../img/e1.png";
import e2 from "../img/e2.png";

const EventBox = () => {
  return (
    <div>
      <div className="container">
        <h5 className="event-title">different types of event box</h5>
        <div className="d-flex flex-wrap justify-content-between text-left">
          <div className="event-first">
            <img src={e1} alt="event1" />
            <div className="event-content">
              <h5 className="event-small">
                Branded Boxes That Put Your Company's Name Out There
              </h5>
              <p className="event-para">
                Pair text with an image to focus on your chosen product,
                collection, or blog post. Add details on availability, style, or
                even provide a review.
              </p>
            </div>
          </div>
          <div className="event-second">
            <img src={e2} alt="event2" />
            <div className="event-content">
              <h5 className="sec-small">Plain Event Boxes</h5>
              <p className="sec-para">
                We supply packs of plain unbranded event boxes in brown and
                white options, which is our most economical product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBox;
