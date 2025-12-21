import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// SEO Meta Update Function
const updatePageMeta = (trek, trekId) => {
  if (!trek) return
  
  // Update title
  document.title = `${trek.title} | Henjodi Stores | ${trek.location}`
  
  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) {
    metaDesc.setAttribute('content', `${trek.title} - ${trek.subtitle}. Altitude: ${trek.altitude}, Distance: ${trek.distance}. ${trek.description.substring(0, 150)}... Book with Henjodi Stores Balagal.`)
  }
  
  // Update Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]')
  const ogDesc = document.querySelector('meta[property="og:description"]')
  const ogImage = document.querySelector('meta[property="og:image"]')
  const ogUrl = document.querySelector('meta[property="og:url"]')
  
  if (ogTitle) ogTitle.setAttribute('content', `${trek.title} | Henjodi Stores Trekking`)
  if (ogDesc) ogDesc.setAttribute('content', `${trek.subtitle}. ${trek.difficulty} trek, ${trek.distance}. Best time: ${trek.bestTime}. Book guided trek with local experts.`)
  if (ogImage) ogImage.setAttribute('content', `https://henjodistores.netlify.app${trek.heroImage}`)
  if (ogUrl) ogUrl.setAttribute('content', `https://henjodistores.netlify.app/trek/${trekId}`)
  
  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) {
    canonical.setAttribute('href', `https://henjodistores.netlify.app/trek/${trekId}`)
  }
}

