import React from "react";
import MiniHeader from "./MiniHeader";
import NeonLines from "./NeonLines";
import "./css/GenericPage.css";
import "../App.css";

const POSITION = ["page--left", "page--right"];

export const GenericPage = ({
  section,
  position,
  img,
  pdf, // add pdf prop
  header,
  body,
  sectionNumber,
  ...props
}) => {
  const checkPositionStyle = POSITION.includes(`page--${position}`)
    ? `page--${position}`
    : POSITION[0];

  const sectionID = section.toLowerCase().replace(/\s+/g, "-");

  const disableMiniHeader = props.hasOwnProperty("disable-miniheader");

  return (
    <section
      className={`section-container ${checkPositionStyle}`}
      id={`${sectionID}`}
    >
      <MiniHeader
        section={section}
        position={position === "left" ? "right" : "left"}
        number={sectionNumber}
        disable={disableMiniHeader}
      />
      <div className="text-container">
        <h2 className="text-header">{header}</h2>
        <p className="text">{body}</p>
      </div>
      {pdf ? (
        <iframe src={pdf} className="feature" />
      ) : (
        <img src={img} alt={img} className="feature" />
      )}
      <NeonLines position={position === "left" ? "left" : "right"} />
    </section>
  );
};

export default GenericPage;
