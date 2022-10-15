import React, { useContext } from "react";
import Position from "../Components/Position";
import { Context } from "../Context";

export default function Main() {
  const { jobs } = useContext(Context);
  const allJobs = jobs.map((job) => {
    <Position
      title={job.title}
      location={job.location}
      company_name={job.company_name}
      slug={job.slug}
      tags={job.tags}
      job_types={job.job_types}
    />;
  });

  return { allJobs };
}
