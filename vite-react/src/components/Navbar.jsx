import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, ArrowUpRight, Menu, X, Compass, Phone } from 'lucide-react'
import logo from '/image/logo.png'

const navLinks = [
  { name: 'Peaks', href: '#treks', isRoute: false },
  { name: 'Base Services', href: '#services', isRoute: false },
  { name: 'Stay & Food', href: '#stay-food', isRoute: false },
  { name: 'The Ascent', href: '#how-to-book', isRoute: false },
  { name: 'Gallery', href: '#gallery', isRoute: false },
  { name: 'Location', href: '#location', isRoute: false },
  { name: 'FAQ', href: '#faq', isRoute: false },
  { name: 'Reviews', href: '/reviews', isRoute: true },
]

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check saved theme or system preference
  useEffect(() => {
    const saved = localStorage.getItem('henjodi-theme')
    if (saved === 'dark') {
      setIsDark(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light'
    setIsDark(!isDark)
    if (newTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('henjodi-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('henjodi-theme', 'light')
    }
  }

  const handleNavClick = (href, isRoute) => {
    setIsMobileMenuOpen(false)
    if (!isRoute && isHomePage) {
      const element = document.querySelector(href)
      if (element) {
        const offsetTop = element.offsetTop - 80
        window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f8faf7]/90 dark:bg-[#070d08]/90 backdrop-blur-xl border-b border-forest-800/10 dark:border-white/10 py-3 shadow-sm'
          : 'bg-gradient-to-b from-[#06130b]/90 to-transparent py-4 text-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Heritage Seal */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-forest-600 rounded-xl"
            aria-label="Henjodi Stores Home"
          >
            <img
              src={logo}
              alt="Henjodi Stores Seal"
              width="44"
              height="44"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-full bg-white/10 p-0.5 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col text-left">
              <span className={`font-serif text-lg sm:text-xl font-bold tracking-tight leading-none ${
                isScrolled ? 'text-forest-950 dark:text-emerald-100' : 'text-white'
              }`}>
                Henjodi Stores
              </span>
              <span className={`text-[11px] font-mono tracking-wider ${
                isScrolled ? 'text-forest-700 dark:text-emerald-300' : 'text-emerald-300'
              }`}>
                BALAGAL · KALASA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isScrolled
                      ? 'text-slate-700 dark:text-slate-300 hover:text-forest-950 dark:hover:text-white hover:bg-forest-100/60 dark:hover:bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={isHomePage ? link.href : `/${link.href}`}
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault()
                      handleNavClick(link.href, false)
                    }
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isScrolled
                      ? 'text-slate-700 dark:text-slate-300 hover:text-forest-950 dark:hover:text-white hover:bg-forest-100/60 dark:hover:bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* Right Action Island: Dark Mode Toggle + Plan Trek CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Night / Camp Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to daylight mist mode' : 'Switch to night campfire mode'}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                isScrolled
                  ? 'bg-forest-100/60 dark:bg-white/10 text-slate-800 dark:text-amber-300 hover:bg-forest-200/60'
                  : 'bg-white/15 text-amber-200 hover:bg-white/25'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Plan Trek Trigger Pill (Desktop) */}
            <button
              onClick={onOpenBooking}
              data-cursor="BOOK"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Plan Trek</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                isScrolled
                  ? 'bg-forest-100/60 dark:bg-white/10 text-forest-950 dark:text-emerald-100'
                  : 'bg-white/15 text-white'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[65px] bg-[#f8faf7] dark:bg-[#070d08] z-40 lg:hidden overflow-y-auto px-6 py-8 flex flex-col justify-between"
          >
            {/* Cultural Kannada Welcome Banner */}
            <div className="pb-6 border-b border-forest-800/10 dark:border-white/10">
              <span className="font-kannada text-xs font-semibold text-dawn-amber block mb-1">
                ಕುದುರೆಮುಖಕ್ಕೆ ಸ್ವಾಗತ • Welcome to Kudremukh
              </span>
              <p className="font-serif text-xl font-bold text-forest-950 dark:text-emerald-100">
                Henjodi Stores Base Camp
              </p>
              <p className="text-xs text-slate-500 font-mono mt-0.5">Balagal Bus Stop • SH-66</p>
            </div>

            {/* Staggered Navigation Links */}
            <div className="py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block font-serif text-2xl font-bold text-forest-950 dark:text-emerald-100 hover:text-dawn-amber transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={isHomePage ? link.href : `/${link.href}`}
                      onClick={(e) => {
                        if (isHomePage) {
                          e.preventDefault()
                          handleNavClick(link.href, false)
                        }
                      }}
                      className="block font-serif text-2xl font-bold text-forest-950 dark:text-emerald-100 hover:text-dawn-amber transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-forest-800/10 dark:border-white/10 space-y-3 pb-8">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  onOpenBooking()
                }}
                className="w-full py-4 rounded-full bg-[#25D366] text-white font-bold text-base flex items-center justify-center gap-2 shadow-md"
              >
                <span>Plan Your Trek on WhatsApp</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>

              <a
                href="tel:+918073178851"
                className="w-full py-3.5 rounded-full border border-forest-800/20 dark:border-white/20 text-forest-900 dark:text-emerald-200 font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 8073178851</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
