import { useState } from 'react'
import { Menu, X, ShoppingBag, MapPin } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/products', label: 'Products' },
  { to: '/loyalty', label: 'Loyalty' },
  { to: '/students', label: 'Student Offer' },
  { to: '/content', label: 'Content' },
  { to: '/stores', label: '100 Stores' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm transition-colors ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="h-6 w-6 rounded-full bg-white/90 flex items-center justify-center">
              <span className="text-xs font-bold text-slate-900">U</span>
            </div>
            <span className="font-semibold">UNICORN</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://www.shop.unicorn.in" target="_blank" className="hidden sm:inline-flex items-center gap-2 text-slate-200 hover:text-white text-sm">
              <ShoppingBag className="h-4 w-4" /> Shop
            </a>
            <Link to="/stores" className="hidden sm:inline-flex items-center gap-1 text-slate-200 hover:text-white text-sm">
              <MapPin className="h-4 w-4" /> Stores
            </Link>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-200 hover:text-white">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <a href="https://www.shop.unicorn.in" target="_blank" className="block px-3 py-2 text-sm text-slate-300 hover:text-white" onClick={() => setOpen(false)}>
              Shop Online
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
