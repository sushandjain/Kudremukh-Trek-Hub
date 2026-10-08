import { motion } from 'framer-motion'

export default function LocationContact() {
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=13.184369,75.319509"
  const callUrl = "tel:+918073178851"
  const whatsappUrl = "https://wa.me/918073178851?text=Hello%20Henjodi%20Stores!%20I%20am%20on%20my%20way%20or%20planning%20to%20visit%20Balagal.%20Can%20you%20share%20directions%3F"

  return (
    <section id="location" className="py-20 md:py-28 bg-[#fbfcfb] border-t border-forest-100">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="section-eyebrow">
            Find Us in Balagal
          </div>
          <h2 className="section-heading">
            Store Location &amp; Base Camp Hub
          </h2>
          <p className="section-subheading">
            Located right at the Balagal Bus Stop on SH 66 (Kalasa-Kudremukh Road). We are the primary landmark for jeep pickups and base camp check-ins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 stitch-card p-6 sm:p-8 flex flex-col justify-between h-full bg-white"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 text-forest-800 text-xs font-bold mb-5 border border-forest-100">
                <span>📍 Official Base Office</span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-forest-900 mb-2">
                Henjodi Stores
              </h3>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-6">
                PRASAD HENJODI Malnad Store • Balagal
              </p>

              <div className="space-y-5 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-lg p-2 bg-forest-50 rounded-xl text-forest-800 flex-shrink-0">
                    🏢
                  </span>
                  <div>
                    <strong className="block text-forest-950 font-semibold">Address</strong>
                    <span className="text-slate-600 leading-relaxed">
                      Balagal, Bus Stop, State Highway 66,<br />
                      Kalasa, Chikmagalur District,<br />
                      Karnataka — 577124
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-lg p-2 bg-forest-50 rounded-xl text-forest-800 flex-shrink-0">
                    ⏱️
                  </span>
                  <div>
                    <strong className="block text-forest-950 font-semibold">Store &amp; Support Hours</strong>
                    <span className="text-slate-600">
                      06:00 AM – 09:00 PM (Monday to Sunday)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-lg p-2 bg-forest-50 rounded-xl text-forest-800 flex-shrink-0">
                    📞
                  </span>
                  <div>
                    <strong className="block text-forest-950 font-semibold">Phone &amp; WhatsApp</strong>
                    <span className="text-slate-600">
                      +91 80731 78851
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-lg p-2 bg-forest-50 rounded-xl text-forest-800 flex-shrink-0">
                    ✉️
                  </span>
                  <div>
                    <strong className="block text-forest-950 font-semibold">Email</strong>
                    <span className="text-slate-600">
                      Hjprasadjain@gmail.com
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-lg p-2 bg-forest-50 rounded-xl text-forest-800 flex-shrink-0">
                    🌐
                  </span>
                  <div>
                    <strong className="block text-forest-950 font-semibold">GPS Coordinates</strong>
                    <span className="text-slate-600 font-mono text-xs">
                      13.184369° N, 75.319509° E
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 pt-6 border-t border-forest-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold bg-[#1a472a] text-white hover:bg-[#153a23] transition-all shadow-sm"
              >
                <span>Get Directions</span>
                <span>🗺️</span>
              </a>

              <a
                href={callUrl}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold border border-forest-800/30 text-forest-900 hover:bg-forest-50 transition-all"
              >
                <span>Click to Call</span>
                <span>📞</span>
              </a>
            </div>

          </motion.div>

          {/* Interactive Google Map Embed Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 stitch-card overflow-hidden bg-white flex flex-col"
          >
            <div className="p-4 sm:p-5 bg-forest-50/70 border-b border-forest-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-forest-800">
                  Interactive Map
                </span>
                <p className="text-xs text-slate-500">
                  PRASAD HENJODI Malnad store • Balagal, SH 66
                </p>
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-forest-800 hover:underline flex items-center gap-1"
              >
                Open Full Map →
              </a>
            </div>

            <div className="aspect-[16/10] sm:aspect-[16/11] w-full bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4178.023447521095!2d75.31693467539486!3d13.184369687150895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb4b813d32f619%3A0xcd6487cfe9f94211!2sPRASAD%20HENJODI%20Malnad%20store%20(Netravati%20%26%20Kudremukha%20peak%20%26%20Homestay%20pre-booking%20office%20)!5e1!3m2!1sen!2sin!4v1766301723308!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Henjodi Stores Balagal Google Maps Location"
              />
            </div>

            <div className="p-4 sm:p-5 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span>🚗</span>
                <span>Distance from Kalasa town: <strong>~7 km</strong> on SH 66</span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-800 font-bold hover:underline"
              >
                Need Jeep transfer from Balagal? Ask on WhatsApp
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
