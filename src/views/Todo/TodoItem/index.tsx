import React from "react";
import styled, { css } from "styled-components";
import { MdDone } from "react-icons/md";
import { useStore } from "../stores/store";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dddddd;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: #ff66bb;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ done: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 15px;
  border: 1px solid #cecece;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) => props.done && css`border: 1px solid #38d9a9 color: #38d9a9`}
`;

const Text = styled.div<{ done: boolean }>`
  flex: 1;
  fonst-size: 21px;
  color: #494949;
  ${(props) =>
    props.done &&
    css`
      color: #eeeeee;
    `}
`;

interface TodoItemProps {
  id: number;
  done: boolean;
  text: string;
}

function TodoItem({ id, done, text }: TodoItemProps) {
  const toggleTodo = useStore((state) => state.toggleTodo);
  const removeTodo = useStore((state) => state.removeTodo);

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={() => toggleTodo(id)}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={() => removeTodo(id)}>
        <MdDone />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
