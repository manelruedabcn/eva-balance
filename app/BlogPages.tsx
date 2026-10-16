import posts from "../content/blog-posts.json";
import {PageShell,whatsapp} from "./SiteShell";
import "./blog.css";

export type BlogPost=(typeof posts)[number];

export function getBlogPost(pathname:string){
  const slug=pathname.replace(/^\/blog\/?/,"").replace(/\/$/,"");
  return posts.find(post=>post.slug===slug);
}

export function BlogIndex(){return <PageShell><main className="blog-page">
  <section className="blog-hero"><p className="section-kicker">Blog Eva Balance</p><h1>Ideas para escucharte<br/><em>con más calma.</em></h1><p>Artículos sobre LNT®, presencia y autocuidado escritos desde una mirada clara, cercana y responsable.</p></section>
  <section className="blog-list section-wrap" aria-labelledby="blog-list-title"><div className="blog-list-heading"><p className="section-kicker">Últimos artículos</p><h2 id="blog-list-title">Una pausa para leer.</h2></div><div className="blog-grid">{posts.map((post,index)=><article className={index===0?"blog-card blog-card-featured":"blog-card"} key={post.slug}><div className="blog-card-meta"><span>{post.category}</span><time dateTime={post.date}>{formatDate(post.date)}</time></div><h3><a href={`/blog/${post.slug}/`}>{post.title}</a></h3><p>{post.description}</p><a className="text-arrow" href={`/blog/${post.slug}/`}>Leer artículo <span>→</span></a></article>)}</div></section>
</main></PageShell>}

export function BlogArticle({post}:{post:BlogPost}){return <PageShell><main className="article-page">
  <article>
    <header className="article-header"><a className="article-back" href="/blog/">← Volver al blog</a><div className="article-meta"><span>{post.category}</span><time dateTime={post.date}>{formatDate(post.date)}</time><span>{post.readingTime} de lectura</span></div><h1>{post.title}</h1><p>{post.description}</p></header>
    <div className="article-layout"><div className="article-body"><p className="article-intro">{post.intro}</p>{post.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}<aside className="article-note"><strong>Una mirada responsable</strong><p>Las sesiones de Eva Balance son complementarias y no sustituyen la atención médica, psicológica o de otros profesionales sanitarios.</p></aside></div><aside className="article-cta"><p className="section-kicker">Sesiones con Eva</p><h2>Un espacio para parar y escucharte.</h2><p>Presencial en Barcelona y Garraf, o a distancia con instrucciones sencillas.</p><a className="solid-button" href={whatsapp} target="_blank" rel="noreferrer">Hablar con Eva</a></aside></div>
  </article>
  <section className="related-posts section-wrap"><p className="section-kicker">También puede interesarte</p><div className="related-grid">{relatedPosts(post).map(item=><article key={item.slug}><span>{item.category}</span><h2><a href={`/blog/${item.slug}/`}>{item.title}</a></h2><a className="text-arrow" href={`/blog/${item.slug}/`}>Leer <span>→</span></a></article>)}</div></section>
</main></PageShell>}

function relatedPosts(post:BlogPost){const index=posts.findIndex(item=>item.slug===post.slug);return [posts[(index+1)%posts.length],posts[(index+2)%posts.length]]}
function formatDate(date:string){return new Intl.DateTimeFormat("es-ES",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(`${date}T00:00:00Z`))}
export{posts};
