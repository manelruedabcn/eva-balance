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
    <meta property="og:image" content="https://eva-balance.com/og-eva-balance.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Eva Garijo, terapeuta LNT® y Barras de Access en Barcelona y Sitges" />
    <meta property="og:site_name" content="Eva Balance" />
    <meta property="og:locale" content="es_ES" />
    <meta name="twitter:card" content="summary_large_image" />
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
  description:"Artículos de Eva Garijo sobre LNT®, Barras de Access, presencia y autocuidado. Una mirada clara y responsable desde Barcelona y Sitges.",
  canonical:"https://eva-balance.com/blog/",
  jsonLd:{"@context":"https://schema.org","@type":"Blog","name":"Blog Eva Balance","url":"https://eva-balance.com/blog/","description":"Artículos sobre LNT®, Barras de Access, terapias energéticas y autocuidado."},
}));

for(const post of posts){
  const directory=resolve("blog",post.slug);
  await mkdir(directory,{recursive:true});
  const canonical=`https://eva-balance.com/blog/${post.slug}/`;
  const article={"@context":"https://schema.org","@type":"BlogPosting","headline":post.title,"description":post.description,"datePublished":post.date,"dateModified":post.date,"inLanguage":"es","image":"https://eva-balance.com/og-eva-balance.jpg","articleSection":post.category,"author":{"@type":"Person","@id":"https://eva-balance.com/#eva","name":"Eva Garijo","jobTitle":"Terapeuta LNT® y titulada en Barras de Access (nivel 1)","hasCredential":{"@type":"EducationalOccupationalCredential","name":"Barras de Access · Nivel 1","credentialCategory":"certificate","recognizedBy":{"@type":"Organization","name":"Access Consciousness"}},"url":"https://eva-balance.com/sesiones/#sobre-eva"},"publisher":{"@type":"Organization","name":"Eva Balance","url":"https://eva-balance.com/","logo":{"@type":"ImageObject","url":"https://eva-balance.com/logo-eva-balance-transparent.png"}},"mainEntityOfPage":canonical};
  // Si el artículo trae preguntas frecuentes, se declaran también como FAQPage.
  const faq=post.faq??[];
  const jsonLd=faq.length?{"@context":"https://schema.org","@graph":[{...article,"@context":undefined},{"@type":"FAQPage","mainEntity":faq.map(item=>({"@type":"Question","name":item.q,"acceptedAnswer":{"@type":"Answer","text":item.a.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1")}}))}]}:article;
  await writeFile(resolve(directory,"index.html"),shell({
    title:`${post.title} | Eva Balance`,
    description:post.description,
    canonical,
    jsonLd,
  }));
}

// Sitemap generado automáticamente: cada artículo nuevo de content/blog-posts.json entra solo.
const latest=posts.map(post=>post.date).sort().at(-1);
const staticUrls=[["/","1.0",latest],["/sesiones/","0.9",latest],["/productos/","0.8",latest],["/protect/","0.5",latest],["/blog/","0.8",latest]];
const urls=[...staticUrls,...posts.map(post=>[`/blog/${post.slug}/`,"0.7",post.date])];
await writeFile(resolve("public/sitemap.xml"),`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(([path,priority,lastmod])=>`  <url><loc>https://eva-balance.com${path}</loc><lastmod>${lastmod}</lastmod><priority>${priority}</priority></url>`).join("\n")}
</urlset>
`);
