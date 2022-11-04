import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../Context";
import Position from "../Components/Position";
import { nanoid } from "nanoid";

export default function PositionDetails() {
  const { slug } = useParams();
  const { localJobs } = useContext(Context);
  const position = localJobs.find((pos) => pos.slug === slug);
  const description = position.description;
  const jobTags = position.tags.map((tag) => <p className="tag">{tag}</p>);
  const jobTypes = position.job_types.map((job) => (
    <p className="job-type">{job}</p>
  ));

  const mostRelevant = localJobs.filter((job) => {
    if (job.tags.length < 1 || job.slug === position.slug) return false;
    if (
      position.tags.every((tag) =>
        job.tags.some((e) => e.toLowerCase() === tag.toLowerCase())
      )
    )
      return true;
    else return false;
  });

  const lessRelevant = localJobs.filter((job) => {
    if (job.tags.length < 1 || job.slug === position.slug) return false;
    const noRemoteAndOther = job.tags.filter(
      (e) => e.toLowerCase() !== "remote" && e.toLowerCase() !== "other"
    );
    if (
      position.tags.some((tag) =>
        noRemoteAndOther.some((e) => e.toLowerCase() === tag.toLowerCase())
      )
    )
      return true;
    else return false;
  });

  function similarPositions() {
    const array = mostRelevant.length < 3 ? lessRelevant : mostRelevant;
    return array.map((job) => {
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
  return (
    <div className="position-details">
      <div className="header-apply">
        <h1>{position.title}</h1>
        <a className="apply" href={position.url[0]}>
          Apply
        </a>
      </div>
      <div className="tags">
        {jobTags} {jobTypes}
      </div>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>

      {lessRelevant.length > 0 && (
        <>
          <h2 className="similar-positions">Similar Positions</h2>
          {similarPositions()}
        </>
      )}
    </div>
  );
}
