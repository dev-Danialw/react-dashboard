import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

// context
import { ContextProvider } from "./context/ContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
