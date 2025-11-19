import Navbar from '../components/Navbar'

export default function ProductsPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-semibold">Products</h1>
          <p className="mt-4 text-white/70 max-w-2xl">Discover the full Apple lineup at UNICORN. Shop online or visit a store.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["iPhone","Mac","iPad","Apple Watch","AirPods","Accessories"].map((name) => (
              <a key={name} href={"/products/" + name.toLowerCase().replace(' ', '')} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/30">
                <h3 className="text-xl font-medium">{name}</h3>
                <p className="mt-2 text-white/70">Learn more →</p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
