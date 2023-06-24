import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  count: 0,
  price: 125,
};

const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    updateCart: (state, action) => {
      state.cart = state.cart.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((note) => note.id !== action.payload);
      console.log("deleted")
    },
    increaseCart: (state) => {
      state.count += 1;
    },
    decreaseCart: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
  },
});

export const { addCart, updateCart, deleteCart, increaseCart, decreaseCart } =
  productSlice.actions;

export default productSlice.reducer;
