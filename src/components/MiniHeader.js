import React from "react";
import "./css/MiniHeader.css";

export const MiniHeader = ({
  number = 1,
  section = "SECTION NAME",
  position = "left",
  disable,
  ...props // Destructure remaining props
}) => {
  const positionStyle = props.right ? "right" : position;

  if (disable) {
    return null;
  }

  return (
    <div className={`section-mini-header ${positionStyle}`}>
      <p className={`mini-header-text`}>{`${number}`}</p>
      <p>——————————</p>
      <p className={`mini-header-text`}>{section}</p>
    </div>
  );
};

export default MiniHeader;
