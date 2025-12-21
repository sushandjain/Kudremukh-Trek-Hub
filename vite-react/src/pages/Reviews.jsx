import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Reviews() {
  // Google Maps Place ID for the business - you can find this in Google Maps
  const googleMapsUrl = "https://www.google.com/maps/place/PRASAD+HENJODI+Malnad+store+(Netravati+%26+Kudremukha+peak+%26+Homestay+pre-booking+office)/@13.2223,75.4012,17z"
  const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJYWPYAKNhozsR_YOUR_PLACE_ID"

  useEffect(() => {
    // Set SEO meta tags for reviews page
    document.title = 'Customer Reviews | Henjodi Stores Balagal | Kudremukh Trek Reviews'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read real customer reviews for Henjodi Stores Balagal - trusted trekking guides for Kudremukh Peak, Netravati Peak & Western Ghats treks in Karnataka. See what trekkers say about us.')
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Customer Reviews | Henjodi Stores Balagal')
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Read real customer reviews for Henjodi Stores Balagal - trusted trekking guides for Kudremukh Peak, Netravati Peak & Western Ghats treks.')
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://henjodistores.netlify.app/reviews')
    }
    
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', 'https://henjodistores.netlify.app/reviews')
    }
    
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Navigation */}
      <nav className="bg-white shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-xl font-display font-bold text-dark">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
              </svg>
              Henjodi Adventures
            </Link>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-dark text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-5xl mb-4 block">⭐</span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Customer Reviews
            </h1>
            <p className="text-lg text-white/80 mb-4 max-w-2xl mx-auto">
              PRASAD HENJODI Malnad Store
            </p>
            <p className="text-sm text-white/60 max-w-xl mx-auto">
              Netravati & Kudremukha Peak & Homestay Pre-booking Office
            </p>
          </motion.div>
        </div>
      </section>

      {/* Google Reviews Embed Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Google Maps Embed with Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-soft overflow-hidden mb-8"
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-dark">Google Reviews</h2>
                    <p className="text-gray-500 text-sm">See what our trekkers say about us</p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="aspect-[4/3] md:aspect-[16/9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4178.023447521095!2d75.31693467539486!3d13.184369687150895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb4b813d32f619%3A0xcd6487cfe9f94211!2sPRASAD%20HENJODI%20Malnad%20store%20(Netravati%20%26%20Kudremukha%20peak%20%26%20Homestay%20pre-booking%20office%20)!5e1!3m2!1sen!2sin!4v1766301723308!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PRASAD HENJODI Malnad Store Location"
                ></iframe>
              </div>
              
              <div className="p-6 bg-gray-50">
                <p className="text-gray-600 text-sm mb-4">
                  Click the button below to view all reviews on Google Maps or leave your own review.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.google.com/maps/place/PRASAD+HENJODI+Malnad+store+(Netravati+%26+Kudremukha+peak+%26+Homestay+pre-booking+office+)/@13.184369687150895,75.31693467539486,17z/data=!4m8!3m7!1s0x3bbb4b813d32f619:0xcd6487cfe9f94211!8m2!3d13.1843697!4d75.3195096!9m1!1b1!16s%2Fg%2F11y3d3n82f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    View All Reviews on Google
                  </a>
                  <a
                    href="https://www.google.com/maps/place/PRASAD+HENJODI+Malnad+store+(Netravati+%26+Kudremukha+peak+%26+Homestay+pre-booking+office+)/@13.184369687150895,75.31693467539486,17z/data=!4m8!3m7!1s0x3bbb4b813d32f619:0xcd6487cfe9f94211!8m2!3d13.1843697!4d75.3195096!9m1!1b1!16s%2Fg%2F11y3d3n82f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Write a Review
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Elfsight Widget Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-soft mb-8"
            >
              <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
                <span className="text-2xl">📍</span>
                Find Us on Google Maps
              </h3>
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <p className="font-medium text-dark mb-1">PRASAD HENJODI Malnad Store</p>
                <p className="text-gray-600 text-sm mb-2">Netravati & Kudremukha Peak & Homestay Pre-booking Office</p>
                <p className="text-gray-500 text-sm">Balagal, Bus Stop, SH 66, Kalasa, Karnataka 577124</p>
              </div>
              <p className="text-gray-600 text-sm">
                Search for <strong>"PRASAD HENJODI Malnad store"</strong> on Google Maps to see all our reviews and ratings from real trekkers.
              </p>
            </motion.div>

            {/* WhatsApp Feedback Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-soft mb-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark">Share Your Experience</h3>
                  <p className="text-gray-500 text-sm">Send us photos and feedback on WhatsApp</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                Had a great trek? Share your photos, videos, and feedback directly with us on WhatsApp!
              </p>
              
              <a
                href="https://wa.me/918073178851?text=Hi! I wanted to share my feedback about my trek experience..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                Send Feedback on WhatsApp
              </a>
            </motion.div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center"
            >
              <p className="text-blue-800 text-sm">
                <strong>💡 Tip:</strong> To see all our Google reviews, search for{' '}
                <strong>"PRASAD HENJODI Malnad store"</strong> on Google Maps and click on the reviews section.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Ready for Your Adventure?
          </h2>
          <p className="text-white/80 mb-6">
            Book your trek today!
          </p>
          <a 
            href="https://wa.me/918073178851?text=Hello! I want to book a trek."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-primary px-6 py-3 rounded-full font-bold hover:-translate-y-1 hover:shadow-strong transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            Book via WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-light text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Henjodi Adventures. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
