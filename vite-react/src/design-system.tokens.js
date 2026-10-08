/**
 * Malenadu Mist — Design System Tokens
 * Henjodi Stores Creative Direction
 * Core Brand Color: #1a472a
 */

export const tokens = {
  name: 'Malenadu Mist',
  version: '2.0.0',
  description: 'Editorial Western Ghats Expedition Design System',

  colors: {
    // Brand Deep Forest Green
    forest: {
      950: '#06130b', // Deep obsidian shola canopy
      900: '#0c2214', // Night mist base
      850: '#112c1b',
      800: '#1a472a', // CORE BRAND COLOR
      700: '#235936',
      600: '#327749',
      500: '#469b62',
      400: '#69ba83',
      300: '#99d4ad',
      200: '#c6ebd2',
      100: '#e5f6ec',
      50: '#f2faf5',
    },

    // Morning Mist (Neutral Tones)
    mist: {
      pure: '#ffffff',
      50: '#f8faf7', // Default page surface
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

    // Sunrise Amber & Gold (Sun breaking through mountain mist)
    dawn: {
      amber: '#d97724',
      gold: '#f59e0b',
      glow: '#fde68a',
      warm: '#fffbeb',
      dark: '#9a3412',
    },

    // Night Camp Theme
    night: {
      canvas: '#060d08',
      card: '#0d1810',
      border: '#1b2d1f',
      textMuted: '#88a38f',
      textBright: '#eaf4ec',
    },

    // Status & Operations
    status: {
      open: '#25D366', // WhatsApp green & active operational status
      warning: '#eab308',
      alert: '#ef4444',
    }
  },

  typography: {
    fontFamilies: {
      editorialSerif: '"Fraunces", "Playfair Display", Georgia, serif',
      cleanSans: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      monoCoordinates: '"Space Mono", "JetBrains Mono", monospace',
      kannada: '"Noto Serif Kannada", "Noto Sans Kannada", sans-serif',
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 800,
    },
    lineHeights: {
      tight: 1.05,
      heading: 1.15,
      snug: 1.3,
      normal: 1.6,
      relaxed: 1.75,
    },
    fluidSizes: {
      hero: 'clamp(2.75rem, 7vw + 1rem, 6.5rem)',
      displayLarge: 'clamp(2.25rem, 5vw + 0.5rem, 4.25rem)',
      displayMedium: 'clamp(1.75rem, 3.5vw + 0.5rem, 3rem)',
      headline: 'clamp(1.35rem, 2vw + 0.5rem, 2rem)',
      subheadline: 'clamp(1.1rem, 1.2vw + 0.3rem, 1.35rem)',
      body: 'clamp(0.95rem, 0.5vw + 0.8rem, 1.05rem)',
      label: 'clamp(0.7rem, 0.3vw + 0.65rem, 0.8rem)',
    }
  },

  radii: {
    pill: '9999px',
    '3xl': '2rem',     // 32px
    '2xl': '1.5rem',   // 24px
    xl: '1.25rem',    // 20px
    lg: '1rem',       // 16px
    md: '0.75rem',    // 12px
    sm: '0.5rem',     // 8px
  },

  elevation: {
    surfaceLight: '0 1px 3px rgba(26, 71, 42, 0.05)',
    cardLight: '0 4px 20px -2px rgba(26, 71, 42, 0.08)',
    cardHover: '0 16px 36px -4px rgba(26, 71, 42, 0.15)',
    glowGreen: '0 8px 30px rgba(37, 211, 102, 0.35)',
    glowAmber: '0 8px 30px rgba(217, 119, 36, 0.35)',
  },

  motion: {
    durations: {
      instant: '150ms',
      fast: '250ms',
      medium: '450ms',
      slow: '800ms',
      cinematic: '1200ms',
    },
    easings: {
      smoothOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
      dramatic: 'cubic-bezier(0.76, 0, 0.24, 1)',
      springLike: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    }
  },

  realCoordinates: {
    latitude: 13.184369,
    longitude: 75.319509,
    formatted: '13.1843° N, 75.3195° E',
    elevationBalagal: '798m ASL',
    town: 'Balagal, Kalasa, Chikmagalur',
    state: 'Karnataka, India',
    pin: '577124',
  }
}

export default tokens
