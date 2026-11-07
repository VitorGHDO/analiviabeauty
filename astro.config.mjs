import { defineConfig } from "astro/config";
import yaml from "@rollup/plugin-yaml";

// Configuração do Astro. Não precisa mexer aqui para editar o site.
export default defineConfig({
  server: { host: "127.0.0.1" },
  vite: {
    plugins: [yaml()],
  },
});
