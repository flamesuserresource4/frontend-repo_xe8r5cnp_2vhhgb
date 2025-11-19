import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Products from '../components/Products'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <CTA />
      </main>
      <footer className="bg-black border-t border-white/10 text-white/60 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h4 className="text-white">Shop</h4>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:text-white" href="/products/iphone">iPhone</a></li>
              <li><a className="hover:text-white" href="/products/mac">Mac</a></li>
              <li><a className="hover:text-white" href="/products/ipad">iPad</a></li>
              <li><a className="hover:text-white" href="/products/watch">Apple Watch</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white">Programs</h4>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:text-white" href="/loyalty">UNICORN Loyalty</a></li>
              <li><a className="hover:text-white" href="/students">Student Offer</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white">Support</h4>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:text-white" href="/stores">Find a Store</a></li>
              <li><a className="hover:text-white" href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white">UNICON Group</h4>
            <p className="mt-2">Official Apple Premium Reseller. 100+ locations across India.</p>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} UNICORN. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
