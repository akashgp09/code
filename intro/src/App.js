import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes/routes";
import { Link, useHistory } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes />
        </div>
      </div>
    </>
  );
}

export default App;
