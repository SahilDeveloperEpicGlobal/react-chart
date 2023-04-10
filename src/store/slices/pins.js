import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  once: {
    name: "",
    country: "",
    url: "",
  },
  pinned: [],
};
const pinSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    updateState: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    updatePin: (state, action) => {
      if (state.pinned.length > 1) {
        return state;
      }
      state.pinned.push(action.payload);
    },
    removePin: (state, action) => {
      state.pinned = state.pinned.filter(
        (item) => item?.name !== action.payload?.name
      );
    },
  },
});
export const { updateState, updatePin, removePin } = pinSlice.actions;
export default pinSlice;

// {
//   name: "",
//   country: "",
//   url: "",
// },
//   if (
//     state.pinned.some((item) => item?.name?.includes(action.payload?.name))
//   ) {
//     state.pinned = state.pinned.filter(
//       (item) => item?.name !== action.payload?.name
//     );
//     return state;
//   }
