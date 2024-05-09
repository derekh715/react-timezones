import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // moment library needs this
  // https://stackoverflow.com/questions/76395714/react-moment-library-import-causes-error-cannot-set-properties-of-undefined-s
  resolve: {
    mainFields: [],
  },
});
