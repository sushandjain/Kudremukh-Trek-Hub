import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const offers = [
  {
    title: 'Guided Treks',
    image: '/video/Guided Treks.jpg',
    description: 'Professional guided treks to various peaks and destinations in the Western Ghats.'
  },
  {
    title: 'All-Inclusive Packages',
    image: '/image/all-inclusive2ndoption.webp',
    description: 'Complete packages covering permits, jeep rides, and meals for a hassle-free trek. Contact us for pricing.'
  },
  {
    title: 'Local Cuisine',
    image: '/video/food-location-logo.jpg',
    description: "Authentic Malenadu cuisine and traditional dishes prepared by local families during treks."
  }
]

const storeGallery = [
  { 
    image: '/image/Screenshot 2025-07-11 040805.png', 
    title: 'Store Front', 
    description: 'Welcome to our adventure hub' 
  },
  { 
    image: '/image/storeimg.jpg', 
    title: 'Equipment Display', 
    description: 'Quality trekking gear' 
  },
  { 
    image: '/image/Screenshot 2025-07-11 040927.png', 
    title: 'Local Products', 
    description: 'Authentic Malenadu products' 
  }
]

function OfferCard({ offer, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative h-52 overflow-hidden">
        <img 
          src={offer.image} 
          alt={offer.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
          {offer.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {offer.description}
        </p>
      </div>
    </motion.div>
  )
}

function StoreImage({ item, index, onClick }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onClick(item)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-soft hover:shadow-strong transition-all duration-300"
    >
      <img 
        src={item.image} 
        alt={item.title}
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
        <h5 className="font-display text-xl font-semibold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {item.title}
        </h5>
        <p className="text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Store() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <section id="store" className="py-20 md:py-28 bg-cream-light">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-dark"
        >
          What We Offer
        </motion.h2>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {offers.map((offer, index) => (
            <OfferCard key={offer.title} offer={offer} index={index} />
          ))}
        </div>

        {/* Store Gallery */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-display text-2xl md:text-3xl font-bold text-center text-dark mt-20 mb-10"
        >
          Our Store Gallery
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {storeGallery.map((item, index) => (
            <StoreImage 
              key={item.title} 
              item={item} 
              index={index}
              onClick={setLightboxImage}
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
          className="lightbox-overlay"
          onClick={() => setLightboxImage(null)}
        >
          <div className="lightbox-content">
            <img 
              src={lightboxImage.image} 
              alt={lightboxImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setLightboxImage(null)}
              className="lightbox-close"
            >
              &times;
            </button>
          </div>
        </motion.div>
      )}
    </section>
  )
}
