import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

const treks = [
  {
    id: 1,
    title: 'Kudremukh Peak Trek',
    image: '/image/kmlogo.avif',
    location: 'Kudremukh National Park, Chikmagalur',
    duration: '1-2 Days',
    difficulty: 'Moderate to Difficult',
    distance: '18–20 km (round trip)',
    altitude: '1,894 meters (6,214 ft)',
    link: '/trek/kudremukh',
    whatsappMsg: "Hello! I'm interested in booking the Kudremukh Peak Trek. Can you provide more details about the package and availability?"
  },
  {
    id: 2,
    title: 'Netravati Peak Trek',
    image: '/image/nplogo.jpg',
    location: 'Dakshina Kannada / Chikmagalur',
    duration: '1 Day (8-10 hours)',
    difficulty: 'Moderate',
    distance: '14-16 km (round trip)',
    altitude: '1,470 meters (4,823 ft)',
    link: '/trek/netravati',
    whatsappMsg: "Hello! I'm interested in booking the Netravati Peak Trek. Can you provide more details about the package and availability?"
  },
  {
    id: 3,
    title: 'Kurinjal Peak Trek',
    image: '/image/kklogo.jpeg',
    location: 'Samse Village, Kudremukh Range',
    duration: '1 Day (7-8 hours)',
    difficulty: 'Easy to Moderate',
    distance: '12-14 km (round trip)',
    altitude: '1,712 meters (5,617 ft)',
    link: '/trek/kurinjal',
    whatsappMsg: "Hello! I'm interested in booking the Kurinjal Peak Trek. Can you provide more details about the package and availability?"
  },
  {
    id: 4,
    title: 'Bandaje Arbi Falls Trek',
    image: '/image/Bandaje-trek/logoBandaje.jpg',
    location: 'Ballalarayana Durga, Chikmagalur',
    duration: '1 Day (8-10 hours)',
    difficulty: 'Moderate to Difficult',
    distance: '14-16 km (round trip)',
    altitude: '1,509 meters (4,951 ft)',
    link: '/trek/bandaje',
    whatsappMsg: "Hello! I'm interested in booking the Bandaje Falls Trek. Can you provide more details about the package and availability?"
  },
  {
    id: 5,
    title: 'Ettina Bhuja Trek',
    image: '/image/Bavinkonda/Bavinkonda-logo.jpg',
    location: 'Byrapura, Mudigere, Chikmagalur',
    duration: '1 Day (5-6 hours)',
    difficulty: 'Moderate',
    distance: '6-8 km (round trip)',
    altitude: '1,236 meters (4,055 ft)',
    link: '/trek/bavikonda',
    whatsappMsg: "Hello! I'm interested in booking the Ettina Bhuja Trek. Can you provide more details about the package and availability?"
  },
  {
    id: 6,
    title: 'Valikunja Trek',
    image: '/image/Valikunja/Valikunja-logo.jpg',
    location: 'Near Sringeri, Kudremukh Range',
    duration: '1 Day (7-8 hours)',
    difficulty: 'Moderate to Difficult',
    distance: '10-12 km (round trip)',
    altitude: '~1,500 meters (4,921 ft)',
    link: '/trek/valikunja',
    whatsappMsg: "Hello! I'm interested in booking the Valikunja Trek. Can you provide more details about the package and availability?"
  },
  {
    id: 7,
    title: 'Ombattu Gudda Trek',
    image: '/image/Valikunja/Aane1.webp',
    location: 'Near Mudigere, Chikmagalur',
    duration: '1 Day (5-6 hours)',
    difficulty: 'Easy to Moderate',
    distance: '8-10 km (round trip)',
    altitude: '~1,300 meters (4,265 ft)',
    link: '/trek/aane-salaba',
    whatsappMsg: "Hello! I'm interested in booking the Ombattu Gudda Trek. Can you provide more details about the package and availability?"
  }
]

function TrekCard({ trek, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const getDifficultyColor = (difficulty) => {
    if (difficulty.includes('Easy') || difficulty.includes('Beginner')) return 'bg-green-500'
    if (difficulty.includes('Moderate') && !difficulty.includes('Difficult')) return 'bg-yellow-500'
    return 'bg-orange-500'
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img 
          src={trek.image} 
          alt={`${trek.title} - ${trek.location} - Western Ghats Trekking Karnataka`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Difficulty Badge */}
        <div className="absolute top-4 right-4">
          <span className={`${getDifficultyColor(trek.difficulty)} text-white text-xs font-bold px-3 py-1 rounded-full`}>
            {trek.difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl md:text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
          {trek.title}
        </h3>

        <ul className="space-y-2 mb-6">
          <li className="flex items-center gap-3 text-gray-600">
            <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="text-sm">{trek.location}</span>
          </li>
          <li className="flex items-center gap-3 text-gray-600">
            <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
            <span className="text-sm">{trek.duration}</span>
          </li>
          <li className="flex items-center gap-3 text-gray-600">
            <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15.5h-1.5V14h-4v4.5H5V5h1.5v5.5h4V5H12v13.5zm2.5-6.5h4.5v1.5h-4.5V15h4.5v1.5h-4.5V18H20V5h-5.5v7z"/>
            </svg>
            <span className="text-sm">{trek.distance}</span>
          </li>
          <li className="flex items-center gap-3 text-gray-600">
            <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
            </svg>
            <span className="text-sm">{trek.altitude}</span>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link 
            to={trek.link}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-primary text-white px-4 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            View More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <a 
            href={`https://wa.me/918073178851?text=${encodeURIComponent(trek.whatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-whatsapp text-white px-4 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-glow-green transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book Now
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function TrekCards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="treks" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-dark"
        >
          Popular Treks in Kudremukh Region
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-8"
        >
          Explore Netravati Peak, Kurinjal Peak, and other stunning Malenadu trekking destinations. 
          Henjodi Stores helps tourists with trek tickets, guides, food, and local support.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {treks.map((trek, index) => (
            <TrekCard key={trek.id} trek={trek} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
