import React from "react";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";

export default function index() {
  return (
    <div>
      <UserList />
      <UserForm />
    </div>
  );
}
