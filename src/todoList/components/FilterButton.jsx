import React from "react";

const FilterButton = ({ onClick }) => {
  return (
    <div className="filter-button" onClick={onClick}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default FilterButton;
