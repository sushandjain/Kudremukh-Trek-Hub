import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const treks = [
  {
    id: 'kudremukh',
    title: 'Kudremukh Peak Trek',
    subtitle: 'Karnataka’s 3rd Highest Peak (Horse Face)',
    image: '/image/kmview.webp',
    location: 'Kudremukh National Park, Chikmagalur',
    duration: '1-2 Days',
    difficulty: 'Moderate to Difficult',
    distance: '18–20 km (round trip)',
    altitude: '1,894 m (6,214 ft)',
    link: '/trek/kudremukh',
    highlight: 'Featured Peak',
    whatsappMsg: 'Hello Henjodi Stores! I would like to book the Kudremukh Peak Trek.%0A• Date:%20%0A• Group Size:%20'
  },
  {
    id: 'netravati',
    title: 'Netravati Peak Trek',
    subtitle: 'Scenic Grasslands & River Origin',
    image: '/image/npview.webp',
    location: 'Dakshina Kannada / Chikmagalur Border',
    duration: '1 Day (8-10 hours)',
    difficulty: 'Moderate',
    distance: '14–16 km (round trip)',
    altitude: '1,470 m (4,823 ft)',
    link: '/trek/netravati',
    highlight: 'Scenic River Origin',
    whatsappMsg: 'Hello Henjodi Stores! I would like to book the Netravati Peak Trek.%0A• Date:%20%0A• Group Size:%20'
  },
  {
    id: 'kurinjal',
    title: 'Kurinjal Peak Trek',
    subtitle: 'Quiet Shola Forests & Ridge Trail',
    image: '/image/kurinjal-1-.jpg',
    location: 'Samse Village, Kudremukh Range',
    duration: '1 Day (7-8 hours)',
    difficulty: 'Easy to Moderate',
    distance: '12–14 km (round trip)',
    altitude: '1,712 m (5,617 ft)',
    link: '/trek/kurinjal',
    highlight: 'Beginner Friendly',
    whatsappMsg: 'Hello Henjodi Stores! I would like to book the Kurinjal Peak Trek.%0A• Date:%20%0A• Group Size:%20'
  },
  {
    id: 'bandaje',
    title: 'Ballalarayana Durga & Bandaje Falls',
    subtitle: 'Historic Hoysala Fort & 200ft Waterfall',
    image: '/image/Bandaje-trek/Bandaje1.avif',
    location: 'Ballalarayana Durga, Chikmagalur',
    duration: '1 Day (8-10 hours)',
    difficulty: 'Moderate to Difficult',
    distance: '14–16 km (round trip)',
    altitude: '1,509 m (4,951 ft)',
    link: '/trek/bandaje',
    highlight: 'Waterfall & Fort',
    whatsappMsg: 'Hello Henjodi Stores! I would like to book the Ballalarayana Durga & Bandaje Falls Trek.%0A• Date:%20%0A• Group Size:%20'
  },
  {
    id: 'bavikonda',
    title: 'Ettina Bhuja Trek',
    subtitle: 'Iconic Ox-Shoulder Rock Summit',
    image: '/image/Bavinkonda/Bavinkonda1.jpg',
    location: 'Byrapura, Mudigere, Chikmagalur',
    duration: '1 Day (5-6 hours)',
    difficulty: 'Moderate',
    distance: '6–8 km (round trip)',
    altitude: '1,236 m (4,055 ft)',
    link: '/trek/bavikonda',
    highlight: 'Sunrise Summit',
    whatsappMsg: 'Hello Henjodi Stores! I would like to book the Ettina Bhuja Trek.%0A• Date:%20%0A• Group Size:%20'
  },
  {
    id: 'valikunja',
    title: 'Valikunja Peak Trek',
    subtitle: 'Hidden Grasslands near Sringeri',
    image: '/image/Valikunja/Valikunja1.jpg',
    location: 'Near Sringeri, Kudremukh Range',
    duration: '1 Day (7-8 hours)',
    difficulty: 'Moderate to Difficult',
    distance: '10–12 km (round trip)',
    altitude: '~1,500 m (4,921 ft)',
    link: '/trek/valikunja',
    highlight: 'Wild Trail',
    whatsappMsg: 'Hello Henjodi Stores! I would like to book the Valikunja Peak Trek.%0A• Date:%20%0A• Group Size:%20'
  }
]

function getDifficultyBadgeColor(difficulty) {
  if (difficulty.includes('Easy')) {
    return 'bg-emerald-50 text-emerald-800 border-emerald-200'
  }
  if (difficulty.includes('Difficult')) {
    return 'bg-amber-50 text-amber-800 border-amber-200'
  }
  return 'bg-blue-50 text-blue-800 border-blue-200'
}

export default function TrekCards() {
  return (
    <section id="treks" className="py-20 md:py-28 bg-[#fbfcfb]">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="section-eyebrow">
            Guided Expeditions
          </div>
          <h2 className="section-heading">
            Treks Organized by Henjodi Stores
          </h2>
          <p className="section-subheading">
            Official forest permits assistance, certified local guides, base transfers from Balagal, and authentic Malenadu hospitality.
          </p>
        </div>

        {/* Treks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {treks.map((trek, index) => (
            <motion.article
              key={trek.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="stitch-card flex flex-col overflow-hidden group"
            >
              {/* Card Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                <img
                  src={trek.image}
                  alt={`${trek.title} - ${trek.location} - Henjodi Stores`}
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                
                {/* Highlight Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-dark/75 backdrop-blur-md text-white border border-white/20">
                    {trek.highlight}
                  </span>
                </div>

                {/* Difficulty Chip */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${getDifficultyBadgeColor(trek.difficulty)}`}>
                    {trek.difficulty}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-forest-900 mb-1 group-hover:text-forest-700 transition-colors">
                    {trek.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium mb-5">
                    {trek.subtitle}
                  </p>

                  {/* Trek Meta List */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-forest-100/80 mb-6 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="text-forest-700 font-semibold">📍 Location:</span>
                      <span className="truncate">{trek.location.split(',')[0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-forest-700 font-semibold">🏔️ Alt:</span>
                      <span>{trek.altitude}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-forest-700 font-semibold">🥾 Trail:</span>
                      <span>{trek.distance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-forest-700 font-semibold">⏱️ Time:</span>
                      <span>{trek.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <Link
                    to={trek.link}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold border border-forest-800/20 text-forest-800 hover:bg-forest-50 transition-colors"
                  >
                    <span>View Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href={`https://wa.me/918073178851?text=${trek.whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-bold bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-sm hover:shadow transition-all"
                    aria-label={`Book ${trek.title} on WhatsApp`}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Book</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
