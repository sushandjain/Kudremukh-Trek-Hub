import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '/image/logo.png'

function Terms() {
  useEffect(() => {
    document.title = 'Terms and Conditions | Henjodi Stores | Trekking Guidelines'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terms and conditions for Henjodi Stores trekking services in Karnataka Western Ghats. Read our booking policies, safety guidelines, and cancellation terms.')
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Terms and Conditions | Henjodi Stores Balagal')
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Terms and conditions for Henjodi Stores trekking services in Karnataka Western Ghats.')
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://henjodistores.netlify.app/terms')
    }
    
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', 'https://henjodistores.netlify.app/terms')
    }
    
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#fbfcfb] text-slate-800">
      
      {/* Header */}
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="mb-10">
          <span className="chip-tag mb-3">Guidelines &amp; Policies</span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-forest-950 mb-2">
            Terms, Conditions &amp; Booking Guidelines
          </h1>
          <p className="text-xs text-slate-500">Last updated: December 2025 • Henjodi Stores, Balagal, Kalasa</p>
        </div>

        <div className="stitch-card p-6 sm:p-10 bg-white space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          
          <section>
            <h2 className="font-heading text-xl font-bold text-forest-900 mb-3">
              1. Platform Purpose &amp; Direct Booking
            </h2>
            <p className="mb-3">
              Welcome to <strong className="text-forest-950">Henjodi Stores</strong>. This website serves as an informational and direct enquiry platform for trekking routes in Kudremukh National Park and surrounding Western Ghats ranges (Netravati Peak, Kurinjal, Ballalarayana Durga, and regional trails).
            </p>
            <p>
              <strong>Important:</strong> All trek bookings, slot confirmations, and payments are conducted directly through WhatsApp or phone communication with Prasad Henjodi (+91 80731 78851). We do not collect credit cards directly on this site.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-forest-900 mb-3">
              2. Forest Department Regulations &amp; Daily Caps
            </h2>
            <p className="mb-3">
              Kudremukh National Park and Netravati Peak are protected eco-zones governed by the Karnataka Forest Department.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Daily entry passes are strictly capped by forest officials. Advance reservation is required.</li>
              <li>Valid government-issued photo ID (Aadhaar, Passport, Driving License) is mandatory for every trekker at check-posts.</li>
              <li>Single-use plastic bottles, liquor, and plastic wrappers are strictly banned. Check-post rangers inspect bags before trail entry.</li>
              <li>Trekkers must strictly remain on marked trails and return before sunset as mandated by forest law.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-forest-900 mb-3">
              3. The Booking Process
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-slate-600">
              <li>Message us on WhatsApp at <strong>+91 80731 78851</strong> with preferred dates and group count.</li>
              <li>We check permit slot availability with forest authorities and discuss homestay/food options.</li>
              <li>You receive transparent pricing and schedule details for your specific group size.</li>
              <li>Advance confirmation secures your slots, jeep transfer, and guide allocation.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-forest-900 mb-3">
              4. Pricing &amp; Seasonal Disclaimers
            </h2>
            <p className="mb-3">
              Package rates are determined by group size, dates (monsoon vs peak winter weekends), and required services (forest permits, 4x4 jeep transfers from Balagal, home-cooked food, and homestay accommodation). Contact us directly for exact quotations.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-forest-900 mb-3">
              5. Participant Fitness &amp; Safety
            </h2>
            <p className="mb-3">
              Kudremukh is an 18–20 km trek requiring good physical endurance. Participants are responsible for evaluating their fitness. Please inform guides of any pre-existing medical conditions (asthma, heart conditions, severe allergies). Local guides reserve the right to alter or stop the ascent if weather or safety dictates.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-forest-900 mb-3">
              6. Cancellations &amp; Weather Contingencies
            </h2>
            <p>
              In the event of heavy monsoon landslides, sudden forest department trail closures, or government restrictions, alternative regional trails or rescheduled dates are offered. Cancellation terms are communicated directly during reservation.
            </p>
          </section>

          <section className="pt-6 border-t border-forest-100">
            <h2 className="font-heading text-lg font-bold text-forest-900 mb-2">
              7. Contact Information
            </h2>
            <p className="text-slate-600 text-sm">
              <strong>Henjodi Stores</strong> • Balagal, Bus Stop, SH 66, Kalasa, Chikmagalur, Karnataka 577124<br />
              WhatsApp &amp; Phone: <a href="tel:+918073178851" className="text-forest-800 font-bold hover:underline">+91 80731 78851</a><br />
              Email: <a href="mailto:Hjprasadjain@gmail.com" className="text-forest-800 font-bold hover:underline">Hjprasadjain@gmail.com</a>
            </p>
          </section>

        </div>

        {/* CTA Bar */}
        <div className="mt-10 flex flex-wrap gap-4 items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-forest-800/20 text-forest-800 hover:bg-forest-50 transition-colors"
          >
            ← Return to Homepage
          </Link>

          <a
            href="https://wa.me/918073178851?text=Hello%20Henjodi%20Stores!%20I%20have%20read%20the%20guidelines%20and%20would%20like%20to%20enquire%20about%20a%20trek."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-sm transition-all"
          >
            <span>Inquire on WhatsApp</span>
            <span>💬</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-forest-100 mt-16 py-8 text-center text-xs text-slate-500 bg-white">
        <p>© {new Date().getFullYear()} Henjodi Stores • Balagal, Kalasa, Chikmagalur, Karnataka</p>
      </footer>

    </div>
  )
}

export default Terms