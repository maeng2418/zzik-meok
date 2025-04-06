import zzikmeokUIConfig, { ZzikmeokUIConfig } from '@zzik-meok/ui/tailwind-config'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [zzikmeokUIConfig],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies ZzikmeokUIConfig
