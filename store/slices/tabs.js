import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tabOne: "M1",
  tabTwo: "",
};
const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    updateTab: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});
export const { updateTab } = tabsSlice.actions;
export default tabsSlice;
