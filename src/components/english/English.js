import React from "react";

import "./English.scss";

function English(props) {
  return (
    <div id="english">
      <div id="title">
        <h1>English</h1>
      </div>
      <div id="reminder">
        <img
          id="trump-reminder"
          src="https://www.freeiconspng.com/uploads/trump-face-png-9.png"
          alt=""
        />
      </div>
      <div id="word">
        <h2>Sound like:</h2>
        <img id="word-img" src="" alt="" />
        <h3>{props.word}</h3>
      </div>
    </div>
  );
}

export default English;
