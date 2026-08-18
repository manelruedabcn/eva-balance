import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../app/page";
import "../app/globals.css";

const previewTheme = new URLSearchParams(window.location.search).get("theme");
if (previewTheme === "turquesa" || previewTheme === "lila") {
  document.documentElement.dataset.theme = previewTheme;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
