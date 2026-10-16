import posts from "../content/blog-posts.json";
import {PageShell,whatsapp} from "./SiteShell";
import "./blog.css";

export type BlogPost=(typeof posts)[number];

export function getBlogPost(pathname:string){
  const slug=pathname.replace(/^\/blog\/?/,"").replace(/\/$/,"");
  return posts.find(post=>post.slug===slug);
}

export function BlogIndex(){return <PageShell><main className="blog-page">
  <section className="blog-hero"><p className="section-kicker">Blog Eva Balance</p><h1>Ideas para escucharte<br/><em>con más calma.</em></h1><p>Artículos sobre LNT®, Barras de Access, presencia y autocuidado escritos desde una mirada clara, cercana y responsable.</p></section>
  <section className="blog-list section-wrap" aria-labelledby="blog-list-title"><div className="blog-list-heading"><p className="section-kicker">Últimos artículos</p><h2 id="blog-list-title">Una pausa para leer.</h2></div><div className="blog-grid">{posts.map((post,index)=><article className={index===0?"blog-card blog-card-featured":"blog-card"} key={post.slug}><div className="blog-card-meta"><span>{post.category}</span><time dateTime={post.date}>{formatDate(post.date)}</time></div><h3><a href={`/blog/${post.slug}/`}>{post.title}</a></h3><p>{post.description}</p><a className="text-arrow" href={`/blog/${post.slug}/`}>Leer artículo <span>→</span></a></article>)}</div></section>
</main></PageShell>}

export function BlogArticle({post}:{post:BlogPost}){return <PageShell><main className="article-page">
  <article>
    <header className="article-header"><a className="article-back" href="/blog/">← Volver al blog</a><div className="article-meta"><span>{post.category}</span><time dateTime={post.date}>{formatDate(post.date)}</time><span>{post.readingTime} de lectura</span></div><h1>{post.title}</h1><p>{post.description}</p></header>
    <div className="article-layout"><div className="article-body"><p className="article-intro"><RichText text={post.intro}/></p>{post.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}><RichText text={paragraph}/></p>)}</section>)}<aside className="article-note"><strong>Una mirada responsable</strong><p>Las sesiones de Eva Balance son complementarias y no sustituyen la atención médica, psicológica o de otros profesionales sanitarios.</p></aside><AuthorBox/></div><aside className="article-cta"><p className="section-kicker">Sesiones con Eva</p><h2>Un espacio para parar y escucharte.</h2><p>LNT® y Barras de Access, presencial en Barcelona (Eixample) y Sitges, o a distancia con instrucciones sencillas.</p><a className="solid-button" href="/sesiones/#precios">Ver sesiones y precios</a><a className="article-cta-secondary" href={whatsapp} target="_blank" rel="noreferrer">Hablar con Eva por WhatsApp →</a></aside></div>
  </article>
  <section className="related-posts section-wrap"><p className="section-kicker">También puede interesarte</p><div className="related-grid">{relatedPosts(post).map(item=><article key={item.slug}><span>{item.category}</span><h2><a href={`/blog/${item.slug}/`}>{item.title}</a></h2><a className="text-arrow" href={`/blog/${item.slug}/`}>Leer <span>→</span></a></article>)}</div></section>
</main></PageShell>}

function AuthorBox(){return <aside className="article-author" aria-label="Sobre la autora"><img src="/eva/eva-terapeuta.jpg" alt="Eva Garijo" width="96" height="96" loading="lazy"/><div><p className="article-author-kicker">Escrito por</p><p className="article-author-name">Eva Garijo</p><p>Terapeuta LNT® y practitioner de Barras de Access. Llegué a la LNT como paciente y hoy acompaño sesiones en el Eixample de Barcelona, en Sitges y a distancia.</p><a href="/sesiones/#sobre-eva">Conocer a Eva →</a></div></aside>}

/** Convierte enlaces con formato [texto](/ruta/) en <a>. */
function RichText({text}:{text:string}){
  const parts=text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return <>{parts.map((part,index)=>{const match=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);return match?<a key={index} href={match[2]}>{match[1]}</a>:part})}</>;
}

function relatedPosts(post:BlogPost){
  const others=posts.filter(item=>item.slug!==post.slug);
  const sameCategory=others.filter(item=>item.category===post.category);
  const rest=others.filter(item=>item.category!==post.category);
  return [...sameCategory,...rest].slice(0,2);
}
function formatDate(date:string){return new Intl.DateTimeFormat("es-ES",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(`${date}T00:00:00Z`))}
export{posts};
