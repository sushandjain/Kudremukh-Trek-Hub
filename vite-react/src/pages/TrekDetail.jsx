import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  // If trek not found, show error
  if (!trek) {
    return (
      <div className="min-h-screen bg-[#fbfcfb] flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-forest-50 border border-forest-200 text-forest-800 flex items-center justify-center text-3xl mx-auto mb-4">
            🏔️
          </div>
          <h1 className="font-heading text-3xl font-bold text-forest-950 mb-2">Trek Not Found</h1>
          <p className="text-slate-600 mb-6">The trek route you are looking for is not listed or has moved.</p>
          <button 
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            ← Back to All Treks
          </button>
        </div>
      </div>
    )
  }

  const getDifficultyConfig = (difficulty) => {
    if (difficulty.includes('Easy') || difficulty.includes('Beginner')) 
      return { bg: 'bg-emerald-600/90 text-white border-emerald-400/40', icon: '🌱', label: 'Beginner Friendly' }
    if (difficulty.includes('Moderate') && !difficulty.includes('Difficult')) 
      return { bg: 'bg-amber-600/90 text-white border-amber-400/40', icon: '⚡', label: 'Moderate' }
    return { bg: 'bg-red-700/90 text-white border-red-400/40', icon: '🔥', label: 'Challenging' }
  }

  const difficultyConfig = getDifficultyConfig(trek.difficulty)

  return (
    <div className="min-h-screen bg-[#fbfcfb] text-slate-800">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-forest-100 shadow-sm py-3.5">
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/image/logo.png" alt="Henjodi Stores" width="38" height="38" className="w-9 h-9 object-contain rounded-full" />
            <span className="font-heading text-lg sm:text-xl font-bold text-forest-900">
              Henjodi Stores
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link 
              to="/#treks"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold border border-forest-800/20 text-forest-800 hover:bg-forest-50 transition-colors"
            >
              <span>← All Treks</span>
            </Link>
            <a
              href={`https://wa.me/918073178851?text=Hello%20Henjodi%20Stores!%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(trek.title)}.%0A%E2%80%A2%20Preferred%20Date%3A%20%0A%E2%80%A2%20Group%20Size%3A%20`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#20ba5a] px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm transition-all"
            >
              <span>Book on WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Modern Hero Section with Parallax */}
      <section className="relative h-[80vh] min-h-[520px] overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 transition-transform duration-100"
          style={{ 
            backgroundImage: `url('${trek.heroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.4}px)`
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a10] via-transparent to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-4xl"
            >
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 mb-4">
                <Link to="/" className="hover:underline">Home</Link>
                <span className="text-white/40">/</span>
                <Link to="/#treks" className="hover:underline">Treks</Link>
                <span className="text-white/40">/</span>
                <span className="text-white/80">{trek.title}</span>
              </div>
              
              {/* Difficulty Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isVisible ? 1 : 0 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-flex items-center gap-2 mb-4"
              >
                <span className={`${difficultyConfig.bg} text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border shadow-lg inline-flex items-center gap-2 backdrop-blur-md`}>
                  <span className="text-base">{difficultyConfig.icon}</span>
                  {difficultyConfig.label}
                </span>
              </motion.div>
              
              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 0.4 }}
                className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-3 leading-tight tracking-tight"
              >
                {trek.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg sm:text-2xl text-emerald-200/90 mb-8 font-light"
              >
                {trek.subtitle}
              </motion.p>
              
              {/* Quick Stats - Modern Glass Cards */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
              >
                {[
                  { icon: '🏔️', label: 'Altitude', value: trek.altitude.split('(')[0].trim() },
                  { icon: '📏', label: 'Distance', value: trek.distance },
                  { icon: '⏱️', label: 'Duration', value: trek.duration },
                  { icon: '📍', label: 'Location', value: trek.location.split(',')[0].trim() }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                    transition={{ delay: 0.7 + i * 0.08 }}
                    className="bg-black/40 backdrop-blur-md border border-white/20 p-3.5 sm:p-4 rounded-2xl hover:bg-black/50 transition-all"
                  >
                    <div className="text-2xl sm:text-3xl mb-1.5">{stat.icon}</div>
                    <div className="text-emerald-200/80 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-0.5">{stat.label}</div>
                    <div className="text-white text-xs sm:text-sm md:text-base font-bold font-heading truncate">{stat.value}</div>
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
          transition={{ delay: 1 }}
          className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="flex flex-col items-center gap-1.5 text-white/60 hover:text-white transition-colors"
          >
            <span className="text-xs uppercase tracking-wider font-semibold">Explore Route</span>
            <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content - Modern Layout */}
      <section className="py-16 sm:py-20 relative bg-[#fbfcfb]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8 sm:space-y-10">
              {/* About Section */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="stitch-card bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-sm"
              >
                <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
                  <div className="w-11 h-11 bg-forest-50 border border-forest-200/70 rounded-2xl flex items-center justify-center text-xl shadow-xs">
                    📖
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest-950">
                    About This Trek
                  </h2>
                </div>
                <p className="text-slate-700 leading-relaxed text-base sm:text-lg">{trek.description}</p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="stitch-card bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-sm"
              >
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 bg-amber-50 border border-amber-200/70 rounded-2xl flex items-center justify-center text-xl shadow-xs">
                    ⭐
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest-950">
                      Trek Highlights
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Key scenic points &amp; natural wonders on the trail</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {trek.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-forest-50/40 border border-forest-100/70 hover:bg-forest-50 transition-colors"
                    >
                      <div className="w-5 h-5 rounded-full bg-forest-800 text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                        ✓
                      </div>
                      <span className="text-slate-800 text-sm font-medium leading-snug">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Itinerary - Timeline Design */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="stitch-card bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-sm"
              >
                <div className="flex items-center gap-3.5 mb-8">
                  <div className="w-11 h-11 bg-forest-50 border border-forest-200/70 rounded-2xl flex items-center justify-center text-xl shadow-xs">
                    🗓️
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest-950">
                      Trek Itinerary
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Typical schedule coordinated by Henjodi Stores team</p>
                  </div>
                </div>
                <div className="space-y-6 relative pl-2 sm:pl-3">
                  {/* Timeline Line */}
                  <div className="absolute left-6 sm:left-7 top-4 bottom-4 w-0.5 bg-forest-200" />
                  
                  {trek.itinerary.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex gap-4 sm:gap-6 relative"
                    >
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-forest-800 border-2 border-white rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm">
                          {i + 1}
                        </div>
                      </div>
                      <div className="flex-1 bg-slate-50/70 border border-slate-200/70 rounded-2xl p-4 sm:p-6 hover:border-forest-200 transition-colors">
                        <div className="inline-block bg-forest-100 text-forest-900 border border-forest-200 text-xs font-bold px-3 py-1 rounded-full mb-2">
                          {item.day}
                        </div>
                        <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 mb-1.5">{item.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="stitch-card bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-sm"
              >
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 bg-forest-50 border border-forest-200/70 rounded-2xl flex items-center justify-center text-xl shadow-xs">
                    📸
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest-950">
                      Photo Gallery
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Click any photo to view full resolution</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
                  {trek.gallery.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      onClick={() => setSelectedImage(img)}
                      className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-slate-200/70 shadow-xs hover:shadow-md transition-all"
                    >
                      <img 
                        src={img} 
                        alt={`${trek.title} scenery ${i + 1}`} 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <span className="text-white text-xs font-semibold">View Full Size ↗</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              <div className="sticky top-20 space-y-6">
                {/* Booking Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="stitch-card bg-white rounded-3xl p-6 sm:p-7 border border-forest-100 shadow-md"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-50 border border-forest-200 text-forest-900 text-xs font-bold mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Direct Balagal Operations</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-forest-950 mb-2">
                    Book {trek.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Connect directly with Prasad &amp; team at Balagal for forest permits, native guides, homestay &amp; local transfers.
                  </p>
                  
                  <a 
                    href={`https://wa.me/918073178851?text=Hello%20Henjodi%20Stores!%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(trek.title)}.%0A%E2%80%A2%20Trek%3A%20${encodeURIComponent(trek.title)}%0A%E2%80%A2%20Tentative%20Date%3A%20%0A%E2%80%A2%20Group%20Size%3A%20%0A%E2%80%A2%20Need%20Homestay%2FFood%3F%20`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-4 rounded-2xl font-bold text-base shadow-md hover:shadow-lg transition-all mb-3 text-center"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    </svg>
                    <span>Book on WhatsApp</span>
                  </a>

                  <a 
                    href="tel:+918073178851"
                    className="w-full flex items-center justify-center gap-2 bg-forest-50 hover:bg-forest-100 text-forest-900 border border-forest-200/80 px-6 py-3 rounded-2xl font-bold text-sm transition-all"
                  >
                    <svg className="w-5 h-5 text-forest-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call +91 8073178851</span>
                  </a>

                  <div className="mt-6 pt-5 border-t border-forest-100 space-y-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-forest-900 uppercase tracking-wider mb-1">
                        <span>🌤️</span>
                        <span>Best Season</span>
                      </div>
                      <p className="text-forest-950 bg-forest-50 border border-forest-200/60 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold">{trek.bestTime}</p>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                      <span>Base Location:</span>
                      <span className="font-semibold text-slate-800">Balagal, Kalasa</span>
                    </div>
                  </div>
                </motion.div>

                {/* Inclusions Card */}
                <div className="stitch-card bg-white rounded-3xl p-6 border border-forest-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-forest-50 border border-forest-200/70 rounded-xl flex items-center justify-center text-forest-800 font-bold text-base">
                      ✓
                    </div>
                    <h3 className="font-heading text-lg font-bold text-forest-950">Package Includes</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm">
                    {trek.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-700">
                        <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Essentials Card */}
                <div className="stitch-card bg-white rounded-3xl p-6 border border-forest-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-amber-50 border border-amber-200/70 rounded-xl flex items-center justify-center text-amber-800 font-bold text-base">
                      🎒
                    </div>
                    <h3 className="font-heading text-lg font-bold text-forest-950">What to Bring</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {trek.essentials.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Homestay Cross-Promotion */}
                <div className="rounded-3xl p-6 bg-forest-900 text-white border border-forest-800 shadow-sm">
                  <div className="text-xs uppercase tracking-wider text-emerald-300 font-bold mb-1">Stay &amp; Dining</div>
                  <h4 className="font-heading font-bold text-lg mb-2">Balagal Homestay &amp; Cafe</h4>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Stay overnight right at the Kudremukh base. Enjoy home-cooked Malenadu food, clean washrooms, and safe parking.
                  </p>
                  <Link 
                    to="/#stay-food"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white transition-colors"
                  >
                    <span>View Homestay &amp; Food details →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-forest-100 p-3 px-4 shadow-lg flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[11px] text-slate-500 font-medium truncate">{trek.duration} • {trek.difficulty}</div>
          <div className="font-heading font-bold text-forest-950 text-sm truncate">{trek.title}</div>
        </div>
        <a
          href={`https://wa.me/918073178851?text=Hello%20Henjodi%20Stores!%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(trek.title)}.%0A%E2%80%A2%20Date%3A%20%0A%E2%80%A2%20Group%20Size%3A%20`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-1.5 bg-[#25D366] text-white hover:bg-[#20ba5a] px-4 py-2.5 rounded-full text-xs font-bold shadow-sm transition-all"
        >
          <span>Book on WhatsApp</span>
        </a>
      </div>

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
              aria-label="Close image"
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full flex items-center justify-center text-2xl hover:rotate-90 transition-all border border-white/20"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </motion.button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Gallery photo full size" 
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#0b1a10] text-slate-400 py-10 text-center text-xs border-t border-forest-900 pb-20 lg:pb-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-white font-heading text-base font-bold mb-2">Henjodi Stores • Balagal, Kalasa, Chikmagalur</p>
          <p className="text-slate-400 mb-4">Forest Permits Assistance, Native Guides, Homestay &amp; Malenadu Cafe</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-emerald-400 font-semibold">
            <Link to="/" className="hover:underline">← Home</Link>
            <span>•</span>
            <Link to="/#treks" className="hover:underline">All Treks</Link>
            <span>•</span>
            <Link to="/#stay-food" className="hover:underline">Stay &amp; Food</Link>
            <span>•</span>
            <Link to="/terms" className="hover:underline">Guidelines &amp; Terms</Link>
          </div>
          <p className="text-slate-600 mt-6">© {new Date().getFullYear()} Henjodi Stores. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default TrekDetail