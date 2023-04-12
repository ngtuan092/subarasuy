import { configureStore } from "@reduxjs/toolkit";
import focusSlice from "./slices/focusSlice";
import activeSlice from "./slices/activeSlice";
import todosSlice from "./slices/todosSlice";

export const store = configureStore({
  reducer: {
    focus: focusSlice,
    active: activeSlice,
    todos: todosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
