import Navbar from '../components/Navbar'

export default function Stores() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-semibold">100 UNICORN Stores</h1>
          <p className="mt-4 text-white/70 max-w-2xl">Find us across India. Visit for hands‑on demos, expert advice, and support from Apple‑trained specialists.</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
                <h3 className="text-xl font-medium">City {i}</h3>
                <p className="mt-1 text-white/70">Address line, Landmark, State</p>
                <a href="#" className="inline-block mt-3 text-white/80 hover:text-white">View details →</a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
