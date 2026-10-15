import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { cp } from 'node:fs/promises'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-app-link-associations',
      apply: 'build',
      closeBundle() {
        return cp(resolve('web/.well-known'), resolve('dist/.well-known'), {
          recursive: true,
        })
      },
    },
  ],
})
