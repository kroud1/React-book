import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./Todo/TodoTemplate";
import TodoHead from "./Todo/TodoHead";
import TodoList from "./Todo/TodoList";
import TodoItem from "./Todo/TodoItem";
import TodoCreate from "./Todo/TodoCreate";

const GlobalStyle = createGlobalStyle`
    body{
        // background: #e9ecef;
        background: #cee456;
    }
`;

function Todo() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default Todo;
