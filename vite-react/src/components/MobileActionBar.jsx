import { Phone, Compass, Send } from 'lucide-react'

export default function MobileActionBar({ onOpenBooking }) {
  return (
    <nav 
      aria-label="Mobile quick actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#f8faf7]/95 dark:bg-[#070d08]/95 backdrop-blur-md border-t border-forest-800/10 dark:border-white/10 p-2.5 px-4 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] flex items-center justify-between gap-2.5"
    >
      {/* Call Button */}
      <a
        href="tel:+918073178851"
        aria-label="Call Henjodi Stores"
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl bg-white dark:bg-white/10 border border-forest-800/15 dark:border-white/15 text-forest-900 dark:text-emerald-200 text-xs font-bold transition-all active:scale-95"
      >
        <Phone className="w-4 h-4 text-forest-700 dark:text-emerald-300" />
        <span>Call</span>
      </a>

      {/* Directions */}
      <a
        href="https://maps.google.com/?q=13.184369,75.319509"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Directions to Balagal"
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl bg-white dark:bg-white/10 border border-forest-800/15 dark:border-white/15 text-forest-900 dark:text-emerald-200 text-xs font-bold transition-all active:scale-95"
      >
        <Compass className="w-4 h-4 text-forest-700 dark:text-emerald-300" />
        <span>Map</span>
      </a>

      {/* WhatsApp Action Button */}
      <button
        onClick={onOpenBooking}
        className="flex-[1.8] inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-2xl bg-[#25D366] text-white font-bold text-xs shadow-md transition-all active:scale-95"
      >
        <Send className="w-4 h-4" />
        <span>Plan Trek</span>
      </button>
    </nav>
  )
}
