import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const galleryImages = [
  { image: '/image/kmview.webp', title: 'Kudremukh Peak' },
  { image: '/image/kmtravelview.jpg', title: 'Kudremukh Trek Trail' },
  { image: '/image/kmview2.jpeg', title: 'Kudremukh Top View' },
  { image: '/image/Nethravathi-Peak_Plan-The-Unplanned_2.jpg', title: 'Netravati Peak Views' },
  { image: '/image/npview.webp', title: 'Netravati Trail' },
  { image: '/image/kk1.avif', title: 'Kuranjal Peak' },
  { image: '/image/kkview44.jpg', title: 'Kuranjal Forest' },
  { image: '/image/kurinjal-1-.jpg', title: 'Kuranjal Adventure' },
  { image: '/image/Valikunja/Aane1.webp', title: 'Aane Salaba Vista' },
  { image: '/image/Bandaje-trek/Bandaje1.avif', title: 'Bandaje Trek Path' },
  { image: '/image/Bandaje-trek/Bandaje2.jpg', title: 'Bandaje Waterfall' },
  { image: '/image/Bandaje-trek/Bandaje3.jpg', title: 'Bandaje Forest Trail' },
  { image: '/image/Bandaje-trek/Bandaje4.jpeg', title: 'Bandaje Rock Formations' },
  { image: '/image/Bandaje-trek/Bandaje5.webp', title: 'Bandaje Valley Views' },
  { image: '/image/Bandaje-trek/Bandaje6.jpg', title: 'Bandaje Adventure' },
  { image: '/image/Bavinkonda/Bavinkonda1.jpg', title: 'Bavinkonda Peak' },
  { image: '/image/Bavinkonda/Bavinkonda2.jpg', title: 'Bavinkonda Forest' },
  { image: '/image/Bavinkonda/Bavinkonda2.webp', title: 'Bavinkonda Trail' },
  { image: '/image/Bavinkonda/Bavinkonda3.webp', title: 'Bavinkonda Grasslands' },
  { image: '/image/Bavinkonda/Bavinkonda4.jpeg', title: 'Bavinkonda Landscape' },
  { image: '/image/Bavinkonda/Bavinkonda5.webp', title: 'Bavinkonda Views' },
  { image: '/image/Valikunja/Valikunja1.jpg', title: 'Valikunja Peak' },
  { image: '/image/Valikunja/Valikunja2.jpg', title: 'Valikunja Summit' },
]

function GalleryItem({ item, index, onClick }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
      onClick={() => onClick(item)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-square shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-[1.02]"
    >
      <img 
        src={item.image} 
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-5">
        <span className="font-display text-lg font-semibold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {item.title}
        </span>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05
  })
  const [lightboxImage, setLightboxImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (item) => {
    const index = galleryImages.findIndex(img => img.image === item.image)
    setCurrentIndex(index)
    setLightboxImage(item)
  }

  const navigate = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleryImages.length
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setCurrentIndex(newIndex)
    setLightboxImage(galleryImages[newIndex])
  }

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-dark"
        >
          Trek Gallery
        </motion.h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
          {galleryImages.map((item, index) => (
            <GalleryItem 
              key={item.image} 
              item={item} 
              index={index}
              onClick={openLightbox}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <motion.img 
              key={lightboxImage.image}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={lightboxImage.image} 
              alt={lightboxImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <p className="text-white font-display text-xl text-center">{lightboxImage.title}</p>
              <p className="text-white/60 text-center text-sm mt-1">
                {currentIndex + 1} / {galleryImages.length}
              </p>
            </div>

            {/* Close Button */}
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-accent transition-colors"
            >
              &times;
            </button>

            {/* Navigation */}
            <button
              onClick={() => navigate('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => navigate('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </section>
  )
}
