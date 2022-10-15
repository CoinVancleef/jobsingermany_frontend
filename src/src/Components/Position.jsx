import React from "react";
import company from "../assets/company.svg";
import companyLocation from "../assets/location.svg";
import position from "../assets/position.svg";

export default function Position({
  title,
  location,
  company_name,
  slug,
  tags,
  job_types,
}) {
  const jobTags = tags.map((tag) => <p className="tag">{tag}</p>);
  const jobTypes = job_types.map((job) => <p className="job-type">{job}</p>);

  return (
    <div className="position">
      <div>
        <img src={position} alt="position" />
        <h3>{title}</h3>
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