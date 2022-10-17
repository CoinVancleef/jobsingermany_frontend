import React, { useContext } from "react";
import { Context } from "../Context";

export default function Tags() {
  const { allTags, selectParams } = useContext(Context);
  const tags = allTags.map((tag) => (
    <p key={tag} onClick={() => selectParams(tag)} className="tag">
      {tag}
    </p>
  ));
  return <div className="tags-component">{tags}</div>;
}
