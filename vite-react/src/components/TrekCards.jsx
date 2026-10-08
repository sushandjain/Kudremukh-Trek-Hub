import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowUpRight, 
  Mountain, 
  Compass, 
  Clock, 
  MapPin, 
  Check, 
  Car, 
  Calendar, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  X, 
  SlidersHorizontal,
  ChevronRight,
  Navigation,
  Eye,
  Info
} from 'lucide-react'

// Verified authentic data for Western Ghats peaks
const treks = [
  {
    id: 'kudremukh',
    title: 'Kudremukh Peak',
    kannadaTitle: 'ಕುದುರೆಮುಖ ಶಿಖರ',
    subtitle: 'Horse Face Mountain • 3rd Highest in Karnataka',
    images: [
      { src: '/image/kmview22.webp', label: 'Summit Crest' },
      { src: '/image/kmview3.webp', label: 'Misty Shola Sea' },
      { src: '/image/kudremukh-trekview.jpg', label: 'Active Trail' }
    ],
    location: 'Kudremukh National Park',
    trailhead: 'Mullodi (via Balagal 4x4 Jeep)',
    duration: '1–2 Days',
    difficulty: 'Moderate to Challenging',
    difficultyLevel: 'Challenging',
    distance: '18–20 km (round trip)',
    altitude: '1,894 m (6,214 ft)',
    elevationValue: 1894,
    elevationGain: '~820 m climb',
    link: '/trek/kudremukh',
    category: 'highest',
    highlight: 'UNESCO Shola Ridge',
    permitStatus: 'Cap: 50 Trekkers/Day • Forest Dept Regulated',
    description: 'Rolling emerald shola grasslands, sweeping crests, and cold streams. Strict forest entry caps ensure an uncrowded, pristine mountain wilderness.',
    whatsappMsg: 'Hello Henjodi Stores! I would like to book the Kudremukh Peak Trek.%0A• Date:%20%0A• Group Size:%20'
  },
  {
    id: 'netravati',
    title: 'Netravati Peak',
    kannadaTitle: 'ನೇತ್ರಾವತಿ ಶಿಖರ',
    subtitle: 'Cradle of the Sacred River • Serene Ridge Walk',
    images: [
      { src: '/image/npview.webp', label: 'Grassland Knoll' },
      { src: '/image/nplogo.jpg', label: 'Sweeping Ridge' },
      { src: '/image/npreverview.jpeg', label: 'River Basin' }
    ],
    location: 'Kalasa / Belthangady Border',
    trailhead: 'Samse Checkpoint (via Balagal)',
    duration: '1 Day (8–10 hours)',
    difficulty: 'Moderate',
    difficultyLevel: 'Moderate',
    distance: '14–16 km (round trip)',
    altitude: '1,470 m (4,823 ft)',
    elevationValue: 1470,
    elevationGain: '~650 m climb',
    link: '/trek/netravati',
    category: 'day',
    highlight: 'Panoramic Grasslands',
    permitStatus: 'Forest Checkpoint Pass • Native Guide Escort',
    description: 'A breathtaking ridge-walk along the birthplace of the Netravati River, framed by sweeping green meadows and rolling cloud inversions.',
    whatsappMsg: 'Hello Henjodi Stores! I would like to book the Netravati Peak Trek.%0A• Date:%20%0A• Group Size:%20'
  },
  {
    id: 'kurinjal',
    title: 'Kurinjal Peak',
    kannadaTitle: 'ಕುರಿಂಜಲ್ ಶಿಖರ',
    subtitle: 'Quiet Shola Sanctuary & Granite Tower',
    images: [
      { src: '/image/kurinjal-1-.jpg', label: 'Granite Summit' },
      { src: '/image/kkview.jpeg', label: 'Rock Monolith' },
      { src: '/image/kkview44.jpg', label: 'Green Canopy' }
    ],
    location: 'Samse, Kudremukh Range',
    trailhead: 'Bhagavathi / Samse Checkpost',
    duration: '1 Day (7–8 hours)',
    difficulty: 'Easy to Moderate',
    difficultyLevel: 'Moderate',
    distance: '12–14 km (round trip)',
    altitude: '1,712 m (5,617 ft)',
    elevationValue: 1712,
    elevationGain: '~580 m climb',
    link: '/trek/kurinjal',
    category: 'highest',
    highlight: 'Dense Canopy Trail',
    permitStatus: 'Forest Permit Required • Shaded Forest',
    description: 'An ancient repeater station route surrounded by untouched wet evergreen forests, giant trees, and mist-covered granite boulders.',
    whatsappMsg: 'Hello Henjodi Stores! I would like to book the Kurinjal Peak Trek.%0A• Date:%20%0A• Group Size:%20'
  },
  {
    id: 'bandaje',
    title: 'Ballalarayana Durga & Bandaje',
    kannadaTitle: 'ಬಲ್ಲಾಳರಾಯನ ದುರ್ಗ ಮತ್ತು ಬಂಡಾಜೆ',
    subtitle: '12th Century Hoysala Fort & 200ft Plunge Waterfall',
    images: [
      { src: '/image/Bandaje-trek/Bandaje1.avif', label: 'Hoysala Fort Bastion' },
      { src: '/image/Bandaje-trek/Bandaje4.jpeg', label: '200ft Bandaje Falls' },
      { src: '/image/Bandaje-trek/Bandaje2.jpg', label: 'Stream Pool' }
    ],
    location: 'Sunkasale, Mudigere',
    trailhead: 'Durgadahalli Base Village',
    duration: '1 Day (8–10 hours)',
    difficulty: 'Moderate to Challenging',
    difficultyLevel: 'Challenging',
    distance: '14–16 km (round trip)',
    altitude: '1,509 m (4,951 ft)',
    elevationValue: 1509,
    elevationGain: '~710 m climb',
    link: '/trek/bandaje',
    category: 'waterfall',
    highlight: 'Historic Ruins & Waterfall',
    permitStatus: 'Active Waterfall • Cliff Edge Trail',
    description: 'Trek through historic Hoysala stone ramparts overlooking the edge of the Ghats, followed by the roar of Bandaje Arbi plunge falls.',
    whatsappMsg: 'Hello Henjodi Stores! I would like to book the Ballalarayana Durga & Bandaje Falls Trek.%0A• Date:%20%0A• Group Size:%20'
  },
  {
    id: 'bavikonda',
    title: 'Ettina Bhuja Peak',
    kannadaTitle: 'ಎತ್ತಿನ ಭುಜ',
    subtitle: 'The Ox-Shoulder Sunrise Summit of Mudigere',
    images: [
      { src: '/image/Bavinkonda/Bavinkonda1.jpg', label: 'Ox Hump Summit' },
      { src: '/image/Bavinkonda/Bavinkonda3.webp', label: 'Meadow Ridge' },
      { src: '/image/Bavinkonda/Bavinkonda5.webp', label: 'Morning Clouds' }
    ],
    location: 'Byrapura, Mudigere',
    trailhead: 'Sri Nanya Bhairaveshwara Temple',
    duration: '1 Day (5–6 hours)',
    difficulty: 'Beginner to Moderate',
    difficultyLevel: 'Beginner',
    distance: '6–8 km (round trip)',
    altitude: '1,236 m (4,055 ft)',
    elevationValue: 1236,
    elevationGain: '~380 m climb',
    link: '/trek/bavikonda',
    category: 'beginner',
    highlight: 'Accessible Sunrise',
    permitStatus: 'Beginner Friendly • Short Summit Push',
    description: 'A distinctive rocky hump offering dramatic 360° views across the Chikmagalur coffee valleys and Western Ghats escarpment.',
    whatsappMsg: 'Hello Henjodi Stores! I would like to book the Ettina Bhuja Trek.%0A• Date:%20%0A• Group Size:%20'
  },
  {
    id: 'valikunja',
    title: 'Valikunja Peak',
    kannadaTitle: 'ವಾಲಿಕುಂಜ',
    subtitle: 'Mythological Citadel of Sugriva • Untamed Trail',
    images: [
      { src: '/image/Valikunja/Valikunja1.jpg', label: 'Primary Forest' },
      { src: '/image/Valikunja/Valikunja2.jpg', label: 'Wilderness Crest' },
      { src: '/image/Valikunja/Aane1.webp', label: 'Valley Panorama' }
    ],
    location: 'Near Sringeri, Kudremukh Range',
    trailhead: 'Kerekatte / Sringeri Approach',
    duration: '1 Day (7–8 hours)',
    difficulty: 'Moderate to Challenging',
    difficultyLevel: 'Challenging',
    distance: '10–12 km (round trip)',
    altitude: '1,500 m (4,921 ft)',
    elevationValue: 1500,
    elevationGain: '~640 m climb',
    link: '/trek/valikunja',
    category: 'highest',
    highlight: 'Untamed Trail',
    permitStatus: 'Pristine Wilderness • Zero Commercial Crowds',
    description: 'A quieter, wilder ridge line legendary in regional folklore for panoramic vistas of the Tunga River basin and untouched rain forests.',
    whatsappMsg: 'Hello Henjodi Stores! I would like to book the Valikunja Peak Trek.%0A• Date:%20%0A• Group Size:%20'
  }
]

