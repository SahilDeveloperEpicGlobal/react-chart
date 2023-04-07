import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pin: [],
  content: {},
  colorPin: [
    // {
    //   name:'Aluminum',
    //   color:'eeffee'
    // }
  ],
  tab: "Aluminum",
};
const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    updateTab: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    addColorPin: (state, action) => {
      if (
        state.colorPin.some((item) =>
          item?.name?.includes(action.payload?.name)
        )
      ) {
        state.colorPin = state.colorPin.filter(
          (item) => JSON.stringify(item) !== JSON.stringify(action.payload)
        );
        return state;
      }
      if (state.colorPin.length > 2) {
        return state;
      }
      state.colorPin.push(action.payload);
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
      state.pin = state.pin.filter((item) => item !== action.payload);
    },
    removeColorPin: (state, action) => {
      state.colorPin = state.colorPin.filter(
        (item) => item?.name !== action.payload?.name
      );
    },
  },
});
export const {
  addPin,
  removePin,
  updateTab,
  addContent,
  addColorPin,
  removeColorPin,
} = tabsSlice.actions;
export default tabsSlice;
