import zzikmeokUIConfig, { ZzikmeokUIConfig } from '@zzik-meok/ui/tailwind-config'

export default {
  /**
   * Next.js는 모노레포 환경에서 UI 패키지를 자동으로 처리하기 때문에 `tailwind.config.js`에 별도로 경로를 추가할 필요가 없음.
   * 반면에 Vite는 루트 외부 파일을 기본적으로 무시하므로 반드시 `content` 배열에 UI 패키지 경로를 명시해야 함.
   */
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [zzikmeokUIConfig],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies ZzikmeokUIConfig
