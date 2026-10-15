# Eva Balance

Web unificada de **Eva Balance | Eva Terapeuta**.

## Arquitectura

- `/`: portada del ecosistema y acceso a sus dos recorridos.
- `/sesiones/`: sesiones individuales y grupales, herramientas, Eva, precios y preguntas frecuentes.
- `/productos/`: PROTECT, esencias, joyas aromáticas y futuras colecciones.
- `/protect/`: guía vinculada al QR de la esencia PROTECT.

## Publicación

La web es completamente estática y se publica en GitHub Pages mediante `.github/workflows/deploy-pages.yml`. El dominio de producción es `eva-balance.com`.

```bash
npm ci
npm run build
```

La salida final se genera en `dist/`.

## Criterio de marca

Eva es el rostro y la persona que genera confianza. Eva Balance organiza el ecosistema. Las sesiones y los productos son propuestas independientes: los productos no son necesarios para realizar una sesión y no sustituyen tratamientos ni asesoramiento médico.
