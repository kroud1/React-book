import "./App.css";
import { Routes, Route,} from "react-router-dom";
import Todo from "./views/Todo";
import User from "./views/User";
import React from "react";
function App() {
  return (
    <>
      <Todo />
      <Routes>
        <Route path="/user" element={<User />} />

      </Routes>
    </>
  );
}

export default App;
