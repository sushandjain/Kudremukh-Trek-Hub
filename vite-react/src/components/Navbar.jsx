import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '#home', isRoute: false },
  { name: 'About', href: '#about', isRoute: false },
  { name: 'Treks', href: '#treks', isRoute: false },
  { name: 'Store', href: '#store', isRoute: false },
  { name: 'Gallery', href: '#gallery', isRoute: false },
  { name: 'Reviews', href: '/reviews', isRoute: true, highlight: true },
  { name: 'Contact', href: '#contact', isRoute: false },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
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

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-lg py-3 shadow-strong' 
          : 'bg-black/80 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white font-display text-xl md:text-2xl font-bold hover:text-accent transition-colors"
          >
            <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.92 6-4.72 7.28L13 17v5l6-6-1.28-1.28c1.41-1.63 2.28-3.76 2.28-6.07 0-5.18-4.16-9.4-9.28-9.6zM11 4.07C7.05 4.56 4 7.92 4 12c0 3.21 1.92 6 4.72 7.28L11 17v5l-6-6 1.28-1.28C4.87 13.09 4 10.96 4 8.65c0-5.18 4.16-9.4 9.28-9.6v2.02c-3.95.49-7 3.85-7 7.93h4v-5z"/>
            </svg>
            <span className="hidden sm:inline">KUDREMUKH TREKS</span>
            <span className="sm:hidden">KT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    link.highlight 
                      ? 'bg-gradient-secondary text-white hover:scale-105' 
                      : 'text-white hover:bg-white/10 hover:text-accent'
                  }`}
                >
                  {link.name} {link.highlight && '⭐'}
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
                  className="px-4 py-2 rounded-full text-white font-medium hover:bg-white/10 hover:text-accent transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-4/5"></span>
                </a>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-white/10"
            >
              <div className="flex flex-col gap-2 pt-4">
                {navLinks.map((link) => (
                  link.isRoute ? (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-lg font-medium transition-all ${
                        link.highlight 
                          ? 'bg-gradient-secondary text-white' 
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      {link.name} {link.highlight && '⭐'}
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
                      className="px-4 py-3 rounded-lg text-white font-medium hover:bg-white/10 transition-all"
                    >
                      {link.name}
                    </a>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
