const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'slide-in-left': {
          '0%': {
            '-webkit-transform': 'translateX(-1000px)',
            transform: 'translateX(-1000px)',
            opacity: '0',
          },
          '100%': {
            '-webkit-transform': 'translateX(0)',
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slide-in-right': {
          '0%': {
            '-webkit-transform': 'translateX(1000px)',
            transform: 'translateX(1000px)',
            opacity: '0',
          },
          '100%': {
            '-webkit-transform': 'translateX(0)',
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 2s cubic-bezier(0.165, 0.840, 0.440, 1.000) 0.2s both',
        'slide-in-right': 'slide-in-right 2s cubic-bezier(0.165, 0.840, 0.440, 1.000) 0.2s both',
      },
      backgroundImage: {
        'gradient-radial-dark': 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 40%, rgba(31, 36, 45, 0) 70%)',
        'gradient-radial-light': 'radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 25%, rgba(241, 245, 249, 1) 55%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.background-main-light': {
          background: `repeating-linear-gradient(45deg, hsla(0, 0%, 6%, 0.05), hsla(0, 0%, 6%, 0.05) 1px, transparent 1px, transparent 60px),
            repeating-linear-gradient(135deg, hsla(0, 0%, 6%, 0.05), hsla(0, 0%, 6%, 0.05) 1px, transparent 1px, transparent 60px)`,
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
        },
        '.background-main-dark': {
          background: `repeating-linear-gradient(45deg, hsla(0, 0%, 94%, 0.035), hsla(0, 0%, 94%, 0.035) 1px, transparent 1px, transparent 60px),
            repeating-linear-gradient(135deg, hsla(0, 0%, 94%, 0.035), hsla(0, 0%, 94%, 0.035) 1px, transparent 1px, transparent 60px)`,
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
        },
      });
    }),
  ],
};
