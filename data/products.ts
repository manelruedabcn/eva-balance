export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  intention: string;
  ritual: string;
  price?: string;
  image?: string;
  tiktokUrl: string;
  featured?: boolean;
};

// Este es el único archivo que necesitas editar para añadir, quitar u ordenar productos.
// Cuando tengas los enlaces definitivos de TikTok Shop, sustituye "#tienda" en cada ficha.
export const products: Product[] = [
  {
    id: "kit-protect",
    name: "Kit PROTECT",
    category: "Primer lanzamiento",
    description: "Esencia PROTECT de 10 ml, colgante difusor reutilizable, pad interior y un ritual guiado por Eva.",
    intention: "Protección consciente",
    ritual: "Un gesto para marcar tu límite, volver a tu centro y comenzar el día con intención.",
    price: "Próximamente",
    tiktokUrl: "#tienda",
    featured: true,
  },
];

export const categories = ["Todos", ...new Set(products.map((product) => product.category))];
