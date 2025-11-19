import Navbar from '../components/Navbar'

export default function Students() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-semibold">Student Offer</h1>
          <p className="mt-4 text-white/70 max-w-2xl">Students and educators get special pricing on Mac, iPad, and accessories. Verify your status and save on your next purchase.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-medium">Save on devices</h3>
              <p className="mt-2 text-white/80">Get education pricing on Mac and iPad, plus accessories for your study setup.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-medium">Easy verification</h3>
              <p className="mt-2 text-white/80">Verify online and shop instantly at shop.unicorn.in.</p>
            </div>
          </div>
          <a href="https://www.shop.unicorn.in" target="_blank" className="inline-block mt-10 px-6 py-3 rounded-full bg-white text-black font-medium">Check Eligibility</a>
        </section>
      </main>
    </div>
  )
}
