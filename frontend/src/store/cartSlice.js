import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action) {
      state.cartList.push(action.payload);
    },
    removeCart(state,action){
     const id=action.payload;
     const delIndex=state.cartList.findIndex((i)=>i._id===id)
     state.cartList.splice(delIndex,1);
    }
  },
});

export const { addCart,removeCart } = cartSlice.actions;
export default cartSlice.reducer;