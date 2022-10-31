import React from "react";
import filter from "../assets/filter_icon.svg";

export default function Form({ placeholder, data, handleChange }) {
  function handleDefault(e) {
    e.preventDefault();
  }

  return (
    <form className="jobs-search">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={data}
      />
      <button onClick={handleDefault} className="filters-button">
        <img src={filter}></img>
      </button>
    </form>
  );
}
