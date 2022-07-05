import React from "react";
import { render } from "react-dom";
import "./App.css";

export default function App() {
  return (
    <div className="content">
      <header>Welcome to your Chrome extension!</header>
      <p>This is a setup for chrome extensions made with React and Webpack</p>
    </div>
  )
}

render(<App />, document.getElementById("react-target"));
