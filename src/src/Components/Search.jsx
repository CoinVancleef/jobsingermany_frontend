import React, { useContext } from "react";
import filter from "../assets/filter_icon.svg";
import { Context } from "../Context";

export default function Form({ placeholder, data, handleChange }) {
  const { isFilterClicked, setIsFilterClicked } = useContext(Context);

  function handleDefault(e) {
    e.preventDefault();
    setIsFilterClicked((prevState) => !prevState);
  }

  const buttonStyle = isFilterClicked
    ? "filters-button"
    : "filters-button-clicked";

  return (
    <form className="jobs-search">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={data}
      />
      <button onClick={handleDefault} className={buttonStyle}>
        <img src={filter}></img>
      </button>
    </form>
  );
}
