import zzikmeokUIConfig, {
  ZzikmeokUIConfig,
} from '../../packages/zzik-moek-ui/src/config/tailwind-config'

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
