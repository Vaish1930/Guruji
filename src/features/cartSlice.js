import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [
      { id: 1, title: "Biscuit", qty: 0, price: 2 },
      { id: 2, title: "Maggi", qty: 0, price: 5 },
      { id: 3, title: "ColdCoffee", qty: 0, price: 50 },
    ],
  },
  reducers: {
    addAnItem: (state, action) => {
      state.products = [
        ...state.products,
        {
          id: state.products.length
            ? state.products[state.products.length - 1].id + 1
            : 1,
          title: action.payload.title,
          qty: 0,
          price: action.payload.price,
        },
      ];
    },
    incrementQuantity: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, qty: product.qty + 1 }
          : product
      );
    },
    decrementQuatity: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, qty: product.qty - 1 }
          : product
      );
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const {
  addAnItem,
  incrementQuantity,
  decrementQuatity,
  deleteProduct,
} = cartSlice.actions;

export const selectProducts = (state) => state.cart.products;

export default cartSlice.reducer;
