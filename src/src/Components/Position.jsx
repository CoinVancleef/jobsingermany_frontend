import React from "react";
import company from "../assets/company.svg";
import companyLocation from "../assets/location.svg";
import position from "../assets/position.svg";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

export default function Position({
  title,
  location,
  company_name,
  slug,
  tags,
  job_types,
}) {
  const jobTags = tags.map((tag) => (
    <p key={nanoid()} className="tag">
      {tag}
    </p>
  ));
  const jobTypes = job_types.map((job) => (
    <p key={nanoid()} className="job-type">
      {job}
    </p>
  ));

  return (
    <div className="position">
      <div>
        <img src={position} alt="position" />
        <Link to={`/jobs/position/${slug}`}>
          <h3>{title}</h3>
        </Link>
      </div>
      <div>
        <img src={company} alt="company" />
        <p className="company-name">{company_name}</p>
      </div>
      <div>
        <img src={companyLocation} alt="location" />
        <p className="location">{location}</p>
      </div>
      <div className="tags">
        {jobTags} {jobTypes}
      </div>
    </div>
  );
}
