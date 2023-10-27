import React from "react";
import exData from "../data/exData";

const Expertise = () => {
  console.log("exp=>", exData);

  return (
    <div className="e-main">
      <div className="e-section1">
        <p>My Skills</p>
        <h4>My Expertise</h4>
      </div>
      <div className="e-section2">
        {exData.map((item) => {
          return (
            <div className="e-card">
              <img src={item.logo} className="img1"></img>

              <h4>{item.title}</h4>
              <p>{item.detail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expertise;
