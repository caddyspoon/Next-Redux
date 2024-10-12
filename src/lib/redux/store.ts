import { configureStore } from "@reduxjs/toolkit";

import cointBankReducer from "./slices/coinBankSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      coinBank: cointBankReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
