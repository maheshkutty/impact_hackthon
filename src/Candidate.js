import React, { useEffect, useContext, useState } from "react";
import ProfileContext from "./ProfileContext";
import { useParams, useNavigate } from "react-router-dom";

const Candidate = () => {
  let navigate = useNavigate();
  let params = useParams();
  const { profile, setAccpcted, accpected, rejected, setRejected } =
    useContext(ProfileContext);
  const [currProfile, setCurrProfile] = useState({});
  //   const [profile1, setProfile] = useState({});
  useEffect(() => {
    profile.profile.forEach((element) => {
      if (element["id"] == params.id) {
        setCurrProfile(element);
      }
    });
  }, []);

  return (
    <div>
      <img src={currProfile.Image} />
      <div>
        <h1>{currProfile.name}</h1>
        <button
          className="button-7"
          onClick={() => {
            const temp = accpected;
            let flag = 1;
            accpected.forEach((item, i) => {
              if (item["id"] == params.id) {
                flag = 0;
              }
            });
            const reject = rejected.filter((item) => {
              if (item.id != params.id) return item;
            });
            setRejected(reject);
            if (flag == 1) {
              const temp = [...accpected, currProfile];
              setAccpcted(temp);
            }
            navigate("/");
          }}
        >
          Accept
        </button>
        <button
          className="button-7"
          onClick={() => {
            let flag = 1;
            rejected.forEach((item, i) => {
              if (item["id"] == params.id) {
                flag = 0;
              }
            });
            const accept = accpected.filter((item) => {
              if (item.id != params.id) return item;
            });
            setAccpcted(accept);
            if (flag == 1) {
              const temp = [...rejected, currProfile];
              setRejected(temp);
            }
            navigate("/");
          }}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default Candidate;
