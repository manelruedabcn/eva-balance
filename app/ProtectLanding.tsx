export function ProtectLanding() {
  return (
    <main className="protect-landing">
      <header className="moment-header">
        <a href="/" aria-label="Volver a Eva Balance">
          <img src="/logo-eva-balance-transparent.png" alt="Eva Balance" />
        </a>
        <nav aria-label="Navegación de Momento PROTECT">
          <a className="moment-back" href="/">Volver a Eva Balance</a>
        </nav>
      </header>

      <section className="moment-hero">
        <span className="moment-heart heart-mark" aria-hidden="true" />
        <p className="eyebrow">Momento PROTECT</p>
        <h1>Tu intención.<br /><em>Contigo.</em></h1>
        <p className="moment-intro">
          Una pausa breve para volver a tu centro y recordar aquello que hoy quieres proteger.
          PROTECT acompaña tus momentos cotidianos con un ritual de aroma, respiración e intención.
          Puedes incorporarlo al comenzar el día, antes de una conversación importante o cuando
          necesites detenerte, escucharte y recuperar la calma. No hace falta hacerlo perfecto:
          bastan unos minutos, un espacio tranquilo y la intención que quieras cuidar.
        </p>
        <a className="button primary" href="#guia">Comenzar</a>
      </section>

      <section className="moment-guide" id="guia" aria-labelledby="guide-title">
        <div className="moment-guide-heading">
          <p className="eyebrow">Guía de uso</p>
          <h2 id="guide-title">Un gesto sencillo,<br />una intención presente.</h2>
        </div>
        <ol className="moment-steps">
          <li>
            <span>01</span>
            <div><h3>Prepara</h3><p>Añade de 2 a 3 gotas de PROTECT a tu difusor.</p></div>
          </li>
          <li>
            <span>02</span>
            <div><h3>Respira</h3><p>Haz tres respiraciones lentas y deja que el aroma acompañe este momento.</p></div>
          </li>
          <li>
            <span>03</span>
            <div><h3>Elige tu intención</h3><p>Piensa en aquello que quieres cuidar hoy y repite en silencio: «Mi intención está conmigo».</p></div>
          </li>
          <li>
            <span>04</span>
            <div><h3>Continúa</h3><p>Deja el difusor cerca y vuelve a tu intención cuando necesites recuperar el centro.</p></div>
          </li>
        </ol>
      </section>

      <section className="moment-note">
        <span className="moment-note-heart heart-mark" aria-hidden="true" />
        <p>PROTECT es una mezcla de aceites esenciales diseñada para acompañar tu intención de protección.</p>
        <strong>Utiliza de 2 a 3 gotas una vez al día.</strong>
      </section>

      <section className="moment-safety" aria-labelledby="safety-title">
        <p className="eyebrow">Uso responsable</p>
        <h2 id="safety-title">Antes de utilizarlo</h2>
        <p>Uso externo. No ingerir. Evitar el contacto con ojos y mucosas. Mantener fuera del alcance de los niños. Utilizar únicamente en un difusor adecuado y siguiendo sus instrucciones.</p>
      </section>

      <footer className="moment-footer">
        <img src="/logo-eva-balance-transparent.png" alt="Eva Balance" />
        <small>© {new Date().getFullYear()} Eva Balance · Tu intención, contigo.</small>
      </footer>
    </main>
  );
}
