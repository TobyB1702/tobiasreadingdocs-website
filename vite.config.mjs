import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  // load env for current mode; empty prefix loads all vars including VITE_*
  const env = loadEnv(mode, process.cwd(), '');
  

  const allowedHosts = env.VITE_ALLOWED_HOSTS
    ? env.VITE_ALLOWED_HOSTS.split(',').map(h => h.trim()).filter(Boolean)
    : undefined;

  return {
    plugins: [react(), tsconfigPaths()],

    server: {
      allowedHosts,
    },

    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './vitest.setup.mjs',
    },
  };
});
