import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  // to run js without changing jsx
  root: 'src',
  esbuild: {
    loader: "jsx",
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },

  // default open
  server: {
    open: true,
    port: 8000,
    host: true,
  },

  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  // for build app
  build: {
    outDir: "build",
  },
});
