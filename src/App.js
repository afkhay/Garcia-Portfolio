import React from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

import "./components/Sidebar.css"
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;