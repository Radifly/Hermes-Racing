import React from "react";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="group">
        <div className="overlap-group">
          <img className="subtract" alt="Subtract" src="subtract.svg" />
          <div className="right" />
        </div>
      </div>
      <div className="social-card">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="rectangle-36.png" />
          <div className="div">
            <p className="text-wrapper">
              WE&#39;RE OFFICIALLY GOING TO REPRESENT THE UAE AT THE F1 IN
              SCHOOLS WORLD FINALS!
            </p>
            <img className="vector" alt="Vector" src="vector-3.svg" />
          </div>
        </div>
      </div>
      <div className="social-card">
        <div className="overlap-2">
          <img className="img" alt="Rectangle" src="image.png" />
          <div className="div">
            <p className="text-wrapper">
              WE&#39;RE F1 IN SCHOOLS WORLD FINALISTS OF COURSE
            </p>
            <img className="vector-2" alt="Vector" src="vector.svg" />
          </div>
        </div>
      </div>
      <div className="social-card">
        <div className="overlap-3">
          <img
            className="rectangle-2"
            alt="Rectangle"
            src="rectangle-36-2.png"
          />
          <div className="div-2">
            <p className="text-wrapper">
              WE&#39;RE F1 IN SCHOOLS WORLD FINALISTS OF COURSE
            </p>
            <img className="vector-3" alt="Vector" src="vector-2.svg" />
          </div>
        </div>
      </div>
      <div className="right-wrapper">
        <div className="right-2" />
      </div>
    </div>
  );
};
