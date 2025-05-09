import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        console.log('Before: ', JSON.parse(JSON.stringify(state.items)));

        const existingItem = state.items.find(item => item.name === action.payload.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1});
            };    
        console.log('After: ', JSON.parse(JSON.stringify(state.items)));

    },
    removeItem: (state, action) => {
        console.log('Before: ', JSON.parse(JSON.stringify(state.items)));
        state.items = state.items.filter(item => item.name !== action.payload);
        console.log('After: ', JSON.parse(JSON.stringify(state.items)));
    },
    updateQuantity: (state, action) => {
        const {name, amount} = action.payload;
        console.log(name, amount);
        const existingItem = state.items.find(item => item.name === name);
        console.log('Existing Item to update: ', existingItem);
            if (existingItem) {
                existingItem.quantity = amount;
            }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
