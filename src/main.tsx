import React from "react";
import { ViteReactSSG } from "vite-react-ssg/single-page";
import App from "./App";
import "./style.css";

export const createRoot = ViteReactSSG(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
