import Link from "next/link";
import { Zap, Instagram, MessageCircle, Shield, Truck, CreditCard } from "lucide-react";

const PAYMENT_METHODS = ["Efectivo", "Transferencia", "Débito", "Crédito 3 cuotas", "Mercado Pago"];

export default function Footer() {
  return (
    <footer className="bg-ink-primary text-white/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-brand-blue flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-xl text-white">
                Tempo<span className="text-brand-blue">Tecno</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              La mejor tecnología Apple al mejor precio. Productos originales, sellados, con garantía oficial.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/tempotecno"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-blue flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/5492215000000`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-green-500 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Productos</h4>
            <ul className="space-y-2 text-sm">
              {["iPhone", "MacBook", "AirPods", "Apple Watch", "Accesorios"].map((item) => (
                <li key={item}>
                  <Link href={`#catalogo`} className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Garantías</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-blue flex-shrink-0" />
                Garantía oficial 12 meses
              </li>
              <li className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-brand-blue flex-shrink-0" />
                Envíos a todo el país
              </li>
              <li className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-brand-blue flex-shrink-0" />
                Múltiples medios de pago
              </li>
            </ul>
          </div>
        </div>

        {/* Payment methods */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-xs uppercase tracking-widest mb-4">Medios de pago</p>
          <div className="flex flex-wrap gap-2">
            {PAYMENT_METHODS.map((method) => (
              <span
                key={method}
                className="px-3 py-1.5 bg-white/5 rounded-full text-xs border border-white/10"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Tempo Tecno · La Plata, Buenos Aires</p>
          <p>Productos originales · Precios expresados en USD y ARS</p>
        </div>
      </div>
    </footer>
  );
}
