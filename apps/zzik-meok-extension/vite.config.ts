import react from '@vitejs/plugin-react'
import fs from 'fs'
import { ConfigEnv, defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default ({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const isDevelop = process.env.NODE_ENV === 'development'

  return defineConfig({
    plugins: [react()],
    server: {
      // open: true,
      https: isDevelop
        ? {
            key: fs.readFileSync('../../private-key.pem'),
            cert: fs.readFileSync('../../public-certificate.pem'),
          }
        : undefined,
      host: process.env.VITE_EXTENSION_HOST_NAME,
    },
  })
}
