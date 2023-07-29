import { create } from "zustand";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

// type for zustand store
type Store = {
  todos: Todo[];
  newTodo: string;
  loadData: (todos: Todo[]) => void;
  addTodo: () => void;
  setNewTodo: (text: string) => void;
  updateTodo: (id: number, text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

const useStore = create<Store>((set) => ({
  todos: [],
  newTodo: "",
  loadData(todos) {
    set((state) => ({
      ...state,
      todos,
    }));
  },
  addTodo() {
    set((state) => ({
      ...state,
      todos: addTodo(state.todos, state.newTodo),
      newTodo: "",
    }));
  },
  setNewTodo(text: string) {
    set((state) => ({
      ...state,
      newTodo: text,
    }));
  },
  updateTodo(id, text) {
    set((state) => ({
      ...state,
      todos: updateTodo(state.todos, id, text),
    }));
  },
  removeTodo(id: number) {
    set((state) => ({
      ...state,
      todos: removeTodo(state.todos, id),
    }));
  },
  toggleTodo(id: number) {
    set((state) => ({
      ...state,
      todos: toggleTodo(state.todos, id),
    }));
  },
}));

export default useStore;
