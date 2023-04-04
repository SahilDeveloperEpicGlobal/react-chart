import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tabOne: "M1",
  tabTwo: "",
  pin: ["M1"],
};
const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    updateTab: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    addPin: (state, action) => {
      state.pin.push(action.payload);
    },
  },
});
export const { updateTab } = tabsSlice.actions;
export default tabsSlice;
