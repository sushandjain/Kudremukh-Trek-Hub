import { motion } from 'framer-motion'

const reasons = [
  {
    icon: '🧭',
    title: 'Native Mountain Guides',
    description: 'Our guides are born and raised in the Kalasa & Kudremukh valleys. They possess deep instinctual knowledge of local weather, terrain, and shola wildlife.'
  },
  {
    icon: '📋',
    title: 'Permit & Jeep Coordination',
    description: 'Navigating forest guidelines and rough 4x4 jeep trails to Mullodi base camp is seamless with our direct local coordination.'
  },
  {
    icon: '🍲',
    title: 'Homestyle Malenadu Cuisine',
    description: 'Fresh hot meals and energy-packed trail lunches cooked with local love. Authentic regional taste that restores energy after demanding peak climbs.'
  },
  {
    icon: '🤝',
    title: 'Direct Local Connection',
    description: 'You talk directly with Prasad and the Henjodi family in Balagal. No third-party city aggregators or inflated commissions.'
  }
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 md:py-28 bg-[#f8faf7] dark:bg-[#060d08] transition-colors">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="section-eyebrow">
            Our Advantage
          </div>
          <h2 className="section-heading text-forest-950 dark:text-emerald-50">
            Why Trek with Henjodi Stores
          </h2>
          <p className="section-subheading text-slate-700 dark:text-slate-300">
            Authentic, safe, and community-rooted adventure support right at the gateway of Karnataka's highest grasslands.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="stitch-card p-6 sm:p-7 bg-white dark:bg-[#0c1810] border border-forest-800/10 dark:border-white/10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
            >
              <div>
                <div className="text-3xl p-3 rounded-2xl bg-forest-50 dark:bg-forest-900/40 border border-forest-100 dark:border-forest-700/50 w-fit mb-5">
                  {item.icon}
                </div>
                
                <h3 className="font-serif text-lg sm:text-xl font-bold text-forest-950 dark:text-white mb-2.5">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-forest-100 dark:border-white/10 text-[11px] font-mono font-bold text-forest-700 dark:text-emerald-400 uppercase tracking-wider">
                Henjodi Standard
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
