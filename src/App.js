import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import comp
import LogIn from "./layout/Login";
import SignUp from "./layout/SignUp";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const token = localStorage.getItem("access_token");
  console.log(token, "token");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn />} default />
          {token && <Route path="/" element={<Dashboard />} />}
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
