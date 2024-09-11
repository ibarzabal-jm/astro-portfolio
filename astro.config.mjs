import { defineConfig } from "astro/config";
import icon from "astro-icon";
import path from "path";

export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "pt-br"],
  },
  vite: {
    resolve: {
      alias: {
        "@src": path.resolve("./src"),
        "@assets": path.resolve("./src/assets"),
      },
    },
  },
  integrations: [icon()],
});
