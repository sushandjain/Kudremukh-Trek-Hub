import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Terms() {
  useEffect(() => {
    // Set SEO meta tags for terms page
    document.title = 'Terms and Conditions | Henjodi Adventures | Trekking Guidelines'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terms and conditions for Henjodi Adventures trekking services in Karnataka Western Ghats. Read our booking policies, safety guidelines, and cancellation terms.')
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Terms and Conditions | Henjodi Adventures')
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Terms and conditions for Henjodi Adventures trekking services in Karnataka Western Ghats.')
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold text-gray-900">
            Henjodi Adventures
          </Link>
          <Link 
            to="/"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: December 2025</p>

        <div className="prose prose-gray max-w-none">
          
          {/* Introduction */}
          <p className="text-gray-600 mb-8">
            Welcome to Henjodi Adventures. By accessing this website, you agree to be bound by these 
            Terms and Conditions. Please read them carefully before using our services.
          </p>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Website Purpose</h2>
            <p className="text-gray-600 mb-3">
              This website is an <strong>informational platform</strong> designed to help visitors explore 
              and learn about trekking destinations in the Western Ghats of Karnataka. We provide details 
              about various treks, including routes, difficulty levels, and general guidelines.
            </p>
            <p className="text-gray-600">
              <strong>Important:</strong> This website does not process any bookings or payments directly. 
              All trek bookings are conducted exclusively through WhatsApp or phone communication.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Pricing Disclaimer</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>All prices displayed on this website are <strong>indicative only</strong> and subject to change without prior notice.</li>
              <li>Final pricing depends on factors including season, group size, availability, and specific requirements.</li>
              <li>GST and other applicable taxes may be charged as per government regulations.</li>
              <li>For accurate and current pricing, please contact us directly via WhatsApp or phone.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Booking Process</h2>
            <p className="text-gray-600 mb-3">To book a trek with us:</p>
            <ol className="list-decimal pl-6 text-gray-600 space-y-2">
              <li>Contact us via WhatsApp at <strong>+91 80731 78851</strong></li>
              <li>Discuss your requirements, preferred dates, and group size</li>
              <li>Receive confirmed pricing and availability</li>
              <li>Complete payment as per the agreed terms</li>
              <li>Receive booking confirmation via WhatsApp</li>
            </ol>
            <p className="text-gray-600 mt-3">
              Booking is confirmed only after direct communication and receipt of advance payment.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Information Accuracy</h2>
            <p className="text-gray-600 mb-3">
              While we strive to provide accurate information, please note:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Trek details (distance, duration, difficulty, altitude) are approximate and may vary.</li>
              <li>Actual conditions depend on weather, season, and trail status.</li>
              <li>Images are for representation purposes; actual views may differ.</li>
              <li>Itineraries may change due to weather, safety concerns, or forest department guidelines.</li>
            </ul>
            <p className="text-gray-600 mt-3">
              We recommend confirming all details with us before making travel arrangements.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Participant Responsibilities</h2>
            <p className="text-gray-600 mb-3">By booking a trek, participants acknowledge that:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Trekking involves physical exertion and inherent risks.</li>
              <li>They are responsible for assessing their own physical fitness.</li>
              <li>Any medical conditions must be disclosed at the time of booking.</li>
              <li>Valid government ID proof is required for forest permits.</li>
              <li>Personal travel/accident insurance is recommended.</li>
              <li>Following guide instructions and safety guidelines is mandatory.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Cancellation and Refunds</h2>
            <p className="text-gray-600">
              Cancellation and refund policies are communicated at the time of booking and may vary 
              based on the trek, season, and booking conditions. Please contact us directly to 
              understand the applicable terms for your booking.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>This website serves as an information portal and booking referral service only.</li>
              <li>We are not liable for decisions made based solely on website information.</li>
              <li>Any injuries, losses, or damages during treks are the participant's responsibility.</li>
              <li>We are not responsible for third-party services including transportation and accommodation.</li>
              <li>Disputes shall be subject to the jurisdiction of Chikmagalur district courts.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be 
              effective immediately upon posting to this website. We encourage you to review this page 
              periodically.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms and Conditions, or to make a booking, please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <p className="text-gray-700 mb-2"><strong>Henjodi Adventures</strong></p>
              <p className="text-gray-600 text-sm mb-1">WhatsApp / Phone: <a href="tel:+918073178851" className="text-blue-600 hover:underline">+91 80731 78851</a></p>
              <p className="text-gray-600 text-sm mb-1">Email: <a href="mailto:Hjprasadjain@gmail.com" className="text-blue-600 hover:underline">Hjprasadjain@gmail.com</a></p>
              <p className="text-gray-600 text-sm">Location: Balagal, Bus Stop, SH 66, Kalasa, Karnataka 577124</p>
            </div>
          </section>

        </div>

        {/* Agreement */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-6">
            By using this website and our services, you acknowledge that you have read, understood, 
            and agree to be bound by these Terms and Conditions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.me/918073178851"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Contact on WhatsApp
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Henjodi Adventures. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Terms