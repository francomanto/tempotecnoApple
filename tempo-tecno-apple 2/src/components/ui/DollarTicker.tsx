"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, RefreshCw } from "lucide-react";
import { useDollarRate } from "@/hooks/useDollarRate";

export default function DollarTicker() {
  const { rate, loading, lastUpdated, refresh } = useDollarRate();

  const timeStr = lastUpdated
    ? lastUpdated.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" })
    : null;

  return (
    <div className="bg-surface-gray-1 border-b border-surface-gray-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-ink-secondary">
          <TrendingUp className="w-3.5 h-3.5 text-brand-blue" />
          <span>Precios actualizados en tiempo real</span>
        </div>

        <div className="flex items-center gap-3">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <div className="w-16 h-4 skeleton rounded" />
              </motion.div>
            ) : (
              <motion.div
                key="rate"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className="flex items-center gap-2 text-sm"
              >
                <span className="text-ink-secondary">USD →</span>
                <span className="font-semibold text-ink-primary font-mono">
                  ${rate?.toLocaleString("es-AR")}
                </span>
                {timeStr && (
                  <span className="text-ink-tertiary hidden sm:inline">· {timeStr}</span>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={refresh}
            className="p-1 rounded-full hover:bg-surface-gray-2 text-ink-tertiary hover:text-ink-secondary transition-colors"
            aria-label="Actualizar cotización"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
