import React from "react";
import {renderToStaticMarkup} from "react-dom/server";
import Home from "../app/page";
import {ProtectLanding} from "../app/ProtectLanding";
import {ProductsPage} from "../app/ProductsPage";
import {SessionsPage} from "../app/SessionsPage";

const pages: Record<string, React.ComponentType> = {
  "/": Home,
  "/protect/": ProtectLanding,
  "/productos/": ProductsPage,
  "/sesiones/": SessionsPage,
};

export function render(pathname: string) {
  const Page=pages[pathname]??Home;
  return renderToStaticMarkup(<Page/>);
}
