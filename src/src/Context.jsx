import React, { useState, useEffect, createContext } from "react";
import useDidMountEffect from "./Hooks/useDidMountEffect";

const Context = createContext();

function ContextProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [jobsInputData, setJobsInputData] = useState("");
  const [jobsSearchResult, setJobsSearchResult] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [allJobTypes, setAllJobTypes] = useState([]);
  const [selectedParams, setSelectedParams] = useState([]);
  const [isFilterClicked, setIsFilterClicked] = useState(false);

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

  function handleChangeJobs(event) {
    const { value } = event.target;
    setJobsInputData(value);
  }

  useEffect(() => {
    const results = localJobs.filter((job) => {
      const param =
        job.title ||
        job.tags[0] ||
        job.tags[1] ||
        job.tags[2] ||
        job.job_types[0] ||
        job.job_types[1] ||
        job.job_types[2] ||
        job.location;
      return param.toLowerCase().includes(jobsInputData);
    });
    setJobsSearchResult(results);
  }, [jobsInputData]);

  useEffect(() => {
    if (localJobs) {
      setAllTags([...new Set(localJobs.map((job) => job.tags).flat())]);
    }
  }, []);

  useEffect(() => {
    if (localJobs) {
      setAllJobTypes([
        ...new Set(localJobs.map((job) => job.job_types).flat()),
      ]);
    }
  }, []);

  const allParams = [...allJobTypes, ...allTags];

  function selectParams(param) {
    if (!selectedParams.find((el) => el === param)) {
      setSelectedParams((prevParams) => [...prevParams, param]);
    } else {
      setSelectedParams((prevParams) => prevParams.filter((el) => el != param));
    }
  }

  return (
    <Context.Provider
      value={{
        jobs,
        localJobs,
        jobsInputData,
        jobsSearchResult,
        handleChangeJobs,
        allTags,
        allJobTypes,
        selectedParams,
        selectParams,
        isFilterClicked,
        setIsFilterClicked,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
