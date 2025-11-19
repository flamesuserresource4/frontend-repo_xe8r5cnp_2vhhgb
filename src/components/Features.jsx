import { motion } from 'framer-motion'
import { ShieldCheck, BadgePercent, GraduationCap, Truck, Headphones, Store } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Authorized Apple Reseller',
    desc: 'Genuine products, official warranty, and trusted service.'
  },
  {
    icon: BadgePercent,
    title: 'UNICORN Loyalty Plan',
    desc: 'Earn and redeem points across online and 100+ stores.'
  },
  {
    icon: GraduationCap,
    title: 'Student Offer',
    desc: 'Exclusive education pricing and bundles.'
  },
  {
    icon: Store,
    title: '100 Stores Nationwide',
    desc: 'Visit your nearest UNICORN store for hands‑on help.'
  },
  {
    icon: Headphones,
    title: 'AppleCare & Support',
    desc: 'Get expert help and extended coverage from Apple specialists.'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Secure checkout with quick, reliable shipping.'
  }
]

export default function Features() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">Why UNICORN</h2>
        <p className="mt-2 text-white/70">All your favorite Apple products with a premium retail experience.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Icon className="h-6 w-6" />
              <h3 className="mt-4 text-xl font-medium">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
