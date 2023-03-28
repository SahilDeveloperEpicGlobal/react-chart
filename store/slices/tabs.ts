import { createSlice } from "@reduxjs/toolkit";

const tabsSlice = createSlice({
  name: "tabs",
  initialState: {
    tabName: "Col1",
  },
  reducers: {
    updateTab: (state, action) => {
      state.tabName = action.payload;
    },
  },
});

export default tabsSlice;
