import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import App from "./App.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
