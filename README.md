# Eva Balance

Landing y catálogo de productos de bienestar con enlaces a TikTok Shop.

## Decisión de publicación

En esta fase, todas las landings y webs del proyecto deben ser completamente estáticas y publicarse mediante GitHub Pages. No se utilizará hosting tradicional, servidor propio, base de datos ni funciones de servidor hasta una fase futura expresamente acordada.

## Añadir, quitar u ordenar productos

Todos los productos están en `data/products.ts`. Cada bloque contiene:

- `name`: nombre del producto.
- `category`: categoría usada por los filtros.
- `description`: texto breve de la ficha.
- `intention`: intención asociada a la esencia.
- `ritual`: explicación breve del ritual que la acompaña.
- `price`: precio o texto alternativo.
- `image`: dirección de la imagen.
- `tiktokUrl`: enlace directo del producto en TikTok Shop.
- `featured`: muestra la etiqueta «Selección de Eva» cuando vale `true`.

Para quitar un producto, elimina su bloque. Para cambiar el orden, mueve el bloque dentro de la lista. Las categorías se crean automáticamente.

## Ejecutar en local

```bash
npm install
npm run dev
```

La web estará disponible en `http://localhost:3000`.

## Comprobar antes de publicar

```bash
npm run build
```

## Pendiente antes del lanzamiento

- Sustituir los productos de muestra por los definitivos.
- Añadir los enlaces reales de TikTok Shop, TikTok e Instagram.
- Completar aviso legal y política de privacidad.
- Conectar el dominio cuando esté contratado.
