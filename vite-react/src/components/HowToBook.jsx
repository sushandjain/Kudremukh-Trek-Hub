import { motion } from 'framer-motion'

const steps = [
  {
    step: '01',
    title: 'Choose Trek & Dates',
    description: 'Select your preferred destination (Kudremukh Peak, Netravati, Kurinjal, or Ballalarayana Durga) and decide your travel dates.',
    icon: '🧭'
  },
  {
    step: '02',
    title: 'Contact on WhatsApp',
    description: 'Message Henjodi Stores (+91 8073178851) with your dates, total number of trekkers, and any homestay or food requirements.',
    icon: '💬'
  },
  {
    step: '03',
    title: 'Permit & Slot Confirmation',
    description: 'We assist with forest department permits, guide allocation, jeep transfers from Balagal to base camp, and schedule confirmation.',
    icon: '📋'
  },
  {
    step: '04',
    title: 'Arrive at Henjodi Stores',
    description: 'Meet us at Balagal Bus Stop on SH 66, collect your leech socks and packed meals, meet your local guide, and begin your trek.',
    icon: '🏔️'
  }
]

export default function HowToBook() {
  const whatsappUrl = "https://wa.me/918073178851?text=Hello%20Henjodi%20Stores!%20I%20am%20ready%20to%20book%20a%20trek.%20Please%20guide%20me%20through%20available%20dates%20and%20permits."

  return (
    <section id="how-to-book" className="py-20 md:py-28 bg-[#fbfcfb]">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="section-eyebrow">
            Simple &amp; Direct
          </div>
          <h2 className="section-heading">
            How Trek Booking Works
          </h2>
          <p className="section-subheading">
            No complicated online accounts or hidden fees. We handle permits, local guides, and logistics directly so you can focus on the trail.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-14">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="stitch-card p-6 sm:p-7 relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl p-2.5 rounded-2xl bg-forest-50 border border-forest-100 flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="font-heading text-2xl font-black text-forest-200 group-hover:text-forest-400 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-forest-900 mb-2.5">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-forest-100/60 flex items-center text-xs font-semibold text-forest-700">
                <span>Step {index + 1} of 4</span>
                <span className="ml-auto">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Direct Action Box */}
        <div className="stitch-card p-8 sm:p-10 bg-forest-900 text-white border-none shadow-strong text-center max-w-3xl mx-auto">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3 text-white">
            Have Dates in Mind? Check Slot Availability
          </h3>
          <p className="text-slate-200 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Forest department guidelines restrict the number of trekkers per day on Kudremukh and Netravati trails. Contact us in advance to reserve your slot.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white hover:bg-[#20ba5a] px-8 py-4 rounded-full font-bold text-base shadow-glow-green hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Start Booking on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  )
}
