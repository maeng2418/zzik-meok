import zzikmeokUIConfig, { ZzikmeokUIConfig } from '@zzik-meok/ui/tailwind-config'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'],
  presets: [zzikmeokUIConfig],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies ZzikmeokUIConfig
