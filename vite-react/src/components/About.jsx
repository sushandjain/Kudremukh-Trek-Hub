import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="about" className="py-20 md:py-28 bg-cream-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/5 to-transparent" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-dark"
        >
          About Henjodi Stores
        </motion.h2>

        {/* Owner Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-secondary rounded-full blur opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
            <img 
              src="/image/Screenshot 2025-07-11 012754.png" 
              alt="Prasad - Owner of Henjodi Stores Balagal - Western Ghats Trekking Expert"
              loading="lazy"
              decoding="async"
              className="relative w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-accent shadow-strong transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="text-center mt-6">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-dark">Prasad</h3>
            <p className="text-primary font-medium text-lg mt-1">Owner & Adventure Guide</p>
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft space-y-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Welcome to <span className="font-semibold text-primary">Henjodi Stores</span>, your gateway to the magnificent Western Ghats of Karnataka. Based in the heart of Malenadu, we are passionate about sharing the hidden treasures of our region with fellow nature enthusiasts and adventure seekers.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our experienced local guides know every trail, every viewpoint, and every secret spot that makes the Western Ghats truly magical. From the misty peaks of <span className="font-semibold text-accent">Kudremukh</span> to the pristine waters of <span className="font-semibold text-accent">Netravati</span>, we offer carefully curated trekking experiences that showcase the raw beauty of our homeland.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At Henjodi Stores, we believe in responsible tourism that preserves the natural beauty of our mountains while providing authentic experiences to our guests.
            </p>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-lg text-gray-600 italic flex items-center gap-2">
                <span className="text-2xl">☕</span>
                Plus, take home the true flavor of Malenadu with our coffee powder, tea blends, homemade snacks, and trekking essentials.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto"
        >
          {[
            { number: '7+', label: 'Trek Routes' },
            { number: '10+', label: 'Years Experience' },
            { number: '100%', label: 'Local Guides' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-strong hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient bg-gradient-secondary bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
