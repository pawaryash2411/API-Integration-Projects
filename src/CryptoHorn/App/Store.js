import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../Services/CryptoAPI";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { cryptoNewsApi } from "../Services/CryptoNewsAPI";

const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cryptoApi.middleware)
      .concat(cryptoNewsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
