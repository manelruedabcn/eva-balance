"use client";

import { useMemo, useState } from "react";
import { categories, products } from "../data/products";

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const visibleProducts = useMemo(
    () => activeCategory === "Todos" ? products : products.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  return (
    <section className="catalog" id="catalogo" aria-labelledby="catalog-title">
      <div className="section-heading">
        <p className="eyebrow">El producto</p>
        <h2 id="catalog-title">Kit PROTECT</h2>
        <p>Todo lo necesario para crear tu ritual de protección y llevar esa intención contigo.</p>
      </div>
      <div className="filters" aria-label="Filtrar productos por categoría">
        {categories.map((category) => (
          <button type="button" key={category} className={activeCategory === category ? "filter active" : "filter"} onClick={() => setActiveCategory(category)}>{category}</button>
        ))}
      </div>
      <div className="product-grid">
        {visibleProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <div className={product.image ? "product-image-wrap" : "product-image-wrap protect-visual"}>
              {product.image ? <img className="product-image" src={product.image} alt={product.name} /> : <div className="kit-mockup" aria-hidden="true"><div className="bottle"><i /><b>PROTECT</b><small>10 ml</small></div><div className="pendant round"><i /></div><div className="pendant cylinder"><i /></div></div>}
              {product.featured && <span className="product-badge">Selección de Eva</span>}
            </div>
            <div className="product-info">
              <p className="product-category">{product.category}</p>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-intention"><span>Intención</span><strong>{product.intention}</strong><small>{product.ritual}</small></div>
              <div className="product-footer">
                <span>{product.price}</span>
                <a href={product.tiktokUrl} aria-label={`Ver ${product.name} en TikTok Shop`}>Ver producto <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
