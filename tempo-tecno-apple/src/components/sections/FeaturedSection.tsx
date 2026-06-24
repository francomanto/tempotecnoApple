"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import { useDollarRate } from "@/hooks/useDollarRate";
import { useCart } from "@/lib/CartContext";

export default function FeaturedSection() {
  const featured = getFeaturedProducts().slice(0, 3);
  const { formatARS, formatUSD } = useDollarRate();
  const { addItem } = useCart();

  return (
    <section className="py-28 bg-surface-gray-1">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-brand-blue font-semibold text-sm tracking-widest uppercase mb-4">
              Más vendidos
            </p>
            <h2 className="font-display font-extrabold text-display-xl text-ink-primary">
              Destacados
            </h2>
          </div>
          <Link
            href="#catalogo"
            className="flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all duration-200"
          >
            Ver todo el catálogo <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Featured grid — large layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`group relative bg-white rounded-4xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-surface-gray-2/60 flex flex-col ${i === 0 ? "lg:row-span-2" : ""}`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden bg-gradient-to-br from-surface-gray-1 to-surface-gray-2 ${i === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.badge && (
                  <div className="absolute top-5 left-5">
                    <span className="px-3 py-1.5 bg-brand-blue text-white text-xs font-semibold rounded-full">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-ink-primary text-xl mb-1">
                  {product.name}
                </h3>
                <p className="text-ink-secondary text-sm mb-4">{product.subtitle}</p>

                {product.price_usd > 0 ? (
                  <div className="mt-auto">
                    <p className="font-display font-extrabold text-2xl text-ink-primary">
                      {formatARS(product.price_usd)}
                    </p>
                    <p className="text-ink-tertiary text-sm mb-4">{formatUSD(product.price_usd)}</p>
                    <button
                      onClick={() => addItem(product)}
                      className="btn-liquid w-full py-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-2xl transition-all duration-300 text-sm"
                    >
                      Agregar al carrito
                    </button>
                  </div>
                ) : (
                  <div className="mt-auto">
                    <p className="text-ink-secondary font-medium text-sm mb-4">Precio a consultar</p>
                    <button className="btn-liquid w-full py-3 bg-surface-gray-1 hover:bg-surface-gray-2 text-ink-secondary font-semibold rounded-2xl transition-all duration-300 text-sm border border-surface-gray-2">
                      Consultar
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
