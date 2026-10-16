import {mkdir,readFile,writeFile} from "node:fs/promises";
import {resolve} from "node:path";

const posts=JSON.parse(await readFile(resolve("content/blog-posts.json"),"utf8"));

function shell({title,description,canonical,jsonLd}){return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${description}" />
    <meta name="robots" content="index, follow" />
    <link rel="describedby" type="text/markdown" href="https://eva-balance.com/llms.txt" />
    <link rel="canonical" href="${canonical}" />
    <link rel="icon" type="image/svg+xml" href="/heart-eva.svg" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${canonical}" />
    <meta name="twitter:card" content="summary" />
    <script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g,"\\u003c")}</script>
    <title>${title}</title>
  </head>
  <body>
    <div id="root"><main><h1>${title.replace(" | Eva Balance","")}</h1><p>${description}</p></main></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`}

await mkdir(resolve("blog"),{recursive:true});
await writeFile(resolve("blog/index.html"),shell({
  title:"Blog de bienestar consciente | Eva Balance",
  description:"Artículos de Eva Balance sobre LNT®, presencia, sesiones y autocuidado desde una mirada clara y responsable.",
  canonical:"https://eva-balance.com/blog/",
  jsonLd:{"@context":"https://schema.org","@type":"Blog","name":"Blog Eva Balance","url":"https://eva-balance.com/blog/","description":"Artículos sobre LNT®, presencia, sesiones y autocuidado."},
}));

for(const post of posts){
  const directory=resolve("blog",post.slug);
  await mkdir(directory,{recursive:true});
  const canonical=`https://eva-balance.com/blog/${post.slug}/`;
  await writeFile(resolve(directory,"index.html"),shell({
    title:`${post.title} | Eva Balance`,
    description:post.description,
    canonical,
    jsonLd:{"@context":"https://schema.org","@type":"BlogPosting","headline":post.title,"description":post.description,"datePublished":post.date,"dateModified":post.date,"author":{"@type":"Person","name":"Eva Garijo"},"publisher":{"@type":"Organization","name":"Eva Balance","url":"https://eva-balance.com/"},"mainEntityOfPage":canonical},
  }));
}
