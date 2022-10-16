import React, { useState, useEffect, createContext } from "react";

const Context = createContext();
import useDidMountEffect from "./Hooks/useDidMountEffect";

function ContextProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    for (let i = 1; i < 4; i++) {
      fetch(`https://www.arbeitnow.com/api/job-board-api?page=${i}`)
        .then((res) => res.json())
        .then((data) => setJobs((prevJobs) => [...prevJobs, ...data.data]));
    }
  }, []);

  useDidMountEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const localJobs = JSON.parse(localStorage.getItem("jobs"));

  return (
    <Context.Provider value={{ jobs, localJobs }}>{children}</Context.Provider>
  );
}

export { ContextProvider, Context };
