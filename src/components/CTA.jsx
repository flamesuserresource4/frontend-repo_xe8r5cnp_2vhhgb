export default function CTA() {
  return (
    <section className="bg-gradient-to-b from-black to-slate-900 text-white py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">Ready to switch or upgrade?</h2>
        <p className="mt-3 text-white/70">Shop the latest from Apple with UNICORN perks, or drop by one of our 100 stores for hands‑on help.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="https://www.shop.unicorn.in" target="_blank" className="px-6 py-3 rounded-full bg-white text-black font-medium hover:opacity-90">Shop Online</a>
          <a href="/stores" className="px-6 py-3 rounded-full border border-white/30 hover:border-white">Find a Store</a>
        </div>
      </div>
    </section>
  )
}
