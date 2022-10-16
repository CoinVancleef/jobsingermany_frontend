import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../Context";

export default function PositionDetails() {
  const { slug } = useParams();
  const { localJobs } = useContext(Context);
  const position = localJobs.find((pos) => pos.slug === slug);
  const description = position.description;
  const jobTags = position.tags.map((tag) => <p className="tag">{tag}</p>);
  const jobTypes = position.job_types.map((job) => (
    <p className="job-type">{job}</p>
  ));
  console.log(position);
  return (
    <div className="position-details">
      <h1>{position.title}</h1>
      <div className="tags">
        {jobTags} {jobTypes}
      </div>
      <a className="apply" href={position.url[0]}>
        Apply
      </a>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  );
}
