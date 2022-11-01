import React from "react";
import Main, { MemoizedMain } from "./Pages/Main";
import PositionDetails from "./Pages/PositionDetails";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<MemoizedMain />} />
        <Route path="/jobs/position/:slug" element={<PositionDetails />} />
      </Routes>
    </>
  );
}

export default App;
