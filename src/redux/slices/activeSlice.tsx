import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: any = {
    id: -1,
}

export const activeSlice = createSlice({
    name: 'active',
    initialState,
    reducers: {
        setActive: (state, action: PayloadAction<any>) => {
            state.id = action.payload.id;
        },
        removeActive: (state) => {
            state.id = -1;
        },
    }
});

export const {setActive, removeActive} = activeSlice.actions;

export default activeSlice.reducer;