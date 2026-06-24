import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/CartContext";
import Navbar from "@/components/layout/Navbar";
import CartDrawer from "@/components/cart/CartDrawer";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tempo Tecno | Apple en La Plata – iPhone, Mac y más",
  description:
    "Los mejores productos Apple con garantía oficial, precios en pesos y dólares. iPhone 17, MacBook, AirPods y más. Envíos a todo el país.",
  keywords: ["iPhone La Plata", "Apple Argentina", "MacBook precio", "iPhone 17 Pro", "Tempo Tecno"],
  openGraph: {
    title: "Tempo Tecno | Apple Premium",
    description: "La mejor tecnología Apple al mejor precio. Garantía oficial.",
    type: "website",
    locale: "es_AR",
  },
  robots: { index: true, follow: true },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-sans bg-white text-ink-primary antialiased`}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <CartDrawer />
          <WhatsAppFAB />
        </CartProvider>
      </body>
    </html>
  );
}
