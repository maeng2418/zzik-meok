import react from '@vitejs/plugin-react'
import { ConfigEnv, defineConfig, loadEnv, PluginOption } from 'vite'
import webExtension, { readJsonFile } from 'vite-plugin-web-extension'
import tsconfigPaths from 'vite-tsconfig-paths'

const generateManifest = () => {
  const manifest = readJsonFile('src/manifest.json')
  const pkg = readJsonFile('package.json')
  return {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    ...manifest,
  }
}

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  // const isDevelop = process.env.NODE_ENV === 'development'

  return defineConfig({
    plugins: [
      react(),
      webExtension({
        manifest: generateManifest,
        disableAutoLaunch: true,
      }) as PluginOption,
      tsconfigPaths(),
    ],
    server: {
      // https: isDevelop
      //   ? {
      //       key: fs.readFileSync('../../private-key.pem'),
      //       cert: fs.readFileSync('../../public-certificate.pem'),
      //     }
      //   : undefined,
      host: process.env.VITE_EXTENSION_HOST_NAME,
    },
  })
}
