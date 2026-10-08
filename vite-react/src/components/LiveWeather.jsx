import { useState, useEffect } from 'react'

const getWeatherDescription = (code) => {
  if (code === 0) return { label: 'Clear Skies', icon: '☀️' }
  if (code === 1 || code === 2) return { label: 'Passing Clouds', icon: '⛅' }
  if (code === 3) return { label: 'Misty Overcast', icon: '☁️' }
  if (code >= 45 && code <= 48) return { label: 'Mountain Mist', icon: '🌫️' }
  if (code >= 51 && code <= 55) return { label: 'Light Drizzle', icon: '🌦️' }
  if (code >= 61 && code <= 65) return { label: 'Monsoon Rain', icon: '🌧️' }
  if (code >= 80 && code <= 82) return { label: 'Passing Showers', icon: '🌦️' }
  return { label: 'Ghats Weather', icon: '🌤️' }
}

export default function LiveWeather() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    const fetchWeather = async () => {
      try {
        // Balagal coordinates: 13.184369, 75.319509
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=13.184369&longitude=75.319509&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Asia%2FKolkata',
          { cache: 'force-cache' }
        )
        if (!res.ok) throw new Error('Weather fetch failed')
        const data = await res.json()
        if (isMounted && data.current) {
          const condition = getWeatherDescription(data.current.weather_code)
          setWeather({
            temp: Math.round(data.current.temperature_2m),
            humidity: data.current.relative_humidity_2m,
            wind: Math.round(data.current.wind_speed_10m),
            condition: condition.label,
            icon: condition.icon,
            elevation: Math.round(data.elevation || 798),
          })
        }
      } catch (err) {
        // Silently fail to avoid cluttering UI if offline
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchWeather()
    return () => {
      isMounted = false
    }
  }, [])

  const [isOpen, setIsOpen] = useState(false)

  if (loading || !weather) return null

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle live mountain weather telemetry"
        className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-mono tracking-wide shadow-sm transition-all cursor-pointer group"
      >
        <span className="text-sm group-hover:scale-110 transition-transform">{weather.icon}</span>
        <span className="font-bold text-emerald-300">{weather.temp}°C</span>
        <span className="text-white/40">•</span>
        <span className="text-white/90">{weather.condition}</span>
        <span className="hidden sm:inline text-white/40">•</span>
        <span className="hidden sm:inline text-white/70">Balagal {weather.elevation}m</span>
        <span className="text-[10px] text-amber-300/80 ml-0.5">ℹ</span>
      </button>

      {/* Expandable Mountain Weather Telemetry Popover */}
      {isOpen && (
        <div 
          className="absolute top-10 left-0 sm:left-auto sm:right-0 z-50 w-72 p-4 rounded-2xl bg-[#0c1810]/95 backdrop-blur-xl border border-white/20 text-white shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
            <span className="font-mono text-[11px] uppercase tracking-wider text-amber-300 font-bold">
              Balagal Live Telemetry
            </span>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white/60 hover:text-white text-xs px-1.5 py-0.5 rounded-full bg-white/10"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-3">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-white/50 block">Temperature</span>
              <span className="font-bold text-emerald-300 text-sm">{weather.temp}°C</span>
            </div>
            <div className="p-2 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-white/50 block">Air Humidity</span>
              <span className="font-bold text-emerald-300 text-sm">{weather.humidity}%</span>
            </div>
            <div className="p-2 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-white/50 block">Wind Speed</span>
              <span className="font-bold text-emerald-300 text-sm">{weather.wind} km/h</span>
            </div>
            <div className="p-2 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-white/50 block">Base Elevation</span>
              <span className="font-bold text-emerald-300 text-sm">{weather.elevation} m ASL</span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-white/60 pt-1 border-t border-white/10 flex items-center justify-between">
            <span>13.184369° N, 75.319509° E</span>
            <span className="text-emerald-400 font-semibold">Live Satellite</span>
          </div>
        </div>
      )}
    </div>
  )
}
