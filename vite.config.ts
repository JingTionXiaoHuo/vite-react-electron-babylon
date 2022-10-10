import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const fs = require('node:fs');

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.dds'],
  base: './',
  server: {
    host: '0.0.0.0',
    // 不需要使用https协议或没有CA证书时将下面这个配置删除即可
    // https: {
    //   key: fs.readFileSync('./keys/localhost+1-key.pem'),
    //   cert: fs.readFileSync('./keys/localhost+1.pem')
    // }
  },
  build: {
    outDir:"build"
  }
})
