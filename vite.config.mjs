import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";
import ghPages from 'vite-plugin-gh-pages'

export default defineConfig({
  base: '/Portfolio/',
  plugins: [tsconfigPaths(), react(), tagger()],
  
})
