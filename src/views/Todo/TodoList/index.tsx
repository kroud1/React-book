import React from "react";
import styled from "styled-components";
import TodoItem from "../TodoItem";
import { useStore } from "../stores/store";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 30px;
  padding-bottom: 50px;
  overflow-y: auto;
  background: gray;
`;

function TodoList() {
  const todos = useStore((state) => state.todos);

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
