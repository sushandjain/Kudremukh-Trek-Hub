import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [cursorText, setCursorText] = useState('')

  useEffect(() => {
    // Only enable on desktop with fine pointer and no reduced motion
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!hasFinePointer || prefersReducedMotion) return

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      // Check if hovering over interactive element
      const target = e.target
      const interactiveEl = target.closest('a, button, [role="button"], input, select, textarea, .cursor-hover')
      if (interactiveEl) {
        setIsPointer(true)
        const customLabel = interactiveEl.getAttribute('data-cursor')
        setCursorText(customLabel || '')
      } else {
        setIsPointer(false)
        setCursorText('')
      }
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer subtle ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-forest-800/40 dark:border-emerald-300/40 flex items-center justify-center backdrop-blur-[1px]"
        animate={{
          x: position.x - (isPointer ? 28 : 14),
          y: position.y - (isPointer ? 28 : 14),
          width: isPointer ? 56 : 28,
          height: isPointer ? 56 : 28,
          backgroundColor: isPointer ? 'rgba(26, 71, 42, 0.12)' : 'rgba(26, 71, 42, 0.03)',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 300,
          mass: 0.5,
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-forest-900 dark:text-emerald-200">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-forest-800 dark:bg-emerald-400"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          opacity: isPointer ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 450,
        }}
      />
    </div>
  )
}
