import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./pages/home";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./pages/Cards";
import Layout from "./layout/Layout";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/Cards" element={<Cards />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
