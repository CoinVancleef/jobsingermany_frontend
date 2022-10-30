import React, { useContext, useCallback } from "react";
import { Context } from "../Context";

export default function Tags() {
  const { allTags, selectParams, selectedParams } = useContext(Context);

  const memoizedSearch = useCallback(
    (tag) => {
      if (selectedParams.find((el) => el === tag)) {
        return "tag-added";
      } else {
        return "tag";
      }
    },
    [selectParams]
  );

  const tags = allTags.map((tag) => (
    <p
      key={tag}
      onClick={() => {
        selectParams(tag);
      }}
      className={memoizedSearch(tag)}
    >
      {tag}
    </p>
  ));
  return <div className="tags-component">{tags}</div>;
}
