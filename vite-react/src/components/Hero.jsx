import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Compass, MapPin, ChevronDown, Mountain, Coffee, Home } from 'lucide-react'
import LiveWeather from './LiveWeather'

export default function Hero({ onOpenBooking }) {
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 800], [0, 180])
  const opacityParallax = useTransform(scrollY, [0, 600], [1, 0.4])

  const handleScrollToTreks = () => {
    const el = document.querySelector('#treks')
    if (el) {
      const top = el.offsetTop - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      className="relative min-h-[96vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 film-grain"
    >
      {/* Background Layer with Art-Directed Parallax Photography */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute inset-0 pointer-events-none select-none z-0"
      >
        <picture>
          <source media="(min-width: 768px)" srcSet="/image/kmview22.webp" type="image/webp" />
          <source media="(max-width: 767px)" srcSet="/image/kmview22-mobile.jpg" type="image/jpeg" />
          <img 
            src="/image/kmview22.webp" 
            alt="Kudremukh rolling grassland ridges shrouded in early morning Western Ghats mist"
            className="w-full h-full object-cover object-center scale-105"
            loading="eager"
            fetchpriority="high"
          />
        </picture>

        {/* Cinematic Atmospheric Gradient Wash: Deep Forest to Dawn Light */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06130b] via-[#091f12]/60 to-[#07150c]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06130b]/80 via-transparent to-[#06130b]/60" />
      </motion.div>

      {/* Drifting Morning Mist Layer (CSS-only, low-CPU) */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen overflow-hidden z-[1]"
      >
        <div className="absolute -inset-[100%] w-[300%] h-[300%] bg-gradient-to-r from-transparent via-white/8 to-transparent animate-[float_18s_ease-in-out_infinite]" />
      </div>

      {/* Content Container */}
      <motion.div 
        style={{ opacity: opacityParallax }}
        className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl text-center"
      >
        {/* Top Badges Bar: Coordinates + Live Weather */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Kudremukh · Chikkamagaluru Trekking · Balagal Base</span>
          </div>
          <LiveWeather />
        </div>

        {/* Editorial Headline */}
        <div className="relative mb-6 sm:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-white tracking-[-0.03em] leading-[1.06] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
          >
            Where Shola Ridges Rise into the{' '}
            <span className="italic font-light text-amber-200/90 underline decoration-amber-400/40 decoration-1 underline-offset-8">
              Morning Mist.
            </span>
          </motion.h1>
        </div>

        {/* Editorial Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-200 text-base sm:text-lg md:text-xl font-normal max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed"
        >
          Your authentic mountain base at Henjodi Stores, Balagal for Kudremukh (Khudremukh) &amp; Chikkamagaluru trekking. Official forest permits assistance, native guides, 4x4 jeep transfers, hot Malnad meals, and honest homestay hospitality.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          {/* Main Plan Trek Pill CTA */}
          <button
            onClick={onOpenBooking}
            data-cursor="PLAN"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Plan Your Trek</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          {/* Direct WhatsApp Callout */}
          <a
            href="https://wa.me/918073178851?text=Hello%20Henjodi%20Stores!%20I%20would%20like%20to%20know%20about%20trek%20slots%20and%20homestay%20at%20Balagal."
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="WHATSAPP"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sm sm:text-base bg-white/15 backdrop-blur-md border border-white/25 text-white hover:bg-white/25 transition-all hover:-translate-y-0.5"
          >
            <span>WhatsApp +91 8073178851</span>
          </a>

          {/* Explore Routes Scroll */}
          <button
            onClick={handleScrollToTreks}
            data-cursor="VIEW"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-sm text-slate-300 hover:text-white transition-colors"
          >
            <span>Explore 4 Peaks</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </motion.div>

        {/* Floating Rotating Stamp & Key Elevation Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-14 sm:mt-16 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left"
        >
          <div className="bg-black/30 backdrop-blur-sm p-3.5 sm:p-4 rounded-2xl border border-white/10">
            <div className="font-mono text-[10px] text-amber-300 uppercase tracking-widest mb-1">Peak Elevation</div>
            <div className="font-serif text-lg sm:text-xl font-bold text-white">1,894m</div>
            <div className="text-xs text-slate-300 truncate">Kudremukh Summit</div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-3.5 sm:p-4 rounded-2xl border border-white/10">
            <div className="font-mono text-[10px] text-amber-300 uppercase tracking-widest mb-1">Base Hub</div>
            <div className="font-serif text-lg sm:text-xl font-bold text-white">810m ASL</div>
            <div className="text-xs text-slate-300 truncate">Balagal Bus Stop, SH-66</div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-3.5 sm:p-4 rounded-2xl border border-white/10">
            <div className="font-mono text-[10px] text-amber-300 uppercase tracking-widest mb-1">Native Guides</div>
            <div className="font-serif text-lg sm:text-xl font-bold text-white">100% Local</div>
            <div className="text-xs text-slate-300 truncate">Born &amp; raised in Mullodi</div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-3.5 sm:p-4 rounded-2xl border border-white/10">
            <div className="font-mono text-[10px] text-amber-300 uppercase tracking-widest mb-1">Permit Desk</div>
            <div className="font-serif text-lg sm:text-xl font-bold text-white">Daily Limits</div>
            <div className="text-xs text-slate-300 truncate">Forest Dept Gate Clearances</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Rotating Circular Text Stamp (Desktop Aesthetic Detail) */}
      <div 
        aria-hidden="true"
        className="hidden xl:flex absolute bottom-8 right-8 w-28 h-28 pointer-events-none items-center justify-center select-none opacity-80"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full rotating-stamp text-amber-300/80 fill-current">
          <defs>
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
          </defs>
          <text fontSize="7.8" fontWeight="bold" letterSpacing="2.2">
            <textPath href="#circlePath">
              · TREK · STAY · EAT · BALAGAL · HENJODI
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-emerald-300">
          <Mountain className="w-7 h-7" />
        </div>
      </div>
    </section>
  )
}
