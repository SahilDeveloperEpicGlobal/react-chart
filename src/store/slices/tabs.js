import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tab: "Aluminum",
  pin: [],
  content: {},
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
    addContent: (state, action) => {
      state.content = action.payload;
    },
    removePin: (state, action) => {
      console.log("Payload", action.payload);
      state.pin = state.pin.filter((item) => item !== action.payload);
    },
  },
});
export const { updateTab, addPin, addContent, removePin } = tabsSlice.actions;
export default tabsSlice;
