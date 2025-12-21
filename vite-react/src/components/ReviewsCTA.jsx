import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

export default function ReviewsCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="reviews" className="py-20 relative overflow-hidden bg-emerald-800">
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1a5d3a 0%, #0d3d2b 50%, #1e4d3d 100%)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='25' cy='25' r='2' fill='%23ffffff15'%3E%3Canimate attributeName='r' values='2;4;2' dur='4s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='75' cy='75' r='3' fill='%23ffffff10'%3E%3Canimate attributeName='r' values='3;6;3' dur='5s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='50' cy='20' r='1.5' fill='%23ffffff20'%3E%3Canimate attributeName='r' values='1.5;3;1.5' dur='3s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/svg%3E")`
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-5xl md:text-6xl mb-6 block">💬</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Had a Great Trek With Us?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Share your experience! Help fellow trekkers discover their next adventure by leaving a review on Google or sending us your feedback on WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/918073178851?text=Hi! I wanted to share my feedback about my trek experience..."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-secondary text-white px-8 py-4 rounded-full font-bold text-lg shadow-strong hover:-translate-y-1 hover:scale-105 hover:shadow-glow-accent transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Share Feedback on WhatsApp
            </a>
            <Link 
              to="/reviews"
              className="group inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/25 hover:border-white/50 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Leave a Google Review
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
