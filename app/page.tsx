import { ProductCatalog } from "./ProductCatalog";

export default function Home() {
  return (
    <main>
      <aside className="palette-preview palette-turquesa" aria-label="Paleta turquesa de la simulación">
        <strong>Paleta turquesa</strong>
        <span><i style={{ background: "#20A998" }} />Turquesa</span>
        <span><i style={{ background: "#174F49" }} />Verde profundo</span>
        <span><i style={{ background: "#E2F3EE" }} />Verde agua</span>
        <span><i style={{ background: "#FAFBF7" }} />Marfil</span>
        <span><i style={{ background: "#B9DDD5" }} />Salvia</span>
      </aside>
      <aside className="palette-preview palette-lila" aria-label="Paleta lila de la simulación">
        <strong>Paleta lila</strong>
        <span><i style={{ background: "#9874B8" }} />Lila</span>
        <span><i style={{ background: "#4E3B62" }} />Ciruela</span>
        <span><i style={{ background: "#EEE7F4" }} />Lavanda</span>
        <span><i style={{ background: "#FCFAFD" }} />Marfil</span>
        <span><i style={{ background: "#D4C3E1" }} />Malva</span>
      </aside>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Eva Balance, inicio"><img src="/logo-eva-balance-clean-v2.png" alt="Eva Balance" /></a>
        <nav aria-label="Navegación principal">
          <a href="#catalogo">Productos</a><a href="#sobre-eva">Eva Terapeuta</a><a className="nav-cta" href="#tienda">Ver tienda <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <section className="hero" id="inicio">
        <span className="hero-watermark heart-mark" aria-hidden="true" />
        <div className="hero-copy">
          <span className="hero-heart heart-mark" aria-hidden="true" />
          <h1>Tu intención.<br /><em>Contigo.</em></h1>
          <p className="hero-text">PROTECT es un ritual de protección consciente creado por Eva. Un gesto para poner límite al ruido, las prisas y aquello que te aleja de tu centro.</p>
          <div className="hero-actions"><a className="button primary" href="#catalogo">Ver el kit</a><a className="text-link" href="#como-funciona">Cómo funciona</a></div>
          <div className="hero-proof"><span>Esencia PROTECT</span><span>Colgante difusor</span><span>Ritual de Eva</span></div>
        </div>
      </section>
      <ProductCatalog />
      <section className="simple-process" aria-labelledby="como-funciona" id="como-funciona">
        <p className="eyebrow">Tu ritual PROTECT</p><h2>Protección con intención</h2>
        <div className="steps"><div><b>1</b><h3>Prepara</h3><p>Abre el colgante e impregna el pad con unas gotas de PROTECT.</p></div><div><b>2</b><h3>Intenciona</h3><p>Haz una pausa y conecta con aquello que hoy quieres proteger.</p></div><div><b>3</b><h3>Llévalo</h3><p>Cierra el colgante y úsalo como recordatorio de tu intención durante el día.</p></div></div>
      </section>
      <section className="protect-story">
        <p className="eyebrow">Qué incluye</p><h2>Esencia, objeto<br />e intención.</h2>
        <div className="included"><div><b>01</b><h3>PROTECT</h3><p>Un frasco de 10 ml con la primera esencia diseñada por Eva Balance.</p></div><div><b>02</b><h3>El colgante</h3><p>Un difusor reutilizable, redondo o cilíndrico, con un pad interior.</p></div><div><b>03</b><h3>El ritual</h3><p>Una guía creada por Eva para utilizar PROTECT según tu intención.</p></div></div>
      </section>
      <section className="eva-section" id="sobre-eva">
        <div className="eva-card"><p className="eyebrow">Creada por Eva</p><h2>Cada esencia nace de una intención.</h2><p>PROTECT abre la colección Eva Balance. Más adelante llegarán nuevas esencias, cada una acompañada de un ritual diferente para el momento que quieras crear.</p><a className="button secondary" href="https://www.evaterapeuta.com/" target="_blank" rel="noreferrer">Conocer Eva Terapeuta <span aria-hidden="true">↗</span></a></div>
        <div className="eva-note"><strong>Empieza con PROTECT.</strong><br />Después vendrán nuevas intenciones.</div>
      </section>
      <section className="shop-cta" id="tienda"><span className="shop-watermark heart-mark" aria-hidden="true" /><h2>PROTECT estará disponible<br />en TikTok Shop.</h2><p>Próximamente podrás consultar allí el precio, la disponibilidad y realizar tu compra.</p><a className="button light" href="#catalogo">Ver PROTECT <span aria-hidden="true">↗</span></a></section>
      <footer><a className="brand footer-brand" href="#inicio"><img src="/logo-eva-balance-clean-v2.png" alt="Eva Balance" /></a><div><a href="#catalogo">Productos</a><a href="https://www.evaterapeuta.com/">Eva Terapeuta</a><a href="#">TikTok</a></div><small>© {new Date().getFullYear()} Eva Balance · Aviso legal · Privacidad</small></footer>
    </main>
  );
}
