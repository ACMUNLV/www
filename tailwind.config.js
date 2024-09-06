/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    screens: {
      'xs': '450px',
      // => @media (min-width: 450px) { ... }

      'sm': '575px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        /* Template stuff */
        'current': 'currentColor',
        'transparent': 'transparent',
        'white': '#FFFFFF',
        'black': '#121723',
        'dark': '#1D2430',
        'primary': '#4A6CF7',
        'yellow': '#FBB040',
        'body-color': '#788293',
        'body-color-dark': '#959CB1',
        'gray-dark': '#1E232E',
        'gray-light': '#F0F2F9',
        'stroke': '#E3E8EF',
        'stroke-dark': '#353943',
        'bg-color-dark': '#171C28',

        'fontSize': {
          'xs': '0.75rem',
          'sm': '0.875rem',
          'base': '1rem',
          'lg': '1.125rem',
          'xl': '1.25rem',
          '2xl': '1.5rem',
          '3xl': '2rem',
          '4xl': '2.5rem',
          '5xl': '3.25rem',
          '6xl': '4rem',
        },
        'inset': {
          full: '100%',
        },
        'letterSpacing': {
          tighter: '-0.02em',
          tight: '-0.01em',
          normal: '0',
          wide: '0.01em',
          wider: '0.02em',
          widest: '0.4em',
        },
        'minWidth': {
          10: '2.5rem',
        },
        'scale': {
          98: '.98',
        },
        'borderRadius': {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        'keyframes': {
          'accordion-down': {
            from: { height: 0 },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: 0 },
          },
        },
        'animation': {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
      },
      rotate: {
        360: '360deg',
        720: '720deg',
      },
      boxShadow: {
        'signUp': '0px 5px 10px rgba(4, 10, 34, 0.2)',
        'one': '0px 2px 3px rgba(7, 7, 77, 0.05)',
        'two': '0px 5px 10px rgba(6, 8, 15, 0.1)',
        'three': '0px 5px 15px rgba(6, 8, 15, 0.05)',
        'sticky': 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
        'sticky-dark': 'inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)',
        'feature-2': '0px 10px 40px rgba(48, 86, 211, 0.12)',
        'submit': '0px 5px 20px rgba(4, 10, 34, 0.1)',
        'submit-dark': '0px 5px 20px rgba(4, 10, 34, 0.1)',
        'btn': '0px 1px 2px rgba(4, 10, 34, 0.15)',
        'btn-hover': '0px 1px 2px rgba(0, 0, 0, 0.15)',
        'btn-light': '0px 1px 2px rgba(0, 0, 0, 0.1)',
      },
      dropShadow: {
        three: '0px 5px 15px rgba(6, 8, 15, 0.05)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
}
