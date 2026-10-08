import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import TrekCards from '../components/TrekCards'
import ServicesBento from '../components/ServicesBento'
import StayAndFood from '../components/StayAndFood'
import HowToBook from '../components/HowToBook'
import BookingEnquiry from '../components/BookingEnquiry'
import WhyChooseUs from '../components/WhyChooseUs'
import About from '../components/About'
import Store from '../components/Store'
import Gallery from '../components/Gallery'
import FAQ from '../components/FAQ'
import LocationContact from '../components/LocationContact'
import ReviewsCTA from '../components/ReviewsCTA'
import Footer from '../components/Footer'
import BookingModal from '../components/BookingModal'
import MobileActionBar from '../components/MobileActionBar'
import CustomCursor from '../components/CustomCursor'
import TopographicDivider from '../components/TopographicDivider'

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedTrek, setSelectedTrek] = useState('')

  useEffect(() => {
    // Preserve & Enhance Exact SEO Title & Meta Tags
    document.title = 'Kudremukh Trek Booking | Netravati Peak | Kurinjal Peak – Henjodi Stores'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience authentic Western Ghats trekking with Henjodi Stores Balagal. Kudremukh treks, Ballalarayana Durga, Netravati Peak & guided nature adventures in Karnataka. Book your trek today!')
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Kudremukh Trek Booking | Netravati Peak | Kurinjal Peak – Henjodi Stores')
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Book Kudremukh treks including Netravati Peak, Kurinjal Peak, and Malenadu trekking. Trek tickets, guides, food, homestay & local support available.')
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://henjodistores.netlify.app/')
    }
    
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', 'https://henjodistores.netlify.app/')
    }
    
    window.scrollTo(0, 0)
  }, [])

  const handleOpenBooking = (trekName = '') => {
    setSelectedTrek(trekName)
    setIsBookingModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#f8faf7] dark:bg-[#060d08] text-slate-800 dark:text-slate-100 transition-colors">
      {/* Desktop Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Floating Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main>
        {/* Cinematic Parallax Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Kinetic Altitude Marquee */}
        <Marquee />

        {/* Chapter 01: Sacred Ridges & Treks */}
        <TrekCards onOpenBooking={handleOpenBooking} />

        <TopographicDivider />

        {/* Chapter 02: Base Ecosystem (Bento Grid) */}
        <ServicesBento onOpenBooking={() => handleOpenBooking()} />

        <TopographicDivider inverted />

        {/* Chapter 03: Forest Hospitality & Malenadu Food */}
        <StayAndFood onOpenBooking={() => handleOpenBooking()} />

        {/* Chapter 04: The Ascent Timeline */}
        <HowToBook onOpenBooking={() => handleOpenBooking()} />

        {/* Interactive Booking Enquiry Dispatcher */}
        <BookingEnquiry />

        {/* Native Mountain Guides Heritage */}
        <WhyChooseUs />

        {/* Story of Henjodi Stores & Prasad */}
        <About />

        {/* Balagal Bus Stop Store & Supplies */}
        <Store />

        {/* Authentic Western Ghats Photo Gallery */}
        <Gallery />

        {/* Verified FAQ Accordion */}
        <FAQ />

        {/* Chapter 05: Location, Maps & Coordinates */}
        <LocationContact />

        {/* Google Reviews CTA */}
        <ReviewsCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Plan Your Trek Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
        preselectedTrek={selectedTrek}
      />

      {/* Thumb-friendly Mobile Floating Action Bar */}
      <MobileActionBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  )
}
