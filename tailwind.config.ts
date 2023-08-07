import type { Config } from 'tailwindcss'

export default {
  content: [
    './stories/*.vue',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config