import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined &&
    !process.env.REPLIT_DEPLOYMENT
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      // The alias still works correctly because it's an absolute path.
      "@": path.resolve(__dirname, "client/src"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  // Set the source root to the 'client' directory.
  // Vite will now automatically look for 'client/index.html' as the input.
  root: "client",
  build: {
    // Set the output directory to an absolute path to the top-level 'dist' folder.
    // This prevents Vite from creating a nested 'client' folder in the output.
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port: 5000,
    host: "0.0.0.0",
    allowedHosts: [".replit.dev", ".repl.co"],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
