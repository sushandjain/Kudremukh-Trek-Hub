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
    document.title = 'Kudremukh Trek | Western Ghats Trekking Karnataka | Ballalarayana Durga – Henjodi Stores'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience authentic Western Ghats trekking with Henjodi Stores Balagal. Kudremukh treks, Ballalarayana Durga, Karnataka weekend treks, Chikmagalur trekking & monsoon treks. Book your guided adventure today!')
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Kudremukh Trek & Western Ghats Trekking | Henjodi Stores Balagal')
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Experience authentic Western Ghats trekking adventures. Kudremukh Peak, Ballalarayana Durga, Netravati Peak & monsoon treks Karnataka. Expert local guides & homestay.')
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://henjodistores.netlify.app/')
    }
    
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', 'https://henjodistores.netlify.app/')
    }
    
    // Update Twitter meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'Kudremukh Trek | Western Ghats Trekking Karnataka | Henjodi Stores')
    }
    
    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) {
      twitterDesc.setAttribute('content', 'Book Kudremukh treks, Ballalarayana Durga, Karnataka weekend treks. Expert guides, homestay & monsoon treks. WhatsApp: +91 8073178851')
    }
    
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="treks"><TrekCards /></section>
      <section id="why"><WhyChooseUs /></section> 
      <section id="about"><About /></section>
      <section id="store"><Store /></section>
      <section id="gallery"><Gallery /></section>
      <section id="faq"><FAQ /></section>
      <section id="reviews"><ReviewsCTA /></section>
      <section id="cta"><CTASection /></section>
      <section id="contact"><Footer /></section>
    </div>
  )
}
