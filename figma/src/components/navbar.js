import React from "react";
import navData from "../data/navData";
import logo from "../images/logo.png";
const Navbar = () => {
  // console.log("navData=>", navData);
  return (
    <div className="navbar-main">
      <div className="navbar-comp">
        <div className="navbar-logo">
          <img src={logo} height={"40px"}></img>
        </div>
        <div className="navbar-menu">
          {navData.map((item, index) => {
            return (
              <div key={index} className="menu-items">
                {item.title}
              </div>
            );
          })}
        </div>
        <div className="navbar-button">
          <button className="contact-button"> Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
