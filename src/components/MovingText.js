import React from "react";
import "./MovingText.scss";

const MovingText = ({ text }) => {
  return (
    <div className="moving-text">
      <span>{text}</span>
    </div>
  );
};

export default MovingText;
