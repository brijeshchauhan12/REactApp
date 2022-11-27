import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:[],
};

export const mysqlSlice = createSlice({
  name: 'auth',
  initialState:initialState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      state=state;
      // const newItem = action.payload;
      // const existingItem = state.items.find((item) => item.id === newItem.id);
      // state.totalQuantity++;
      // state.changed = true;
      // if (!existingItem) {
      //   state.items.push({
      //     id: newItem.id,
      //     price: newItem.price,
      //     quantity: 1,
      //     totalPrice: newItem.price,
      //     name: newItem.title,
      //   });
      // } else {
      //   existingItem.quantity++;
      //   existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      // }
    },
    
  },
})

// Action creators are generated for each case reducer function
export const mysqlSliceActions = mysqlSlice.actions

export default mysqlSlice.reducer;