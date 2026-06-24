"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/lib/CartContext";
import { useDollarRate } from "@/hooks/useDollarRate";
import { WHATSAPP_NUMBER, generateWhatsAppMessage } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, totalUSD } = useCart();
  const { formatARS, formatUSD } = useDollarRate();

  const handleWhatsApp = () => {
    if (items.length === 0) return;
    const lineItems = items.map((i) => ({
      name: i.product.name,
      subtitle: i.product.subtitle,
      qty: i.quantity,
    }));
    const totalARS = formatARS(totalUSD);
    const msg = generateWhatsAppMessage(lineItems, totalARS);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-surface-gray-2">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-ink-primary" />
                <h2 className="font-display font-bold text-ink-primary text-lg">Mi carrito</h2>
                {items.length > 0 && (
                  <span className="ml-1 px-2 py-0.5 bg-brand-blue text-white text-xs font-bold rounded-full">
                    {items.reduce((s, i) => s + i.quantity, 0)}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="w-9 h-9 rounded-full hover:bg-surface-gray-1 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-ink-secondary" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <AnimatePresence>
                {items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-64 text-center"
                  >
                    <ShoppingBag className="w-12 h-12 text-surface-gray-2 mb-4" />
                    <p className="text-ink-secondary font-medium">Tu carrito está vacío</p>
                    <p className="text-ink-tertiary text-sm mt-1">Agregá productos desde el catálogo</p>
                    <button
                      onClick={closeCart}
                      className="mt-6 px-6 py-3 bg-brand-blue text-white rounded-2xl font-semibold text-sm hover:bg-brand-blue-dark transition-colors"
                    >
                      Ver catálogo
                    </button>
                  </motion.div>
                ) : (
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <motion.li
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex gap-4 bg-surface-gray-1 rounded-2xl p-4"
                      >
                        {/* Image */}
                        <div className="w-16 h-16 rounded-xl bg-surface-gray-2 overflow-hidden flex-shrink-0 relative">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-ink-primary text-sm leading-tight">
                            {item.product.name}
                          </p>
                          <p className="text-ink-tertiary text-xs mb-2">{item.product.subtitle}</p>
                          <p className="font-bold text-ink-primary text-sm">
                            {formatARS(item.product.price_usd * item.quantity)}
                          </p>
                        </div>

                        {/* Qty controls */}
                        <div className="flex flex-col items-end justify-between">
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="p-1 rounded-lg hover:bg-red-50 text-ink-tertiary hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                          <div className="flex items-center gap-2 bg-white rounded-xl border border-surface-gray-2 px-1">
                            <button
                              onClick={() => updateQty(item.product.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center text-ink-secondary hover:text-ink-primary transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-5 text-center font-semibold text-ink-primary text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQty(item.product.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center text-ink-secondary hover:text-ink-primary transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-surface-gray-2 px-6 py-5 bg-white">
                {/* Subtotal */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-ink-secondary text-sm">Subtotal</span>
                  <span className="font-bold text-ink-primary">{formatARS(totalUSD)}</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-ink-tertiary text-xs">En dólares</span>
                  <span className="text-ink-tertiary text-xs">{formatUSD(totalUSD)}</span>
                </div>

                <button
                  onClick={handleWhatsApp}
                  className="btn-liquid w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Finalizar por WhatsApp
                </button>
                <p className="text-center text-xs text-ink-tertiary mt-3">
                  Te contactaremos para confirmar stock y coordinar el pago
                </p>
              </div>
            )}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
