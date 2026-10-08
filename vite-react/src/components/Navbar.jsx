import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '/image/logo.png'

const navLinks = [
  { name: 'Home', href: '#home', isRoute: false },
  { name: 'Treks', href: '#treks', isRoute: false },
  { name: 'Stay & Food', href: '#stay-food', isRoute: false },
  { name: 'How to Book', href: '#how-to-book', isRoute: false },
  { name: 'About', href: '#about', isRoute: false },
  { name: 'Gallery', href: '#gallery', isRoute: false },
  { name: 'Location', href: '#location', isRoute: false },
  { name: 'FAQ', href: '#faq', isRoute: false },
  { name: 'Reviews', href: '/reviews', isRoute: true },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const whatsappHeaderUrl = "https://wa.me/918073178851?text=Hello%20Henjodi%20Stores!%20I%20am%20interested%20in%20trek%20booking%20and%20homestay%20in%20Kudremukh."

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-forest-100 py-3'
          : 'bg-dark/85 backdrop-blur-md text-white py-4 border-b border-white/10'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Identity */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-forest-600 rounded-xl"
            aria-label="Henjodi Stores Home"
          >
            <img
              src={logo}
              alt="Henjodi Stores Logo"
              width="48"
              height="48"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full bg-white/10 p-0.5 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className={`font-heading text-lg sm:text-xl font-bold tracking-tight leading-none ${
                isScrolled ? 'text-forest-900' : 'text-white'
              }`}>
                Henjodi Stores
              </span>
              <span className={`text-[11px] font-medium tracking-wide ${
                isScrolled ? 'text-forest-700' : 'text-emerald-300'
              }`}>
                Balagal, Kalasa • Trekking Hub
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                    isScrolled
                      ? 'text-slate-700 hover:text-forest-900 hover:bg-forest-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
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
                      handleNavClick(link.href, link.isRoute)
                    }
                  }}
                  className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                    isScrolled
                      ? 'text-slate-700 hover:text-forest-900 hover:bg-forest-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* Action Button: Book on WhatsApp */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappHeaderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#20ba5a] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Book on WhatsApp"
            >
              <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Book on WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden p-2 rounded-xl transition-colors ${
                isScrolled 
                  ? 'text-slate-800 hover:bg-forest-50' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden mt-3 pt-3 border-t border-forest-800/10"
            >
              <div className="flex flex-col gap-1 pb-3">
                {navLinks.map((link) => (
                  link.isRoute ? (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        isScrolled
                          ? 'text-slate-800 hover:bg-forest-50'
                          : 'text-white hover:bg-white/10'
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
                          handleNavClick(link.href, link.isRoute)
                        }
                      }}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        isScrolled
                          ? 'text-slate-800 hover:bg-forest-50'
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      {link.name}
                    </a>
                  )
                ))}
                <div className="pt-2 px-1">
                  <a
                    href="tel:+918073178851"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-forest-800/10 text-forest-800"
                  >
                    📞 Call Us: +91 80731 78851
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