// All treks data - Verified information for Karnataka Western Ghats
const treksData = {
  kudremukh: {
    title: 'Kudremukh Peak Trek',
    subtitle: 'Horse Face Mountain of Western Ghats',
    heroImage: '/image/kmview.webp',
    altitude: '1,894 meters (6,214 feet)',
    distance: '18-20 km (round trip)',
    duration: '1-2 Days',
    difficulty: 'Moderate to Difficult',
    location: 'Kudremukh National Park, Chikmagalur',
    bestTime: 'October to February',
    description: `Kudremukh, meaning "Horse Face" in Kannada, is the third highest peak in Karnataka. Located in the Kudremukh National Park, this trek takes you through rolling grasslands, dense shola forests, and offers stunning panoramic views of the Western Ghats. The peak gets its name because from a particular angle, it resembles a horse's face.`,
    highlights: [
      'Third highest peak in Karnataka at 1,894m',
      'Part of UNESCO Western Ghats Heritage Site',
      'Breathtaking rolling grassland meadows',
      'Rich biodiversity with endemic species',
      'Stunning sunrise and sunset views',
      'Dense shola forests and streams'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Base Camp', description: 'Reach Kalasa/Mullodi village, complete forest permit formalities at Bhagavathi Nature Camp, transfer to base camp. Evening briefing and dinner.' },
      { day: 'Day 2', title: 'Trek to Peak', description: 'Early morning start (4-5 AM), trek 9-10 km through grasslands and forests to reach the peak. Enjoy views, have packed lunch, and return to base camp.' },
      { day: 'Final', title: 'Return Journey', description: 'Morning breakfast, pack up, and depart with wonderful memories.' }
    ],
    inclusions: [
      'Forest trek permits and entry fees',
      'Experienced local guides',
      'Jeep transfer to base camp (Mullodi)',
      'Meals (dinner, breakfast, packed lunch)',
      'First aid kit',
      'Leech socks'
    ],
    essentials: [
      'Trekking shoes with good grip',
      'Comfortable clothes (layers recommended)',
      'Rain jacket or poncho',
      'Water bottles (2-3 liters)',
      'Personal medications',
      'Sunscreen and sunglasses',
      'Camera or phone for photos',
      'Small backpack (20-30L)'
    ],
    gallery: [
      '/image/kmview.webp',
      '/image/kmview2.jpeg',
      '/image/kmview22.webp',
      '/image/kmview3.webp',
      '/image/kmview11.jpeg',
      '/image/kudremukh-trekview.jpg'
    ]
  },
  netravati: {
    title: 'Netravati Peak Trek',
    subtitle: 'Source of the Sacred Netravati River',
    heroImage: '/image/npview.webp',
    altitude: '1,470 meters (4,823 feet)',
    distance: '14-16 km (round trip)',
    duration: '1 Day (8-10 hours)',
    difficulty: 'Moderate',
    location: 'Dakshina Kannada / Chikmagalur Border',
    bestTime: 'October to February',
    description: `Netravati Peak is located near the origin of the Netravati River, one of the major rivers of Karnataka. The trek passes through beautiful grasslands and forests, offering scenic views of the Western Ghats. The peak is near the Kudremukh range and provides a moderate trekking experience with rewarding views.`,
    highlights: [
      'Near the source of Netravati River',
      'Beautiful grassland terrain',
      'Panoramic Western Ghats views',
      'Rich biodiversity',
      'Moderate difficulty suitable for beginners',
      'Less crowded compared to Kudremukh'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Assembly & Start', description: 'Meet at base village, complete formalities, and begin the trek through forest trails.' },
      { day: 'Day 1', title: 'Summit Push', description: 'Continue through grasslands and forest patches to reach the peak. Photography and rest.' },
      { day: 'Final', title: 'Descent & Return', description: 'Descend back to base point, refreshments, and departure.' }
    ],
    inclusions: [
      'Forest permits and entry fees',
      'Experienced local guides',
      'Transportation to base point',
      'Packed lunch and snacks',
      'First aid kit',
      'Leech socks'
    ],
    essentials: [
      'Trekking shoes with good grip',
      'Comfortable trekking clothes',
      'Rain jacket or poncho',
      'Water bottles (2-3 liters)',
      'Personal medications',
      'Sunscreen and cap',
      'Camera for photos',
      'Small backpack'
    ],
    gallery: [
      '/image/npview.webp',
      '/image/npviwe.jpg',
      '/image/npreverview.jpeg',
      '/image/Nethravathi-Peak_Plan-The-Unplanned_2.jpg',
      '/image/nplogo.jpg',
      '/image/npview.webp'
    ]
  },
  kurinjal: {
    title: 'Kurinjal Peak Trek',
    subtitle: 'The Hidden Peak of Kudremukh Range',
    heroImage: '/image/kurinjal-1-.jpg',
    altitude: '1,712 meters (5,617 feet)',
    distance: '12-14 km (round trip)',
    duration: '1 Day (7-8 hours)',
    difficulty: 'Easy to Moderate',
    location: 'Samse Village, Kudremukh Range',
    bestTime: 'September to February',
    description: `Kurinjal Peak (also spelled Kurinji or Kurinjal) is a beautiful peak in the Kudremukh range, starting from Samse village. The trek offers a perfect mix of forest trails and open grasslands with stunning views of the surrounding valleys. It's relatively less strenuous than Kudremukh Peak, making it ideal for beginners and intermediate trekkers.`,
    highlights: [
      'Part of the scenic Kudremukh range',
      'Beautiful grassland meadows',
      'Easier alternative to Kudremukh Peak',
      'Stunning valley and mountain views',
      'Rich flora and fauna',
      'Less crowded trail'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Base Camp Arrival', description: 'Arrive at Samse village, complete forest permits at the checkpoint, and briefing session.' },
      { day: 'Day 1', title: 'Trek to Peak', description: 'Begin trek through forests and grasslands (6-7 km one way). Reach the summit for amazing views.' },
      { day: 'Final', title: 'Return Journey', description: 'Descend back to Samse, lunch, and departure.' }
    ],
    inclusions: [
      'Forest permits and entry fees',
      'Expert local guides',
      'Jeep transfer to Samse',
      'Meals during trek',
      'First aid support',
      'Leech socks'
    ],
    essentials: [
      'Good trekking shoes',
      'Comfortable clothing',
      'Rain protection gear',
      'Water (2-3 liters)',
      'Personal medicines',
      'Sunscreen',
      'Camera',
      'Light backpack'
    ],
    gallery: [
      '/image/kurinjal-1-.jpg',
      '/image/kklogo.jpeg',
      '/image/kkview.jpeg',
      '/image/kkview.jpg',
      '/image/kkview44.jpg',
      '/image/kk12.jpg'
    ]
  },
  bandaje: {
    title: 'Bandaje Arbi Falls Trek',
    subtitle: 'Majestic Waterfall & Ballalarayana Durga Fort',
    heroImage: '/image/Bandaje-trek/Bandaje1.avif',
    altitude: '1,509 meters (4,951 feet) - Ballalarayana Durga',
    distance: '14-16 km (round trip)',
    duration: '1 Day (8-10 hours)',
    difficulty: 'Moderate to Difficult',
    location: 'Ballalarayana Durga, Mudigere Taluk, Chikmagalur',
    bestTime: 'August to January (Best: Post-monsoon for waterfall)',
    description: `Bandaje Falls (also called Bandaje Arbi) is a spectacular waterfall located near Ballalarayana Durga fort in the Chikmagalur district. The trek combines the thrill of reaching a magnificent waterfall with exploring the ruins of a historic fort built during the Hoysala period. The falls are most spectacular during and just after monsoon.`,
    highlights: [
      'Stunning Bandaje Arbi Waterfall (~200 ft)',
      'Historic Ballalarayana Durga Fort ruins',
      'Scenic trail through forests',
      'Panoramic Western Ghats views',
      'Rich history dating to Hoysala era',
      'Beautiful post-monsoon scenery'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Trek Start', description: 'Start from Ballalarayana Durga village base, begin trek through forests.' },
      { day: 'Day 1', title: 'Waterfall & Fort', description: 'Reach Bandaje Falls, enjoy the view. Continue to explore Ballalarayana Durga fort ruins.' },
      { day: 'Final', title: 'Return', description: 'Descend back to base village, refreshments, and departure.' }
    ],
    inclusions: [
      'Local guides',
      'Transportation to base village',
      'Packed meals',
      'First aid kit',
      'Leech socks'
    ],
    essentials: [
      'Sturdy trekking shoes (waterproof preferred)',
      'Quick-dry clothes',
      'Waterproof bag for electronics',
      'Water bottles (3 liters)',
      'Energy bars/snacks',
      'Raincoat/poncho',
      'Camera (waterproof preferred)',
      'Extra pair of clothes'
    ],
    gallery: [
      '/image/Bandaje-trek/Bandaje1.avif',
      '/image/Bandaje-trek/Bandaje2.jpg',
      '/image/Bandaje-trek/Bandaje3.jpg',
      '/image/Bandaje-trek/Bandaje4.jpeg',
      '/image/Bandaje-trek/Bandaje5.webp',
      '/image/Bandaje-trek/Bandaje6.jpg'
    ]
  },
  bavikonda: {
    title: 'Ettina Bhuja Trek',
    subtitle: 'The Ox Shoulder Peak of Chikmagalur',
    heroImage: '/image/Bavinkonda/Bavinkonda1.jpg',
    altitude: '1,236 meters (4,055 feet)',
    distance: '6-8 km (round trip)',
    duration: '1 Day (5-6 hours)',
    difficulty: 'Moderate',
    location: 'Byrapura Village, Mudigere, Chikmagalur',
    bestTime: 'September to February',
    description: `Ettina Bhuja (meaning "Ox's Shoulder" in Kannada) is a stunning peak in Chikmagalur district. The peak gets its name from its unique rock formation that resembles an ox's shoulder. The trek passes through coffee plantations, grasslands, and offers 360-degree views from the summit. It's one of the most scenic short treks in Karnataka.`,
    highlights: [
      'Unique ox shoulder-shaped rock formation',
      'Beautiful coffee plantation trails',
      '360-degree panoramic views from summit',
      'Sunrise trek recommended',
      'Short but scenic trek',
      'Grassland meadows and rocky terrain'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Base Arrival', description: 'Reach Byrapura village, briefing, and preparation for the trek.' },
      { day: 'Day 1', title: 'Summit Trek', description: 'Trek through coffee estates and grasslands to reach Ettina Bhuja peak (3-4 km one way).' },
      { day: 'Final', title: 'Return', description: 'Enjoy views at summit, descend back, and depart.' }
    ],
    inclusions: [
      'Trek guidance',
      'Local expert guides',
      'Base transfers',
      'Breakfast/snacks',
      'First aid support'
    ],
    essentials: [
      'Trekking shoes',
      'Comfortable clothes',
      'Light jacket (for early morning)',
      'Water bottles (2 liters)',
      'Snacks',
      'Sunscreen and cap',
      'Camera',
      'Small backpack'
    ],
    gallery: [
      '/image/Bavinkonda/Bavinkonda1.jpg',
      '/image/Bavinkonda/Bavinkonda2.jpg',
      '/image/Bavinkonda/Bavinkonda2.webp',
      '/image/Bavinkonda/Bavinkonda3.webp',
      '/image/Bavinkonda/Bavinkonda4.jpeg',
      '/image/Bavinkonda/Bavinkonda5.webp'
    ]
  },
  valikunja: {
    title: 'Valikunja Trek',
    subtitle: 'Hidden Grasslands of Kudremukh',
    heroImage: '/image/Valikunja/Valikunja1.jpg',
    altitude: '~1,500 meters (4,921 feet)',
    distance: '10-12 km (round trip)',
    duration: '1 Day (7-8 hours)',
    difficulty: 'Moderate to Difficult',
    location: 'Near Sringeri, Kudremukh Range',
    bestTime: 'October to February',
    description: `Valikunja is a lesser-known trekking destination in the Kudremukh range near Sringeri. The trek takes you through dense forests and opens up to beautiful rolling grasslands typical of the Western Ghats. It's less commercialized, offering a peaceful trekking experience away from the crowds.`,
    highlights: [
      'Part of scenic Kudremukh range',
      'Rolling grassland meadows',
      'Dense shola forests',
      'Peaceful and less crowded',
      'Rich wildlife and birds',
      'Pristine natural beauty'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Trek Start', description: 'Reach base point near Sringeri, complete formalities, start trek.' },
      { day: 'Day 1', title: 'Forest Trail', description: 'Trek through dense forests and grasslands towards Valikunja viewpoint.' },
      { day: 'Final', title: 'Return', description: 'Enjoy views, descend back to base, and depart.' }
    ],
    inclusions: [
      'Forest permits (if required)',
      'Local guides',
      'Transport to base point',
      'Meals and refreshments',
      'First aid kit',
      'Leech socks'
    ],
    essentials: [
      'Good trekking shoes',
      'Full-sleeve clothes',
      'Rain gear',
      'Water (3 liters)',
      'Energy food',
      'Insect repellent',
      'Camera',
      'Backpack'
    ],
    gallery: [
      '/image/Valikunja/Valikunja1.jpg',
      '/image/Valikunja/Valikunja2.jpg',
      '/image/Valikunja/Valikunja-logo.jpg',
      '/image/kmview.webp',
      '/image/kmview3.webp',
      '/image/kmview22.webp'
    ]
  },
  'aane-salaba': {
    title: 'Ombattu Gudda Trek',
    subtitle: 'Nine Hills Range of Western Ghats',
    heroImage: '/image/Valikunja/Aane1.webp',
    altitude: '~1,300 meters (4,265 feet)',
    distance: '8-10 km (round trip)',
    duration: '1 Day (5-6 hours)',
    difficulty: 'Easy to Moderate',
    location: 'Near Mudigere, Chikmagalur District',
    bestTime: 'September to March',
    description: `Ombattu Gudda (meaning "Nine Hills" in Kannada) is a scenic trek in the Chikmagalur region featuring a series of small hills with beautiful grasslands. The trek is beginner-friendly and offers stunning views of the surrounding valleys and the Western Ghats. It's perfect for those looking for a shorter, less challenging trek with great scenery.`,
    highlights: [
      'Series of nine scenic hills',
      'Beginner-friendly trail',
      'Beautiful grassland terrain',
      'Stunning valley views',
      'Ideal for photography',
      'Less strenuous trek'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Assembly', description: 'Meet at base village near Mudigere, introduction and trek briefing.' },
      { day: 'Day 1', title: 'Trek', description: 'Begin trek across the nine hills, enjoying varied terrain and views.' },
      { day: 'Final', title: 'Return', description: 'Complete the circuit, trek back to base, refreshments, and departure.' }
    ],
    inclusions: [
      'Local guides',
      'Base transport',
      'Packed meals/snacks',
      'First aid',
      'Basic support'
    ],
    essentials: [
      'Sports shoes/trekking shoes',
      'Comfortable clothes',
      'Light jacket',
      'Water (2 liters)',
      'Snacks',
      'Cap and sunscreen',
      'Phone/camera',
      'Small backpack'
    ],
    gallery: [
      '/image/Valikunja/Aane1.webp',
      '/image/Bavinkonda/Bavinkonda1.jpg',
      '/image/Bavinkonda/Bavinkonda3.webp',
      '/image/kmview3.webp',
      '/image/kmview.webp',
      '/image/Bavinkonda/Bavinkonda5.webp'
    ]
  }
}

