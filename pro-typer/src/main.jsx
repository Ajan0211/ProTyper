/**
 * @author Ajanthapan Agilaruben
 * This file is the file that allows the context providers to wrap arround the App and browser context
 * wraps around the whole thing to ensure the contexts are accessible throughout the applications.
 * @date 1/4/2024 - 11:33:27 AM
 *
 * @returns {Navbar component as well as instructions on what to do to reset password.}
 */

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
    <ThemeContextProvider>
      <BagContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </BagContextProvider>
    </ThemeContextProvider>
  </BrowserRouter>
  // {/* </React.StrictMode> */}
);
