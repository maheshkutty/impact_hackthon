import React, { useEffect, useState } from "react";
import { useContext } from "react";
import "./Jobcard.css";
import ProfileContext from "./ProfileContext";
import { useNavigate, Link } from "react-router-dom";

const Jobcard = () => {
  const navigate = useNavigate();
  const value = useContext(ProfileContext);
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log(value);
  }, []);
  function createCard() {
    return value
      .filter((post) => {
        if (query === "") {
          return post;
        } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
          return post;
        }
      })
      .map((item, i) => {
        return (
          <div key={item.id} className="col">
            <img src={item.Image} className="imgStyle" />
            <div className="maintext">
              <h1 style={{cursor:'pointer'}} onClick={() => navigate("/candidate/" + item.id)}>
                {item.name}
              </h1>
            </div>
          </div>
        );
      });
  }

  return (
    <div>
      <ul
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <li>
          <Link to={`/shortlisted`}>
            <a className="link">Shortlisted</a>
          </Link>
        </li>
        <li>
          <Link to={`/rejected`}>
            <a className="link">Rejected</a>
          </Link>
        </li>
      </ul>
      <input
        placeholder="Search Names"
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="container">{createCard()}</div>
    </div>
  );
};

export default Jobcard;
