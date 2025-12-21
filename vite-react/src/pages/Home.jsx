import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import TrekCards from '../components/TrekCards'
import WhyChooseUs from '../components/WhyChooseUs'
import Store from '../components/Store'
import Gallery from '../components/Gallery'
import FAQ from '../components/FAQ'
import ReviewsCTA from '../components/ReviewsCTA'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    // Restore main SEO meta tags when returning to home
    document.title = 'Kudremukh Trek | Henjodi Stores Balagal | Western Ghats Trekking Karnataka'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Book Kudremukh Peak trek, Netravati Peak, Kurinjal, Bandaje Falls & more Western Ghats treks from Henjodi Stores Balagal, Kalasa. Expert guides, homestay booking & trekking equipment in Karnataka.')
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Kudremukh Trek | Henjodi Stores Balagal | Western Ghats Trekking Karnataka')
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Book Kudremukh Peak trek, Netravati Peak, Kurinjal, Bandaje Falls & more Western Ghats treks from Henjodi Stores Balagal, Kalasa. Expert guides, homestay booking & trekking equipment.')
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
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <TrekCards />
      <WhyChooseUs />
      <Store />
      <Gallery />
      <FAQ />
      <ReviewsCTA />
      <CTASection />
      <Footer />
    </div>
  )
}
