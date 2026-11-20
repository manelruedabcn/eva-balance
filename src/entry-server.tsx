import React from "react";
import {renderToString} from "react-dom/server";
import Home from "../app/page";
import {ProtectLanding} from "../app/ProtectLanding";
import {ProductsPage} from "../app/ProductsPage";
import {SessionsPage} from "../app/SessionsPage";
import {PrivacyPage} from "../app/PrivacyPage";
import {AboutPage} from "../app/AboutPage";
import {LntPage} from "../app/LntPage";
import {BlogArticle,BlogIndex,getBlogPost} from "../app/BlogPages";

const pages: Record<string, React.ComponentType> = {
  "/": Home,
  "/protect/": ProtectLanding,
  "/productos/": ProductsPage,
  "/sesiones/": SessionsPage,
  "/privacidad/": PrivacyPage,
  "/sobre-eva/": AboutPage,
  "/la-nueva-terapia-barcelona/": LntPage,
};

export function render(pathname: string) {
  const blogPost=getBlogPost(pathname);
  if(blogPost)return renderToString(<BlogArticle post={blogPost}/>);
  const Page=pathname==="/blog/"?BlogIndex:pages[pathname]??Home;
  return renderToString(<Page/>);
}
