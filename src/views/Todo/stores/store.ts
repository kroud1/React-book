import create from "zustand";
import { MockTodos } from "../mocks/MockData";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodoState = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  countTasks: (state: TodoState) => number;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};
// 변화가 있을 때 filter 변화 없을 때 map
export const useStore = create<TodoState>((set) => ({
  //   todos: [
  //     { id: 1, text: "평일 웹 프론트엔드", done: false },
  //     { id: 2, text: "주말 웹 프론트엔드", done: false },
  //     { id: 3, text: "평일 방학특강 자바", done: true },
  //     { id: 4, text: "평일 방학특강 파이썬", done: true },
  //   ],
  todos: MockTodos,
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  countTasks: (state) => state.todos.filter((todo) => !todo.done).length,
  toggleTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    })),
  removeTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
