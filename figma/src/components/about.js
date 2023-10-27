import React from "react";
import a1 from "../images/a1.png";

const About = () => {
  return (
    <div className="about-main">
        <img className="img1" src={a1} />

        <div className="detail">
          <p style={{fontWeight:'bold'}}>About</p>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
            scelerisque ac adipiscing velit non nulla in amet pellentesque. <br/><br/>Sit
            turpis pretium eget maecenas. Vestibulum dolor mattis consectetur
            eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a,
            euismod risus r.
          </p>
        </div>
      </div>
  );
};

export default About;
