/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f8f4',
          100: '#e1efe5',
          200: '#c4dfcc',
          300: '#9bc9a6',
          400: '#6ea97c',
          500: '#4a8b59',
          600: '#386f45',
          700: '#2c5837',
          800: '#1a472a', // Core Brand Color
          900: '#153a23',
          950: '#0a2213',
        },
        primary: {
          DEFAULT: '#1a472a', // Brand forest green
          light: '#2c5837',
          dark: '#11311d',
          subtle: '#f2f8f4',
        },
        secondary: {
          DEFAULT: '#2c5837',
          light: '#4a8b59',
        },
        accent: {
          DEFAULT: '#d97706', // Warm earthy amber/gold
          light: '#f59e0b',
          dark: '#b45309',
        },
        gold: '#d97706',
        earth: {
          50: '#faf8f5',
          100: '#f3efe8',
          200: '#e5dcce',
          700: '#785b3b',
          800: '#543f29',
        },
        dark: {
          DEFAULT: '#0f1f14',
          light: '#1b2f22',
          medium: '#273e30',
        },
        cream: {
          DEFAULT: '#fafbf9',
          light: '#ffffff',
          dark: '#f3f6f3',
        },
        mist: {
          50: '#f8faf7',
          100: '#eff3ed',
          200: '#e0e7dc',
          300: '#ccd8c5',
          400: '#94a58f',
          500: '#687864',
          600: '#4d5c49',
          700: '#364233',
          800: '#232c21',
          900: '#151c14',
          950: '#0d120c',
        },
        dawn: {
          amber: '#d97724',
          gold: '#f59e0b',
          glow: '#fde68a',
          warm: '#fffbeb',
          dark: '#9a3412',
        },
        night: {
          canvas: '#060d08',
          card: '#0d1810',
          border: '#1b2d1f',
          textMuted: '#88a38f',
          textBright: '#eaf4ec',
        },
      },
      fontFamily: {
        'serif': ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
        'editorial': ['Fraunces', 'Georgia', 'serif'],
        'display': ['Fraunces', 'Outfit', 'Georgia', 'serif'],
        'heading': ['Fraunces', 'Outfit', 'sans-serif'],
        'body': ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        'sans': ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        'mono': ['Space Mono', 'JetBrains Mono', 'monospace'],
        'kannada': ['Noto Serif Kannada', 'Noto Sans Kannada', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'bounce-soft': 'bounceSoft 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 8px 25px rgba(26, 71, 42, 0.3)' },
          '50%': { boxShadow: '0 8px 30px rgba(37, 211, 102, 0.5), 0 0 0 8px rgba(37, 211, 102, 0.1)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.08)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1a472a 0%, #2c5837 100%)',
        'gradient-forest': 'linear-gradient(135deg, #0f2b19 0%, #1a472a 50%, #2c5837 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(15, 31, 20, 0.75) 0%, rgba(15, 31, 20, 0.6) 50%, rgba(15, 31, 20, 0.9) 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a1f13 0%, #153a23 100%)',
        'gradient-whatsapp': 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        'gradient-cta': 'linear-gradient(135deg, #1a472a 0%, #0f2b19 100%)',
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(26, 71, 42, 0.07), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 20px 40px -4px rgba(26, 71, 42, 0.16), 0 4px 12px -2px rgba(0, 0, 0, 0.06)',
        'soft': '0 10px 30px rgba(0, 0, 0, 0.06)',
        'strong': '0 20px 50px rgba(10, 32, 18, 0.22)',
        'glow-accent': '0 0 30px rgba(217, 119, 6, 0.4)',
        'glow-green': '0 8px 25px rgba(37, 211, 102, 0.4)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
    },
  },
  plugins: [],
}
