import React from "react";
import tabsSlice from "../slices/tabs";
import useAppDispatch from "./use-dispatch";
import useAppSelector from "./use-selector";

const actions = tabsSlice.actions;
const useTabs = () => {
  const send = useAppDispatch();
  const tabsState = useAppSelector((s) => s.tabs);
  type Keys = keyof typeof tabsState;

  const updateTab = React.useCallback(
    (key: Keys, value: string) => {
      send(actions.updateTab({ key, value }));
    },
    [send]
  );
  // Return Values
  return {
    tabsState,
    updateTab: React.useMemo(() => updateTab, [updateTab]),
  };
};
export default useTabs;
