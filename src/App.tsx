import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Todo from "./views/Todo";
import User from "./views/User";
import SignUp from "./views/AuthenticationView/SignUpView";

function App() {
  return (
    <>
      <Todo />
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
