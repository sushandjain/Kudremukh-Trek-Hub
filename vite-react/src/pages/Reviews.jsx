import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '/image/logo.png'

export default function Reviews() {
  const googleMapsUrl = "https://www.google.com/maps/place/PRASAD+HENJODI+Malnad+store+(Netravati+%26+Kudremukha+peak+%26+Homestay+pre-booking+office)/@13.1843697,75.3195096,17z/data=!4m8!3m7!1s0x3bbb4b813d32f619:0xcd6487cfe9f94211!8m2!3d13.1843697!4d75.3195096!9m1!1b1!16s%2Fg%2F11y3d3n82f"
  
  useEffect(() => {
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
    <div className="min-h-screen bg-[#fbfcfb] text-slate-800">
      
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-forest-100 shadow-sm py-4">
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Henjodi Stores" width="40" height="40" className="w-10 h-10 object-contain rounded-full" />
            <span className="font-heading text-xl font-bold text-forest-900">
              Henjodi Stores
            </span>
          </Link>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-forest-800/20 text-forest-800 hover:bg-forest-50 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-forest-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-5">
              <span>⭐ Verified Community Feedback</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white">
              Trekkers' Experiences on Google Maps
            </h1>
            <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto">
              Real reviews from adventurers who trekked Kudremukh, Netravati, and Kurinjal with Henjodi Stores.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Review Section */}
      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          
          {/* Google Maps Embed Card */}
          <div className="stitch-card overflow-hidden bg-white mb-10 shadow-card">
            <div className="p-6 sm:p-8 border-b border-forest-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-forest-50 rounded-2xl flex items-center justify-center text-2xl border border-forest-100 flex-shrink-0">
                  📍
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold text-forest-900">
                    PRASAD HENJODI Malnad Store
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Netravati &amp; Kudremukha Peak &amp; Homestay Pre-booking Office • Balagal Bus Stop
                  </p>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#1a472a] text-white hover:bg-[#153a22] transition-colors shadow-sm whitespace-nowrap"
              >
                <span>View All Reviews on Google</span>
                <span>↗</span>
              </a>
            </div>

            {/* Map Frame */}
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4178.023447521095!2d75.31693467539486!3d13.184369687150895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb4b813d32f619%3A0xcd6487cfe9f94211!2sPRASAD%20HENJODI%20Malnad%20store%20(Netravati%20%26%20Kudremukha%20peak%20%26%20Homestay%20pre-booking%20office%20)!5e1!3m2!1sen!2sin!4v1766301723308!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Reviews - PRASAD HENJODI Malnad Store"
              />
            </div>

            <div className="p-6 bg-forest-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-600">
                To leave a public rating or read all traveler reviews, tap the Google Maps button.
              </p>
              <div className="flex gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-bold bg-white text-forest-900 border border-forest-200 hover:bg-forest-50 transition-colors"
                >
                  Write a Google Review
                </a>
              </div>
            </div>
          </div>

          {/* Direct WhatsApp Feedback Card */}
          <div className="stitch-card p-6 sm:p-8 bg-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <span className="text-4xl p-3 bg-forest-50 rounded-2xl border border-forest-100 flex-shrink-0">
                💬
              </span>
              <div>
                <h3 className="font-heading text-lg font-bold text-forest-900">
                  Share Your Photos &amp; Feedback Directly
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  Have photos from the summit or comments on your guide? Send them straight to Prasad on WhatsApp.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/918073178851?text=Hello%20Prasad!%20I%20wanted%20to%20share%20my%20trek%20feedback%20and%20photos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-sm whitespace-nowrap"
            >
              <span>Message on WhatsApp</span>
            </a>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0b1a10] text-slate-400 py-8 text-center text-xs border-t border-forest-900">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Henjodi Stores • Balagal, Kalasa, Chikmagalur, Karnataka</p>
          <Link to="/" className="text-emerald-400 font-bold hover:underline mt-2 inline-block">
            ← Return to Homepage
          </Link>
        </div>
      </footer>

    </div>
  )
}
