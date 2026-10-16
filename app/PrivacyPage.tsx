import {PageShell} from "./SiteShell";
import "./legal.css";

// Datos del titular. Rellenar antes de publicar (aparecen en el aviso legal y como responsable del tratamiento).
const TITULAR={
  nombre:"Eva Garijo [APELLIDOS COMPLETOS]",
  nif:"[NIF]",
  domicilio:"[DIRECCIÓN POSTAL COMPLETA]",
  email:"[CORREO DE CONTACTO]",
};
const ACTUALIZADA="16 de octubre de 2026";

export function PrivacyPage(){return <PageShell><main className="legal-page">
  <header className="legal-hero"><p className="section-kicker">Información legal</p><h1>Aviso legal y<br/><em>política de privacidad</em></h1><p>Cómo se cuidan tus datos en Eva Balance, explicado de forma clara. Última actualización: {ACTUALIZADA}.</p></header>
  <div className="legal-body">
    <nav className="legal-toc" aria-label="Índice"><a href="#aviso-legal">Aviso legal</a><a href="#responsable">Responsable</a><a href="#datos">Qué datos y para qué</a><a href="#bases">Bases legales</a><a href="#conservacion">Conservación</a><a href="#destinatarios">Proveedores</a><a href="#derechos">Tus derechos</a><a href="#cookies">Cookies</a><a href="#menores">Menores</a></nav>

    <section id="aviso-legal"><h2>1. Aviso legal</h2>
      <p>En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de que este sitio web, <strong>eva-balance.com</strong>, y su área privada <strong>app.eva-balance.com</strong> («Mi espacio») son titularidad de:</p>
      <ul><li><strong>Titular:</strong> {TITULAR.nombre}</li><li><strong>NIF:</strong> {TITULAR.nif}</li><li><strong>Domicilio:</strong> {TITULAR.domicilio}</li><li><strong>Correo electrónico:</strong> {TITULAR.email}</li><li><strong>Teléfono / WhatsApp:</strong> +34 629 764 705</li><li><strong>Actividad:</strong> acompañamiento mediante LNT® y Barras de Access, y venta de esencias y objetos aromáticos.</li></ul>
      <p>Las sesiones y los productos de Eva Balance son complementarios y <strong>no sustituyen diagnósticos, tratamientos ni la atención de profesionales sanitarios</strong>. Los contenidos de esta web y del área privada son informativos y no constituyen consejo médico ni psicológico.</p>
      <p>Los textos, imágenes, audios y documentos de este sitio pertenecen a su titular o se usan con autorización. Los recursos de «Mi espacio» son para uso personal: no está permitido redistribuirlos ni publicarlos sin permiso. LNT® y Access Consciousness® son marcas de sus respectivos titulares.</p>
    </section>

    <section id="responsable"><h2>2. Responsable del tratamiento</h2>
      <p>La responsable de tus datos personales es <strong>{TITULAR.nombre}</strong> (NIF {TITULAR.nif}), con los datos de contacto indicados arriba. Para cualquier cuestión sobre tus datos puedes escribir a <strong>{TITULAR.email}</strong>.</p>
    </section>

    <section id="datos"><h2>3. Qué datos tratamos y para qué</h2>
      <h3>Si escribes por WhatsApp</h3>
      <p>Tu nombre, tu número y lo que nos cuentes en la conversación, para responder a tu consulta, informarte de las sesiones y, si lo deseas, reservar una.</p>
      <h3>Si haces una sesión</h3>
      <p>Tus datos de contacto y de reserva (fechas, modalidad, pagos) para organizar y facturar las sesiones. Si durante el acompañamiento compartes información sobre tu salud o tu situación personal, Eva la trata con <strong>total confidencialidad</strong>, solo para acompañarte mejor, con tu consentimiento explícito, y nunca la comparte con terceros.</p>
      <h3>Si creas una cuenta en «Mi espacio»</h3>
      <p>Tu nombre, tu correo electrónico, tu contraseña (que se guarda cifrada: nadie, tampoco Eva, puede leerla), la fecha de alta y los recursos a los que tienes acceso. Sirven para gestionar tu cuenta y darte acceso a los ebooks, meditaciones y demás recursos. También te enviaremos los correos necesarios para la cuenta (confirmación, cambio de contraseña).</p>
      <h3>Si aceptas recibir novedades</h3>
      <p>Solo si marcas la casilla correspondiente, usaremos tu nombre y tu correo para avisarte de nuevos recursos, talleres o productos de Eva Balance. Puedes darte de baja en cualquier momento desde el propio correo o escribiendo a {TITULAR.email}.</p>
      <h3>Si compras un producto</h3>
      <p>Cuando la tienda esté disponible, tus datos de envío, facturación y pago se usarán para gestionar el pedido, la entrega, las devoluciones y las obligaciones fiscales.</p>
      <p>No tomamos decisiones automatizadas ni elaboramos perfiles sobre ti.</p>
    </section>

    <section id="bases"><h2>4. Bases legales</h2>
      <ul>
        <li><strong>Ejecución de un contrato o de medidas precontractuales</strong> (art. 6.1.b RGPD): responder a tus consultas, gestionar sesiones, tu cuenta y tus compras.</li>
        <li><strong>Consentimiento</strong> (art. 6.1.a RGPD): envío de novedades. Y <strong>consentimiento explícito</strong> (art. 9.2.a RGPD) para la información de salud que compartas en las sesiones. Puedes retirarlo cuando quieras, sin que afecte a lo anterior.</li>
        <li><strong>Obligación legal</strong> (art. 6.1.c RGPD): conservar facturas y datos fiscales.</li>
      </ul>
    </section>

    <section id="conservacion"><h2>5. Cuánto tiempo los conservamos</h2>
      <ul>
        <li>Conversaciones y consultas: mientras dure la relación y, como máximo, un año después.</li>
        <li>Cuenta de «Mi espacio»: mientras la mantengas activa. Si pides borrarla, se elimina junto con tus accesos.</li>
        <li>Novedades: hasta que te des de baja.</li>
        <li>Datos de sesiones y facturación: el tiempo que exige la normativa fiscal y de consumo (en general, hasta 6 años); después se suprimen.</li>
      </ul>
    </section>

    <section id="destinatarios"><h2>6. Con quién se comparten (proveedores)</h2>
      <p>No vendemos ni cedemos tus datos. Solo acceden a ellos los proveedores que hacen funcionar el servicio, con contrato de encargo de tratamiento y únicamente para prestarlo:</p>
      <ul>
        <li><strong>Supabase</strong> — cuentas, base de datos y archivos de «Mi espacio» (servidores en la Unión Europea).</li>
        <li><strong>Vercel</strong> — alojamiento de «Mi espacio».</li>
        <li><strong>Resend</strong> — envío de correos (confirmación de cuenta, avisos y novedades).</li>
        <li><strong>GitHub Pages</strong> — alojamiento de esta web.</li>
        <li><strong>Google Fonts</strong> — tipografías de la web; tu navegador se conecta a Google para descargarlas.</li>
        <li><strong>WhatsApp (Meta)</strong> — solo si eliges contactar por ese canal.</li>
      </ul>
      <p>Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo (sobre todo en Estados Unidos). En esos casos la transferencia se ampara en el Marco de Privacidad de Datos UE-EE. UU. o en las cláusulas contractuales tipo de la Comisión Europea.</p>
      <p>Fuera de esto, solo se comunicarían datos a autoridades u organismos públicos cuando una ley lo exija.</p>
    </section>

    <section id="derechos"><h2>7. Tus derechos</h2>
      <p>Puedes pedir en cualquier momento <strong>acceder</strong> a tus datos, <strong>rectificarlos</strong>, <strong>suprimirlos</strong>, <strong>oponerte</strong> a su uso o <strong>limitarlo</strong>, pedir su <strong>portabilidad</strong> y <strong>retirar tu consentimiento</strong>. Escribe a <strong>{TITULAR.email}</strong> indicando qué derecho quieres ejercer; te responderemos en un plazo máximo de un mes.</p>
      <p>Si consideras que no hemos atendido bien tu solicitud, puedes presentar una reclamación ante la <a href="https://www.aepd.es/" target="_blank" rel="noreferrer">Agencia Española de Protección de Datos (aepd.es)</a>.</p>
    </section>

    <section id="cookies"><h2>8. Cookies</h2>
      <p>Esta web <strong>no utiliza cookies de analítica, publicidad ni seguimiento</strong>. En «Mi espacio» solo se usan cookies técnicas imprescindibles para mantener tu sesión iniciada; están exentas de consentimiento y desaparecen al cerrar la sesión o al caducar. Si en el futuro se añadiera algún tipo de medición, se te pedirá permiso antes.</p>
    </section>

    <section id="menores"><h2>9. Menores</h2>
      <p>«Mi espacio» está dirigido a mayores de 14 años. Para crear una cuenta o hacer una sesión con una persona menor de esa edad hace falta el consentimiento de su madre, padre o tutor legal, que puede escribirnos para gestionarlo.</p>
    </section>

    <section><h2>10. Cambios en esta política</h2>
      <p>Si cambiamos algo importante en cómo tratamos tus datos, lo actualizaremos aquí con la fecha de revisión y, si tienes cuenta, te lo comunicaremos por correo.</p>
    </section>
  </div>
</main></PageShell>}
