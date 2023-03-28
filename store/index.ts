import { configureStore } from "@reduxjs/toolkit";
import tabsSlice from "./slices/tabs";

const store = configureStore({
  reducer: {
    tabs: tabsSlice.reducer,
  },
  devTools: true,
});

export default store;
