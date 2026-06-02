/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Cabinet Grotesk', 'Inter', 'sans-serif'],
        body: ['Satoshi', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        background: '#0B0515', // Ultra dark purple/black
        surface: '#120921',
        brand: {
          50:  '#f5ebff',
          100: '#ebd3ff',
          200: '#d7a6ff',
          300: '#be6fff',
          400: '#a333ff',
          500: '#8b0df4',
          600: '#7500d0', // Primary accent
          700: '#6100aa',
          800: '#52008e',
          900: '#460275'
        },
        accent: {
          light: '#d280ff',
          default: '#9D4EDD', // Secondary accent (Pinkish purple)
          dark: '#5A189A'
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fadeIn 0.5s ease both'
      },
      keyframes: {
        fadeUp:  { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } }
      }
    }
  },
  plugins: []
};
