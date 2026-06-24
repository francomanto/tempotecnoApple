// products.ts — Catálogo de productos Tempo Tecno
// Precios en USD. El precio en ARS se calcula dinámicamente con la cotización del dólar.

export type ProductCategory = "iphone" | "mac" | "ipad" | "watch" | "airpods" | "accesorios";

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  price_usd: number;
  image: string;
  stock: number;
  description: string;
  specs: string[];
  badge?: string;
  colors?: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

export const PRODUCTS: Product[] = [
  // ─── iPhones ───────────────────────────────────────────────────
  {
    id: "iphone-16-128",
    name: "iPhone 16",
    subtitle: "128 GB",
    category: "iphone",
    price_usd: 820,
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&q=80",
    stock: 5,
    description: "El iPhone más avanzado con chip A18 y Camera Control.",
    specs: ["Chip A18", "Camera Control", "Pantalla 6.1\"", "Carga rápida 45W"],
    badge: "Más vendido",
    colors: ["Negro", "Blanco", "Rosa", "Ultramar", "Verde"],
    isFeatured: true,
  },
  {
    id: "iphone-17-256",
    name: "iPhone 17",
    subtitle: "256 GB",
    category: "iphone",
    price_usd: 980,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
    stock: 8,
    description: "El nuevo iPhone 17 con el potente chip A19 y diseño renovado.",
    specs: ["Chip A19", "Pantalla ProMotion 6.1\"", "Cámara 48MP", "Face ID"],
    badge: "Nuevo 2025",
    colors: ["Negro medianoche", "Blanco estrella", "Desierto", "Aguamarina"],
    isNew: true,
    isFeatured: true,
  },
  {
    id: "iphone-17-pro-256",
    name: "iPhone 17 Pro",
    subtitle: "256 GB",
    category: "iphone",
    price_usd: 1280,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&q=80",
    stock: 4,
    description: "Titanio. Tres cámaras. El Pro más potente de la historia.",
    specs: ["Chip A19 Pro", "Titanio grado 5", "Sistema de cámara Pro 48MP", "ProMotion 120Hz"],
    badge: "Pro",
    colors: ["Titanio negro", "Titanio blanco", "Titanio natural", "Titanio desierto"],
    isNew: true,
    isFeatured: true,
  },
  {
    id: "iphone-17-pro-max-256",
    name: "iPhone 17 Pro Max",
    subtitle: "256 GB",
    category: "iphone",
    price_usd: 1420,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80",
    stock: 3,
    description: "La pantalla más grande. La batería más larga. El Pro Max definitivo.",
    specs: ["Chip A19 Pro", "Pantalla 6.9\" Super Retina XDR", "5x Zoom óptico", "All-Day battery"],
    badge: "Flagship",
    colors: ["Titanio negro", "Titanio blanco", "Titanio natural", "Titanio desierto"],
    isNew: true,
  },

  // ─── MacBooks ──────────────────────────────────────────────────
  {
    id: "macbook-air-15-m5",
    name: "MacBook Air 15\"",
    subtitle: "M5 · 8GB · 256GB",
    category: "mac",
    price_usd: 0, // Consultar precio
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
    stock: 2,
    description: "El ultradelgado más potente con chip M5.",
    specs: ["Chip Apple M5", "8 GB RAM", "SSD 256 GB", "Pantalla Liquid Retina 15.3\""],
    badge: "Consultar",
    colors: ["Medianoche", "Plata", "Azul cielo", "Amarillo"],
    isNew: true,
  },
  {
    id: "macbook-neo-13-256",
    name: "MacBook Neo 13\"",
    subtitle: "A18 · 8GB · 256GB",
    category: "mac",
    price_usd: 810,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
    stock: 3,
    description: "El MacBook más delgado de la historia. Chip A18 de nueva generación.",
    specs: ["Chip Apple A18", "8 GB RAM", "SSD 256 GB", "Pantalla Liquid Retina 13.6\""],
    badge: "Nuevo 2025",
    colors: ["Plata", "Medianoche"],
    isNew: true,
    isFeatured: true,
  },
  {
    id: "macbook-neo-13-512",
    name: "MacBook Neo 13\"",
    subtitle: "A18 · 8GB · 512GB",
    category: "mac",
    price_usd: 920,
    image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=600&q=80",
    stock: 2,
    description: "Más almacenamiento para los creativos más exigentes.",
    specs: ["Chip Apple A18", "8 GB RAM", "SSD 512 GB", "Pantalla Liquid Retina 13.6\""],
    colors: ["Plata", "Medianoche"],
    isNew: true,
  },

  // ─── AirPods (precio a consultar) ──────────────────────────────
  {
    id: "airpods-pro-2",
    name: "AirPods Pro",
    subtitle: "2da generación",
    category: "airpods",
    price_usd: 0,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&q=80",
    stock: 10,
    description: "Cancelación activa de ruido. Modo Transparencia. Audio espacial.",
    specs: ["ANC adaptativo", "Audio espacial", "Hasta 30h de batería", "Resistencia al agua IPX4"],
    badge: "Consultar",
  },
  {
    id: "airpods-4",
    name: "AirPods 4",
    subtitle: "Cancelación de ruido activa",
    category: "airpods",
    price_usd: 0,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    stock: 8,
    description: "El AirPods más cómodo con nuevo diseño personalizado.",
    specs: ["Cancelación de ruido activa", "Audio espacial", "Chip H2", "Carga USB-C"],
    badge: "Consultar",
    isNew: true,
  },

  // ─── Accesorios ────────────────────────────────────────────────
  {
    id: "apple-watch-s10",
    name: "Apple Watch Series 10",
    subtitle: "41mm · GPS",
    category: "watch",
    price_usd: 0,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80",
    stock: 6,
    description: "El smartwatch más avanzado. Delgado, potente y siempre conectado.",
    specs: ["Pantalla always-on", "ECG y SpO2", "Crash Detection", "Water resistant 50m"],
    badge: "Consultar",
    colors: ["Aluminio plata", "Aluminio medianoche", "Aluminio oro rosa"],
    isFeatured: true,
  },
];

// Categorías con metadata
export const CATEGORIES: { id: ProductCategory; label: string; icon: string }[] = [
  { id: "iphone", label: "iPhone", icon: "📱" },
  { id: "mac", label: "Mac", icon: "💻" },
  { id: "ipad", label: "iPad", icon: "⬛" },
  { id: "watch", label: "Apple Watch", icon: "⌚" },
  { id: "airpods", label: "AirPods", icon: "🎧" },
  { id: "accesorios", label: "Accesorios", icon: "🔌" },
];

export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isFeatured);
}

export function getNewProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isNew);
}
