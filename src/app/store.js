import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/ecommerceSlice";
export const store = configureStore({
  reducer: {
    productsAndCart: productSlice,
  },
});
