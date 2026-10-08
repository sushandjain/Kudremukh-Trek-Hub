import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, PhoneCall, Calendar, Users, MapPin, CheckCircle } from 'lucide-react'

export default function BookingModal({ isOpen, onClose, preselectedTrek = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    trek: preselectedTrek || 'Kudremukh Peak Trek',
    date: '',
    groupSize: '2-4 Trekkers',
    needStay: false,
    needFood: true,
    needJeep: true,
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (preselectedTrek) {
      setFormData(prev => ({ ...prev, trek: preselectedTrek }))
    }
  }, [preselectedTrek])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const buildWhatsAppUrl = () => {
    const services = [
      formData.needStay ? 'Homestay' : null,
      formData.needFood ? 'Malenadu Meals' : null,
      formData.needJeep ? 'Jeep Transfer' : null,
    ].filter(Boolean).join(', ')

    const text = `🌿 *HENJODI STORES — TREK ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
• *Trek:* ${formData.trek}
• *Tentative Date:* ${formData.date || 'To be decided'}
• *Group Size:* ${formData.groupSize}
• *Services Needed:* ${services || 'Trek & Guide only'}
${formData.name ? `• *Lead Name:* ${formData.name}` : ''}
${formData.notes ? `• *Special Notes:* ${formData.notes}` : ''}
━━━━━━━━━━━━━━━━━━━━
Hi Prasad! Can you confirm forest permit availability and logistics from Balagal?`

    return `https://wa.me/918073178851?text=${encodeURIComponent(text)}`
  }

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    window.open(buildWhatsAppUrl(), '_blank')
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer Sheet */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-full max-w-xl h-full bg-[#f8faf7] dark:bg-[#0b170f] text-slate-900 dark:text-slate-100 shadow-2xl flex flex-col z-10 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 px-6 py-5 bg-[#f8faf7]/90 dark:bg-[#0b170f]/90 backdrop-blur-md border-b border-forest-800/10 dark:border-white/10 flex items-center justify-between">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-dawn-amber font-bold">
                  Balagal Direct Operations
                </span>
                <h3 className="font-serif text-2xl font-bold text-forest-950 dark:text-emerald-100">
                  Plan Your Trek
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close booking modal"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-forest-100 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleWhatsAppSubmit} className="p-6 sm:p-8 space-y-6 flex-1">
              {/* Trek Selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Select Trek Destination
                </label>
                <select
                  name="trek"
                  value={formData.trek}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-white/5 border border-forest-800/15 dark:border-white/15 text-sm font-semibold focus:ring-2 focus:ring-forest-700 outline-none"
                >
                  <option value="Kudremukh Peak Trek">Kudremukh Peak Trek (1,894m)</option>
                  <option value="Netravati Peak Trek">Netravati Peak Trek (1,470m)</option>
                  <option value="Kurinjal Peak Trek">Kurinjal Peak Trek (1,159m)</option>
                  <option value="Ballalarayana Durga & Bandaje Falls">Ballalarayana Durga & Bandaje Falls (1,509m)</option>
                  <option value="Ettina Bhuja Trek">Ettina Bhuja Trek (1,300m)</option>
                  <option value="Valikunja Peak Trek">Valikunja Peak Trek (1,070m)</option>
                </select>
              </div>

              {/* Date & Group Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Tentative Trek Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-white/5 border border-forest-800/15 dark:border-white/15 text-sm focus:ring-2 focus:ring-forest-700 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Group Size
                  </label>
                  <select
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-white/5 border border-forest-800/15 dark:border-white/15 text-sm focus:ring-2 focus:ring-forest-700 outline-none"
                  >
                    <option value="Solo Trekker (1)">Solo Trekker (1)</option>
                    <option value="2-4 Trekkers">2–4 Trekkers (Couple / Friends)</option>
                    <option value="5-8 Trekkers">5–8 Trekkers (Small Group)</option>
                    <option value="9+ Trekkers">9+ Trekkers (Large Group / Corporate)</option>
                  </select>
                </div>
              </div>

              {/* Extra Services Checkboxes */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300 mb-3">
                  Additional Base Services
                </label>
                <div className="space-y-2.5">
                  <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-forest-800/10 dark:border-white/10 cursor-pointer hover:border-forest-800/30 transition-colors">
                    <input
                      type="checkbox"
                      name="needStay"
                      checked={formData.needStay}
                      onChange={handleChange}
                      className="w-4 h-4 rounded text-forest-800 focus:ring-forest-800"
                    />
                    <div className="text-xs sm:text-sm">
                      <span className="font-bold text-forest-950 dark:text-emerald-100">Balagal Homestay Overnight</span>
                      <span className="block text-slate-500 text-xs">Clean rooms right at Kudremukh base with hot water</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-forest-800/10 dark:border-white/10 cursor-pointer hover:border-forest-800/30 transition-colors">
                    <input
                      type="checkbox"
                      name="needFood"
                      checked={formData.needFood}
                      onChange={handleChange}
                      className="w-4 h-4 rounded text-forest-800 focus:ring-forest-800"
                    />
                    <div className="text-xs sm:text-sm">
                      <span className="font-bold text-forest-950 dark:text-emerald-100">Homemade Malenadu Meals</span>
                      <span className="block text-slate-500 text-xs">Breakfast, packed summit lunch, evening coffee</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-forest-800/10 dark:border-white/10 cursor-pointer hover:border-forest-800/30 transition-colors">
                    <input
                      type="checkbox"
                      name="needJeep"
                      checked={formData.needJeep}
                      onChange={handleChange}
                      className="w-4 h-4 rounded text-forest-800 focus:ring-forest-800"
                    />
                    <div className="text-xs sm:text-sm">
                      <span className="font-bold text-forest-950 dark:text-emerald-100">4x4 Jeep Transfer</span>
                      <span className="block text-slate-500 text-xs">Balagal store to Mullodi / trailhead transfers</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Name & Special Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-white/5 border border-forest-800/15 dark:border-white/15 text-sm focus:ring-2 focus:ring-forest-700 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Contact / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-white/5 border border-forest-800/15 dark:border-white/15 text-sm focus:ring-2 focus:ring-forest-700 outline-none"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  className="btn-whatsapp w-full py-4 text-base shadow-lg flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>

                <a
                  href="tel:+918073178851"
                  className="w-full py-3.5 rounded-full border border-forest-800/20 dark:border-white/20 text-forest-900 dark:text-emerald-200 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-forest-100/50 dark:hover:bg-white/5 transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Prasad Henjodi Directly (+91 8073178851)</span>
                </a>
              </div>

              {/* Trust Guarantee Note */}
              <div className="text-center pt-2">
                <p className="text-[11px] text-slate-500 font-mono">
                  • Real local support • Forest department permit verification • Safe mountain guiding
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
