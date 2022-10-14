import React from "react";
import Main from "./Pages/Main";
import PositionDetails from "./Pages/PositionDetails";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/jobs/position/:id" element={<PositionDetails />} />
      </Routes>
    </>
  );
}

export default App;
