import React, { useContext } from "react";
import { Context } from "../Context";

export default function Checkboxes() {
  const {
    showTags,
    showJobTypes,
    showRemoteOnly,
    setShowTags,
    setShowJobTypes,
    setShowRemoteOnly,
  } = useContext(Context);

  function handleChangeTags() {
    setShowTags((prevState) => !prevState);
  }

  function handleChangeJobTypes() {
    setShowJobTypes((prevState) => !prevState);
  }

  function handleChangeRemote() {
    setShowRemoteOnly((prevState) => !prevState);
  }

  console.log(showTags);

  return (
    <form className="checkboxes">
      <input
        type="checkbox"
        id="show-tags"
        checked={showTags}
        onChange={handleChangeTags}
      />
      <label htmlFor="show-tags">Show tags</label>
      <input
        type="checkbox"
        id="show-job-types"
        checked={showJobTypes}
        onChange={handleChangeJobTypes}
      />
      <label htmlFor="show-job-types">Show job types</label>
      <input
        type="checkbox"
        id="remote-only"
        checked={showRemoteOnly}
        onChange={handleChangeRemote}
      />
      <label htmlFor="remote-only">Remote jobs only</label>
    </form>
  );
}
