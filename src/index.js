

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "App";

import { MaterialUIControllerProvider } from "context";
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider } from 'rsuite'

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <HashRouter>
    <MaterialUIControllerProvider>
    <CustomProvider>
        <App />
      </CustomProvider >
    </MaterialUIControllerProvider>
  </HashRouter>
);
