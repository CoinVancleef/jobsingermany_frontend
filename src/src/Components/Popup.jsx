import React from "react";

export default function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="inner-popup">
        <button onClick={() => props.setter(false)} className="close-btn">
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : null;
}
