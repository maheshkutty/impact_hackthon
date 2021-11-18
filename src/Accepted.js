import React, { useEffect, useContext, useState } from "react";
import ProfileContext from "./ProfileContext";

const Accepted = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  function showData() {
    return props.accpected.map((item) => {
      return <h2>{item.name}</h2>;
    });
  }

  return (
    <div>
      <h1>Shortlisted Candidate</h1>

      <div>{showData()}</div>
    </div>
  );
};

export default Accepted;
