import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrekCards from '../components/TrekCards'
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

export default function Home() {
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

  return (
    <div className="min-h-screen bg-[#fbfcfb] text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <TrekCards />
        <StayAndFood />
        <HowToBook />
        <BookingEnquiry />
        <WhyChooseUs />
        <About />
        <Store />
        <Gallery />
        <FAQ />
        <LocationContact />
        <ReviewsCTA />
      </main>
      <Footer />
    </div>
  )
}
