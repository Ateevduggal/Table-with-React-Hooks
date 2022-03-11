import React, { useState } from "react";

const Filter = ({search, setSearch}) => {

  const Change_Filter = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="mb-4 mx-4">
        <input
          type="text"
          className="col-28pa from-control-sm"
          placeholder="Search....."
          value={search}
          onChange={Change_Filter}
        />
      </div>
    </>
  );
};

export default Filter;
