import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Mountain, Compass, Clock, MapPin, Check } from 'lucide-react'

const treks = [
  {
    id: 'kudremukh',
    title: 'Kudremukh Peak',
    kannadaTitle: 'ಕುದುರೆಮುಖ ಶಿಖರ',
    subtitle: 'Horse Face Mountain • 3rd Highest in Karnataka',
    image: '/image/kmview22.webp',
    location: 'Kudremukh National Park',
    duration: '1–2 Days',
    difficulty: 'Moderate to Challenging',
    distance: '18–20 km (round trip)',
    altitude: '1,894 m (6,214 ft)',
    elevationValue: 1894,
    link: '/trek/kudremukh',
    highlight: 'UNESCO Shola Ridge',
    description: 'Rolling shola grasslands, sweeping mountain crests, and wild streams. Strict forest entry caps ensure uncrowded, pristine wilderness.',
    whatsappMsg: 'Hello Henjodi Stores! I would like to book the Kudremukh Peak Trek.%0A• Date:%20%0A• Group Size:%20'
  },
  {
    id: 'netravati',
    title: 'Netravati Peak',
    kannadaTitle: 'ನೇತ್ರಾವತಿ ಶಿಖರ',
    subtitle: 'Source of the Sacred River',
    image: '/image/nplogo.jpg',
    location: 'Kalasa / Belthangady Border',
    duration: '1 Day (8–10 hours)',
    difficulty: 'Moderate',
    distance: '14–16 km (round trip)',
    altitude: '1,470 m (4,823 ft)',
    elevationValue: 1470,
    link: '/trek/netravati',
    highlight: 'Panoramic Grasslands',
    description: 'A breathtaking ridge-walk along the birthplace of the Netravati River, framed by sweeping green meadows and rolling cloud valleys.',
    whatsappMsg: 'Hello Henjodi Stores! I would like to book the Netravati Peak Trek.%0A• Date:%20%0A• Group Size:%20'
  },
  {
    id: 'kurinjal',
    title: 'Kurinjal Peak',
    kannadaTitle: 'ಕುರಿಂಜಲ್ ಶಿಖರ',
    subtitle: 'Quiet Shola Sanctuary & Granite Tower',
    image: '/image/kurinjal-1-.jpg',
    location: 'Samse, Kudremukh Range',
    duration: '1 Day (7–8 hours)',
    difficulty: 'Easy to Moderate',
    distance: '12–14 km (round trip)',
    altitude: '1,712 m (5,617 ft)',
    elevationValue: 1712,
    link: '/trek/kurinjal',
    highlight: 'Dense Canopy Trail',
    description: 'An ancient repeater station route surrounded by untouched wet evergreen forests and mist-covered granite boulders.',
    whatsappMsg: 'Hello Henjodi Stores! I would like to book the Kurinjal Peak Trek.%0A• Date:%20%0A• Group Size:%20'
  },
  {
    id: 'bandaje',
    title: 'Ballalarayana Durga & Bandaje',
    kannadaTitle: 'ಬಲ್ಲಾಳರಾಯನ ದುರ್ಗ ಮತ್ತು ಬಂಡಾಜೆ',
    subtitle: '12th Century Hoysala Fort & 200ft Plunge Waterfall',
    image: '/image/Bandaje-trek/Bandaje4.jpeg',
    location: 'Sunkasale, Chikmagalur',
    duration: '1 Day (8–10 hours)',
    difficulty: 'Moderate to Challenging',
    distance: '14–16 km (round trip)',
    altitude: '1,509 m (4,951 ft)',
    elevationValue: 1509,
    link: '/trek/bandaje',
    highlight: 'Historic Ruins & Waterfall',
    description: 'Trek through historic Hoysala stone ramparts overlooking the edge of the Ghats, followed by the roaring roar of Bandaje Arbi Falls.',
    whatsappMsg: 'Hello Henjodi Stores! I would like to book the Ballalarayana Durga & Bandaje Falls Trek.%0A• Date:%20%0A• Group Size:%20'
  },
  {
    id: 'bavikonda',
    title: 'Ettina Bhuja Peak',
    kannadaTitle: 'ಎತ್ತಿನ ಭುಜ',
    subtitle: 'The Ox-Shoulder Sunrise Summit',
    image: '/image/Bavinkonda/Bavinkonda1.jpg',
    location: 'Byrapura, Mudigere',
    duration: '1 Day (5–6 hours)',
    difficulty: 'Moderate',
    distance: '6–8 km (round trip)',
    altitude: '1,236 m (4,055 ft)',
    elevationValue: 1236,
    link: '/trek/bavikonda',
    highlight: 'Accessible Sunrise',
    description: 'A distinctive rocky hump offering dramatic 360° views across the Chikmagalur coffee valleys and Western Ghats escarpment.',
    whatsappMsg: 'Hello Henjodi Stores! I would like to book the Ettina Bhuja Trek.%0A• Date:%20%0A• Group Size:%20'
  },
  {
    id: 'valikunja',
    title: 'Valikunja Peak',
    kannadaTitle: 'ವಾಲಿಕುಂಜ',
    subtitle: 'Mythological Sugriva’s Citadel',
    image: '/image/Valikunja/Valikunja1.jpg',
    location: 'Near Sringeri, Kudremukh Range',
    duration: '1 Day (7–8 hours)',
    difficulty: 'Moderate to Challenging',
    distance: '10–12 km (round trip)',
    altitude: '~1,500 m (4,921 ft)',
    elevationValue: 1500,
    link: '/trek/valikunja',
    highlight: 'Untamed Trail',
    description: 'A quieter, wilder ridge line legendary for panoramic vistas of the Tunga River basin and the southern Western Ghats.',
    whatsappMsg: 'Hello Henjodi Stores! I would like to book the Valikunja Peak Trek.%0A• Date:%20%0A• Group Size:%20'
  }
]

