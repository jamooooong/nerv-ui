import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup"; // 추가
import url from "@rollup/plugin-url"; // 추가

export default defineConfig({
  plugins: [react(), url(), svgr()], // 추가
});
