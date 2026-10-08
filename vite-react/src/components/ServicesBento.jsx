import { motion } from 'framer-motion'
import { Ticket, Compass, Home, Coffee, Truck, ShieldCheck, ArrowUpRight } from 'lucide-react'

export default function ServicesBento({ onOpenBooking }) {
  const bentoServices = [
    {
      id: 'permits',
      colSpan: 'md:col-span-2 lg:col-span-2',
      badge: 'OFFICIAL COORDINATION',
      title: 'Forest Entry Permits & Gate Clearance',
      desc: 'Kudremukh National Park admits a strictly limited number of trekkers daily. We assist you through the online booking procedures and gate formalities at Bhagavathi Nature Camp so your trek runs without paperwork delays.',
      icon: Ticket,
      accent: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      actionText: 'Inquire for Permits',
      actionQuery: 'Hello Prasad! Can you help me check and secure forest permits for Kudremukh?',
    },
    {
      id: 'guides',
      colSpan: 'md:col-span-1 lg:col-span-1',
      badge: 'NATIVE EXPERTISE',
      title: 'Native Mountain Guides',
      desc: 'Born and raised in Balagal and Mullodi. Our guides know the weather turns, seasonal leeches belts, ridge trails, and Western Ghats wildlife safety inside out.',
      icon: Compass,
      accent: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      actionText: 'Meet Guides',
      actionQuery: 'Hi Prasad! I want to book a native guide for our trek.',
    },
    {
      id: 'homestay',
      colSpan: 'md:col-span-1 lg:col-span-1',
      badge: 'BALAGAL BASE CAMP',
      title: 'Homestay & Overnight Rest',
      desc: 'Peaceful, clean family homestay rooms right at Balagal base with hot water, blanket sets, safe vehicle parking, and early 4:30 AM wake-up coordination.',
      icon: Home,
      accent: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      actionText: 'Book Room',
      actionQuery: 'Hi Prasad! Do you have homestay availability for our group at Balagal?',
    },
    {
      id: 'cafe',
      colSpan: 'md:col-span-1 lg:col-span-1',
      badge: 'HOMEMADE MALENADU',
      title: 'Malenadu Cafe & Trail Food',
      desc: 'Authentic local cuisine: hot Akki Roti, Shavige, freshly brewed filter coffee, and hygienic packed summit lunch boxes wrapped for the mountain trail.',
      icon: Coffee,
      accent: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      actionText: 'Food Menu',
      actionQuery: 'Hello! What food and breakfast options do you provide before the trek?',
    },
    {
      id: 'jeep',
      colSpan: 'md:col-span-2 lg:col-span-1',
      badge: '4X4 MOUNTAIN TRANSPORT',
      title: 'Trailhead Jeep Transfers',
      desc: 'Rugged 4x4 Mahindra jeeps for the steep 6km rocky stretch from Balagal bus stop to Mullodi village trailhead and base camp.',
      icon: Truck,
      accent: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      actionText: 'Jeep Info',
      actionQuery: 'Hi Prasad! We need a 4x4 jeep transfer from Balagal to Mullodi base camp.',
    },
  ]

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#f2f5f1] dark:bg-[#07100a] transition-colors">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Chapter Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="chapter-number mb-3">
            <span>02 / BALAGAL BASE ECOSYSTEM</span>
            <span className="w-12 h-px bg-dawn-amber inline-block" />
            <span>SERVICES</span>
          </div>
          <h2 className="text-editorial-title text-forest-950 dark:text-emerald-50 mb-4">
            Everything You Need Before &amp; After the Peak.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Operating physically at the Balagal Bus Stop on the Kudremukh road. We are not an aggregator or an agency in Bangalore — we are the local family on the ground.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {bentoServices.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`${service.colSpan} editorial-card p-7 sm:p-8 flex flex-col justify-between relative bg-white dark:bg-[#0d1810] border border-forest-800/10 dark:border-white/10`}
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${service.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest font-bold uppercase text-slate-400 dark:text-slate-500">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-serif text-2xl font-bold text-forest-950 dark:text-emerald-100 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-forest-800/10 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">Balagal Hub Direct</span>
                  <a
                    href={`https://wa.me/918073178851?text=${encodeURIComponent(service.actionQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-800 dark:text-emerald-300 hover:text-dawn-amber transition-colors"
                  >
                    <span>{service.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
