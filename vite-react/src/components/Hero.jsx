import { motion } from 'framer-motion'

export default function Hero() {
  const whatsappUrl = "https://wa.me/918073178851?text=Hello%20Henjodi%20Stores!%20I%20would%20like%20to%20book%20a%20trek.%0A%E2%80%A2%20Trek%3A%20Kudremukh%20Peak%0A%E2%80%A2%20Preferred%20Date%3A%20%0A%E2%80%A2%20Group%20Size%3A%20"

  const handleScrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) {
      const top = el.offsetTop - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Real Local Kudremukh Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10, 26, 16, 0.72) 0%, rgba(15, 36, 23, 0.65) 50%, rgba(10, 24, 15, 0.92) 100%), url('/image/kmview.webp')`
        }}
      />

      {/* Subtle organic light accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Location Chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Balagal, Kalasa • Chikmagalur, Karnataka</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 drop-shadow-sm"
          >
            Western Ghats Trekking &amp; Local Stay at{' '}
            <span className="text-emerald-300 underline decoration-emerald-400/50 decoration-wavy decoration-1 underline-offset-8">
              Henjodi Stores
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-100 font-normal max-w-2xl mx-auto mb-10 leading-relaxed text-pretty"
          >
            Your trusted base for Kudremukh, Netravati Peak, Kurinjal &amp; Ballalarayana Durga. Forest permits assistance, local guides, authentic homestay &amp; Malenadu cafe.
          </motion.p>

          {/* Primary & Secondary Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary WhatsApp Booking Button */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-white hover:bg-[#20ba5a] px-8 py-4 rounded-full font-bold text-base sm:text-lg shadow-glow-green hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)] transition-all transform hover:-translate-y-1 active:translate-y-0"
              aria-label="Book Trek on WhatsApp with pre-filled details"
            >
              <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Book on WhatsApp</span>
            </a>

            {/* Explore Treks Smooth Scroll */}
            <button
              onClick={() => handleScrollTo('#treks')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 hover:bg-white/25 text-white px-7 py-4 rounded-full font-semibold text-base transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Treks</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </motion.div>

          {/* Quick Credibility Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16 pt-8 border-t border-white/15"
          >
            {[
              { icon: '🌲', title: 'Forest Permits', desc: 'Guidance & Booking' },
              { icon: '🧭', title: 'Local Guides', desc: 'Born & Raised Here' },
              { icon: '🏡', title: 'Homestay & Cafe', desc: 'Authentic Malenadu' },
              { icon: '📍', title: 'Balagal Hub', desc: 'Direct Trail Support' },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 text-center border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-white text-xs sm:text-sm font-bold">{item.title}</div>
                <div className="text-slate-200 text-[11px] sm:text-xs">{item.desc}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
