import React from "react";

const PlusButton = ({ onClick }) => {
  return (
    <div className="plus-button-container">
      <button type="button" onClick={onClick}>
        +
      </button>
    </div>
  );
};

export default PlusButton;
