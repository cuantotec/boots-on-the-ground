import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  // This option makes all asset paths relative, which is robust for static deployments.
  base: "./",
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
      // The alias now needs to point to the client directory from the project root
      "@": path.resolve(import.meta.dirname, "client/src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  // The 'root' property has been removed to avoid path confusion.
  build: {
    // The input for rollup needs to be explicitly set to your index.html inside the client folder.
    rollupOptions: {
      input: path.resolve(import.meta.dirname, "client/index.html"),
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["wouter"],
          ui: ["@radix-ui/react-slot", "class-variance-authority", "clsx"],
        },
      },
    },
    // The output directory is now a clean 'dist' at the project root.
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    port: 5000,
    host: "0.0.0.0",
    allowedHosts: [".replit.dev", ".repl.co"],
    // When running the dev server, we need to tell it where to open the files from.
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
