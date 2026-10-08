import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#f4f7f5] dark:bg-[#07100a] border-t border-forest-900/10 dark:border-white/10 transition-colors">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="section-eyebrow">
            Local Roots &amp; Heritage
          </div>
          <h2 className="section-heading text-forest-950 dark:text-emerald-50">
            About Henjodi Stores &amp; Guide Prasad
          </h2>
          <p className="section-subheading text-slate-700 dark:text-slate-300">
            Born and rooted in Balagal, at the foothills of Kudremukh Peak. We help adventurers explore the Western Ghats safely and respectfully.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Founder Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 stitch-card p-6 sm:p-8 text-center bg-white flex flex-col items-center"
          >
            <div className="relative mb-5">
              <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-forest-100 shadow-md">
                <img 
                  src="/image/Screenshot 2025-07-11 012754.png" 
                  alt="Prasad - Henjodi Stores Balagal Founder & Local Guide"
                  width="180"
                  height="180"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-1 right-2 px-3 py-1 rounded-full bg-forest-800 text-white text-[11px] font-bold shadow">
                Local Guide
              </span>
            </div>

            <h3 className="font-heading text-xl sm:text-2xl font-bold text-forest-900">
              Prasad Henjodi
            </h3>
            <p className="text-xs font-semibold text-forest-700 tracking-wide mt-1">
              Founder • Western Ghats Trek Specialist
            </p>
            <p className="text-xs text-slate-500 mt-3 leading-relaxed">
              Based at Balagal Bus Stop, Kalasa. Personally coordinating forest permits, experienced local guides, and authentic homestay stays.
            </p>

            <a
              href="https://wa.me/918073178851?text=Hello%20Prasad%2C%20I%20would%20like%20to%20plan%20a%20trek%20in%20Kudremukh."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-2.5 rounded-full text-xs font-bold bg-forest-50 text-forest-900 border border-forest-200 hover:bg-forest-100 transition-colors"
            >
              Chat Directly with Prasad
            </a>
          </motion.div>

          {/* Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8 stitch-card p-6 sm:p-10 bg-white"
          >
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Welcome to <strong className="text-forest-900">Henjodi Stores</strong>, situated on State Highway 66 at Balagal, Kalasa. For years, our store has served as the meeting point, logistics hub, and preparation center for trekkers journeying into the Kudremukh National Park and neighboring Western Ghats ranges.
              </p>
              
              <p>
                The Western Ghats are a fragile UNESCO World Heritage ecosystem. We believe true adventure goes hand-in-hand with conservation: respecting forest department permit limits, maintaining strictly zero-plastic trails, and supporting local village guides who know the mountains by heart.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 my-2 border-y border-forest-100">
                <div className="flex items-start gap-3">
                  <span className="text-xl p-2 rounded-xl bg-forest-50 text-forest-800">🌱</span>
                  <div>
                    <h4 className="font-bold text-forest-900 text-sm">Responsible Trekking</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Strict adherence to forest limits, trail safety, and eco-conservation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl p-2 rounded-xl bg-forest-50 text-forest-800">☕</span>
                  <div>
                    <h4 className="font-bold text-forest-900 text-sm">Local Malenadu Products</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Fresh Chikmagalur coffee, forest honey, tea blends &amp; snacks.</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-500 italic">
                Whether you need assistance with early morning jeep transfers to Mullodi, forest checkpoints, leech socks, or wholesome home food after a 20km summit trek — Henjodi Stores is your family on the mountain.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
