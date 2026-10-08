import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const galleryImages = [
  { image: '/image/kmview22.webp', title: 'Kudremukh Peak Grasslands', tag: 'Kudremukh' },
  { image: '/image/kmtravelview.jpg', title: 'Kudremukh Shola Forest Trail', tag: 'Kudremukh' },
  { image: '/image/kmview2.jpeg', title: 'Ridge Trail & Valley View', tag: 'Kudremukh' },
  { image: '/image/nplogo.jpg', title: 'Netravati Peak Panoramic Ridge', tag: 'Netravati' },
  { image: '/image/npview.webp', title: 'Netravati River Origin Meadows', tag: 'Netravati' },
  { image: '/image/kk1.avif', title: 'Kurinjal Forest Ascent', tag: 'Kurinjal' },
  { image: '/image/kkview44.jpg', title: 'Kurinjal Green Canopy', tag: 'Kurinjal' },
  { image: '/image/kurinjal-1-.jpg', title: 'Kurinjal Peak Summit Trail', tag: 'Kurinjal' },
  { image: '/image/Bandaje-trek/Bandaje1.avif', title: 'Ballalarayana Durga Fort Trail', tag: 'Bandaje' },
  { image: '/image/Bandaje-trek/Bandaje2.jpg', title: 'Bandaje Arbi Waterfall View', tag: 'Bandaje' },
  { image: '/image/Bandaje-trek/Bandaje3.jpg', title: 'Western Ghats Waterfall Stream', tag: 'Bandaje' },
  { image: '/image/Bavinkonda/Bavinkonda1.jpg', title: 'Ettina Bhuja Peak Silhouette', tag: 'Ettina Bhuja' },
  { image: '/image/Bavinkonda/Bavinkonda3.webp', title: 'Bavikonda Rolling Grasslands', tag: 'Bavikonda' },
  { image: '/image/Valikunja/Valikunja1.jpg', title: 'Valikunja Summit Ridge', tag: 'Valikunja' },
  { image: '/image/Valikunja/Aane1.webp', title: 'Aane Salaba Vista Point', tag: 'Western Ghats' },
  { image: '/image/storeimg.jpg', title: 'Henjodi Stores Balagal Hub', tag: 'Base Camp' }
]

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [selectedTag, setSelectedTag] = useState('All')

  const tags = ['All', 'Kudremukh', 'Netravati', 'Kurinjal', 'Bandaje']

  const filteredImages = selectedTag === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.tag === selectedTag || img.tag.includes(selectedTag))

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredImages.length)
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, filteredImages.length])

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white border-t border-forest-100">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="section-eyebrow">
            Authentic Landscapes
          </div>
          <h2 className="section-heading">
            Trek Moments &amp; Western Ghats Trails
          </h2>
          <p className="section-subheading">
            Real photos captured along the routes organized from Henjodi Stores Balagal.
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedTag === tag
                    ? 'bg-forest-800 text-white shadow-sm'
                    : 'bg-forest-50 text-slate-700 hover:bg-forest-100 border border-forest-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.map((item, index) => (
            <motion.div
              key={item.image}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => setLightboxIndex(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setLightboxIndex(index)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Open photo: ${item.title}`}
              className="stitch-card group relative aspect-square overflow-hidden cursor-pointer focus:ring-2 focus:ring-forest-600 outline-none"
            >
              <img
                src={item.image}
                alt={`${item.title} - Henjodi Stores Kudremukh Trek`}
                width="400"
                height="400"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
                <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">
                  {item.tag}
                </span>
                <span className="text-white text-xs sm:text-sm font-bold font-heading line-clamp-1">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Accessible Fullscreen Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div
            className="lightbox-overlay"
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image Preview"
          >
            <div 
              className="relative max-w-4xl w-full p-2 bg-dark/95 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[75vh] flex items-center justify-center p-2">
                <img
                  src={filteredImages[lightboxIndex].image}
                  alt={filteredImages[lightboxIndex].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
                />

                {/* Prev & Next Controls */}
                <button
                  onClick={() => setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-lg backdrop-blur-md transition-colors"
                  aria-label="Previous photo"
                >
                  ‹
                </button>
                <button
                  onClick={() => setLightboxIndex((prev) => (prev + 1) % filteredImages.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-lg backdrop-blur-md transition-colors"
                  aria-label="Next photo"
                >
                  ›
                </button>
              </div>

              {/* Caption & Close */}
              <div className="p-4 sm:px-6 flex items-center justify-between border-t border-white/10 text-white">
                <div>
                  <h4 className="font-heading text-sm sm:text-base font-bold text-white">
                    {filteredImages[lightboxIndex].title}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {lightboxIndex + 1} of {filteredImages.length} • {filteredImages[lightboxIndex].tag}
                  </p>
                </div>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="px-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-colors"
                  aria-label="Close modal"
                >
                  Close ✕
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
