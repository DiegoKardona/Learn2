import React from "react";

import "./Spanish.scss";

function Spanish(props) {
  return (
    <div id="spanish">
      <div id="title">
        <h1>Spanish Word</h1>
      </div>
      <div id="word">
        <img
          id="word-img"
          src="http://pngimg.com/uploads/chair/chair_PNG6860.png"
          alt=""
        />
        <h2>{props.word}</h2>
      </div>
    </div>
  );
}

export default Spanish;
