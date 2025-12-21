import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Reviews from './pages/Reviews'
import TrekDetail from './pages/TrekDetail'
import Terms from './pages/Terms'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/trek/:trekId" element={<TrekDetail />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <FloatingWhatsApp />
    </>
  )
}

export default App
