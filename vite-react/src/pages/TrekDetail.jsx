import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mountain, 
  Compass, 
  Clock, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Check, 
  Sparkles, 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  X, 
  Footprints, 
  Sun, 
  Moon, 
  Maximize2, 
  AlertCircle, 
  Utensils, 
  Home, 
  Flame, 
  Zap, 
  ArrowUpRight,
  Share2
} from 'lucide-react'
import BookingModal from '../components/BookingModal'

// SEO Meta Update Function
const updatePageMeta = (trek, trekId) => {
  if (!trek) return
  
  // Update title
  document.title = `${trek.title} | Henjodi Stores | Balagal, Kalasa`
  
  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) {
    metaDesc.setAttribute('content', `${trek.title} (${trek.kannadaTitle}) - ${trek.subtitle}. Altitude: ${trek.altitude}, Distance: ${trek.distance}. Real permits, local native guides, and base homestay in Balagal, Kalasa. WhatsApp +91 8073178851.`)
  }
  
  // Update Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]')
  const ogDesc = document.querySelector('meta[property="og:description"]')
  const ogImage = document.querySelector('meta[property="og:image"]')
  const ogUrl = document.querySelector('meta[property="og:url"]')
  
  if (ogTitle) ogTitle.setAttribute('content', `${trek.title} • Henjodi Stores Trekking Hub`)
  if (ogDesc) ogDesc.setAttribute('content', `${trek.subtitle}. ${trek.difficulty} trek, ${trek.distance}. Best season: ${trek.bestTime}. Guided by Balagal locals.`)
  if (ogImage) ogImage.setAttribute('content', `https://henjodistores.netlify.app${trek.heroImage}`)
  if (ogUrl) ogUrl.setAttribute('content', `https://henjodistores.netlify.app/trek/${trekId}`)
  
  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) {
    canonical.setAttribute('href', `https://henjodistores.netlify.app/trek/${trekId}`)
  }
}

