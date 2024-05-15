import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Stock from "./component/stock/Stock";
import Layout from "./component/common/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="stock" element={<Stock />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
