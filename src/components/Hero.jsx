import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">UNICORN x Apple</p>
          <h1 className="mt-4 text-5xl sm:text-6xl font-semibold leading-tight">
            Experience the Apple ecosystem.
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">
            Explore products, exclusive student pricing, and the UNICORN Loyalty Plan. 100 stores nationwide with the service you expect.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://www.shop.unicorn.in" target="_blank" className="px-5 py-3 rounded-full bg-white text-black font-medium hover:opacity-90 transition">Shop at shop.unicorn.in</a>
            <a href="#products" className="px-5 py-3 rounded-full border border-white/30 hover:border-white transition">Browse Products</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black" />
    </section>
  )
}
