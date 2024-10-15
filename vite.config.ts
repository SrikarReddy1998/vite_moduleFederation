import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container-app",
      // exposes: {
      //   "./MyComponent": "./src/App.tsx", // Expose your component here
      // },
      remotes: {
        anyModuleName: "http://localhost:4173/assets/remoteEntry.js", // Ensure this URL is correct
        reactModuleFed: "http://localhost:4300/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
