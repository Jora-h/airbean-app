import { createSlice } from '@reduxjs/toolkit'

// createSlice returns an object with `reducer` and `actions`
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [],
    },

    reducers: {
        addProduct: (state, { payload: { id, title, price, desc }}) => {
            state.value.push({ id, title, price, desc });
        },
        // deletProduct: (state) => {
        // }
    }
});

export const { addProduct } = cartSlice.actions;

export const selectCart = (state) => state.cart.value; 

export default cartSlice.reducer;