import React, { useContext, memo } from "react";
import Position from "../Components/Position";
import { Context } from "../Context";
import Search from "../Components/Search";
import Tags from "../Components/Tags";
import JobTypes from "../Components/JobTypes";
import { nanoid } from "nanoid";
import Checkboxes from "../Components/Checkboxes";

export default function Main() {
  const {
    localJobs,
    jobsInputData,
    jobsSearchResult,
    handleChangeJobs,
    selectedParams,
    showTags,
    showJobTypes,
    showRemoteOnly,
    isFilterClicked,
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
    if (showRemoteOnly) {
      if (tagsAndTypes.length === 0 || job.remote === false) return false;
      if (
        selectedParams.every((param) => tagsAndTypes.some((el) => el === param))
      ) {
        return true;
      }
    } else {
      if (tagsAndTypes.length === 0) return false;
      if (
        selectedParams.every((param) => tagsAndTypes.some((el) => el === param))
      ) {
        return true;
      }
    }
    return false;
  });

  const remoteJobs = localJobs.filter((job) => job.remote === true);

  const everyJob = () => {
    if (showRemoteOnly) {
      return remoteJobs.map((job) => {
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
    }
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
      <Search
        placeholder="Search by position, tags, location, etc"
        data={jobsInputData}
        handleChange={handleChangeJobs}
      />
      {isFilterClicked && <Checkboxes />}
      <div className="tags-and-jobs">
        {showTags ? <Tags /> : null}
        {showJobTypes ? <JobTypes /> : null}
      </div>
      <div className="main-wrapper">{everyJob()}</div>
    </main>
  );
}

export const MemoizedMain = memo(Main);
