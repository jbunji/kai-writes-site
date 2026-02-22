/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: '#0a0e1a',
          900: '#0d1525',
          800: '#111d35',
          700: '#1a2d4d',
          600: '#1e3a5f',
          500: '#1a6b8a',
          400: '#22a7b0',
          300: '#4dd9d9',
          200: '#7eeaea',
          100: '#c0f5f5',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      }
    },
  },
  plugins: [],
};
