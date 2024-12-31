import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	publicDir: 'public',
	build: {
		outDir: './build',
		chunkSizeWarningLimit: 1500,
		minify: true,
		rollupOptions: {
			treeshake: true,
		},
	},
	server: {
		host: true,
	},
})
