import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  todos: window.localStorage.getItem("todos")
    ? JSON.parse(window.localStorage.getItem("todos") as string)
    : [],
};
const saveToLocalStorage = (state: any) => {
  window.localStorage.setItem("todos", JSON.stringify(state.todos));
};
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<any>) => {
      state.todos.push(action.payload);
      saveToLocalStorage(state);
    },
    removeTodo: (state, action: PayloadAction<any>) => {
      state.todos = state.todos.filter(
        (todo: any) => todo.id !== action.payload.id
      );
      saveToLocalStorage(state);
    },
    updateTodo: (state, action: PayloadAction<any>) => {
      state.todos = state.todos.map((todo: any) => {
        if (todo.id === action.payload.id) {
          todo = action.payload;
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
