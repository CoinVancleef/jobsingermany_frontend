import React, { useContext } from "react";
import { Context } from "../Context";

export default function JobTypes() {
  const { allJobTypes } = useContext(Context);
  const types = allJobTypes.map((type) => <p className="job-type">{type}</p>);
  return <div className="job-types-component">{types}</div>;
}