function TrekDetail() {
  const { trekId } = useParams()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(null)
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Get trek data based on URL parameter
  const trek = treksData[trekId]

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    
    // Update SEO meta tags when trek loads
    if (trek) {
      updatePageMeta(trek, trekId)
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [trek, trekId])

  // If trek not found, show error
  if (!trek) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Trek Not Found</h1>
          <p className="text-gray-600 mb-8">The trek you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  const getDifficultyConfig = (difficulty) => {
    if (difficulty.includes('Easy') || difficulty.includes('Beginner')) 
      return { color: 'from-emerald-500 to-teal-500', icon: '🌱', label: 'Beginner Friendly' }
    if (difficulty.includes('Moderate') && !difficulty.includes('Difficult')) 
      return { color: 'from-amber-500 to-orange-500', icon: '⚡', label: 'Moderate' }
    return { color: 'from-red-500 to-orange-600', icon: '🔥', label: 'Challenging' }
  }

  const difficultyConfig = getDifficultyConfig(trek.difficulty)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Modern Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 transition-transform duration-100"
          style={{ 
            backgroundImage: `url('${trek.heroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [0, 30, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-4xl"
            >
              {/* Back Button */}
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 
                         text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all mb-6 group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Treks
              </button>
              
              {/* Difficulty Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isVisible ? 1 : 0 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <span className={`bg-gradient-to-r ${difficultyConfig.color} text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-xl flex items-center gap-2`}>
                  <span className="text-lg">{difficultyConfig.icon}</span>
                  {difficultyConfig.label}
                </span>
              </motion.div>
              
              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ delay: 0.5 }}
                className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
              >
                {trek.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ delay: 0.6 }}
                className="text-2xl md:text-3xl text-emerald-300 mb-8 font-light"
              >
                {trek.subtitle}
              </motion.p>
              
              {/* Quick Stats - Modern Glass Cards */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[
                  { icon: '🏔️', label: 'Altitude', value: trek.altitude.split('(')[0] },
                  { icon: '📏', label: 'Distance', value: trek.distance },
                  { icon: '⏱️', label: 'Duration', value: trek.duration },
                  { icon: '📍', label: 'Location', value: trek.location.split(',')[0] }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl 
                             hover:bg-white/20 hover:scale-105 transition-all group"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                    <div className="text-white/60 text-xs mb-1">{stat.label}</div>
                    <div className="text-white text-sm font-semibold">{stat.value}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/60 text-sm">Scroll to explore</span>
            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content - Modern Layout */}
      <section className="py-20 relative">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/5 to-transparent" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section - Modern Glass Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity" />
                <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                      📖
                    </div>
                    <h2 className="font-display text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      About This Trek
                    </h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">{trek.description}</p>
                </div>
              </motion.div>

              {/* Highlights - Modern Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    ⭐
                  </div>
                  <h2 className="font-display text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Trek Highlights
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {trek.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 pt-2 group-hover:text-emerald-600 transition-colors">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Itinerary - Timeline Design */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    🗓️
                  </div>
                  <h2 className="font-display text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Trek Itinerary
                  </h2>
                </div>
                <div className="space-y-6 relative">
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-500" />
                  
                  {trek.itinerary.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex gap-6 relative"
                    >
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                          {i + 1}
                        </div>
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                        <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-3">
                          {item.day}
                        </div>
                        <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery - Modern Masonry */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    📸
                  </div>
                  <h2 className="font-display text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Photo Gallery
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {trek.gallery.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      onClick={() => setSelectedImage(img)}
                      className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                    >
                      <img src={img} alt={`${trek.title} ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white font-semibold">View Full Size</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Sticky Modern Cards */}
            <div className="space-y-6">
              {/* Booking Card - Premium Glass */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sticky top-24 space-y-6"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl opacity-20 group-hover:opacity-30 blur transition-opacity" />
                  <div className="relative bg-white/90 backdrop-blur-2xl border border-white/50 rounded-3xl p-8 shadow-2xl">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4 shadow-xl">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">Book This Trek</h3>
                      <p className="text-gray-600">Get personalized packages & group discounts</p>
                    </div>
                    
                    <a 
                      href={`https://wa.me/918073178851?text=Hello! I'm interested in booking the ${trek.title}. Can you provide more details?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all mb-4 group"
                    >
                      <svg className="w-7 h-7 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      </svg>
                      <span className="relative">Book via WhatsApp</span>
                    </a>

                    <a 
                      href="tel:+918073178851"
                      className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-slate-100 to-slate-200 text-gray-800 px-8 py-5 rounded-2xl font-bold text-lg hover:from-slate-200 hover:to-slate-300 hover:shadow-xl transition-all border-2 border-slate-300"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Now
                    </a>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">🌤️</span>
                        <h4 className="font-bold text-gray-900">Best Time to Visit</h4>
                      </div>
                      <p className="text-gray-600 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 rounded-xl">{trek.bestTime}</p>
                    </div>
                  </div>
                </div>

                {/* Inclusions Card */}
                <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-6 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-xl shadow-lg">
                      ✅
                    </div>
                    <h3 className="font-display text-xl font-bold text-gray-900">Package Includes</h3>
                  </div>
                  <ul className="space-y-3">
                    {trek.inclusions.map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.05 }}
                        className="flex items-start gap-3 text-gray-700 group"
                      >
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Essentials Card */}
                <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-6 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-xl shadow-lg">
                      🎒
                    </div>
                    <h3 className="font-display text-xl font-bold text-gray-900">What to Bring</h3>
                  </div>
                  <ul className="space-y-3">
                    {trek.essentials.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute top-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full flex items-center justify-center text-3xl hover:rotate-90 transition-all border border-white/20"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </motion.button>
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage} 
              alt="Gallery" 
              className="max-w-[95vw] max-h-[95vh] object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TrekDetail