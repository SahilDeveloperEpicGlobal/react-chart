import store from "@/store";
import "@/styles/globals.scss";
import { Provider } from "react-redux";
function RootApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default RootApp;