export default function TrekCards() {
  return (
    <section id="treks" className="py-24 sm:py-32 relative bg-[#f8faf7] dark:bg-[#060d08] transition-colors">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Chapter Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="chapter-number mb-3">
            <span>01 / THE ASCENT</span>
            <span className="w-12 h-px bg-dawn-amber inline-block" />
            <span>WESTERN GHATS</span>
          </div>
          <h2 className="text-editorial-title text-forest-950 dark:text-emerald-50 mb-4">
            The Peaks We Guide from Balagal.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Every route is led by native mountain guides who know every stream, leeches season, and ridge path. We coordinate forest department permits and transfers directly from our Balagal store.
          </p>
        </div>

        {/* Editorial Trek Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {treks.map((trek, idx) => (
            <motion.article
              key={trek.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="editorial-card group flex flex-col justify-between overflow-hidden relative bg-white dark:bg-[#0c1810]"
            >
              {/* Image Frame with Elevation Badge */}
              <div className="relative aspect-[16/11] overflow-hidden bg-forest-950">
                <img
                  src={trek.image}
                  alt={trek.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Atmospheric Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Altitude Pill Overlay */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold">
                  <Mountain className="w-3.5 h-3.5 text-amber-300" />
                  <span>{trek.altitude.split('(')[0].trim()}</span>
                </div>

                {/* Highlight Chip */}
                <div className="absolute top-4 right-4 inline-flex items-center px-2.5 py-1 rounded-full bg-forest-800/80 backdrop-blur-md text-[11px] font-semibold text-emerald-100 border border-emerald-400/30">
                  {trek.highlight}
                </div>

                {/* Bottom Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-kannada text-[11px] text-amber-200/80 block mb-0.5">
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
                  {/* Peak Elevation Silhouette Motif */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-3 pb-3 border-b border-forest-800/10 dark:border-white/10">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-forest-700 dark:text-emerald-300" />
                      {trek.location.split(',')[0]}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-forest-700 dark:text-emerald-300" />
                      {trek.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {trek.description}
                  </p>

                  {/* Verified Metrics Badges */}
                  <div className="grid grid-cols-2 gap-2 mb-6 text-xs">
                    <div className="p-2.5 rounded-xl bg-forest-50/60 dark:bg-white/5 border border-forest-800/10 dark:border-white/10">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Distance</span>
                      <span className="font-bold text-forest-950 dark:text-emerald-100">{trek.distance}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-forest-50/60 dark:bg-white/5 border border-forest-800/10 dark:border-white/10">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Difficulty</span>
                      <span className="font-bold text-forest-950 dark:text-emerald-100">{trek.difficulty}</span>
                    </div>
                  </div>
                </div>

                {/* Actions: Book on WhatsApp & View Route Guide */}
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={`https://wa.me/918073178851?text=${trek.whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="WHATSAPP"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all active:scale-95"
                  >
                    <span>Book WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    to={trek.link}
                    data-cursor="ROUTE"
                    className="inline-flex items-center justify-center p-3 rounded-full border border-forest-800/20 dark:border-white/20 text-forest-950 dark:text-emerald-200 hover:bg-forest-100/60 dark:hover:bg-white/10 transition-colors"
                    aria-label={`View detailed trail guide for ${trek.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Forest Department Capacity Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-forest-900 text-white border border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-left">
            <span className="font-mono text-xs text-amber-300 uppercase tracking-widest font-bold block mb-1">
              Forest Department Guidelines • Kudremukh National Park
            </span>
            <p className="text-sm text-slate-200 leading-relaxed">
              Kudremukh has a strict statutory limit of daily trekkers allowed through the Bhagavathi Nature Camp gate. We assist all guests with timely slot bookings and local guide allocations from Balagal.
            </p>
          </div>
          <a
            href="https://wa.me/918073178851?text=Hello%20Henjodi%20Stores!%20Can%20you%20help%20check%20forest%20permit%20availability%20for%20this%20weekend?"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-forest-950 font-bold text-xs uppercase tracking-wider hover:bg-forest-50 transition-colors"
          >
            <span>Check Permit Availability</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
