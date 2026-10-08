import { motion } from 'framer-motion'

export default function StayAndFood() {
  const stayWhatsApp = "https://wa.me/918073178851?text=Hello%20Henjodi%20Stores!%20I%20would%20like%20to%20inquire%20about%20homestay%20and%20food%20arrangements%20in%20Balagal/Kalasa.%0A• Dates:%20%0A• Number of Guests:%20"

  const highlights = [
    {
      title: 'Comfortable Homestay Accommodation',
      tag: 'Homestay in Balagal & Kalasa',
      description: 'Peaceful stay surrounded by Malenadu coffee estates and misty hills. Ideal for groups, solo trekkers, and families preparing for early morning peak ascents.',
      points: [
        'Clean, comfortable beds and rooms',
        'Hot water facility for post-trek refreshing',
        'Direct vehicle pickup & jeep transfer to base camps',
        'Safe vehicle parking for travelers'
      ],
      image: '/image/storeimg.jpg',
      badge: 'Local Stay'
    },
    {
      title: 'Malenadu Cafe & Homemade Food',
      tag: 'Fresh Regional Cuisine',
      description: 'Fuel your treks with authentic home-style Malenadu recipes prepared with fresh local ingredients. Enjoy piping hot local breakfast, packed trail lunches, and wholesome dinners.',
      points: [
        'Freshly brewed local filter coffee & herbal teas',
        'Traditional Malenadu vegetarian meals & local specialties',
        'Nutritious packed lunches prepared fresh for the trail',
        'Homemade snacks, trail refreshments & energetic bites'
      ],
      image: '/image/all-inclusive2ndoption.webp',
      badge: 'Malenadu Cafe'
    }
  ]

  return (
    <section id="stay-food" className="py-20 md:py-28 bg-[#f4f7f5] border-y border-forest-100">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="section-eyebrow">
            Stay &amp; Refreshment
          </div>
          <h2 className="section-heading">
            Homestay &amp; Malenadu Cafe
          </h2>
          <p className="section-subheading">
            Experience warm Malenadu hospitality right at our Balagal hub. Rest comfortably before your climb and savor wholesome local meals prepared for trekkers.
          </p>
        </div>

        {/* Feature Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="stitch-card p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="chip-tag font-bold">
                    {item.badge}
                  </span>
                  <span className="text-xs font-semibold text-forest-700 bg-white px-3 py-1 rounded-full border border-forest-200">
                    {item.tag}
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden mb-6 h-52 sm:h-60 bg-slate-100">
                  <img
                    src={item.image}
                    alt={`${item.title} - Henjodi Stores`}
                    width="600"
                    height="350"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="font-heading text-2xl font-bold text-forest-900 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {item.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className="text-forest-700 font-bold mt-0.5">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-forest-100">
                <a
                  href={stayWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[#1a472a] text-white hover:bg-[#153a23] transition-all shadow-sm"
                >
                  <span>Inquire Stay &amp; Meals on WhatsApp</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local Store & Trail Essentials Banner */}
        <div className="stitch-card p-6 sm:p-8 bg-white border border-forest-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl p-3 bg-forest-50 rounded-2xl border border-forest-100 flex-shrink-0">
                ☕
              </span>
              <div>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-forest-900">
                  Trek Essentials &amp; Malenadu Store at Balagal Bus Stop
                </h4>
                <p className="text-slate-600 text-sm mt-1">
                  Leech socks, rain ponchos, fresh coffee powder, organic honey, spiced tea powders, and trail supplies available in-store before you embark.
                </p>
              </div>
            </div>
            <a
              href="#location"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-forest-800/30 text-forest-800 hover:bg-forest-50 whitespace-nowrap"
            >
              <span>View Store Location</span>
              <span>📍</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
