import zzikmeokUIConfig, { ZzikmeokUIConfig } from '@zzik-meok/ui/tailwind-config'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*{.js,.ts,.jsx,.tsx}',
  ],
  presets: [zzikmeokUIConfig],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies ZzikmeokUIConfig
