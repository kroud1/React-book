import React from "react";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import TodoTemplate from "./TodoTemplate";
import { createGlobalStyle } from "styled-components";

//! Todo 리스트

// 컴포넌트 구성

// 1. TodoTemplate : 투두리스트의 레이아웃을 설정하는 컴포넌트, 페이지 중앙에 위치한 흰색 박스 형태
// 2. TodoHead : 오늘의 날짜 & 요일, 앞으로 해야 할 일이 몇개 남았는지 보여준다.
// 3. TodoList : 할 일에 대한 정보가 들어있는 todos 배열을 내장함수 map을 사용하여 여러개의 TodoItem 컴포넌트를 렌더링
// 4. TodoItem : 각 할 일에 대한 정보를 렌더링, 좌측에 원을 누르면 할 일의 완료 여부 지정 가능
// 5. TodoCreate : 새로운 할 일을 등록할 수 있게 해주는 컴포넌트

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
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
