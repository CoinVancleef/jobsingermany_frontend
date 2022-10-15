import React, { useContext } from "react";
import Position from "../Components/Position";
import { Context } from "../Context";

export default function Main() {
  const { localJobs, jobs } = useContext(Context);
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

  return <div>{allJobs}</div>;
}
