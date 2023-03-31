import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
  cartQuantity: 0,
  totalPrice: 0,
  searchValue: "",
};

export const productSlice = createSlice({
  name: "productsAndCart",
  initialState,
  reducers: {
    getProducts: (state, { payload }) => {
      state.products = payload;
    },
    addToCart: (state, { payload }) => {
      state.totalPrice += payload.price;
      state.cartQuantity += 1;
      const isExisted = state.cart.find(
        (cartItem) => cartItem.id == payload.id
      );
      if (!isExisted) {
        state.cart = [
          ...state.cart,
          {
            ...payload,
            buyPrice: payload.buyPrice + payload.price,
            quantity: payload.quantity + 1,
          },
        ];
      }
      if (isExisted) {
        state.cart.map((cartItem) => {
          if (cartItem.id == payload.id) {
            cartItem.buyPrice = cartItem.buyPrice + cartItem.price;
            cartItem.quantity++;
          }
          return cartItem;
        });
      }
    },
    removeCartItem: (state, { payload }) => {
      state.cart = state.cart.filter((cartItem) => cartItem.id !== payload.id);
      state.totalPrice -= payload.buyPrice;
      state.cartQuantity -= payload.quantity;
    },
    increase: (state, { payload }) => {
      state.cart = state.cart.map((cartItem) => {
        if (cartItem.id == payload.id) {
          cartItem.quantity += 1;
          cartItem.buyPrice += cartItem.price;
          state.cartQuantity += 1;
          state.totalPrice += cartItem.price;
        }
        return cartItem;
      });
    },
    decrease: (state, { payload }) => {
      state.cart = state.cart.map((cartItem) => {
        if (cartItem.id == payload.id) {
          cartItem.quantity -= 1;
          cartItem.buyPrice -= cartItem.price;
          state.cartQuantity -= 1;
          state.totalPrice -= cartItem.price;
        }
        return cartItem;
      });
    },
    updateSearch: (state, { payload }) => {
      state.searchValue = payload;
    },
    checkOut: (state) => {
      state.cart = [];
      state.products = state.products.map((product) => {
        product.quantity = 1;
        product.added = false;
        product.buyPrice = product.price;
        return product;
      });
      state.cartQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getProducts,
  addToCart,
  removeCartItem,
  increase,
  decrease,
  updateSearch,
  checkOut,
} = productSlice.actions;

export default productSlice.reducer;
