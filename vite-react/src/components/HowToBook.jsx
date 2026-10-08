import { motion } from 'framer-motion'
import { MessageSquare, ShieldCheck, MapPin, Mountain, ArrowUpRight } from 'lucide-react'

export default function HowToBook({ onOpenBooking }) {
  const steps = [
    {
      num: '01',
      title: 'Send Trek Query on WhatsApp',
      desc: 'Message Prasad directly with your tentative trek dates, group size, and whether you require homestay or food at Balagal.',
      icon: MessageSquare,
      badge: 'Step 1'
    },
    {
      num: '02',
      title: 'Permit Clearance & Slot Hold',
      desc: 'We assist with forest department online slot quotas and assign a dedicated native guide for your chosen peak.',
      icon: ShieldCheck,
      badge: 'Step 2'
    },
    {
      num: '03',
      title: 'Arrival at Balagal Hub',
      desc: 'Reach Henjodi Stores right at Balagal Bus Stop on SH-66. Park safely, freshen up, enjoy breakfast, and meet your guide.',
      icon: MapPin,
      badge: 'Step 3'
    },
    {
      num: '04',
      title: 'Jeep Transfer & The Ascent',
      desc: 'Board the 4x4 Jeep transfer to Mullodi trailhead. Begin your guided climb into the rolling Western Ghats meadows.',
      icon: Mountain,
      badge: 'Step 4'
    }
  ]

  return (
    <section id="how-to-book" className="py-24 sm:py-32 relative bg-[#f2f5f1] dark:bg-[#07100a] transition-colors">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Chapter Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="chapter-number mb-3">
            <span>04 / THE JOURNEY</span>
            <span className="w-12 h-px bg-dawn-amber inline-block" />
            <span>HOW TO BOOK</span>
          </div>
          <h2 className="text-editorial-title text-forest-950 dark:text-emerald-50 mb-4">
            From First Message to the Summit.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            No complicated online portals or middleman fees. Direct, honest coordination with our family team on the ground in Balagal.
          </p>
        </div>

        {/* 4 Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="editorial-card p-6 sm:p-7 flex flex-col justify-between relative bg-white dark:bg-[#0d1810]"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-dawn-amber">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-forest-50 dark:bg-white/5 border border-forest-800/10 dark:border-white/10 flex items-center justify-center text-forest-800 dark:text-emerald-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-serif text-xl font-bold text-forest-950 dark:text-emerald-100 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-forest-800/10 dark:border-white/10 text-[11px] font-mono text-slate-400">
                  {step.badge} • Balagal Hub
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Bar */}
        <div className="text-center">
          <button
            onClick={onOpenBooking}
            className="btn-whatsapp px-8 py-4 text-base shadow-lg"
          >
            <span>Start Step 1: Send Trek Query on WhatsApp</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
