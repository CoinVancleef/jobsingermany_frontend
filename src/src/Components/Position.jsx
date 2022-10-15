import React from "react";
import company from "../assets/company.svg";
import location from "../assets/location.svg";
import position from "../assets/position.svg";

export default function Position() {
  return (
    <div className="position">
      <div>
        <img src={position} alt="position" />
        <h3>Software Entwicklung/ Fullstack Development</h3>
      </div>
      <div>
        <img src={company} alt="company" />
        <p className="company-name">Coin</p>
      </div>
      <div>
        <img src={location} alt="location" />
        <p className="location">Cologne</p>
      </div>
      <p>remote internship</p>
    </div>
  );
}
