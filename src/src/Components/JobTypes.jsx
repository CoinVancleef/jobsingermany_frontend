import React, { useContext, useCallback } from "react";
import { Context } from "../Context";

export default function JobTypes() {
  const { allJobTypes, selectParams, selectedParams } = useContext(Context);
  const memoizedSearch = useCallback(
    (tag) => {
      if (selectedParams.find((el) => el === tag)) {
        return "job-type-added";
      } else {
        return "job-type";
      }
    },
    [selectedParams]
  );
  const types = allJobTypes.map((type) => (
    <p
      key={type}
      onClick={() => {
        selectParams(type);
      }}
      className={memoizedSearch(type)}
    >
      {type}
    </p>
  ));
  return <div className="job-types-component">{types}</div>;
}
