import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FocusState {
  id: number;
}

const initialState: FocusState = {
  id: -1,
};

export const focusSlice = createSlice({
  name: "focus",
  initialState,
  reducers: {
    setFocus: (state, action: PayloadAction<any>) => {
      state.id = action.payload.id;
    },
  },
});

export const { setFocus } = focusSlice.actions;

export default focusSlice.reducer;
