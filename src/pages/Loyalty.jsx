import Navbar from '../components/Navbar'

export default function Loyalty() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-semibold">UNICORN Loyalty Plan</h1>
          <p className="mt-4 text-white/70 max-w-2xl">Earn points every time you shop online at shop.unicorn.in or at any of our 100+ stores. Redeem points for future purchases and unlock exclusive perks like early access, member events, and more.</p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-medium">How it works</h3>
              <ul className="mt-3 list-disc list-inside text-white/80 space-y-1">
                <li>Sign in with your UNICORN ID</li>
                <li>Earn points on eligible purchases</li>
                <li>Redeem at checkout online or in-store</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-medium">Member perks</h3>
              <ul className="mt-3 list-disc list-inside text-white/80 space-y-1">
                <li>Exclusive member-only offers</li>
                <li>Priority service appointments</li>
                <li>Early access to launches</li>
              </ul>
            </div>
          </div>

          <a href="https://www.shop.unicorn.in" target="_blank" className="inline-block mt-10 px-6 py-3 rounded-full bg-white text-black font-medium">Join Now</a>
        </section>
      </main>
    </div>
  )
}
