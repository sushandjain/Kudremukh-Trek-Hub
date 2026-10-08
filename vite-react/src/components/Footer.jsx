import { Link } from 'react-router-dom'
import { Mountain, MapPin, Phone, Mail, Compass, ExternalLink } from 'lucide-react'

const socialLinks = [
  { 
    name: 'Facebook', 
    href: 'https://www.facebook.com/p/Henjodi-Kudremukha-Adventures-100069389264709/',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  { 
    name: 'Instagram', 
    href: 'https://www.instagram.com/kudremukha_tourism_trek_stay/',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    )
  },
  { 
    name: 'Google Maps', 
    href: 'https://www.google.com/maps/place/PRASAD+HENJODI+Malnad+store',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    )
  }
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050e07] text-slate-400 border-t border-forest-900 pb-24 lg:pb-14 pt-16 sm:pt-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 mb-16">
          
          {/* Brand & Editorial Heritage */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img 
                src="/image/logo.png" 
                alt="Henjodi Stores" 
                width="44" 
                height="44" 
                className="w-11 h-11 object-contain rounded-full bg-white/10 p-1" 
              />
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-tight block">
                  Henjodi Stores
                </span>
                <span className="font-mono text-[10px] text-dawn-amber uppercase tracking-widest block">
                  13.1843° N, 75.3195° E • Balagal
                </span>
              </div>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">
              Established local trekking base and family store at Balagal Bus Stop, Kalasa. Native mountain guides, forest department permit coordination, peaceful homestay, and hot Malenadu cuisine.
            </p>

            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-forest-700 text-white flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Peaks Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
              Peaks &amp; Trails
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/trek/kudremukh" className="hover:text-white transition-colors">
                  Kudremukh (1,894m)
                </Link>
              </li>
              <li>
                <Link to="/trek/netravati" className="hover:text-white transition-colors">
                  Netravati Peak (1,470m)
                </Link>
              </li>
              <li>
                <Link to="/trek/kurinjal" className="hover:text-white transition-colors">
                  Kurinjal Peak (1,712m)
                </Link>
              </li>
              <li>
                <Link to="/trek/bandaje" className="hover:text-white transition-colors">
                  Ballalarayana Durga
                </Link>
              </li>
              <li>
                <Link to="/trek/bavikonda" className="hover:text-white transition-colors">
                  Ettina Bhuja (1,236m)
                </Link>
              </li>
            </ul>
          </div>

          {/* Base Services & Guidelines */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
              Operations
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#stay-food" className="hover:text-white transition-colors">
                  Balagal Homestay
                </a>
              </li>
              <li>
                <a href="#stay-food" className="hover:text-white transition-colors">
                  Malenadu Cafe
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Forest Permits Desk
                </a>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Permit &amp; Eco Rules
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition-colors">
                  Google Map Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Physical Address */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
              Base Contact
            </h4>
            <address className="not-italic space-y-2.5 text-sm text-slate-400">
              <p className="leading-relaxed">
                <strong className="text-white block font-serif">PRASAD HENJODI Malnad Store</strong>
                Balagal Bus Stop, State Highway 66,<br />
                Kalasa, Chikmagalur, Karnataka 577124
              </p>
              <p className="pt-1">
                <a href="tel:+918073178851" className="text-emerald-300 font-bold hover:underline block font-mono">
                  +91 80731 78851
                </a>
                <a href="mailto:Hjprasadjain@gmail.com" className="text-slate-400 hover:text-white text-xs block mt-0.5">
                  Hjprasadjain@gmail.com
                </a>
              </p>
              <p className="text-xs text-slate-500 font-mono">
                Daily: 06:00 AM – 09:00 PM
              </p>
            </address>
          </div>

        </div>

        {/* Photography & Provenance Statement */}
        <div className="border-t border-forest-900/80 pt-8 pb-6 text-xs text-slate-500 leading-relaxed">
          <p className="max-w-3xl">
            <strong className="text-slate-400 font-semibold block mb-0.5">Visual Asset Policy &amp; Authenticity Note:</strong>
            All photographs featured across this website are genuine photographs of the Karnataka Western Ghats and Kudremukh range from our local archive. No AI-generated or simulated landscapes are used.
          </p>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-forest-900/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>
            © {new Date().getFullYear()} Henjodi Stores • Balagal, Kalasa, Chikmagalur. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:text-slate-400">Terms &amp; Policies</Link>
            <span>•</span>
            <Link to="/reviews" className="hover:text-slate-400">Guest Feedback</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
