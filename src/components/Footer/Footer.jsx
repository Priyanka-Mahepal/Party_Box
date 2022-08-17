import React from "react";
import "./Footer.css";
import opay from "../img/opay.png";
import icon2 from "../img/icon2.png";
import icon3 from "../img/icon3.png";
import icon4 from "../img/icon4.png";
import visa from "../img/visa.png";
import discover from "../img/discover.png";
import amex from "../img/amex.png";
import leaf from '../img/leaf3.png'
const Footer = () => {
  return (
    <div className="bg-myBlack b-leaf">
      <img src={leaf} alt="leaf" className="b-leaf-img"/>
      <div
        className="container "
      >
        <h1 className="heading">Sign up for Latest News</h1>
        <div className="form  d-flex ">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder=" Write Your Email"
            aria-label="Search"
          />
          <div className="footer-btn">Submit</div>

        </div>
       <div className="border1">
      
       
       
       <div className="block-example border-top border-light ">
         
       </div>
       </div>
        <div className="f-des  d-flex flex-wrap">
          <div className="quick-links">
            <h2 className="links">Quick links</h2>
            <div className="list">
              <ul>
                <li>About us</li>
                <li>Clients</li>
                <li>Testimonials</li>
                <li>Refund Policy</li>
                <li>FAQ's</li>
                <li>Gallery</li>
              </ul>
            </div>
          </div>
          <div className="key-products">
            <h2 className="key">Our Key Products</h2>
            <div className="list">
              <ul>
                <li>Plain Event Boxes</li>
                <li>Branded Event Boxes</li>
                <li>Bespoke Boxes</li>
                <li>Event Hampers</li>
                <li>Personalised Gift Boxes</li>
                <li>Children Party Boxes</li>
              </ul>
            </div>
          </div>
          <div className="get-contacts">
            <h2 className="get">Get in Touch</h2>
            <div className="list">
              <ul>
                <li><i>Office:</i>01245 922 003</li>
                <li><i>Mobile:</i>07973 654 443</li>
                <li><i>Email:</i>info@picnicboxuk.co.uk</li>
                <ul className="last-des">
                  <h5>Picnic Box UK</h5>
                  <li>40 Burrow Road</li>
                  <li>CHIGWELL</li>
                  <li>IG7 4HE</li>
                </ul>
              </ul>
            </div>
          </div>
          <div className="cards">
            <p>All prices exclud VAT.</p>
            <div className="p-cards">
              <img  src={discover} alt="" />
              <img  src={amex} alt="" />
              <img  src={opay} alt="" />
              <img  src={icon2} alt="" />
              <img  src={icon3} alt="" />
              <img  src={icon4} alt="" />
              <img  src={visa} alt="" />
            </div>
          </div>
        </div>
        <div className="shopify">
          <p>© 2022, Picnic Box UK Powered by Shopify</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
