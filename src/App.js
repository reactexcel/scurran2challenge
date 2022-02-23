import React from "react";
import Registration from "./components/Registration/registrationForm";
import Dashboard from "./components/Dashboard";
import AddHotel from "./components/AddHotel";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import EditForm from "../src/components/EditForm";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/edit/:id" element={<EditForm />} />
        <Route path="/addhotel" element={<AddHotel />} />
      </Routes>
    </>
  );
}

export default App;
