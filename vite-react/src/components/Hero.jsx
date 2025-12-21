  import { motion } from 'framer-motion'
  import { Link } from 'react-router-dom'

  export default function Hero() {
    return (
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('https://www.captureatrip.com/_next/image?url=https%3A%2F%2Fcaptureatrip-cms-storage.s3.ap-south-1.amazonaws.com%2FTrekking_Places_in_Chennai_47570b8a49.avif&w=3840&q=50')`
          }}
        />

        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gold/20 rounded-full blur-2xl"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight px-2">
                Kudremukh Trek Booking –{' '}
                <span className="text-gradient bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent">
                  Netravati, Kurinjal & Malenadu Peaks
                </span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Henjodi Stores – Your Trek Partner
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 font-light max-w-2xl mx-auto px-2"
            >
              Experience the pristine beauty of Karnataka's mountains with expert local guides
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* WhatsApp Book Button */}
              <a 
                href="https://wa.me/918073178851?text=Hello! I'm interested in booking a trek with Malenadu Treks."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-glow-green hover:shadow-[0_12px_35px_rgba(37,211,102,0.6)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="relative z-10">Book Your Adventure</span>
              </a>

              {/* Reviews Button */}
              <Link 
                to="/reviews"
                className="group inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border-2 border-white/30 text-white px-6 py-4 rounded-full font-semibold text-lg hover:bg-white/25 hover:border-white/50 hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-gold animate-twinkle" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                Read Reviews
              </Link>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator - positioned relative to section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/70 hover:text-white/90 transition-colors cursor-pointer"
            onClick={() => {
              const aboutSection = document.querySelector('#about')
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <span className="text-xs md:text-sm font-medium tracking-wide">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white/70 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    )
  }
