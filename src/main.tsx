import React from "react";
import {createRoot, hydrateRoot} from "react-dom/client";
import Home from "../app/page";
import {ProtectLanding} from "../app/ProtectLanding";
import {ProductsPage} from "../app/ProductsPage";
import {SessionsPage} from "../app/SessionsPage";
import {PrivacyPage} from "../app/PrivacyPage";
import {AboutPage} from "../app/AboutPage";
import {LntPage} from "../app/LntPage";
import {BlogArticle,BlogIndex,getBlogPost} from "../app/BlogPages";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/cormorant-garamond/latin-600.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "@fontsource/cormorant-garamond/latin-500-italic.css";
import "@fontsource/inter/latin-300.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "../app/globals.css";
import "../app/isotipo.css";
document.documentElement.dataset.theme="lila";
const pathname=window.location.pathname.replace(/\/$/,"")||"/";
const isProtectPage=pathname==="/protect"||new URLSearchParams(window.location.search).get("ritual")==="protect";
const isSessionsPage=pathname==="/sesiones";
const isProductsPage=pathname==="/productos";
const isBlogIndex=pathname==="/blog";
const isPrivacyPage=pathname==="/privacidad";
const isAboutPage=pathname==="/sobre-eva";
const isLntPage=pathname==="/la-nueva-terapia-barcelona";
const blogPost=getBlogPost(pathname);
if(isProtectPage){document.title="Momento PROTECT: guía de uso de la esencia | Eva Balance";document.querySelector('meta[name="description"]')?.setAttribute("content","Guía de uso de PROTECT: una pausa breve para volver a tu centro y acompañar tu intención de protección.")}else if(isSessionsPage){document.title="Sesiones de LNT y Barras de Access | Eva Balance";document.querySelector('meta[name="description"]')?.setAttribute("content","Terapia de Barras de Access y LNT® con Eva Garijo, terapeuta energética, en Barcelona, Sitges o a distancia. 60 € por sesión, sin packs.")}else if(isProductsPage){document.title="Esencias y joyas aromáticas con intención | Eva Balance";document.querySelector('meta[name="description"]')?.setAttribute("content","Esencias, joyas aromáticas y objetos elegidos por Eva para acompañar tu intención. Descubre PROTECT y la colección Eva Balance.")}
const Page=isLntPage?LntPage:isAboutPage?AboutPage:isPrivacyPage?PrivacyPage:isProtectPage?ProtectLanding:isSessionsPage?SessionsPage:isProductsPage?ProductsPage:isBlogIndex?BlogIndex:blogPost?()=> <BlogArticle post={blogPost}/>:Home;
const root=document.getElementById("root")!;
const app=<React.StrictMode><Page/></React.StrictMode>;
if(root.dataset.prerendered==="true"){
  hydrateRoot(root,app);
}else{
  createRoot(root).render(app);
}
