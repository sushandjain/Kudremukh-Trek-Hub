import { motion } from 'framer-motion'
import { useState } from 'react'

const storeItems = [
  { 
    image: '/image/Screenshot 2025-07-11 040805.png', 
    title: 'Henjodi Stores Base Camp Office', 
    description: 'Located at Balagal Bus Stop on SH 66 — the central assembly point for Kudremukh and Netravati trekkers.' 
  },
  { 
    image: '/image/storeimg.jpg', 
    title: 'Trekking Essentials & Gear', 
    description: 'Leech socks, rain ponchos, hiking poles, water containers, and safety supplies available before hitting the trail.' 
  },
  { 
    image: '/image/Screenshot 2025-07-11 040927.png', 
    title: 'Authentic Malenadu Spices & Coffee', 
    description: 'Fresh estate-ground Chikmagalur coffee powder, aromatic cardamom, organic honey, and local Malenadu snacks.' 
  }
]

export default function Store() {
  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <section id="store" className="py-20 md:py-28 bg-[#fbfcfb] border-t border-forest-100">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="section-eyebrow">
            In-Store Supplies
          </div>
          <h2 className="section-heading">
            Trek Gear &amp; Malenadu Produce
          </h2>
          <p className="section-subheading">
            Drop by our store at Balagal before heading up the mountain. Pick up trail protection, essentials, and take home the aroma of Malenadu.
          </p>
        </div>

        {/* Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {storeItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setLightboxImage(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setLightboxImage(item)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View photo of ${item.title}`}
              className="stitch-card overflow-hidden group cursor-pointer focus:ring-2 focus:ring-forest-600 outline-none flex flex-col"
            >
              <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  width="500"
                  height="340"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-semibold text-white bg-dark/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    🔍 Click to Enlarge
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-forest-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="lightbox-overlay"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-4xl w-full p-2 bg-white rounded-2xl shadow-strong overflow-hidden" 
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={lightboxImage.image} 
              alt={lightboxImage.title}
              className="w-full max-h-[75vh] object-contain rounded-xl"
            />
            <div className="p-4 flex items-center justify-between">
              <div>
                <h4 className="font-heading font-bold text-forest-900">{lightboxImage.title}</h4>
                <p className="text-xs text-slate-600">{lightboxImage.description}</p>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="px-4 py-2 rounded-full bg-forest-100 text-forest-900 font-bold text-xs hover:bg-forest-200"
                aria-label="Close image modal"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
