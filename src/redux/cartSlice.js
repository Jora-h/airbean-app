import { createSlice } from '@reduxjs/toolkit'

// createSlice returns an object with `reducer` and `actions`
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [],
    },

    reducers: {
        addProduct: (state, { payload: { id, title, price, desc }}) => {
            const foundProduct = state.value.find(product => product.id === id);
            if(foundProduct) {
                foundProduct.count += 1;
                foundProduct.total = foundProduct.price * foundProduct.count;
            } else {
                state.value.push({ id, title, price, desc, count: 1, total: price });
            }
        },
        deletProduct: (state, {payload: {id}}) => {
            const foundProduct = state.value.find(product => product.id === id);
            if( foundProduct.count >1){
                foundProduct.count -=1;
                foundProduct.total = foundProduct.price * foundProduct.count;
            } else {
                state.value = state.value.filter(product => product.id !== id);
            }
        }
    }
});

export const { addProduct, deletProduct } = cartSlice.actions;

export const selectCart = (state) => state.cart.value;

export default cartSlice.reducer;