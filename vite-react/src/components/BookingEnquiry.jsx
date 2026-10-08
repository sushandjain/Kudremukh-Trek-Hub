import { useState } from 'react'

export default function BookingEnquiry() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    trek: 'Kudremukh Peak Trek',
    date: '',
    groupSize: '2',
    services: {
      permits: true,
      guide: true,
      homestay: false,
      food: false
    },
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: {
          ...prev.services,
          [name]: checked
        }
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim()) {
      setError('Please enter your name.')
      return
    }
    if (!formData.phone.trim()) {
      setError('Please provide your phone or WhatsApp number.')
      return
    }
    setError('')

    const serviceList = []
    if (formData.services.permits) serviceList.push('Forest Permits')
    if (formData.services.guide) serviceList.push('Guide')
    if (formData.services.homestay) serviceList.push('Homestay')
    if (formData.services.food) serviceList.push('Food/Cafe')

    const formattedMessage = 
      `Hello Henjodi Stores! I would like to enquire about a trek booking:%0A%0A` +
      `• *Name*: ${encodeURIComponent(formData.name)}%0A` +
      `• *Phone*: ${encodeURIComponent(formData.phone)}%0A` +
      `• *Trek*: ${encodeURIComponent(formData.trek)}%0A` +
      `• *Preferred Date*: ${encodeURIComponent(formData.date || 'To be decided')}%0A` +
      `• *Group Size*: ${encodeURIComponent(formData.groupSize)} people%0A` +
      `• *Services Required*: ${encodeURIComponent(serviceList.join(', ') || 'Standard')}%0A` +
      (formData.message ? `• *Notes*: ${encodeURIComponent(formData.message)}%0A` : '') +
      `%0APlease let me know slot availability and permit details.`

    setSubmitted(true)
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/918073178851?text=${formattedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="booking-enquiry" className="py-20 md:py-28 bg-[#f4f7f5] dark:bg-[#07100a] transition-colors">
      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="section-eyebrow">
              Direct Enquiry
            </div>
            <h2 className="section-heading text-forest-950 dark:text-emerald-50">
              Check Trek Availability &amp; Reserve
            </h2>
            <p className="section-subheading text-slate-700 dark:text-slate-300">
              Fill out your details to generate a formatted WhatsApp enquiry directly to Prasad Henjodi. We respond with permit rules, slots, and base camp directions.
            </p>
          </div>

          {/* Form Card */}
          <div className="stitch-card p-6 sm:p-10 bg-white dark:bg-[#0c1810] border border-forest-800/10 dark:border-white/10 shadow-lg">
            <form 
              name="trek-booking-enquiry"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="trek-booking-enquiry" />

              {error && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/50 text-red-700 dark:text-red-300 text-sm font-medium">
                  ⚠️ {error}
                </div>
              )}

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-300 text-sm font-medium">
                  ✓ Opening WhatsApp! If it didn't open automatically, <a href="https://wa.me/918073178851" target="_blank" rel="noopener noreferrer" className="underline font-bold">click here to chat</a>.
                </div>
              )}

              {/* Grid 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-forest-950 dark:text-emerald-200 mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Arun Kumar"
                    className="input-stitch"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-forest-950 dark:text-emerald-200 mb-2">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 9876543210"
                    className="input-stitch"
                  />
                </div>
              </div>

              {/* Grid 2: Trek Selection & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="trek" className="block text-xs font-bold uppercase tracking-wider text-forest-950 dark:text-emerald-200 mb-2">
                    Select Destination / Trek *
                  </label>
                  <select
                    id="trek"
                    name="trek"
                    value={formData.trek}
                    onChange={handleChange}
                    className="input-stitch bg-white dark:bg-[#0c1810]"
                  >
                    <option value="Kudremukh Peak Trek">Kudremukh Peak Trek (1,894m)</option>
                    <option value="Netravati Peak Trek">Netravati Peak Trek (1,470m)</option>
                    <option value="Kurinjal Peak Trek">Kurinjal Peak Trek (1,712m)</option>
                    <option value="Ballalarayana Durga & Bandaje Falls">Ballalarayana Durga &amp; Bandaje Falls</option>
                    <option value="Ettina Bhuja Trek">Ettina Bhuja Trek (Byrapura)</option>
                    <option value="Valikunja Trek">Valikunja Trek (Sringeri)</option>
                    <option value="Homestay & Food Only">Homestay &amp; Food in Balagal only</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-xs font-bold uppercase tracking-wider text-forest-950 dark:text-emerald-200 mb-2">
                    Preferred Trek Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="input-stitch"
                  />
                </div>
              </div>

              {/* Group Size */}
              <div>
                <label htmlFor="groupSize" className="block text-xs font-bold uppercase tracking-wider text-forest-950 dark:text-emerald-200 mb-2">
                  Number of Trekkers / Group Size
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {['1', '2', '3-5', '6-10', '11-15', '15+'].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, groupSize: size }))}
                      className={`py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                        formData.groupSize === size
                          ? 'bg-forest-900 dark:bg-emerald-600 text-white border-forest-900 dark:border-emerald-600'
                          : 'bg-white dark:bg-white/5 text-slate-800 dark:text-slate-200 border-forest-200 dark:border-white/15 hover:border-forest-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Services Checkboxes */}
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-forest-950 dark:text-emerald-200 mb-2">
                  Services Needed
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { key: 'permits', label: 'Forest Permits' },
                    { key: 'guide', label: 'Local Guide' },
                    { key: 'homestay', label: 'Homestay' },
                    { key: 'food', label: 'Malenadu Meals' },
                  ].map((srv) => (
                    <label key={srv.key} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200 cursor-pointer">
                      <input
                        type="checkbox"
                        name={srv.key}
                        checked={formData.services[srv.key]}
                        onChange={handleChange}
                        className="rounded border-forest-300 dark:border-white/20 text-forest-700 dark:text-emerald-500 focus:ring-forest-600"
                      />
                      <span>{srv.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-forest-950 dark:text-emerald-200 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Need jeep pickup from Balagal, early start, dietary needs, etc."
                  className="input-stitch"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-base bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Submit &amp; Open WhatsApp Chat (+91 8073178851)</span>
                </button>
                <p className="text-center text-xs text-slate-500 mt-3">
                  Direct reply from Henjodi Stores • No credit card or prepayment required to enquire
                </p>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  )
}
