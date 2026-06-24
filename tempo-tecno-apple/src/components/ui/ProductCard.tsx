"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Zap, Package } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useDollarRate } from "@/hooks/useDollarRate";
import { useCart } from "@/lib/CartContext";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [added, setAdded] = useState(false);
  const { formatARS, formatUSD, loading: rateLoading } = useDollarRate();
  const { addItem } = useCart();

  // Mouse tracking for glow effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
  };

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const isConsultar = product.price_usd === 0;
  const isLowStock = product.stock > 0 && product.stock <= 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="card-glow group relative bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] overflow-hidden border border-surface-gray-2/60 flex flex-col"
      >
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className={cn(
              "px-3 py-1.5 rounded-full text-xs font-semibold",
              product.badge === "Nuevo 2025" || product.isNew
                ? "bg-brand-blue text-white"
                : product.badge === "Más vendido"
                ? "bg-[#FF9500] text-white"
                : product.badge === "Flagship"
                ? "bg-ink-primary text-white"
                : "bg-surface-gray-1 text-ink-secondary border border-surface-gray-2"
            )}>
              {product.badge}
            </span>
          </div>
        )}

        {/* Low stock warning */}
        {isLowStock && (
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-red-50 text-red-600 px-2.5 py-1 rounded-full text-xs font-medium border border-red-100">
            <Package className="w-3 h-3" />
            Solo {product.stock}
          </div>
        )}

        {/* Image area */}
        <div className="relative aspect-[4/3] bg-surface-gray-1 overflow-hidden">
          {!imgLoaded && (
            <div className="absolute inset-0 skeleton" />
          )}
          <Image
            src={product.image}
            alt={`${product.name} ${product.subtitle}`}
            fill
            className={cn(
              "object-cover transition-all duration-700 group-hover:scale-105",
              imgLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setImgLoaded(true)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1 relative z-[2]">
          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <p className="text-xs text-ink-tertiary mb-2 font-medium tracking-wide uppercase">
              {product.colors.slice(0, 3).join(" · ")}{product.colors.length > 3 ? " +más" : ""}
            </p>
          )}

          {/* Name */}
          <h3 className="font-display font-bold text-ink-primary text-xl leading-tight mb-1">
            {product.name}
          </h3>
          <p className="text-ink-secondary text-sm mb-3 font-medium">{product.subtitle}</p>

          {/* Specs */}
          <ul className="flex flex-wrap gap-1.5 mb-4">
            {product.specs.slice(0, 3).map((spec) => (
              <li
                key={spec}
                className="text-xs px-2.5 py-1 bg-surface-gray-1 text-ink-secondary rounded-full border border-surface-gray-2"
              >
                {spec}
              </li>
            ))}
          </ul>

          {/* Price */}
          <div className="mt-auto">
            {isConsultar ? (
              <p className="text-ink-secondary font-medium text-sm mb-4">Precio a consultar</p>
            ) : (
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-display font-bold text-ink-primary">
                    {rateLoading ? (
                      <span className="inline-block w-32 h-7 skeleton rounded-lg" />
                    ) : (
                      formatARS(product.price_usd)
                    )}
                  </span>
                </div>
                <p className="text-ink-tertiary text-sm mt-0.5">
                  {formatUSD(product.price_usd)} · 3 cuotas sin interés
                </p>
              </div>
            )}

            {/* CTA */}
            <button
              onClick={isConsultar ? undefined : handleAddToCart}
              className={cn(
                "btn-liquid w-full py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2",
                isConsultar
                  ? "bg-surface-gray-1 text-ink-secondary hover:bg-surface-gray-2 border border-surface-gray-2"
                  : added
                  ? "bg-green-500 text-white shadow-md"
                  : "bg-brand-blue hover:bg-brand-blue-dark text-white shadow-md hover:shadow-blue-glow hover:-translate-y-0.5 active:translate-y-0"
              )}
            >
              {isConsultar ? (
                "Consultar precio"
              ) : added ? (
                <>
                  <motion.span
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    className="text-base"
                  >
                    ✓
                  </motion.span>
                  Agregado
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  Agregar al carrito
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
