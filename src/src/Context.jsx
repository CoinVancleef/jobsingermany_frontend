import React, { useState, useEffect, createContext } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    for (let i = 1; i < 4; i++) {
      fetch(`https://www.arbeitnow.com/api/job-board-api?page=${i}`)
        .then((res) => res.json())
        .then((data) => setJobs((prevJobs) => [...prevJobs, ...data.data]));
    }
  }, []);

  console.log(jobs);
  return <Context.Provider value={jobs}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
