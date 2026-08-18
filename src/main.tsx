import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../app/page";
import "../app/globals.css";

const previewTheme = new URLSearchParams(window.location.search).get("theme");
document.documentElement.dataset.theme = previewTheme === "turquesa" ? "turquesa" : "lila";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
