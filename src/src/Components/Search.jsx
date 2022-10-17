import React from "react";

export default function Form({ placeholder, data, handleChange }) {
  return (
    <form className="jobs-search">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={data}
      />
    </form>
  );
}
