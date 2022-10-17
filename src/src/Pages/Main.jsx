import React, { useContext } from "react";
import Position from "../Components/Position";
import { Context } from "../Context";
import Search from "../Components/Search";
import Tags from "../Components/Tags";
import JobTypes from "../Components/JobTypes";

export default function Main() {
  const { localJobs, jobs, jobsInputData, jobsSearchResult, handleChangeJobs } =
    useContext(Context);
  const allJobs = localJobs.map((job) => {
    return (
      <Position
        title={job.title}
        location={job.location}
        company_name={job.company_name}
        slug={job.slug}
        tags={job.tags}
        job_types={job.job_types}
      />
    );
  });

  const searchedJobs = jobsSearchResult.map((job) => {
    return (
      <Position
        title={job.title}
        location={job.location}
        company_name={job.company_name}
        slug={job.slug}
        tags={job.tags}
        job_types={job.job_types}
      />
    );
  });

  return (
    <main>
      <Search
        placeholder="Search by position, tags, location, etc"
        data={jobsInputData}
        handleChange={handleChangeJobs}
      />
      <div className="tags-and-jobs">
        <Tags />
        <JobTypes />
      </div>
      <div className="main-wrapper">
        {jobsSearchResult ? searchedJobs : allJobs}
      </div>
    </main>
  );
}
