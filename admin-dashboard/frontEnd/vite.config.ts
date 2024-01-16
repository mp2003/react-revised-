import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ReactRefresh from '@vitejs/plugin-react-refresh'; // Import ReactRefresh

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ReactRefresh(), // Use ReactRefresh plugin
  ],
});
