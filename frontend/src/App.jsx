import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Welcom from "./pages/Welcome";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcom />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses/:id?" element={<Courses />} />
        </Routes>
      </Router>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "bg-gray-800 text-white",
          duration: 3000,
          style: {
            fontSize: "16px"
          }
        }}
      />
    </>
  )
}

export default App
