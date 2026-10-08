import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How do I reach Henjodi Stores & the trek starting point?',
    answer: 'Henjodi Stores is located at the Balagal Bus Stop on State Highway 66 (Kalasa-Kudremukh Road), approximately 7 km from Kalasa town and 330 km from Bangalore (accessible via Hassan or Mangalore route). Balagal is the primary meeting hub where trekkers assemble for permit formalities and 4x4 jeep transfers to base camps like Mullodi.'
  },
  {
    question: 'What is included in a typical guided trek package?',
    answer: 'Depending on your package, services include Karnataka Forest Department permits, experienced native guides, 4x4 jeep transfer from Balagal to Mullodi base camp, home-cooked meals (dinner, breakfast, packed trail lunch), leech socks, and first aid support.'
  },
  {
    question: 'What is the best time for trekking in Kudremukh & Netravati?',
    answer: 'Post-monsoon and winter months (October to February) offer clear blue skies, comfortable temperatures, and vibrant rolling green grasslands. Monsoon months (June to September) offer misty waterfalls and intense greenery, but trails can be slippery and require leech socks and waterproof gear.'
  },
  {
    question: 'Are prior permits mandatory, and are daily visitor counts capped?',
    answer: 'Yes, the Karnataka Forest Department caps the daily number of trekkers permitted into Kudremukh National Park and Netravati Peak to protect wildlife and grasslands. It is essential to contact us in advance on WhatsApp to verify slot availability and reserve permits.'
  },
  {
    question: 'Is plastic allowed on the trails?',
    answer: 'Single-use plastic bottles and plastic wrappers are strictly prohibited inside Kudremukh National Park. Forest officials inspect bags at checkpoints. Please carry reusable metal or BPA-free water bottles and bring back all personal litter.'
  },
  {
    question: 'What essential gear should I bring with me?',
    answer: 'We recommend sturdy trekking shoes with good traction, comfortable quick-dry clothes, a rain poncho or waterproof jacket, 2-3 liters of water in reusable bottles, personal medications, and a 20-30L daypack. Leech protection socks are available directly at Henjodi Stores.'
  },
  {
    question: 'How do payments and booking confirmations work?',
    answer: 'All bookings are processed directly through WhatsApp or phone (+91 80731 78851). We discuss your dates, group size, and specific requirements (homestay, jeep, food), confirm permit availability, and provide direct booking instructions.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#f4f7f5] dark:bg-[#07100a] border-t border-forest-900/10 dark:border-white/10 transition-colors">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="section-eyebrow">
            Practical Questions
          </div>
          <h2 className="section-heading text-forest-950 dark:text-emerald-50">
            Frequently Asked Questions
          </h2>
          <p className="section-subheading text-slate-700 dark:text-slate-300">
            Accurate, real-world information regarding Western Ghats permits, trail guidelines, and logistics.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div 
                key={index}
                className="stitch-card overflow-hidden bg-white border border-forest-100/90"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-forest-50/50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-forest-950">
                    {faq.question}
                  </span>
                  <span 
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold transition-transform duration-200 ${
                      isOpen 
                        ? 'bg-forest-800 text-white rotate-180' 
                        : 'bg-forest-50 text-forest-800'
                    }`}
                  >
                    ▼
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-forest-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Help CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-slate-600 mb-3">
            Have a specific requirement or group query?
          </p>
          <a
            href="https://wa.me/918073178851?text=Hello%20Henjodi%20Stores%2C%20I%20have%20a%20question%20regarding%20my%20upcoming%20trek."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-forest-800 font-bold text-sm hover:underline"
          >
            <span>Ask Prasad on WhatsApp (+91 80731 78851)</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  )
}
