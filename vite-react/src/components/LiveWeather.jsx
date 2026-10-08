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

  if (loading || !weather) return null

  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-mono tracking-wide shadow-sm">
      <span className="text-sm">{weather.icon}</span>
      <span className="font-bold text-emerald-200">{weather.temp}°C</span>
      <span className="text-white/40">•</span>
      <span className="text-white/90">{weather.condition}</span>
      <span className="hidden sm:inline text-white/40">•</span>
      <span className="hidden sm:inline text-white/70">Balagal Base {weather.elevation}m</span>
    </div>
  )
}
