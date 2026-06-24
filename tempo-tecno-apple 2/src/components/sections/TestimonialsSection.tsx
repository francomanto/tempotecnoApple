"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Valentina R.",
    handle: "@valeri_lp",
    avatar: "V",
    avatarBg: "bg-pink-100 text-pink-600",
    rating: 5,
    text: "Compré el iPhone 17 Pro y llegó en 24 horas. Todo sellado, con factura y garantía. 100% recomendable, ya compré para toda la familia.",
    product: "iPhone 17 Pro 256GB",
  },
  {
    name: "Martín G.",
    handle: "@martin_dev",
    avatar: "M",
    avatarBg: "bg-blue-100 text-blue-600",
    rating: 5,
    text: "El mejor precio que encontré en La Plata. Me asesoraron muy bien por WhatsApp, me ayudaron a elegir el modelo correcto para mi trabajo.",
    product: "MacBook Neo 13\"",
  },
  {
    name: "Luciana M.",
    handle: "@lu_marcos",
    avatar: "L",
    avatarBg: "bg-purple-100 text-purple-600",
    rating: 5,
    text: "Hace 3 años que compro acá. Siempre me va bien. Los precios son justos y la atención es excelente. No busco en otro lado.",
    product: "AirPods Pro + iPhone 16",
  },
  {
    name: "Federico T.",
    handle: "@fede_t",
    avatar: "F",
    avatarBg: "bg-green-100 text-green-600",
    rating: 5,
    text: "Pedí el Apple Watch Series 10 y me lo trajeron a casa el mismo día. Genuino, con todos los accesorios. Muy buena experiencia.",
    product: "Apple Watch Series 10",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brand-blue font-semibold text-sm tracking-widest uppercase mb-4">
            Opiniones reales
          </p>
          <h2 className="font-display font-extrabold text-display-xl text-ink-primary mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <div className="flex items-center justify-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-ink-secondary font-medium">4.9 de 5 · +120 reseñas</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.handle}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-surface-gray-1 rounded-3xl p-6 border border-surface-gray-2/60 hover:border-brand-blue/20 hover:shadow-card transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-ink-secondary text-sm leading-relaxed mb-5 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Product tag */}
              <span className="inline-block text-xs text-brand-blue bg-blue-50 px-3 py-1 rounded-full font-medium mb-4">
                {review.product}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${review.avatarBg} flex items-center justify-center font-bold text-sm`}>
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-ink-primary text-sm">{review.name}</p>
                  <p className="text-ink-tertiary text-xs">{review.handle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
