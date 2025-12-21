import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Reviews from './pages/Reviews'
import TrekDetail from './pages/TrekDetail'
import Terms from './pages/Terms'
import LoadingScreen from './components/LoadingScreen'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/trek/:trekId" element={<TrekDetail />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <FloatingWhatsApp />
      </div>
    </>
  )
}

export default App
