import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { css, styled } from "styled-components";
import { useStore } from "../stores/store";

// 스타일 컴포넌트 설치
// npm i styled-components / npm i @types/styled-components
const CircleButton = styled.button<{ open: boolean }>`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;

  // props.open이 true일 때 추가적인 스타일 적용
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

// 입력 폼 위치를 설정하는 컴포넌트
const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

// 입력 폼 스타일링
const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

// 입력 필드 스타일링
const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const addTodo = useStore((state) => state.addTodo);

  const onToggle = () => setOpen(!open);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.elements[0] as HTMLFormElement;
    const { value } = input;
    addTodo({
      id: Date.now(),
      text: value,
      done: false,
    });

    input.value = "";
    setOpen(false);
    // addTodo(value);
  };
  return (
    <>
      {/* open 상태가 true일 때만 폼을 렌더링 */}
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input autoFocus placeholder="할 일을 입력 후, Enter를 누르세요" />
          </InsertForm>
        </InsertFormPositioner>
      )}
      {/* 클릭시 onToggle 함수를 호출하는 CircleButton */}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}
export default TodoCreate;
