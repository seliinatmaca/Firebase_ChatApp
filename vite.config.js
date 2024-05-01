import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sassPlugin from "vite-plugin-sass";

export default defineConfig({
  plugins: [
    react(),
    sassPlugin({
      // SASS ile ilgili seçenekleri burada belirtebilirsiniz
      // Örneğin, sass dosyalarını .scss uzantısı ile eşleştirmek için:
      // sass: true,
      // Or, kullanılacak ön yükleme seçeneklerini belirtmek için:
      // preprocess: true,
    }),
  ],
});
