import "./App.css";
import Jobcard from "./Jobcard";
import React, { useState, useEffect, createContext } from "react";
import jobapi from "./api/jobapi";
import ProfileContext from "./ProfileContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Candidate from "./Candidate";
import Accepted from "./Accepted";
import Rejected from "./Rejected";

function App() {
  const [profile, setProfile] = useState({ profile: [] });
  const [accpected, setAccpcted] = useState([]);
  const [rejected, setRejected] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await jobapi.get();
      response = await response.data;
      console.log(response);
      setProfile({ ...profile, profile: response });
    }
    fetchMyAPI();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <ProfileContext.Provider value={profile["profile"]}>
                <Jobcard />
              </ProfileContext.Provider>
            }
          />
          <Route
            path="candidate"
            element={
              <ProfileContext.Provider
                value={{ profile, setAccpcted, accpected, rejected, setRejected }}
              >
                <Candidate />
              </ProfileContext.Provider>
            }
          >
            <Route
              path=":id"
              element={
                <ProfileContext.Provider
                  value={{ profile, setAccpcted, accpected, rejected, setRejected }}
                >
                  <Candidate />
                </ProfileContext.Provider>
              }
            />
          </Route>
          <Route
            path="shortlisted"
            element={
              <ProfileContext.Provider value={{accpected}}>
                <Accepted accpected={accpected} />
              </ProfileContext.Provider>
            }
          />
          <Route
            path="rejected"
            element={
              <ProfileContext.Provider value={{rejected}}>
                <Rejected rejected={rejected} />
              </ProfileContext.Provider>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
