import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{ts,vue}'
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
