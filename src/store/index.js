import tabsSlice from "./slices/tabs";
import pinSlice from "./slices/pins";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    tabs: tabsSlice.reducer,
    pins: pinSlice.reducer,
  },
  devTools: true,
});
export default store;
