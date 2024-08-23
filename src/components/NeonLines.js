import * as React from "react";
import "./css/NeonLines.css";

const NeonLines = ({ position = "left", ...props }) => {
  const isRight = position === "right";

  return (
    <svg
      width={894}
      height={7}
      viewBox="0 0 894 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={`neon-lines ${isRight ? "right" : "left"}`}
    >
      {isRight ? (
        <path d="M0 0h893.154v7H32.265z" fill="#EC6E90" />
      ) : (
        <path d="M893.154 0H0v7h860.889z" fill="#EC6E90" />
      )}
    </svg>
  );
};

export default NeonLines;
