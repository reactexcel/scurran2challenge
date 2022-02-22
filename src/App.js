import React from "react";
import Registration from "./components/Registration/registrationForm";
import Dashboard from "./components/Dashboard"
// import CreatePoll from "./Components/CreatePoll/CreatePoll";
import Login from "./components/Login/Login";

// import EditPoll from "./Components/Updatepoll/EditPoll"
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import PrivateRouting from "./privateRouting";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard/>} /> 
        {/* <PrivateRouting path="/createpoll" component={CreatePoll} />
        <PrivateRouting path="/admin/edit/:id"component={EditPoll}/>  */}
      </Routes>
    </>
  );
}

export default App;
