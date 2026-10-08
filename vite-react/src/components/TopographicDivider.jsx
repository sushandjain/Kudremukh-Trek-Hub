export default function TopographicDivider({ className = '', inverted = false }) {
  return (
    <div className={`w-full overflow-hidden leading-none select-none pointer-events-none opacity-20 dark:opacity-10 ${className}`}>
      <svg
        viewBox="0 0 1200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-12 sm:h-16 text-forest-800 dark:text-emerald-400 ${inverted ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0,45 C150,75 350,15 500,45 C650,75 850,20 1000,50 C1100,70 1180,40 1200,45"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 6"
        />
        <path
          d="M0,30 C200,5 400,65 600,25 C800,-15 1000,55 1200,25"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M0,60 C250,30 500,80 750,40 C1000,0 1150,60 1200,55"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeOpacity="0.6"
        />
      </svg>
    </div>
  )
}
