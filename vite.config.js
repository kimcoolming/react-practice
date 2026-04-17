import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/react-practice/", // 저장소명이 react-practice라면 이렇게
});
