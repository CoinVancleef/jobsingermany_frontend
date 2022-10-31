import React, { useContext } from "react";
import Position from "../Components/Position";
import { Context } from "../Context";
import Search from "../Components/Search";
import Tags from "../Components/Tags";
import JobTypes from "../Components/JobTypes";
import { nanoid } from "nanoid";

export default function Main() {
  const {
    localJobs,
    jobsInputData,
    jobsSearchResult,
    handleChangeJobs,
    selectedParams,
  } = useContext(Context);

  const allJobs = localJobs.map((job) => {
    return (
      <Position
        key={nanoid()}
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
        key={nanoid()}
        title={job.title}
        location={job.location}
        company_name={job.company_name}
        slug={job.slug}
        tags={job.tags}
        job_types={job.job_types}
      />
    );
  });

  const jobsByParams = localJobs.filter((job) => {
    const tagsAndTypes = [...job.job_types, ...job.tags];
    if (tagsAndTypes.length === 0) return false;
    if (
      selectedParams.every((param) => tagsAndTypes.some((el) => el === param))
    ) {
      return true;
    }
    return false;
  });

  const everyJob = () => {
    if (selectedParams.length > 0)
      return jobsByParams.map((job) => {
        return (
          <Position
            key={nanoid()}
            title={job.title}
            location={job.location}
            company_name={job.company_name}
            slug={job.slug}
            tags={job.tags}
            job_types={job.job_types}
          />
        );
      });
    if (jobsSearchResult) return searchedJobs;
    else return allJobs;
  };

  return (
    <main>
      <div className="search-main">
        <Search
          placeholder="Search by position, tags, location, etc"
          data={jobsInputData}
          handleChange={handleChangeJobs}
        />
      </div>
      <div className="tags-and-jobs">
        <Tags />
        <JobTypes />
      </div>
      <div className="main-wrapper">{everyJob()}</div>
    </main>
  );
}
