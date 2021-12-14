import React from "react";
import ReactDOM from "react-dom";

import Canvas from "./Canvas";


ReactDOM.hydrate(
  <Canvas />,
  document.getElementById("canvas")
);