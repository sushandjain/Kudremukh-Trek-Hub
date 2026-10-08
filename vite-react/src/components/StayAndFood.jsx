import { motion } from 'framer-motion'
import { Home, Coffee, Check, ArrowUpRight, Sparkles } from 'lucide-react'

export default function StayAndFood() {
  const stayWhatsApp = "https://wa.me/918073178851?text=Hello%20Henjodi%20Stores!%20I%20would%20like%20to%20inquire%20about%20homestay%20and%20food%20arrangements%20in%20Balagal/Kalasa.%0A• Dates:%20%0A• Number of Guests:%20"

  const highlights = [
    {
      title: 'Balagal Family Homestay',
      tag: 'Base Camp Rest',
      kannada: 'ಮಲೆನಾಡು ಹೋಮ್‌ಸ್ಟೇ',
      description: 'Quiet, clean mountain rooms nestled near the Balagal trailhead. Designed specifically for trekkers needing a good night’s sleep before an early 5:00 AM Kudremukh ascent.',
      points: [
        'Clean, comfortable private & group bedding sets',
        '24/7 solar & wood-fired hot water for tired muscles',
        'Safe, enclosed vehicle parking for cars & motorbikes',
        'Early 4:30 AM wake-up call & base transfer coordination'
      ],
      image: '/image/storeimg.jpg',
      badge: 'Local Stay'
    },
    {
      title: 'Malenadu Cafe & Trail Dining',
      tag: 'Fresh Regional Cuisine',
      kannada: 'ಮಲೆನಾಡು ಕೆಫೆ ಮತ್ತು ಊಟ',
      description: 'Traditional home-cooked recipes from Prasad’s family kitchen. Hot local breakfast to power your climb, hygienic packed lunch boxes for the peak, and filter coffee.',
      points: [
        'Hot Akki Roti, Shavige & traditional coconut chutney',
        'Packed trail lunch boxes (lemon rice/puliyogare) for the summit',
        'Freshly ground Chikmagalur filter coffee & herbal Kashaya',
        'Wholesome hot dinner after descending the mountain'
      ],
      image: '/image/howtoreach.webp',
      badge: 'Malenadu Cafe'
    }
  ]

  return (
    <section id="stay-food" className="py-24 sm:py-32 relative bg-[#f8faf7] dark:bg-[#060d08] transition-colors">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Chapter Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="chapter-number mb-3">
            <span>03 / FOREST HOSPITALITY</span>
            <span className="w-12 h-px bg-dawn-amber inline-block" />
            <span>MALENADU WARMTH</span>
          </div>
          <h2 className="text-editorial-title text-forest-950 dark:text-emerald-50 mb-4">
            Rest Well. Savor the Mountains.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            A successful trek starts the night before. Sleep comfortably at our Balagal homestay, wake up to fresh coffee, and return to hot water and authentic Malenadu food.
          </p>
        </div>

        {/* Feature Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="editorial-card p-6 sm:p-9 flex flex-col justify-between bg-white dark:bg-[#0d1810]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-dawn-amber uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <span className="font-kannada text-xs text-slate-500">
                    {item.kannada}
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden mb-6 h-56 sm:h-64 bg-forest-950 relative">
                  <img
                    src={item.image}
                    alt={`${item.title} - Henjodi Stores`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 dark:text-emerald-100 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {item.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-forest-100 dark:bg-white/10 text-forest-800 dark:text-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-forest-800/10 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Direct Booking</span>
                <a
                  href={stayWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-800 dark:text-emerald-300 hover:text-dawn-amber transition-colors"
                >
                  <span>Inquire Stay &amp; Food on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
