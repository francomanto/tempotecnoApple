"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";
import { PRODUCTS, CATEGORIES, type ProductCategory } from "@/data/products";
import { cn } from "@/lib/utils";

export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="catalogo" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-xl"
        >
          <p className="text-brand-blue font-semibold text-sm tracking-widest uppercase mb-4">
            Catálogo completo
          </p>
          <h2 className="font-display font-extrabold text-display-xl text-ink-primary mb-4">
            Todos los productos
          </h2>
          <p className="text-ink-secondary text-lg leading-relaxed">
            Originales, sellados, con garantía oficial. Precios en pesos actualizados con el dólar en tiempo real.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200",
              activeCategory === "all"
                ? "bg-ink-primary text-white shadow-md"
                : "bg-surface-gray-1 text-ink-secondary hover:bg-surface-gray-2"
            )}
          >
            Todos
          </button>
          {CATEGORIES.map((cat) => {
            const hasProducts = PRODUCTS.some((p) => p.category === cat.id);
            if (!hasProducts) return null;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-1.5",
                  activeCategory === cat.id
                    ? "bg-brand-blue text-white shadow-md"
                    : "bg-surface-gray-1 text-ink-secondary hover:bg-surface-gray-2"
                )}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-ink-secondary">
            <p className="text-lg">No hay productos en esta categoría todavía.</p>
            <p className="text-sm mt-2">¡Pronto habrá novedades!</p>
          </div>
        )}
      </div>
    </section>
  );
}
