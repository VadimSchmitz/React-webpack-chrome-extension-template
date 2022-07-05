import React from "react";
import { createRoot } from 'react-dom/client';

import "./App.css";

export default function App() {
  return (
    <div className="content">
      <header>Welcome to your Chrome extension!</header>
      <p>This is a setup for chrome extensions made with React and Webpack</p>
    </div>
  )
}

const root = createRoot( document.getElementById("app"));
root.render(<App />);
