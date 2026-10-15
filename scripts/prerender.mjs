import {readFile, writeFile} from "node:fs/promises";
import {resolve} from "node:path";
import {createServer} from "vite";

const routes = [
  ["/", "dist/index.html"],
  ["/productos/", "dist/productos/index.html"],
  ["/protect/", "dist/protect/index.html"],
  ["/sesiones/", "dist/sesiones/index.html"],
];

const vite=await createServer({
  appType:"custom",
  logLevel:"error",
  server:{middlewareMode:true},
});

try{
  const {render}=await vite.ssrLoadModule("/src/entry-server.tsx");
  for(const [route,output] of routes){
    const file=resolve(output);
    const template=await readFile(file,"utf8");
    const html=template.replace(
      /<div id="root">[\s\S]*?<\/div>/,
      `<div id="root" data-prerendered="true">${render(route)}</div>`,
    );
    await writeFile(file,html);
  }
}finally{
  await vite.close();
}
