import React from "react";
import "./css/SectionImage.css";

const SectionImage = ({ imgSource, pos }) => {
  const imageStyle = {
    objectPosition: `0 ${pos}rem`,
  };

  return (
    <div className="image-container">
      <div className="image-overlay"></div>
      <img className="cover-image" src={imgSource} style={imageStyle} alt="" />
    </div>
  );
};

export default SectionImage;
