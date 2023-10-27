import React from "react";
import blogData from "../data/blogData";
import aero from "../images/f1.svg";


const Blog = () => {
  return (
    <div className="blog-main">
      <div className="blog-title">
        <p>Recent Projects</p>
        <h3>My Portfolio</h3>
      </div>
      <div className="card-section">
        {blogData.map((item) => (
          <div className="card-data">
            <img className="card-img1" src={item.logo} />
            <div className="card-footer">
              <p>{item.title}</p>
              <h5>{item.detail}</h5>
              <p className="card-footer2">View In Dribbble
                <img style={{padding:'20px'}} src={aero}/>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
