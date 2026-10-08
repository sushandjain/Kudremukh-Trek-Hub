import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle, AlertTriangle, ShieldCheck, Camera } from 'lucide-react'

const comparisons = [
  {
    title: '1. Hero Background Image',
    section: 'Landing Hero Header',
    before: {
      src: '/image/kmview.webp',
      label: 'BEFORE: Low-Res 700px Crop',
      specs: '700 × 400 px • 22.4 KB',
      status: 'Pixelated on desktop screens; washed out dynamic range',
    },
    after: {
      src: '/image/kmview22.webp',
      label: 'AFTER: Full-Bleed Authentic Shola Panorama',
      specs: '1620 × 1080 px • 313 KB (Mobile: 810 × 1080 px)',
      status: 'Authentic Kudremukh meadows at dawn; crisp detail across retina displays',
    },
    decision: 'Recommended Replacement',
    reason: 'Massive aesthetic improvement while remaining 100% genuine Kudremukh landscape from local archive.',
  },
  {
    title: '2. Netravati Peak Feature Card',
    section: 'Trek Showcase: Netravati',
    before: {
      src: '/image/Nethravathi-Peak_Plan-The-Unplanned_2.jpg',
      label: 'BEFORE: Competitor-Branded Low-Res Photo',
      specs: '600 × 327 px • 121.9 KB',
      status: 'Contains competitor name in filename; small dimensions',
    },
    after: {
      src: '/image/nplogo.jpg',
      label: 'AFTER: Ultra-High Resolution Netravati Ridge Panorama',
      specs: '3880 × 2096 px • 1.48 MB',
      status: 'Pristine panoramic capture of the Netravati ridge line',
    },
    decision: 'Recommended Replacement',
    reason: 'Eliminates third-party branding risk and delivers stunning mountain scale.',
  },
  {
    title: '3. Kudremukh Trail Feature Photo',
    section: 'Trek Showcase: Kudremukh Path',
    before: {
      src: '/image/kkview.jpg',
      label: 'BEFORE: 600px Washed-Out Photo',
      specs: '600 × 338 px • 121.8 KB',
      status: 'Low contrast, hazy mountain slope',
    },
    after: {
      src: '/image/kudremukh-trekview.jpg',
      label: 'AFTER: Authentic Hikers on Shola Ridge',
      specs: '1300 × 731 px • 108.4 KB',
      status: 'Real trekkers climbing towards Kudremukh peak under genuine skies',
    },
    decision: 'Recommended Replacement',
    reason: 'Shows actual trail scale, human perspective, and certified guide path.',
  },
  {
    title: '4. Service Graphics & Package Icons',
    section: 'Base Services Section',
    before: {
      src: '/image/pngtree-costeffective-allinclusive-tourism-package-icon-special-metaphor-all-inclusive-vector-picture-image_10263345.png',
      label: 'BEFORE: Stock Clip Art Illustration',
      specs: '1200 × 1369 px • 561 KB',
      status: 'Stock vector graphic with generic branding; cheapens site credibility',
    },
    after: {
      src: null, // Replaced by CSS/SVG Bento cards
      label: 'AFTER: Clean CSS Bento Grid + Lucide Icons',
      specs: 'Zero KB network payload • Scalable SVG',
      status: 'High-end editorial glassmorphism cards with authentic descriptions',
    },
    decision: 'Removed & Upgraded to Bento Grid',
    reason: 'Completely eliminates off-brand clip art in favor of luxury outdoor magazine aesthetics.',
  }
]

export default function PhotoContactSheet() {
  return (
    <div className="min-h-screen bg-[#f8faf7] text-slate-800 p-6 sm:p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b border-forest-800/10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-forest-800 hover:text-forest-950 font-bold text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Live Website</span>
          </Link>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-50 border border-forest-200 text-forest-900 text-xs font-mono font-bold">
            <Camera className="w-3.5 h-3.5 text-dawn-amber" />
            <span>PHOTO CONTACT SHEET • AUDIT REVIEW</span>
          </div>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950 mb-3">
            Before &amp; After Photo Approval Sheet
          </h1>
          <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
            Per the Image &amp; Asset Policy, all photo replacements are cataloged below for your explicit review and approval. All original files remain permanently preserved in <code className="bg-slate-200 px-2 py-0.5 rounded text-xs font-mono">/public/assets/originals-backup/</code>.
          </p>
        </div>

        {/* Contact Sheet Cards */}
        <div className="space-y-12">
          {comparisons.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-forest-800/10 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-dawn-amber font-bold block mb-1">
                    {item.section}
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-forest-950">
                    {item.title}
                  </h2>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item.decision}</span>
                </div>
              </div>

              {/* Side by side comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* BEFORE */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                      BEFORE
                    </span>
                    <span className="text-xs font-mono text-slate-500">{item.before.specs}</span>
                  </div>
                  <div className="aspect-[16/10] bg-black/5 rounded-xl overflow-hidden mb-3">
                    <img
                      src={item.before.src}
                      alt={item.before.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-slate-600 leading-snug">{item.before.status}</p>
                </div>

                {/* AFTER */}
                <div className="bg-forest-50/50 p-4 rounded-2xl border border-forest-200/80">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded">
                      AFTER (PROPOSED)
                    </span>
                    <span className="text-xs font-mono text-slate-500">{item.after.specs}</span>
                  </div>
                  <div className="aspect-[16/10] bg-black/5 rounded-xl overflow-hidden mb-3">
                    {item.after.src ? (
                      <img
                        src={item.after.src}
                        alt={item.after.label}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-forest-900 text-emerald-200 p-6 text-center text-xs">
                        SVG Topographic Bento Card Interface (No external raster load)
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-forest-900 font-medium leading-snug">{item.after.status}</p>
                </div>
              </div>

              {/* Rationale */}
              <div className="p-4 rounded-xl bg-forest-50/60 border border-forest-100 text-xs text-slate-700">
                <strong className="text-forest-900 font-semibold block mb-0.5">Rationale:</strong>
                {item.reason}
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-12 pt-8 border-t border-forest-800/10 text-center text-xs text-slate-500">
          <p>Henjodi Stores Photographic Verification • Balagal, Kalasa, Chikmagalur</p>
        </div>
      </div>
    </div>
  )
}
