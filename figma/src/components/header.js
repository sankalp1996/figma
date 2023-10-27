import React from "react";
import g1 from "../images/g1.png";
import exData from "../data/exData";

const Header = () => {
  return (
    <div className="header-main">
    
      <div className="header-comp">
        <div className="header-left">
            <p className="a1">Hey, I am John</p>
            <h1 className="a2">I create product design and brand experience</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <div className="header-b1">
          <button className="header-button">Get in Touch</button>
        </div>
        </div>
        <div className="header-img">
          <img src={g1} className="img1"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
