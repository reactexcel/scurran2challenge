import React from "react";
import Registration from "./components/Registration/registrationForm";
import Dashboard from "./components/Dashboard"
import AddHotel from "./components/AddHotel";
import Login from "./components/Login/Login";

// import EditPoll from "./Components/Updatepoll/EditPoll"
import { Routes, Route } from "react-router-dom";
import "./App.css";
import EditForm from "../src/components/EditForm"
// import PrivateRouting from "./privateRouting";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/addhotel" element={<AddHotel/>} />  
        <Route path="/dashboard" element={<Dashboard/>} /> 
        <Route path="/edit" element={<EditForm/>} /> 
        {/* <PrivateRouting path="/createpoll" component={CreatePoll} />
        <PrivateRouting path="/admin/edit/:id"component={EditPoll}/>  */}
      </Routes>
    </>
  );
}

export default App;
