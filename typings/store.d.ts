import store from "@/store";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

type ActionTypes<K> = {
  action: string;
  payload: {
    key: K;
    value: any;
  };
};
