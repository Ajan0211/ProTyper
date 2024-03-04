import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserContextProvider } from "./userContext";
import { ThemeContextProvider } from "./themeContext";
import { BagContextProvider } from "./BagContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <BagContextProvider>
      <ThemeContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </ThemeContextProvider>
    </BagContextProvider>
  </BrowserRouter>
  // {/* </React.StrictMode> */}
);
