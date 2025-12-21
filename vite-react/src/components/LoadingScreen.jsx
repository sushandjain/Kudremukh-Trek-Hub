import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    // Hide after animation completes
    const timer = setTimeout(() => {
      setVisible(false)
    }, 2200)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  y: '100vh', 
                  x: Math.random() * window.innerWidth,
                  opacity: 0 
                }}
                animate={{ 
                  y: -100, 
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'linear'
                }}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  filter: 'blur(1px)',
                }}
              />
            ))}

            {/* Mountain Silhouettes */}
            <svg className="absolute bottom-0 w-full h-64 opacity-20" viewBox="0 0 1200 300" preserveAspectRatio="none">
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                d="M0,300 L0,200 L150,80 L300,150 L450,60 L600,130 L750,40 L900,110 L1050,70 L1200,140 L1200,300 Z"
                fill="currentColor"
                className="text-emerald-950/50"
              />
            </svg>

            {/* Gradient Orbs */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-4">
            {/* Logo Container with Glass Effect */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.2 
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-blue-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <motion.div
                  animate={{ 
                    rotateY: [0, 360],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  <svg className="w-20 h-20 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.92 6-4.72 7.28L13 17v5l6-6-1.28-1.28c1.41-1.63 2.28-3.76 2.28-6.07 0-5.18-4.16-9.4-9.28-9.6zM11 4.07C7.05 4.56 4 7.92 4 12c0 3.21 1.92 6 4.72 7.28L11 17v5l-6-6 1.28-1.28C4.87 13.09 4 10.96 4 8.65c0-5.18 4.16-9.4 9.28-9.6v2.02c-3.95.49-7 3.85-7 7.93h4v-5z"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                Kudremukh Treks
              </h1>
              <p className="text-emerald-300 text-lg font-light tracking-wider">
                Journey Begins
              </p>
            </motion.div>

            {/* Modern Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="w-64 md:w-80"
            >
              <div className="relative h-2 bg-white/10 backdrop-blur-sm rounded-full overflow-hidden border border-white/20">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 rounded-full shadow-lg shadow-emerald-500/50"
                >
                  <motion.div
                    animate={{ 
                      x: [-20, 100],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 1, 
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  />
                </motion.div>
              </div>
              
              {/* Progress Percentage */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center mt-3 text-emerald-300 text-sm font-medium"
              >
                {progress}%
              </motion.div>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="w-2 h-2 bg-emerald-400 rounded-full"
                />
              ))}
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-emerald-400/30 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-emerald-400/30 rounded-br-3xl" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}