import React, { useContext } from "react";
import { Context } from "../Context";

export default function Tags() {
  const { allTags } = useContext(Context);
  const tags = allTags.map((tag) => <p className="tag">{tag}</p>);
  return <div className="tags-component">{tags}</div>;
}
