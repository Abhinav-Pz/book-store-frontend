import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        updateCart: (state, action) => [...state, action.payload]
    }
})

export const { updateCart } = cartSlice.actions
export default cartSlice.reducer