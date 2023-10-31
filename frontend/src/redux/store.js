import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";
import orderSlice from "./slices/orderSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
    order: orderSlice,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
