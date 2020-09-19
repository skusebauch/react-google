import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { StateProvider } from "./store/context/stateProvider";
import reducer, { initialState } from "./store/reducer/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider intialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
