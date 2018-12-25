import React from "react";

import "./Deutsch.scss";

function Deutsch(props) {
  return (
    <div id="deutsch">
      <div id="title">
        <h1>Deutsch</h1>
      </div>
      <div id="reminder">
        <img
          id="berlin-reminder"
          src="https://cdn3.iconfinder.com/data/icons/landmark-vol-2/512/13_Berlin_Wall-512.png"
          alt=""
        />
      </div>
      <div id="word">
        <h2>klingt wie:</h2>
        <img id="word-img" src="" alt="" />
        <h3>{props.word}</h3>
      </div>
    </div>
  );
}

export default Deutsch;
