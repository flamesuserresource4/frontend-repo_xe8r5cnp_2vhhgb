import Navbar from '../components/Navbar'

export default function Content() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-semibold">Content</h1>
          <p className="mt-4 text-white/70 max-w-2xl">News, tips, and stories from the Apple world at UNICORN. Read about product launches, how‑tos, and behind‑the‑scenes from our stores.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {[1,2,3,4].map((i) => (
              <article key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
                <h3 className="text-xl font-medium">Article Title {i}</h3>
                <p className="mt-2 text-white/80">A short summary that teases the article. Clean, readable, and helpful.</p>
                <a href="#" className="inline-block mt-3 text-white/80 hover:text-white">Read more →</a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
