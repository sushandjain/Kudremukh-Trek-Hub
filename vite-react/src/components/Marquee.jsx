import { motion } from 'framer-motion'

export default function Marquee() {
  const items = [
    { text: 'KUDREMUKH', meta: '1,894M' },
    { text: 'BALAGAL BASE', meta: '810M' },
    { text: 'NETRAVATI PEAK', meta: '1,470M' },
    { text: 'NATIVE GUIDES', meta: 'EST. 2025' },
    { text: 'BALLALARAYANA DURGA', meta: '1,509M' },
    { text: 'MALENADU CAFE', meta: 'FRESH MEALS' },
    { text: 'KURINJAL PEAK', meta: '1,159M' },
    { text: 'FOREST PERMITS', meta: 'BALAGAL HUB' },
    { text: 'SHOLA FORESTS', meta: 'WESTERN GHATS' },
  ]

  return (
    <div className="relative w-full overflow-hidden py-4 bg-forest-950 text-white border-y border-forest-850 select-none">
      <div className="flex whitespace-nowrap">
        {/* Track 1 */}
        <motion.div
          animate={{ x: [0, -1600] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 32,
          }}
          className="flex items-center gap-10 sm:gap-14 pr-10 sm:pr-14 flex-shrink-0"
        >
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="font-editorial text-xl sm:text-2xl tracking-tight text-white/90">
                {item.text}
              </span>
              <span className="font-mono text-[11px] sm:text-xs text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                {item.meta}
              </span>
              <span className="text-forest-600 text-xs">✦</span>
            </div>
          ))}
        </motion.div>

        {/* Track 2 duplicate for seamless loop */}
        <motion.div
          animate={{ x: [0, -1600] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 32,
          }}
          className="flex items-center gap-10 sm:gap-14 pr-10 sm:pr-14 flex-shrink-0"
          aria-hidden="true"
        >
          {items.map((item, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-4">
              <span className="font-editorial text-xl sm:text-2xl tracking-tight text-white/90">
                {item.text}
              </span>
              <span className="font-mono text-[11px] sm:text-xs text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                {item.meta}
              </span>
              <span className="text-forest-600 text-xs">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
