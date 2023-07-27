import { create } from "zustand";

interface User {
  user: any;
  setUser: (user: any) => void;
  removeUser: () => void;
}

const useStore = create<User>((set) => ({
  user: null,
  setUser: (user: any) => {
    set((state) => ({ ...StaticRange, user }));
  },
  removeUser: () => {
    set((state) => ({ ...state, user: null }));
  },
}));

export default useStore;
