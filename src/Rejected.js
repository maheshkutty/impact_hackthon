import React, { useEffect, useContext, useState } from "react";

const Rejected = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  function showData() {
    return props.rejected.map((item) => {
      return <h2>{item.name}</h2>;
    });
  }

  return (
    <div>
      <h1>Rejected Candidate</h1>

      <div>{showData()}</div>
    </div>
  );
};

export default Rejected;
