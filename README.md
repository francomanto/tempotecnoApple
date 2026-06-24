# 🍎 Tempo Tecno — Landing Page Apple Premium

Landing page para la venta de productos Apple, desarrollada con Next.js 14, Tailwind CSS y Framer Motion.

## ✅ Features incluidas

- **Hero** con efecto parallax, countdown de oferta y orbs animados
- **Cotización del dólar** en tiempo real vía `dolarapi.com` con cache de 5 min
- **Precios en ARS** calculados automáticamente desde USD
- **Catálogo** con filtro por categoría (iPhone, Mac, AirPods, Watch)
- **Carrito lateral** con cantidades, subtotal y checkout por WhatsApp
- **Cards con iluminación dinámica** según posición del mouse
- **Skeleton loading** mientras cargan imágenes
- **WhatsApp FAB** flotante
- **Sección de Features**, estadísticas animadas y testimonios
- **SEO optimizado** con metadata y OG tags
- **Responsive** mobile-first
- **Dark mode** listo (Tailwind `dark:`)

## 🚀 Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 📦 Deploy en Vercel

```bash
npm i -g vercel
vercel --prod
```

O simplemente conectá el repositorio en [vercel.com](https://vercel.com) y desplegará automáticamente.

## ⚙️ Configuración

### 1. Número de WhatsApp
Editá `src/lib/utils.ts`:
```ts
export const WHATSAPP_NUMBER = "5492215XXXXXXX"; // Tu número con código de país
```

### 2. Productos
Editá `src/data/products.ts`:
- Completá los precios con `price_usd: 0` para los que queden como "Consultar"
- Agregá más productos con la estructura existente
- Usá imágenes de tus propios productos (reemplazá las URLs de Unsplash)

### 3. Cotización del dólar
La app consulta `https://dolarapi.com/v1/dolares/blue` por defecto.
Si querés usar el dólar oficial:
```
https://dolarapi.com/v1/dolares/oficial
```
Editá `src/hooks/useDollarRate.ts` para cambiar la URL.

## 🗂 Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz con fuentes y providers
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales y utilidades
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navbar con scroll behavior
│   │   └── Footer.tsx      # Footer minimalista
│   ├── sections/
│   │   ├── HeroSection.tsx     # Hero completo
│   │   ├── FeaturedSection.tsx # Productos destacados
│   │   ├── FeaturesSection.tsx # Stats + Features grid
│   │   ├── CatalogSection.tsx  # Catálogo filtrable
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/
│   │   ├── ProductCard.tsx     # Card con mouse glow
│   │   ├── DollarTicker.tsx    # Cotización en tiempo real
│   │   └── WhatsAppFAB.tsx     # Botón flotante WhatsApp
│   └── cart/
│       └── CartDrawer.tsx      # Carrito lateral
├── data/
│   └── products.ts         # ⭐ Catálogo de productos
├── hooks/
│   └── useDollarRate.ts    # Hook cotización dólar
└── lib/
    ├── CartContext.tsx      # Estado global del carrito
    └── utils.ts            # Utilidades y helpers
```

## 🎨 Paleta de colores

| Token | Hex | Uso |
|-------|-----|-----|
| `brand-blue` | `#007AFF` | Acentos, CTAs principales |
| `ink-primary` | `#111111` | Textos principales |
| `ink-secondary` | `#6E6E73` | Textos secundarios |
| `surface-gray-1` | `#F5F5F7` | Fondos de sección |
| `surface-gray-2` | `#E5E5E5` | Bordes, separadores |

## 📱 Optimizaciones

- Lazy loading de imágenes con `next/image`
- Skeleton loading en cards de productos
- Cache del dólar en `localStorage` (5 minutos)
- Animaciones respetan `prefers-reduced-motion`
- CSS variables para theming
- Font subsetting con `next/font/google`
