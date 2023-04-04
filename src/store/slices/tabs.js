import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tab: "M1",
  pin: [],
};
const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    updateTab: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    addPin: (state, action) => {
      if (state.pin.includes(action.payload)) {
        state.pin = state.pin.filter((item) => item !== action.payload);
        return state;
      }
      if (state.pin.length > 2) {
        return state;
      }
      state.pin.push(action.payload);
    },
  },
});
export const { updateTab, addPin } = tabsSlice.actions;
export default tabsSlice;