// All treks data - Verified information for Karnataka Western Ghats & Balagal Base
const treksData = {
  kudremukh: {
    title: 'Kudremukh Peak Trek',
    kannadaTitle: 'ಕುದುರೆಮುಖ ಶಿಖರ',
    subtitle: 'Horse Face Mountain • 3rd Highest Peak in Karnataka',
    heroImage: '/image/kmview22.webp',
    altitude: '1,894 m (6,214 ft)',
    elevationValue: 1894,
    distance: '18–20 km (round trip)',
    duration: '1–2 Days',
    difficulty: 'Moderate to Challenging',
    location: 'Kudremukh National Park, Chikmagalur',
    trailhead: 'Mullodi Village (Via Balagal 4x4 Jeep)',
    bestTime: 'October to February (Lush post-monsoon: Sept–Nov)',
    description: `Kudremukh, meaning "Horse Face" in Kannada, is the crowning jewel of the Western Ghats. Located inside the protected Kudremukh National Park, this trail climbs through emerald rolling shola grasslands, crisp mountain streams, and dense montane evergreen forests. Because daily entry is capped by the Karnataka Forest Department to protect biodiversity, the experience remains unhurried, pristine, and truly wild. Henjodi Stores in Balagal arranges your mandatory forest permits, certified native guides, and 4x4 jeep transfers up to the Mullodi base.`,
    highlights: [
      'Third highest summit in Karnataka at 1,894 meters',
      'Part of the UNESCO Western Ghats World Heritage landscape',
      'Endless rolling shola grasslands and montane cloud forests',
      'Ontimara (The Lone Tree) and Somavathi river crossing',
      'Strict forest entry quota ensures zero overcrowding',
      'Spectacular sea of clouds and sunrise views across the ridge'
    ],
    itinerary: [
      { 
        day: 'Base Arrival', 
        time: 'Evening Prior / Early Morning',
        title: 'Arrival at Balagal & Forest Clearance', 
        description: 'Report to Henjodi Stores in Balagal. Complete Forest Department registration and permit verification. Enjoy hot Malenadu coffee and breakfast at our cafe before boarding the rugged 4x4 jeep to Mullodi trailhead (6 km dirt track).' 
      },
      { 
        day: 'Summit Day', 
        time: '06:00 AM – 02:00 PM',
        title: 'The Ascent through Shola Ridges', 
        description: 'Start early with your native guide. Climb through lush forest patches, cross Somavathi river, reach the iconic Ontimara solitary tree, and push up the zig-zag ridge to the Kudremukh horse-face summit. Enjoy packed lunch with panoramic 360° views.' 
      },
      { 
        day: 'Descent & Return', 
        time: '02:30 PM – 05:30 PM',
        title: 'Return to Mullodi & Balagal Base', 
        description: 'Descend carefully before the forest checkpost closing time. Jeep transfer back to Henjodi Stores in Balagal for refreshing tea, hot snacks, or overnight homestay rest.' 
      }
    ],
    inclusions: [
      'Forest Department permit booking assistance & checkpoint fee',
      'Mandatory certified native trek guide',
      'Balagal to Mullodi base 4x4 Jeep transfer (round trip)',
      'Packed trail lunch, energy snacks & water refill',
      'Leech socks & first aid kit support',
      'Clean cloakroom & luggage storage at Henjodi Stores'
    ],
    essentials: [
      'Sturdy trekking shoes with deep lug grip (mandatory for grass ridges)',
      'Quick-dry full-sleeve t-shirt and breathable cargo pants',
      'Light rain jacket or poncho (mountain weather changes rapidly)',
      '2–3 liters reusable water bottles (single-use plastics prohibited)',
      'Government ID proof (Aadhaar / Voter ID matching permit name)',
      'Sunscreen, polarized sunglasses & wide-brim sun cap',
      'Compact 20–30L daypack with rain cover'
    ],
    gallery: [
      '/image/kmview22.webp',
      '/image/kmview3.webp',
      '/image/kudremukh-trekview.jpg',
      '/image/kmview2.jpeg',
      '/image/kmview11.jpeg',
      '/image/howtoreach.webp'
    ]
  },
  netravati: {
    title: 'Netravati Peak Trek',
    kannadaTitle: 'ನೇತ್ರಾವತಿ ಶಿಖರ',
    subtitle: 'Cradle of the Sacred River • Serene Ridge Walk',
    heroImage: '/image/nplogo.jpg',
    altitude: '1,470 m (4,823 ft)',
    elevationValue: 1470,
    distance: '14–16 km (round trip)',
    duration: '1 Day (8–10 hours)',
    difficulty: 'Moderate',
    location: 'Kalasa / Belthangady Border, Chikmagalur',
    trailhead: 'Samse Checkpoint / Balagal Base',
    bestTime: 'October to February (Monsoon permits subject to forest advisory)',
    description: `Netravati Peak stands as one of the most aesthetically balanced ridges in the Western Ghats. Overlooking the birthplace of the life-giving Netravati River, this route takes trekkers across undulating grassy knuckles, vibrant wildflowers, and misty valleys that tumble down towards Coastal Karnataka. With fewer crowds than Kudremukh and sweeping 360-degree views from the top, it is a favorite for nature lovers and landscape photographers.`,
    highlights: [
      'Picturesque birth-basin of Karnataka’s sacred Netravati River',
      'Spectacular open grassland knolls with panoramic cloud inversions',
      'Moderate gradient ideal for both intermediate trekkers and spirited beginners',
      'Vibrant biodiversity, orchids, and endemic Ghats birdlife',
      'Stunning viewpoint overlooking Kudremukh range on clear mornings'
    ],
    itinerary: [
      { 
        day: 'Morning', 
        time: '06:30 AM',
        title: 'Meeting & Registration at Balagal', 
        description: 'Meet the Henjodi Stores team in Balagal. Complete forest entry protocols, collect packed breakfast and trail refreshments, and transfer to the trailhead.' 
      },
      { 
        day: 'Trail Ascent', 
        time: '07:30 AM – 11:30 AM',
        title: 'Climbing the Ridge of Grasslands', 
        description: 'Trek along gradual grassy slopes punctuated by small shola streams. Reach the summit ridge where cool mountain winds blow continuously.' 
      },
      { 
        day: 'Descent', 
        time: '01:00 PM – 04:30 PM',
        title: 'Return to Base Village', 
        description: 'Descend along the marked trail back to the checkpoint. Return to Balagal for traditional Malenadu evening snacks and filter coffee.' 
      }
    ],
    inclusions: [
      'Forest Department trek entry permit',
      'Knowledgeable local guide fluent in the trails',
      'Packed nutritious trail lunch and energy fruit',
      'Leech protection socks & basic first aid',
      'Local transfer coordination from Balagal'
    ],
    essentials: [
      'Comfortable hiking shoes with rubber traction',
      'Light rain jacket or windcheater',
      'At least 2 liters of drinking water',
      'Valid Government photo ID',
      'Small backpack for water and camera'
    ],
    gallery: [
      '/image/nplogo.jpg',
      '/image/npview.webp',
      '/image/npreverview.jpeg',
      '/image/npviwe.jpg'
    ]
  },
  kurinjal: {
    title: 'Kurinjal Peak Trek',
    kannadaTitle: 'ಕುರಿಂಜಲ್ ಶಿಖರ',
    subtitle: 'Quiet Shola Sanctuary & Granite Tower',
    heroImage: '/image/kurinjal-1-.jpg',
    altitude: '1,712 m (5,617 ft)',
    elevationValue: 1712,
    distance: '12–14 km (round trip)',
    duration: '1 Day (7–8 hours)',
    difficulty: 'Easy to Moderate',
    location: 'Samse Village, Kudremukh Range',
    trailhead: 'Bhagavathi / Samse Checkpost',
    bestTime: 'September to February',
    description: `Kurinjal Peak is one of the most serene and underrated peaks within the Kudremukh National Park jurisdiction. Starting from the vicinity of Samse tea plantations, the trail winds under a thick evergreen forest canopy before opening up to an old microwave repeater station and massive granite monoliths. Its gentle ascent and sheltered forest path make it one of the most peaceful single-day treks in the region.`,
    highlights: [
      'Ancient abandoned repeater station with high granite view deck',
      'Dense canopy that keeps the initial hike cool and shaded',
      'Magnificent vantage point of Kudremukh main peak across the valley',
      'Beginner-friendly gradient with moderate endurance demand',
      'Untouched flora, mossy trees, and quiet birdwatching paths'
    ],
    itinerary: [
      { 
        day: 'Step 1', 
        time: '07:00 AM',
        title: 'Checkpost Clearance at Bhagavathi/Samse', 
        description: 'Verification of forest permits and guide allocation. Introduction and safety briefing by your Henjodi Stores team.' 
      },
      { 
        day: 'Step 2', 
        time: '08:00 AM – 11:30 AM',
        title: 'Forest Canopy Hike to Granite Tower', 
        description: 'Trek through lush shola woods, listening to the calls of Malabar giant squirrels. Break out into the open granite summit.' 
      },
      { 
        day: 'Step 3', 
        time: '12:30 PM – 03:30 PM',
        title: 'Summit Rest & Return Journey', 
        description: 'Enjoy packed lunch atop the rocks with panoramic Kudremukh views. Descend safely and transfer back to Balagal.' 
      }
    ],
    inclusions: [
      'Official forest entry permit and fees',
      'Experienced native forest guide',
      'Trail lunch and hydration support',
      'First aid & safety escort',
      'Base assistance at Henjodi Stores'
    ],
    essentials: [
      'Grippy sport or hiking shoes',
      'Breathable, lightweight clothing',
      'Minimum 2 liters water',
      'Personal medication & insect repellent',
      'Rain protection during monsoon edge'
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
    title: 'Ballalarayana Durga & Bandaje Falls',
    kannadaTitle: 'ಬಲ್ಲಾಳರಾಯನ ದುರ್ಗ ಮತ್ತು ಬಂಡಾಜೆ ಜಲಪಾತ',
    subtitle: '12th Century Hoysala Fort & 200ft Plunge Waterfall',
    heroImage: '/image/Bandaje-trek/Bandaje1.avif',
    altitude: '1,509 m (4,951 ft)',
    elevationValue: 1509,
    distance: '14–16 km (round trip)',
    duration: '1 Day (8–10 hours)',
    difficulty: 'Moderate to Challenging',
    location: 'Sunkasale / Mudigere Taluk, Chikmagalur',
    trailhead: 'Rani Jhari / Durgadahalli Base',
    bestTime: 'August to January (Peak waterfall thunder: Sept–Nov)',
    description: `This legendary trek combines ancient Hoysala stone history with one of the most dramatic waterfalls in Southern India. You first hike to the stone bastions of Ballalarayana Durga Fort—constructed in the 12th century by the Hoysala dynasty atop an imposing Ghats precipice. From the fort, the trail skirts along cliff edges down to Bandaje Arbi, where a mountain stream plummets over 200 feet into the dense Netravati valley abyss below.`,
    highlights: [
      'Roaring 200-foot Bandaje Arbi plunge waterfall overlooking the valley',
      'Ancient 12th-century Hoysala fort ruins with stone ramparts',
      'Spectacular Rani Jhari cliff edge vantage point',
      'Rich contrast of deep shola jungle and expansive cliffside grasslands',
      'Dramatic post-monsoon mist sweeping across the escarpment'
    ],
    itinerary: [
      { 
        day: 'Morning', 
        time: '06:30 AM',
        title: 'Transfer to Sunkasale Trailhead', 
        description: 'Depart from Henjodi Stores Balagal to the base village at Durgadahalli. Forest permit entry checks and gear check.' 
      },
      { 
        day: 'Fort Summit', 
        time: '07:30 AM – 11:00 AM',
        title: 'Ascent to Ballalarayana Fort Ramparts', 
        description: 'Climb through dense forests onto the fort hill. Explore the ancient stone walls and look out across the deep valley towards the coast.' 
      },
      { 
        day: 'Waterfall Walk', 
        time: '11:30 AM – 04:30 PM',
        title: 'Bandaje Arbi Waterfall & Descent', 
        description: 'Follow the cliffside trail to the Bandaje Falls cliffhead. Rest by the cool freshwater streams, enjoy packed lunch, and descend back to base.' 
      }
    ],
    inclusions: [
      'Local guide with extensive trail knowledge',
      'Trail permits and base village coordination',
      'Nutritious packed lunch and local snacks',
      'Emergency first aid kit',
      'Leech socks'
    ],
    essentials: [
      'Sturdy shoes with reliable wet grip',
      'Quick-dry clothing and extra dry socks',
      'Waterproof backpack cover or dry bag for electronics',
      '3 liters of drinking water',
      'Rain jacket or sturdy poncho'
    ],
    gallery: [
      '/image/Bandaje-trek/Bandaje1.avif',
      '/image/Bandaje-trek/Bandaje2.jpg',
      '/image/Bandaje-trek/Bandaje3.jpg',
      '/image/Bandaje-trek/Bandaje4.jpeg',
      '/image/Bandaje-trek/Bandaje5.webp',
      '/image/Bandaje-trek/Bandaje6.jpg',
      '/image/Bandaje-trek/Bandaje7.jpg'
    ]
  },
  bavikonda: {
    title: 'Ettina Bhuja Peak Trek',
    kannadaTitle: 'ಎತ್ತಿನ ಭುಜ ಶಿಖರ',
    subtitle: 'The Ox-Shoulder Sunrise Summit of Mudigere',
    heroImage: '/image/Bavinkonda/Bavinkonda1.jpg',
    altitude: '1,236 m (4,055 ft)',
    elevationValue: 1236,
    distance: '6–8 km (round trip)',
    duration: '1 Day (5–6 hours)',
    difficulty: 'Moderate',
    location: 'Byrapura Village, Mudigere, Chikmagalur',
    trailhead: 'Sri Nanya Bhairaveshwara Temple, Byrapura',
    bestTime: 'September to February (Magnificent for sunrise climbs)',
    description: `Ettina Bhuja translates to "Ox's Shoulder" in Kannada, named after its imposing, hump-shaped rock monolith that rises dramatically above the surrounding shola hills. Beginning near the ancient Sri Nanya Bhairaveshwara Temple in Byrapura, this trail winds through aroma-rich coffee plantations, mossy shola woods, and short steep grassy ridges before culminating in an exhilarating scramble up to the rocky summit.`,
    highlights: [
      'Iconic ox-hump shaped summit monolith with 360° panoramic views',
      'Scenic trail commencing from an ancient temple and coffee estates',
      'Ideal shorter duration trek perfect for families and photography lovers',
      'Dramatic morning fog rolling through the Mudigere valley below',
      'Rich birdlife and cool, breeze-swept summit atmosphere'
    ],
    itinerary: [
      { 
        day: 'Morning', 
        time: '06:00 AM',
        title: 'Trailhead Assembly at Byrapura Temple', 
        description: 'Gather at the historic Byrapura base. Briefing on the route and safety checks before heading into the plantation paths.' 
      },
      { 
        day: 'The Climb', 
        time: '07:00 AM – 09:30 AM',
        title: 'Coffee Trails to the Hump Scramble', 
        description: 'Trek through aromatic coffee estates and evergreen forest patches. Complete the final short scramble onto the rock summit.' 
      },
      { 
        day: 'Summit & Return', 
        time: '10:00 AM – 01:00 PM',
        title: 'Panoramic Views & Descent', 
        description: 'Enjoy snacks and breathtaking valley views at the top. Descend back to the temple base for authentic local lunch.' 
      }
    ],
    inclusions: [
      'Local guide support and trail navigation',
      'Local trailhead coordination',
      'Packed breakfast / trail snacks',
      'First aid support',
      'Balagal base guidance'
    ],
    essentials: [
      'Comfortable sports or trekking shoes',
      'Light windcheater or jacket for morning chill',
      '2 liters water per trekker',
      'Sunscreen and cap',
      'Camera or smartphone for 360° views'
    ],
    gallery: [
      '/image/Bavinkonda/Bavinkonda1.jpg',
      '/image/Bavinkonda/Bavinkonda2.jpg',
      '/image/Bavinkonda/Bavinkonda3.webp',
      '/image/Bavinkonda/Bavinkonda4.jpeg',
      '/image/Bavinkonda/Bavinkonda5.webp',
      '/image/Bavinkonda/Bavinkonda-logo.jpg'
    ]
  },
  valikunja: {
    title: 'Valikunja Peak Trek',
    kannadaTitle: 'ವಾಲಿಕುಂಜ ಶಿಖರ',
    subtitle: 'Mythological Citadel of Sugriva • Uncrowded Shola Trail',
    heroImage: '/image/Valikunja/Valikunja1.jpg',
    altitude: '1,500 m (4,921 ft)',
    elevationValue: 1500,
    distance: '10–12 km (round trip)',
    duration: '1 Day (7–8 hours)',
    difficulty: 'Moderate to Challenging',
    location: 'Near Sringeri / Kudremukh Border',
    trailhead: 'Kerekatte / Sringeri Approach',
    bestTime: 'October to February',
    description: `Valikunja is deeply steeped in local folklore, believed to have been the meditation and gathering sanctuary of monkey-king Sugriva and Vali from the Ramayana. Nestled on the western edge of the Kudremukh mountain chain, this trail offers raw, untamed nature far from standard tourist circuits. You walk through dense untouched wet evergreen forests before cresting rolling grassy ridges with sweeping views towards Sringeri and the coastal plains.`,
    highlights: [
      'Mystic peak tied to regional Western Ghats folklore',
      'Completely peaceful trail with virtually zero commercial crowds',
      'Dense ancient forests with giant canopy trees and rare orchids',
      'Pristine grassland meadows offering sweeping views towards Sringeri',
      'Pure wilderness immersion for true trekking purists'
    ],
    itinerary: [
      { 
        day: 'Morning', 
        time: '06:30 AM',
        title: 'Assembly & Forest Formalities', 
        description: 'Report to Henjodi Stores team for route coordination and Forest Department formalities.' 
      },
      { 
        day: 'Forest Trek', 
        time: '07:30 AM – 11:30 AM',
        title: 'Deep Canopy & Grassland Ascent', 
        description: 'Trek through pristine primary evergreen jungle, listening to mountain birds, before climbing onto the Valikunja summit ridge.' 
      },
      { 
        day: 'Descent', 
        time: '12:30 PM – 03:30 PM',
        title: 'Descent & Return to Balagal Base', 
        description: 'Rest, recharge with packed lunch, and descend back along the forest trail.' 
      }
    ],
    inclusions: [
      'Forest permit assistance where applicable',
      'Experienced native guide who knows the quiet trails',
      'Packed meals and energy snacks',
      'First aid kit and leech socks',
      'Base support at Henjodi Stores'
    ],
    essentials: [
      'Sturdy hiking boots with dependable ankle support',
      'Full-sleeve trekking shirt and trousers',
      '3 liters drinking water',
      'Rain gear & backpack rain protection',
      'Small trash bag to pack out all waste'
    ],
    gallery: [
      '/image/Valikunja/Valikunja1.jpg',
      '/image/Valikunja/Valikunja2.jpg',
      '/image/Valikunja/Valikunja-logo.jpg',
      '/image/kmview22.webp',
      '/image/kmview3.webp',
      '/image/kudremukh-trekview.jpg'
    ]
  },
  'aane-salaba': {
    title: 'Ombattu Gudda Trek',
    kannadaTitle: 'ಒಂಬತ್ತು ಗುಡ್ಡ ಶಿಖರ',
    subtitle: 'The Nine Hills Range of Western Ghats',
    heroImage: '/image/Valikunja/Aane1.webp',
    altitude: '1,300 m (4,265 ft)',
    elevationValue: 1300,
    distance: '8–10 km (round trip)',
    duration: '1 Day (5–6 hours)',
    difficulty: 'Easy to Moderate',
    location: 'Near Mudigere, Chikmagalur District',
    trailhead: 'Mudigere Base Village',
    bestTime: 'September to March',
    description: `Ombattu Gudda ("Nine Hills" in Kannada) is celebrated for its sweeping panoramic sequence of undulating grassy knolls that resemble rolling green waves across the Western Ghats. Gentle yet infinitely scenic, this trail is exceptionally well suited for beginners, photographers, and weekend explorers wanting an authentic mountain day out without extreme technical fatigue.`,
    highlights: [
      'Series of nine undulating scenic hilltops connected by green ridges',
      'Beginner-friendly gradient with high scenic reward',
      'Expansive open grassland meadows ideal for golden hour photography',
      'Cool mountain breeze and sweeping views across Chikmagalur estates',
      'Easily combined with an overnight stay at Henjodi Stores Balagal homestay'
    ],
    itinerary: [
      { 
        day: 'Morning', 
        time: '07:00 AM',
        title: 'Meeting & Trail Introduction', 
        description: 'Meet at base point. Route introduction and orientation by your local guide.' 
      },
      { 
        day: 'Hills Traverse', 
        time: '08:00 AM – 11:30 AM',
        title: 'Traversing the Nine Grassy Knolls', 
        description: 'Walk across the rolling grassy crests, taking in ever-changing vantage points across the valley.' 
      },
      { 
        day: 'Descent', 
        time: '12:30 PM – 02:30 PM',
        title: 'Descent & Return to Base', 
        description: 'Enjoy packed lunch atop the hills and make an easy descent back to the base.' 
      }
    ],
    inclusions: [
      'Certified local guide guidance',
      'Packed meals and refreshments',
      'First aid kit',
      'Full coordination support from Balagal'
    ],
    essentials: [
      'Trekking shoes or sneakers with good tread',
      'Comfortable outdoor clothing',
      '2 liters water',
      'Sun hat and sunglasses',
      'Daypack for personal belongings'
    ],
    gallery: [
      '/image/Valikunja/Aane1.webp',
      '/image/Bavinkonda/Bavinkonda1.jpg',
      '/image/Bavinkonda/Bavinkonda3.webp',
      '/image/kmview22.webp',
      '/image/kmview3.webp',
      '/image/Bavinkonda/Bavinkonda5.webp'
    ]
  }
}

function TrekDetail() {
  const { trekId } = useParams()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(null)
  const [scrollY, setScrollY] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)

  // Get trek data based on URL parameter
  const trek = treksData[trekId]

  // Synchronize Dark Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('henjodi-theme')
    const hasDarkAttr = document.documentElement.getAttribute('data-theme') === 'dark'
    if (savedTheme === 'dark' || hasDarkAttr) {
      setIsDark(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const nextDark = !isDark
    setIsDark(nextDark)
    if (nextDark) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('henjodi-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('henjodi-theme', 'light')
    }
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${trek.title} - Henjodi Stores`,
          text: `Explore ${trek.title} (${trek.altitude}) guided by Henjodi Stores Balagal.`,
          url: window.location.href,
        })
      } catch (err) {
        // Ignored if user dismissed
      }
    } else {
      navigator.clipboard?.writeText(window.location.href)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2200)
    }
  }

  // If trek not found, show error
  if (!trek) {
    return (
      <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] flex items-center justify-center p-4">
        <div className="text-center max-w-md p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xl">
          <div className="w-16 h-16 rounded-2xl bg-forest-50 dark:bg-forest-900/40 border border-forest-200 dark:border-forest-700/50 text-forest-800 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <Mountain className="w-8 h-8" />
          </div>
          <h1 className="font-serif text-3xl font-bold mb-2">Trek Route Not Found</h1>
          <p className="text-[var(--text-secondary)] text-sm mb-6">
            The peak you are looking for is either not cataloged or has moved. Explore our core Western Ghats peaks.
          </p>
          <button 
            onClick={() => navigate('/#treks')}
            className="btn-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            <span>Return to All Peaks</span>
          </button>
        </div>
      </div>
    )
  }

  const getDifficultyConfig = (difficulty) => {
    if (difficulty.includes('Easy') || difficulty.includes('Beginner')) 
      return { 
        bg: 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30', 
        icon: Sparkles, 
        label: 'Beginner Friendly' 
      }
    if (difficulty.includes('Moderate') && !difficulty.includes('Challenging') && !difficulty.includes('Difficult')) 
      return { 
        bg: 'bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/30', 
        icon: Zap, 
        label: 'Moderate Trail' 
      }
    return { 
      bg: 'bg-rose-500/15 text-rose-800 dark:text-rose-300 border-rose-500/30', 
      icon: Flame, 
      label: 'Moderate to Challenging' 
    }
  }

  const difficultyConfig = getDifficultyConfig(trek.difficulty)
  const DifficultyIcon = difficultyConfig.icon

  const whatsappDirectUrl = `https://wa.me/918073178851?text=Hello%20Henjodi%20Stores!%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(trek.title)}.%0A%E2%80%A2%20Trek%3A%20${encodeURIComponent(trek.title)}%0A%E2%80%A2%20Tentative%20Date%3A%20%0A%E2%80%A2%20Group%20Size%3A%20%0A%E2%80%A2%20Homestay%20%26%20Food%3A%20Yes%2FNo`

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-colors duration-300 selection:bg-forest-800 selection:text-white">
      {/* Editorial Sticky Header */}
      <header className="sticky top-0 z-40 glass-surface border-b border-[var(--border-subtle)] py-3 transition-colors duration-200">
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2.5 group">
              <img 
                src="/image/logo.png" 
                alt="Henjodi Stores" 
                width="36" 
                height="36" 
                className="w-9 h-9 object-contain rounded-full shadow-xs group-hover:scale-105 transition-transform" 
              />
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-forest-950 dark:text-white leading-tight">
                  Henjodi Stores
                </span>
                <span className="font-kannada text-[11px] text-[var(--text-muted)] leading-none">
                  ಬಳಗಾಲ್ • ಕಳಸ
                </span>
              </div>
            </Link>

            {/* Coordinates Chip on Tablet & Desktop */}
            <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/5 dark:bg-white/5 border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)] ml-3">
              <Compass className="w-3.5 h-3.5 text-forest-700 dark:text-emerald-400" />
              <span>13.184369° N, 75.319509° E</span>
              <span className="text-[var(--text-muted)]/50">•</span>
              <span>798m ASL</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to daylight mode" : "Switch to campfire night mode"}
              title={isDark ? "Switch to daylight mode" : "Switch to campfire night mode"}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full border border-[var(--border-subtle)] hover:border-forest-700/40 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all flex items-center gap-1.5 text-xs font-mono"
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">Dawn</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-forest-800" />
                  <span className="hidden sm:inline">Campfire</span>
                </>
              )}
            </button>

            {/* Share / Back Link */}
            <button
              onClick={handleShare}
              title="Share this trek"
              className="p-2 rounded-full border border-[var(--border-subtle)] hover:border-forest-700/40 text-[var(--text-secondary)] transition-all"
            >
              <Share2 className="w-4 h-4" />
            </button>
            {copiedLink && (
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 absolute top-14 right-4 bg-[var(--bg-surface)] px-2 py-1 rounded-md shadow-md border border-[var(--border-subtle)]">
                Link copied!
              </span>
            )}

            <Link 
              to="/#treks"
              className="inline-flex items-center gap-1 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-forest-700/40 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">All Treks</span>
            </Link>

            {/* Plan Trek Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 bg-forest-900 hover:bg-forest-950 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-xs transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Plan Trek</span>
            </button>

            {/* Direct WhatsApp CTA */}
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] text-white hover:bg-[#20ba5a] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-xs transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Cinematic Full-Bleed Parallax Hero */}
      <section className="relative min-h-[580px] sm:min-h-[640px] lg:h-[78vh] overflow-hidden flex items-end">
        {/* Parallax Background Photograph */}
        <div 
          className="absolute inset-0 transition-transform duration-100 ease-out will-change-transform"
          style={{ 
            backgroundImage: `url('${trek.heroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            transform: `translateY(${scrollY * 0.28}px) scale(1.05)`
          }}
        />
        
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d08] via-[#060d08]/65 to-[#060d08]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d08]/85 via-transparent to-[#060d08]/50" />
        
        {/* Shola Fog Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-canvas)] to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pb-16 pt-24 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-emerald-300/90 mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/40">/</span>
              <Link to="/#treks" className="hover:text-white transition-colors">Western Ghats Peaks</Link>
              <span className="text-white/40">/</span>
              <span className="text-white font-semibold truncate">{trek.title}</span>
            </nav>
            
            {/* Badges: Kannada Title + Difficulty */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="font-kannada text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200">
                {trek.kannadaTitle}
              </span>
              <span className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-3.5 py-1 rounded-full border backdrop-blur-md ${difficultyConfig.bg}`}>
                <DifficultyIcon className="w-3.5 h-3.5" />
                <span>{difficultyConfig.label}</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white/80">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span>{trek.location}</span>
              </span>
            </div>
            
            {/* Main Editorial Title */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight leading-[1.08]">
              {trek.title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-xl md:text-2xl text-emerald-100/90 font-light mb-8 max-w-3xl leading-relaxed">
              {trek.subtitle}
            </p>
            
            {/* Key Specs Glass Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {[
                { 
                  icon: Mountain, 
                  label: 'Altitude', 
                  value: trek.altitude,
                  detail: `${trek.elevationValue ? `${trek.elevationValue}m ASL` : 'Summit Point'}`
                },
                { 
                  icon: Footprints, 
                  label: 'Trail Distance', 
                  value: trek.distance,
                  detail: 'Round-trip trekking'
                },
                { 
                  icon: Clock, 
                  label: 'Estimated Duration', 
                  value: trek.duration,
                  detail: 'Guided ascent & return'
                },
                { 
                  icon: Compass, 
                  label: 'Trailhead', 
                  value: trek.trailhead ? trek.trailhead.split('(')[0].trim() : 'Balagal Base',
                  detail: 'Balagal 4x4 Jeep Link'
                }
              ].map((stat, i) => {
                const StatIcon = stat.icon
                return (
                  <div
                    key={i}
                    className="p-3.5 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 hover:border-white/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-emerald-300 mb-1">
                      <StatIcon className="w-4 h-4 text-emerald-400" />
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-white/70">
                        {stat.label}
                      </span>
                    </div>
                    <div className="font-mono text-sm sm:text-base font-bold text-white truncate">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-white/60 truncate mt-0.5">
                      {stat.detail}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Quick Hero Action CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                <Calendar className="w-4 h-4" />
                <span>Plan This Trek with Us</span>
              </button>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask via WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Editorial Content Body */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Left 2 Columns: Editorial Narrative & Details */}
            <div className="lg:col-span-2 space-y-8 sm:space-y-10">
              
              {/* Chapter 01: About The Route */}
              <div className="editorial-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="chapter-number">CHAPTER 01</span>
                  <span className="text-[var(--text-muted)] text-xs font-mono">•</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">THE PEAK PROFILE</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-forest-950 dark:text-white">
                  About {trek.title}
                </h2>
                <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-6 font-normal">
                  {trek.description}
                </p>

                {/* Trail Specific Highlights Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-forest-900/5 dark:bg-white/5 border border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-forest-800 text-white flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-emerald-300" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[var(--text-primary)]">
                        Regulated Forest Eco-Zone
                      </div>
                      <div className="text-xs text-[var(--text-muted)]">
                        Permits, daily entry quotas &amp; native guide guidance handled from Balagal
                      </div>
                    </div>
                  </div>
                  <div className="font-mono text-xs text-forest-700 dark:text-emerald-400 font-bold bg-white dark:bg-black/40 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)]">
                    Balagal Base Coordination
                  </div>
                </div>
              </div>

              {/* Chapter 02: Trail Highlights */}
              <div className="editorial-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="chapter-number">CHAPTER 02</span>
                  <span className="text-[var(--text-muted)] text-xs font-mono">•</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">TERRAIN &amp; SCENIC WONDERS</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2 tracking-tight text-forest-950 dark:text-white">
                  Trail Highlights
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-6">
                  Notable natural landmarks, ecological milestones, and scenic viewpoints along the route.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {trek.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-forest-900/5 dark:bg-white/5 border border-[var(--border-subtle)] hover:border-forest-700/30 transition-colors"
                    >
                      <div className="w-5 h-5 rounded-full bg-forest-800 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-300" />
                      </div>
                      <span className="text-sm font-medium text-[var(--text-primary)] leading-snug">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chapter 03: Ascent Timeline / Itinerary */}
              <div className="editorial-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="chapter-number">CHAPTER 03</span>
                  <span className="text-[var(--text-muted)] text-xs font-mono">•</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">ASCENT SCHEDULE</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2 tracking-tight text-forest-950 dark:text-white">
                  Trek Itinerary &amp; Timeline
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-8">
                  Typical sequence arranged by the Henjodi Stores team at Balagal basecamp.
                </p>

                <div className="space-y-6 relative pl-3 sm:pl-4">
                  {/* Subtle Timeline Vertical Bar */}
                  <div className="absolute left-[22px] sm:left-[26px] top-4 bottom-4 w-0.5 bg-forest-900/15 dark:bg-white/15" />
                  
                  {trek.itinerary.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 sm:gap-6 relative group"
                    >
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-forest-900 dark:bg-emerald-600 text-white rounded-full flex items-center justify-center font-mono font-bold text-sm shadow-md border-2 border-[var(--bg-canvas)]">
                          {i + 1}
                        </div>
                      </div>
                      <div className="flex-1 bg-[var(--bg-canvas)] border border-[var(--border-subtle)] rounded-2xl p-4 sm:p-6 group-hover:border-forest-700/40 transition-colors">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="font-mono text-xs font-bold text-forest-800 dark:text-emerald-400 uppercase tracking-wider bg-forest-900/10 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-full">
                            {item.day}
                          </span>
                          {item.time && (
                            <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1">
                              <Clock className="w-3 h-3 text-forest-700 dark:text-emerald-400" />
                              <span>{item.time}</span>
                            </span>
                          )}
                        </div>
                        <h3 className="font-serif font-bold text-base sm:text-lg text-[var(--text-primary)] mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chapter 04: Curated Photo Gallery */}
              <div className="editorial-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="chapter-number">CHAPTER 04</span>
                  <span className="text-[var(--text-muted)] text-xs font-mono">•</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">VISUAL ARCHIVE</span>
                </div>
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-forest-950 dark:text-white">
                      Field Photographs
                    </h2>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                      Authentic photographs from the Kudremukh &amp; Balagal trails. Click to expand.
                    </p>
                  </div>
                  <span className="hidden sm:inline-block font-mono text-xs text-[var(--text-muted)]">
                    {trek.gallery.length} verified frames
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {trek.gallery.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedImage(img)}
                      className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-[var(--border-subtle)] bg-[var(--bg-canvas)] shadow-xs hover:shadow-md transition-all"
                    >
                      <img 
                        src={img} 
                        alt={`${trek.title} scenery photo ${i + 1}`} 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <div className="flex items-center gap-1.5 text-white text-xs font-mono">
                          <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>View Full Frame</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Sidebar with Booking Drawer Trigger & Pack Info */}
            <div className="space-y-6">
              <div className="lg:sticky lg:top-24 space-y-6">
                
                {/* Main Booking Action Card */}
                <div className="editorial-card p-6 sm:p-7 border-forest-800/30 dark:border-emerald-500/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-forest-900/5 dark:bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/10 dark:bg-emerald-950/50 border border-forest-800/20 dark:border-emerald-500/30 text-forest-900 dark:text-emerald-300 text-xs font-mono font-bold mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Direct Balagal Base Team</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-forest-950 dark:text-white mb-2">
                    Book {trek.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                    Connect directly with Prasad &amp; the Henjodi Stores team in Balagal. We arrange permits, certified native guides, 4x4 Jeep transfers to Mullodi, and base homestay lodging.
                  </p>
                  
                  {/* Primary Button: Open Booking Planner */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full mb-3 btn-primary"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Plan Trek (Dates &amp; Group)</span>
                  </button>

                  {/* Secondary WhatsApp Direct */}
                  <a 
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mb-3 btn-whatsapp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book via WhatsApp</span>
                  </a>

                  {/* Call Direct */}
                  <a 
                    href="tel:+918073178851"
                    className="w-full flex items-center justify-center gap-2 p-3 rounded-full text-xs sm:text-sm font-semibold border border-[var(--border-subtle)] hover:border-forest-700/40 text-[var(--text-primary)] hover:bg-forest-900/5 dark:hover:bg-white/5 transition-all text-center font-mono"
                  >
                    <Phone className="w-4 h-4 text-forest-700 dark:text-emerald-400" />
                    <span>Call +91 8073178851</span>
                  </a>

                  {/* Best Season & Location Info */}
                  <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] space-y-3">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1">
                        Recommended Season
                      </div>
                      <div className="p-3 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-subtle)] text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                        {trek.bestTime}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] pt-2 border-t border-[var(--border-subtle)]">
                      <span>Base Point:</span>
                      <span className="font-semibold text-[var(--text-primary)] font-mono">Balagal, Kalasa</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
                      <span>Coordinates:</span>
                      <span className="font-mono text-[var(--text-primary)]">13.184369, 75.319509</span>
                    </div>
                  </div>
                </div>

                {/* Package Inclusions Card */}
                <div className="editorial-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-forest-900/10 dark:bg-emerald-950/40 text-forest-800 dark:text-emerald-400 flex items-center justify-center font-bold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-forest-950 dark:text-white">
                      Managed from Balagal
                    </h3>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    {trek.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What to Bring Checklist */}
                <div className="editorial-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold">
                      <Footprints className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-forest-950 dark:text-white">
                      Trekker Essentials
                    </h3>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                    {trek.essentials.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Homestay Cross-Promotion */}
                <div className="rounded-3xl p-6 bg-forest-900 text-white border border-forest-800 shadow-lg relative overflow-hidden">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-emerald-300 font-mono font-bold mb-1">
                    <Home className="w-3.5 h-3.5" />
                    <span>Balagal Base Lodge</span>
                  </div>
                  <h4 className="font-serif font-bold text-lg mb-2">
                    Henjodi Homestay &amp; Cafe
                  </h4>
                  <p className="text-emerald-100/80 text-xs leading-relaxed mb-4">
                    Stay overnight right at the Kudremukh base. Enjoy home-cooked Malenadu meals, hot water washrooms, and safe parking.
                  </p>
                  <Link 
                    to="/#stay-food"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white transition-colors font-mono"
                  >
                    <span>View Homestay &amp; Cafe Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sticky Mobile Bottom CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 glass-surface border-t border-[var(--border-subtle)] p-3 px-4 shadow-xl flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[11px] font-mono text-[var(--text-muted)] truncate">
            {trek.altitude} • {trek.duration}
          </div>
          <div className="font-serif font-bold text-[var(--text-primary)] text-sm truncate">
            {trek.title}
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-3.5 py-2 rounded-full text-xs font-semibold bg-forest-900 text-white dark:bg-emerald-600 shadow-xs"
          >
            Plan Trek
          </button>
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#25D366] text-white hover:bg-[#20ba5a] px-3.5 py-2 rounded-full text-xs font-bold shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              aria-label="Close image lightbox"
              className="absolute top-5 right-5 w-11 h-11 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all border border-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <motion.img 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                src={selectedImage} 
                alt={`${trek.title} photograph`} 
                className="max-w-[95vw] max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="mt-3 text-center text-xs font-mono text-white/70">
                {trek.title} • Kudremukh Mountain Range • Henjodi Stores Balagal
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Integrated Booking Drawer Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        preselectedTrek={trek.title}
      />

      {/* Editorial Footer */}
      <footer className="bg-[#060d08] text-slate-400 py-12 text-center text-xs border-t border-forest-900/60 pb-24 lg:pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-center gap-2 mb-3">
            <img src="/image/logo.png" alt="Henjodi Stores" className="w-7 h-7 rounded-full object-contain" />
            <span className="text-white font-serif text-lg font-bold">Henjodi Stores</span>
          </div>
          <p className="text-emerald-300/80 font-mono text-xs mb-1">
            Balagal, Kalasa, Chikmagalur, Karnataka • 13.184369, 75.319509
          </p>
          <p className="text-slate-400 mb-6 max-w-md mx-auto text-xs leading-relaxed">
            Forest Permits Assistance, Native Guides, 4x4 Jeep Logistics, Balagal Homestay &amp; Malenadu Cafe.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-emerald-400 font-semibold mb-6">
            <Link to="/" className="hover:underline">Home</Link>
            <span>•</span>
            <Link to="/#treks" className="hover:underline">All Peaks</Link>
            <span>•</span>
            <Link to="/#stay-food" className="hover:underline">Homestay &amp; Food</Link>
            <span>•</span>
            <Link to="/photos" className="hover:underline">Photo Archive</Link>
            <span>•</span>
            <Link to="/terms" className="hover:underline">Permit Rules &amp; Guidelines</Link>
          </div>
          <div className="text-[11px] text-slate-600 font-mono">
            © {new Date().getFullYear()} Henjodi Stores. Real photographs of Western Ghats only. No AI imagery.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TrekDetail