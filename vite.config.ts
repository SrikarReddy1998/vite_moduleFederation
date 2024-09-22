import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container-app",
      remotes: {
        anyModuleName: "http://localhost:4173/assets/remoteEntry.js", // Ensure this URL is correct
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
