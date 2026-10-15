import React from "react";
import {createRoot, hydrateRoot} from "react-dom/client";
import Home from "../app/page";
import {ProtectLanding} from "../app/ProtectLanding";
import {ProductsPage} from "../app/ProductsPage";
import {SessionsPage} from "../app/SessionsPage";
import "../app/globals.css";
document.documentElement.dataset.theme="lila";
const pathname=window.location.pathname.replace(/\/$/,"")||"/";
const isProtectPage=pathname==="/protect"||new URLSearchParams(window.location.search).get("ritual")==="protect";
const isSessionsPage=pathname==="/sesiones";
const isProductsPage=pathname==="/productos";
if(isProtectPage){document.title="Momento PROTECT | Eva Balance";document.querySelector('meta[name="description"]')?.setAttribute("content","Guía de uso de PROTECT: una pausa breve para volver a tu centro y acompañar tu intención de protección.")}else if(isSessionsPage){document.title="Sesiones con Eva | Eva Balance";document.querySelector('meta[name="description"]')?.setAttribute("content","Sesiones individuales y grupales con Eva mediante LNT® y Barras de Access. Presenciales en Barcelona y Garraf, o a distancia.")}else if(isProductsPage){document.title="Productos con intención | Eva Balance";document.querySelector('meta[name="description"]')?.setAttribute("content","Esencias, joyas aromáticas y objetos elegidos por Eva para acompañar tu intención. Descubre PROTECT y la colección Eva Balance.")}
const Page=isProtectPage?ProtectLanding:isSessionsPage?SessionsPage:isProductsPage?ProductsPage:Home;
const root=document.getElementById("root")!;
const app=<React.StrictMode><Page/></React.StrictMode>;
if(root.dataset.prerendered==="true"){
  hydrateRoot(root,app);
}else{
  createRoot(root).render(app);
}
