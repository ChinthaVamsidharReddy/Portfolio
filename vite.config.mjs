import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";
import ghPages from 'vite-plugin-gh-pages'
// https://vitejs.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tagger from 'vite-plugin-tagger'

// Replace "Portfolio" with your GitHub repo name if different
export default defineConfig({
  base: '/Portfolio/',
  plugins: [tsconfigPaths(), react(), tagger()],
  
})
