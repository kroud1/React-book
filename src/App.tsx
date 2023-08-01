import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Todo from "./views/Todo";
import User from "./views/User";
import SignUp from "./views/AuthenticationView/SignUpView";
import SignIn from "./views/AuthenticationView/SignInView";
import JsCookie from "./cookies/views";
import UserAskList from "./views/Ask/UserAskList";
import UserAskWriter from "./views/Ask/UserAskWriter";
import UserAskUpdate from "./views/Ask/UserAskUpdate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Todo" element={<Todo />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/signIn"
          element={
            <CookiesProvider>
              <SignIn />
            </CookiesProvider>
          }
        />
        <Route path="/user" element={<User />} />
        <Route path="/jsCookie" element={<JsCookie />} />
        <Route path="/userAskList" element={<UserAskList />} />
        <Route path="/userAskWriter" element={<UserAskWriter />} />
        <Route path="/userAskUpdate/:askId" element={<UserAskUpdate />} />
      </Routes>
    </>
  );
}

export default App;
