import { motion } from 'framer-motion'

const products = [
  { name: 'iPhone', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1692820756112', href: '/products/iphone', tagline: 'Pro. Beyond.' },
  { name: 'Mac', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-select-202310?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1697230830200', href: '/products/mac', tagline: 'Supercharged by M‑series.' },
  { name: 'iPad', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-wifi-spacegray-202210?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1664411207209', href: '/products/ipad', tagline: 'Thin. Light. Powerful.' },
  { name: 'Apple Watch', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE53ref?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1661271050178', href: '/products/watch', tagline: 'Your essential companion.' },
  { name: 'AirPods', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1660803972361', href: '/products/airpods', tagline: 'Spatial Audio. Magic fit.' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmV8ZW58MHwwfHx8MTc2MzUyNTc1MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', href: '/products/accessories', tagline: 'Cases, power, and more.' },
]

export default function Products() {
  return (
    <section id="products" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Products</h2>
            <p className="mt-2 text-white/60 text-sm sm:text-base">Minimal cards. Quick scan. Tap to explore or buy at shop.unicorn.in</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {products.map((p) => (
            <motion.a
              key={p.name}
              href={p.href}
              whileHover={{ y: -2 }}
              className="group rounded-xl border border-white/10 bg-white/5/50 backdrop-blur-sm px-4 py-3 flex items-center gap-4 transition-colors hover:bg-white/5"
            >
              <div className="shrink-0 rounded-lg border border-white/10 bg-black/50 p-3">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="truncate text-base sm:text-lg font-medium tracking-tight">{p.name}</h3>
                  <span className="hidden sm:inline text-xs text-white/50 group-hover:text-white/70 transition-colors">→</span>
                </div>
                <p className="mt-0.5 text-xs sm:text-sm text-white/50 line-clamp-1">{p.tagline}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.shop.unicorn.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2 text-sm font-medium hover:bg-white/90 transition"
          >
            Shop now
          </a>
        </div>
      </div>
    </section>
  )
}
