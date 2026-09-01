import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../app/page";
import { ProtectLanding } from "../app/ProtectLanding";
import "../app/globals.css";

const previewTheme = new URLSearchParams(window.location.search).get("theme");
document.documentElement.dataset.theme = previewTheme === "turquesa" ? "turquesa" : "lila";

const isProtectPage = window.location.pathname.replace(/\/$/, "") === "/protect"
  || new URLSearchParams(window.location.search).get("ritual") === "protect";

if (isProtectPage) {
  document.title = "Momento PROTECT | Eva Balance";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    "Guía de uso de PROTECT: una pausa breve para volver a tu centro y acompañar tu intención de protección.",
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {isProtectPage ? <ProtectLanding /> : <Home />}
  </React.StrictMode>,
);
