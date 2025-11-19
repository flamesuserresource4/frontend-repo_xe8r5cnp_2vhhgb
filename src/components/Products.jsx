import { motion } from 'framer-motion'

const products = [
  { name: 'iPhone', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1692820756112', href: '/products/iphone', tagline: 'Titanium. So strong. So light. So Pro.' },
  { name: 'Mac', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-select-202310?wid=600&hei=600&fmt=jpeg&qlt=90&.v=1697230830200', href: '/products/mac', tagline: 'Supercharged by M‑series chips.' },
  { name: 'iPad', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-wifi-spacegray-202210?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1664411207209', href: '/products/ipad', tagline: 'Lovable. Drawable. Magical.' },
  { name: 'Apple Watch', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmV8ZW58MHwwfHx8MTc2MzUyNTc1MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', href: '/products/watch', tagline: 'Smarter. Brighter. Mightier.' },
  { name: 'AirPods', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1660803972361', href: '/products/airpods', tagline: 'Personalized Spatial Audio.' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmV8ZW58MHwwfHx8MTc2MzUyNTc1MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', href: '/products/accessories', tagline: 'Cases, cables, power, and more.' },
]

export default function Products() {
  return (
    <section id="products" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">Products</h2>
        <p className="mt-2 text-white/70">Explore the lineup. Buy online at shop.unicorn.in or visit a store.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <motion.a key={p.name} href={p.href} whileHover={{ y: -4, scale: 1.01 }} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-square bg-black/60 flex items-center justify-center overflow-hidden">
                <img src={p.image} alt={p.name} className="h-3/4 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">{p.name}</h3>
                  <span className="text-sm text-white/60">Learn more →</span>
                </div>
                <p className="mt-1 text-white/70 text-sm">{p.tagline}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
