import { motion } from 'framer-motion'
import { MapPin, Navigation, Phone, Mail, Clock, Compass, ArrowUpRight } from 'lucide-react'

export default function LocationContact() {
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=13.184369,75.319509"
  const callUrl = "tel:+918073178851"
  const whatsappUrl = "https://wa.me/918073178851?text=Hello%20Henjodi%20Stores!%20I%20am%20driving%20to%20Balagal.%20Can%20you%20confirm%20the%20exact%20landmark%20at%20the%20bus%20stop%3F"

  return (
    <section id="location" className="py-24 sm:py-32 relative bg-[#f8faf7] dark:bg-[#060d08] transition-colors">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Chapter Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="chapter-number mb-3">
            <span>05 / BASE LOCATION</span>
            <span className="w-12 h-px bg-dawn-amber inline-block" />
            <span>BALAGAL HUB</span>
          </div>
          <h2 className="text-editorial-title text-forest-950 dark:text-emerald-50 mb-4">
            Where to Find Us in Balagal.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Located right at the Balagal Bus Stop on State Highway 66 (Kalasa–Kudremukh Road). We are the primary arrival landmark for all Kudremukh trekkers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 editorial-card p-6 sm:p-9 flex flex-col justify-between bg-white dark:bg-[#0d1810]"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 dark:bg-white/10 text-forest-800 dark:text-emerald-300 text-xs font-mono font-bold mb-6">
                <MapPin className="w-3.5 h-3.5 text-dawn-amber" />
                <span>13.1843° N, 75.3195° E</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 dark:text-emerald-100 mb-1">
                Henjodi Stores
              </h3>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-8">
                PRASAD HENJODI Malnad Store • Balagal Base Camp
              </p>

              <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-50 dark:bg-white/5 border border-forest-800/10 dark:border-white/10 flex items-center justify-center flex-shrink-0 text-forest-800 dark:text-emerald-300">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-forest-950 dark:text-emerald-100 font-serif text-base mb-0.5">Physical Landmark</strong>
                    <span className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                      Balagal Bus Stop, State Highway 66,<br />
                      Kalasa Taluk, Chikmagalur District,<br />
                      Karnataka — 577124
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-50 dark:bg-white/5 border border-forest-800/10 dark:border-white/10 flex items-center justify-center flex-shrink-0 text-forest-800 dark:text-emerald-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-forest-950 dark:text-emerald-100 font-serif text-base mb-0.5">Operating Hours</strong>
                    <span className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                      06:00 AM – 09:00 PM (Everyday)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-50 dark:bg-white/5 border border-forest-800/10 dark:border-white/10 flex items-center justify-center flex-shrink-0 text-forest-800 dark:text-emerald-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-forest-950 dark:text-emerald-100 font-serif text-base mb-0.5">Phone &amp; WhatsApp</strong>
                    <a href={callUrl} className="text-forest-800 dark:text-emerald-300 font-bold hover:underline block text-xs sm:text-sm">
                      +91 80731 78851
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-50 dark:bg-white/5 border border-forest-800/10 dark:border-white/10 flex items-center justify-center flex-shrink-0 text-forest-800 dark:text-emerald-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-forest-950 dark:text-emerald-100 font-serif text-base mb-0.5">Official Email</strong>
                    <a href="mailto:Hjprasadjain@gmail.com" className="text-slate-600 dark:text-slate-300 hover:underline block text-xs sm:text-sm">
                      Hjprasadjain@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-8 mt-8 border-t border-forest-800/10 dark:border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-forest-800 text-white font-bold text-xs uppercase tracking-wider hover:bg-forest-900 transition-colors shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Navigate on Google Maps</span>
              </a>

              <a
                href={callUrl}
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full border border-forest-800/20 dark:border-white/20 text-forest-950 dark:text-emerald-200 font-bold text-xs uppercase tracking-wider hover:bg-forest-100/60 dark:hover:bg-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Google Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 editorial-card overflow-hidden h-[450px] sm:h-[520px] bg-white dark:bg-[#0d1810] relative"
          >
            <iframe
              title="Henjodi Stores Balagal Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.721455252824!2d75.31693407517616!3d13.18436898715102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb555eb3d142ab%3A0xe542617fe89ba3e7!2sPRASAD%20HENJODI%20Malnad%20Store!5e0!3m2!1sen!2sin!4v1741517000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-90"
            />
            
            {/* Real coordinates banner over map */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto inline-flex items-center gap-2 p-2.5 px-4 rounded-xl bg-black/75 backdrop-blur-md text-white border border-white/20 text-xs font-mono shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>PRASAD HENJODI Malnad Store • Balagal Bus Stop</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