// Highway Drive & Distance Calculator data to Henjodi Stores Balagal
const cityRoutes = [
  {
    city: 'Bengaluru',
    distance: '312 km',
    duration: '6.5–7 hrs',
    route: 'NH 75 via Hassan → Belur → Mudigere → Kottigehara → Kalasa → Balagal',
    tip: 'Direct KSRTC overnight sleeper buses available to Kalasa/Balagal daily.'
  },
  {
    city: 'Mangaluru',
    distance: '118 km',
    duration: '2.5–3 hrs',
    route: 'Bantwal → Belthangady → Charmadi Ghat → Kottigehara → Kalasa → Balagal',
    tip: 'Stunning drive through Charmadi Ghat waterfalls and hairpin turns.'
  },
  {
    city: 'Udupi / Manipal',
    distance: '115 km',
    duration: '2.5 hrs',
    route: 'Karkala → Bajagoli → Kudremukh Ghat (SH 66) → Kalasa → Balagal',
    tip: 'Passes directly through the heart of Kudremukh National Park forest gate.'
  },
  {
    city: 'Chikmagalur Town',
    distance: '82 km',
    duration: '2 hrs',
    route: 'Aldur → Balehonnur or Mudigere → Kottigehara → Kalasa → Balagal',
    tip: 'Winds through renowned high-altitude Chikmagalur coffee and spice estates.'
  },
  {
    city: 'Mysuru',
    distance: '240 km',
    duration: '5 hrs',
    route: 'Holenarasipura → Hassan → Belur → Mudigere → Kalasa → Balagal',
    tip: 'Smooth highway connecting heritage Mysore to the Western Ghats base.'
  }
]

