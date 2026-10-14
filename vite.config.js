import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { basePath } from "./src/site.js";

export default defineConfig({
  // The GitHub Pages subfolder. Paths are absolute rather than relative
  // because pages sit at different depths (f-35/, es/f-35/gallery/).
  base: basePath,
  plugins: [react()],
});
