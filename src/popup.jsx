import React from "react";
import { render } from "react-dom";

export default function Popup() {
  return (
    <div>popup</div>
  )
}

render(<Popup />, document.getElementById("react-target"));