export default function TrekCards({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [activeImageIndex, setActiveImageIndex] = useState({})
  const [isCompareOpen, setIsCompareOpen] = useState(false)
  const [activeCityIndex, setActiveCityIndex] = useState(0)

  // Filter logic
  const filteredTreks = treks.filter(trek => {
    if (selectedCategory === 'all') return true
    if (selectedCategory === 'highest') return trek.elevationValue >= 1500
    if (selectedCategory === 'day') return trek.category === 'day' || trek.duration.includes('1 Day')
    if (selectedCategory === 'beginner') return trek.difficultyLevel === 'Beginner' || trek.difficulty.includes('Easy')
    if (selectedCategory === 'waterfall') return trek.category === 'waterfall'
    return true
  })

  // Switch image on card
  const handleSelectImage = (trekId, imgIdx, e) => {
    e.preventDefault()
    e.stopPropagation()
    setActiveImageIndex(prev => ({
      ...prev,
      [trekId]: imgIdx
    }))
  }

  return (
    <section id="treks" className="py-24 sm:py-32 relative bg-[#f8faf7] dark:bg-[#060d08] transition-colors">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Section Header & Chapter Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="chapter-number mb-3">
              <span>CHAPTER 01</span>
              <span className="w-10 h-px bg-dawn-amber inline-block" />
              <span>THE SUMMITS</span>
            </div>
            <h2 className="text-editorial-title text-forest-950 dark:text-emerald-50 mb-3">
              The Peaks We Guide from Balagal.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Every route is coordinated by native mountain guides who live in Balagal. Real forest department permits, 4x4 Jeep transfers, and base homestay lodging handled on-site.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => setIsCompareOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-forest-800/20 dark:border-white/20 bg-white/80 dark:bg-white/5 text-forest-900 dark:text-emerald-300 hover:bg-forest-50 dark:hover:bg-white/10 transition-all shadow-xs"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-forest-700 dark:text-emerald-400" />
              <span>Compare All 6 Peaks</span>
            </button>
          </div>
        </div>

        {/* Topographic Altitude Visualizer Bar */}
        <div className="mb-14 p-5 sm:p-7 rounded-3xl bg-white dark:bg-[#0c1810] border border-forest-900/10 dark:border-white/10 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-forest-700 dark:text-emerald-400" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-forest-950 dark:text-emerald-100">
                Topographic Elevation Gauge (ASL)
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">
              Balagal Basecamp: 798 m • Karnataka Summit Cap: 1,930 m
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {treks.map((t) => {
              const heightPercent = Math.round((t.elevationValue / 1930) * 100)
              return (
                <div 
                  key={t.id}
                  onClick={() => {
                    const el = document.getElementById(`trek-card-${t.id}`)
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }}
                  className="cursor-pointer p-3 rounded-2xl bg-forest-900/5 dark:bg-white/5 hover:bg-forest-900/10 dark:hover:bg-white/10 border border-forest-900/5 dark:border-white/5 transition-all group"
                >
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span className="text-xs font-bold text-forest-900 dark:text-white truncate group-hover:text-emerald-500 transition-colors">
                      {t.title.split(' ')[0]}
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-forest-700 dark:text-emerald-300">
                      {t.elevationValue}m
                    </span>
                  </div>
                  {/* Visual Bar */}
                  <div className="h-2 w-full bg-slate-200 dark:bg-black/40 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-600 to-amber-500 rounded-full transition-all duration-500" 
                      style={{ width: `${heightPercent}%` }}
                    />
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-1">
                    {heightPercent}% of Ghats ceiling
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {[
            { id: 'all', label: 'All Summits (6)' },
            { id: 'highest', label: 'Highest Peaks (>1,500m)' },
            { id: 'day', label: 'Day Treks (Single Day)' },
            { id: 'beginner', label: 'Beginner Friendly' },
            { id: 'waterfall', label: 'Waterfalls & Forts' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                selectedCategory === tab.id
                  ? 'bg-forest-900 text-white dark:bg-emerald-600 shadow-sm'
                  : 'bg-white dark:bg-[#0c1810] text-slate-600 dark:text-slate-300 border border-forest-900/10 dark:border-white/10 hover:border-forest-700/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Editorial Trek Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredTreks.map((trek, idx) => {
            const currentImgIndex = activeImageIndex[trek.id] || 0
            const currentImg = trek.images[currentImgIndex] || trek.images[0]

            return (
              <motion.article
                key={trek.id}
                id={`trek-card-${trek.id}`}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="editorial-card group flex flex-col justify-between overflow-hidden relative bg-white dark:bg-[#0c1810] hover:border-forest-700/30 transition-all"
              >
                {/* Image Frame with Interactive Multi-Photo Preview */}
                <div className="relative aspect-[16/11] overflow-hidden bg-forest-950">
                  <img
                    src={currentImg.src}
                    alt={`${trek.title} - ${currentImg.label}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Atmospheric Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    {/* Altitude Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold shadow-xs pointer-events-auto">
                      <Mountain className="w-3.5 h-3.5 text-amber-300" />
                      <span>{trek.altitude.split('(')[0].trim()}</span>
                    </div>

                    {/* Highlight Pill */}
                    <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-forest-900/80 backdrop-blur-md text-[11px] font-semibold text-emerald-100 border border-emerald-400/30 shadow-xs pointer-events-auto">
                      {trek.highlight}
                    </div>
                  </div>

                  {/* Multi-Photo Switcher Dots on Card */}
                  <div className="absolute bottom-16 right-3 flex items-center gap-1.5 z-10 bg-black/50 backdrop-blur-md px-2 py-1 rounded-full border border-white/20">
                    {trek.images.map((img, imgIdx) => (
                      <button
                        key={imgIdx}
                        onClick={(e) => handleSelectImage(trek.id, imgIdx, e)}
                        title={img.label}
                        aria-label={`Show ${img.label} photo`}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          currentImgIndex === imgIdx 
                            ? 'bg-amber-400 scale-125' 
                            : 'bg-white/50 hover:bg-white'
                        }`}
                      />
                    ))}
                    <span className="text-[10px] font-mono text-white/80 ml-1">
                      {currentImg.label}
                    </span>
                  </div>

                  {/* Bottom Title on Image */}
                  <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
                    <div className="font-kannada text-[11px] text-amber-200/90 block leading-tight">
                      {trek.kannadaTitle}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                      {trek.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Permit & Trailhead Status Ribbon */}
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-800 dark:text-emerald-300 bg-emerald-500/10 dark:bg-emerald-950/40 px-3 py-1.5 rounded-xl border border-emerald-500/20 mb-4">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span className="truncate">{trek.permitStatus}</span>
                    </div>

                    {/* Location & Time Info */}
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-3 pb-3 border-b border-forest-800/10 dark:border-white/10">
                      <span className="flex items-center gap-1.5 truncate">
                        <MapPin className="w-3.5 h-3.5 text-forest-700 dark:text-emerald-300 flex-shrink-0" />
                        <span className="truncate">{trek.location.split(',')[0]}</span>
                      </span>
                      <span className="flex items-center gap-1.5 flex-shrink-0">
                        <Clock className="w-3.5 h-3.5 text-forest-700 dark:text-emerald-300" />
                        <span>{trek.duration}</span>
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
                      {trek.description}
                    </p>

                    {/* Verified Metrics Badges */}
                    <div className="grid grid-cols-2 gap-2 mb-6 text-xs">
                      <div className="p-2.5 rounded-xl bg-forest-900/5 dark:bg-white/5 border border-forest-800/10 dark:border-white/10">
                        <span className="text-[10px] font-mono text-slate-400 uppercase block">Distance</span>
                        <span className="font-bold text-forest-950 dark:text-emerald-100">{trek.distance}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-forest-900/5 dark:bg-white/5 border border-forest-800/10 dark:border-white/10">
                        <span className="text-[10px] font-mono text-slate-400 uppercase block">Elevation Gain</span>
                        <span className="font-bold text-forest-950 dark:text-emerald-100">{trek.elevationGain}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions: Book on WhatsApp & Plan Trek Drawer & View Guide */}
                  <div className="pt-2 space-y-2">
                    <div className="flex items-center gap-2">
                      {/* WhatsApp Direct */}
                      <a
                        href={`https://wa.me/918073178851?text=${trek.whatsappMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="WHATSAPP"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider shadow-xs transition-all active:scale-95"
                      >
                        <span>WhatsApp</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      {/* Plan Trek Trigger (Opens Interactive Drawer) */}
                      {onOpenBooking && (
                        <button
                          onClick={() => onOpenBooking(trek.title)}
                          data-cursor="PLAN"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-full bg-forest-900 hover:bg-forest-950 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-xs transition-all"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Plan Dates</span>
                        </button>
                      )}

                      {/* View Guide Icon Link */}
                      <Link
                        to={trek.link}
                        data-cursor="ROUTE"
                        className="inline-flex items-center justify-center p-3 rounded-full border border-forest-800/20 dark:border-white/20 text-forest-950 dark:text-emerald-200 hover:bg-forest-100/60 dark:hover:bg-white/10 transition-colors"
                        aria-label={`View detailed trail guide for ${trek.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>

                    <Link 
                      to={trek.link}
                      className="block text-center text-xs text-forest-700 dark:text-emerald-400 hover:underline pt-1 font-mono"
                    >
                      Read Complete Trail Guide &amp; Itinerary →
                    </Link>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Interactive Highway Distance & Drive-Time Calculator to Balagal Base */}
        <div className="mt-16 p-6 sm:p-9 rounded-3xl bg-white dark:bg-[#0c1810] border border-forest-900/10 dark:border-white/10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-forest-900/10 dark:border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-forest-700 dark:text-emerald-400 uppercase tracking-wider mb-1">
                <Car className="w-4 h-4" />
                <span>Highway Travel Time Calculator to Balagal Base</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 dark:text-white">
                How Far is Henjodi Stores from Your City?
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=13.184369,75.319509"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-forest-800 dark:text-emerald-300 hover:underline font-mono"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Navigate on Google Maps (13.184369, 75.319509) ↗</span>
            </a>
          </div>

          {/* City Selector Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {cityRoutes.map((item, idx) => (
              <button
                key={item.city}
                onClick={() => setActiveCityIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCityIndex === idx
                    ? 'bg-forest-900 text-white dark:bg-emerald-600 shadow-xs'
                    : 'bg-forest-900/5 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-forest-900/10'
                }`}
              >
                {item.city}
              </button>
            ))}
          </div>

          {/* Active City Details Display */}
          <div className="p-4 sm:p-6 rounded-2xl bg-forest-900/5 dark:bg-white/5 border border-forest-900/10 dark:border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Distance &amp; Approximate Time
              </span>
              <div className="font-mono text-2xl font-bold text-forest-950 dark:text-white">
                {cityRoutes[activeCityIndex].distance}
              </div>
              <div className="text-xs text-amber-600 dark:text-amber-400 font-bold font-mono">
                {cityRoutes[activeCityIndex].duration} drive
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Primary Highway Route
              </span>
              <div className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                {cityRoutes[activeCityIndex].route}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Local Travel Tip
              </span>
              <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {cityRoutes[activeCityIndex].tip}
              </div>
            </div>
          </div>
        </div>

        {/* Forest Department Statutory Notice Card */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-forest-900 text-white border border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-left">
            <span className="font-mono text-xs text-amber-300 uppercase tracking-widest font-bold block mb-1">
              Forest Department Guidelines • Kudremukh National Park
            </span>
            <p className="text-sm text-slate-200 leading-relaxed">
              Kudremukh has a strict statutory limit of daily trekkers allowed through the Bhagavathi Nature Camp gate. We assist all guests with timely slot registrations, experienced native guides, and 4x4 Jeep transfers up to Mullodi base.
            </p>
          </div>
          <a
            href="https://wa.me/918073178851?text=Hello%20Henjodi%20Stores!%20Can%20you%20help%20check%20forest%20permit%20availability%20for%20this%20weekend?"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-forest-950 font-bold text-xs uppercase tracking-wider hover:bg-forest-50 transition-colors shadow-sm"
          >
            <span>Check Permit Availability</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Compare All 6 Peaks Side-by-Side Modal */}
      <AnimatePresence>
        {isCompareOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#0c1810] border border-forest-900/10 dark:border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setIsCompareOpen(false)}
                aria-label="Close peak comparison"
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="chapter-number">WESTERN GHATS MATRIX</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 dark:text-white mt-1">
                  Side-by-Side Peak Comparison
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Real specs and requirements for every peak guided from Henjodi Stores Balagal.
                </p>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 font-mono text-[11px] uppercase">
                      <th className="py-3 px-3">Peak</th>
                      <th className="py-3 px-3">Altitude</th>
                      <th className="py-3 px-3">Distance</th>
                      <th className="py-3 px-3">Difficulty</th>
                      <th className="py-3 px-3">Time</th>
                      <th className="py-3 px-3">Permit Note</th>
                      <th className="py-3 px-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5 font-sans">
                    {treks.map(t => (
                      <tr key={t.id} className="hover:bg-forest-50/50 dark:hover:bg-white/5 transition-colors">
                        <td className="py-3 px-3 font-bold text-forest-950 dark:text-white">
                          <div>{t.title}</div>
                          <div className="font-kannada text-[11px] text-amber-600 font-normal">{t.kannadaTitle}</div>
                        </td>
                        <td className="py-3 px-3 font-mono font-semibold text-slate-700 dark:text-slate-300">
                          {t.altitude.split('(')[0].trim()}
                        </td>
                        <td className="py-3 px-3 text-slate-600 dark:text-slate-400">
                          {t.distance}
                        </td>
                        <td className="py-3 px-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            t.difficultyLevel === 'Beginner'
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                              : t.difficultyLevel === 'Moderate'
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                              : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                          }`}>
                            {t.difficulty}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-slate-600 dark:text-slate-400">
                          {t.duration}
                        </td>
                        <td className="py-3 px-3 text-slate-500 dark:text-slate-400 text-xs">
                          {t.permitStatus.split('•')[0].trim()}
                        </td>
                        <td className="py-3 px-3 text-right">
                          <a
                            href={`https://wa.me/918073178851?text=${t.whatsappMsg}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-xs hover:bg-[#20ba5a]"
                          >
                            <span>WhatsApp</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
