// 사용자 관리 애플리케이션(사용자 추가 조회 수정 삭제)
// 속성: id, name, age
// 선택된 사용자를 관리하는 selectedUser 상태

import create from 'zustand'

interface User{
    id: number;
    name: string;
    age: number;
};

interface State {
    users: User[];
    selectedUser: User | null;
    addUser: (name: string, age: number) => void;
    selectUser: (user: User | null) => void;
    deleteUser: (id: number) => void;
    updateUser: (id: number, name: string, age: number) => void;
}

let userId = 1;

const useStore = create<State>((set) => ({
    users: [],
    selectedUser: null,
    addUser: (name, age) => set((state) => ({
        ...state, users:[...state.users, { id: userId++, name, age }],
    })),
    selectUser: (user) => set(() => ({
        selectedUser: user,
    })),
    deleteUser: (id) => set((state) => ({
        ...state,
        users: state.users.filter((user) => user.id !== id)
    })),
    updateUser: (id, name, age) => set((state) => ({
        ...state,
        users: state.users.map(user => user.id === id ? {id, name, age} : user)
    }))
}))

export default useStore;