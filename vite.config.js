import { defineConfig } from 'vite'

export default defineConfig({
    base: process.env.VERCEL ? '/' : '/BMP_LP2/',
})
