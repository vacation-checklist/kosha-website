import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="border-b border-cream-dark py-7 px-12 text-center bg-white">
      <Link to="/" className="inline-block">
        <span className="font-garamond text-3xl text-navy tracking-widest no-underline">
          KOSHA
        </span>
      </Link>
      <div className="text-xs font-semibold tracking-widest text-gold uppercase mt-1">
        A treasury for your family
      </div>
      <div className="flex justify-center gap-7 flex-wrap mt-5">
        <Link
          to="/"
          className={`text-sm tracking-wide no-underline pb-0.5 border-b-2 transition ${
            isActive('/') 
              ? 'text-navy border-gold font-medium' 
              : 'text-text-light border-transparent hover:text-navy'
          }`}
        >
          Home
        </Link>
        <Link
          to="/why-kosha"
          className={`text-sm tracking-wide no-underline pb-0.5 border-b-2 transition ${
            isActive('/why-kosha')
              ? 'text-navy border-gold font-medium'
              : 'text-text-light border-transparent hover:text-navy'
          }`}
        >
          Why "Kosha"
        </Link>
        <Link
          to="/privacy"
          className={`text-sm tracking-wide no-underline pb-0.5 border-b-2 transition ${
            isActive('/privacy')
              ? 'text-navy border-gold font-medium'
              : 'text-text-light border-transparent hover:text-navy'
          }`}
        >
          Privacy & security
        </Link>
        <Link
          to="/vacation-checklist"
          className={`text-sm tracking-wide font-semibold text-navy border-2 border-gold rounded-md px-4 py-1 transition ${
            isActive('/vacation-checklist')
              ? 'bg-gold text-white'
              : 'hover:bg-gold hover:text-white'
          }`}
        >
          Vacation Checklist
        </Link>
        <Link
          to="/early-access"
          className={`text-sm tracking-wide font-semibold text-navy border-2 border-gold rounded-md px-4 py-1 transition ${
            isActive('/early-access')
              ? 'bg-gold text-white'
              : 'hover:bg-gold hover:text-white'
          }`}
        >
          Get early access
        </Link>
      </div>
    </nav>
  )
}
