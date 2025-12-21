/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a5f1a',
          light: '#2d8f2d',
          dark: '#0f3d0f'
        },
        secondary: {
          DEFAULT: '#2c5530',
          light: '#4a7c59'
        },
        accent: {
          DEFAULT: '#ff6b35',
          light: '#ff8f66',
          dark: '#e55a25'
        },
        gold: '#d4af37',
        dark: {
          DEFAULT: '#0a0a0a',
          light: '#1a1a1a',
          medium: '#2a2a2a'
        },
        cream: {
          DEFAULT: '#f8f6f0',
          light: '#fdfcf7',
          dark: '#f0ede3'
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'bounce-soft': 'bounceSoft 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)' },
          '50%': { boxShadow: '0 8px 25px rgba(37, 211, 102, 0.7), 0 0 0 10px rgba(37, 211, 102, 0)' }
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.1)' }
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-50px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(50px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1a5f1a 0%, #2d8f2d 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #ff6b35 0%, #f39c12 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        'gradient-whatsapp': 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        'gradient-cta': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      boxShadow: {
        'soft': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'strong': '0 20px 60px rgba(0, 0, 0, 0.2)',
        'glow-accent': '0 0 30px rgba(255, 107, 53, 0.5)',
        'glow-green': '0 8px 25px rgba(37, 211, 102, 0.4)',
      },
      borderRadius: {
        '2xl': '15px',
        '3xl': '20px',
        '4xl': '30px'
      }
    },
  },
  plugins: [],
}
