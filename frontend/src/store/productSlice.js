import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.productList.push(...action.payload);
    },
   
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
