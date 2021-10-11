import "../styles/globals.css";
import { DataLayer } from "../context-api/DataLayer";
import reducer, { initialState } from "../context-api/reducer";

function MyApp({ Component, pageProps }) {
  return (
    <DataLayer initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </DataLayer>
  );
}

export default MyApp;
