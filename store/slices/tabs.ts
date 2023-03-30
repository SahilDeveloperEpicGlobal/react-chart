import { createSlice } from "@reduxjs/toolkit";

type State = {
  tabOne: string;
  tabTwo: string;
};

const initialState: State = {
  tabOne: "M1",
  tabTwo: "",
};
const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    updateTab: (state: any, action: any) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { updateTab } = tabsSlice.actions;
export default tabsSlice;
