import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/leaflet/dist/images/*",
          dest: "",
        },
      ],
    }),
  ],
  // moment library needs this
  // https://stackoverflow.com/questions/76395714/react-moment-library-import-causes-error-cannot-set-properties-of-undefined-s
  resolve: {
    mainFields: [],
  },
  base: "/react-timezones",
});
