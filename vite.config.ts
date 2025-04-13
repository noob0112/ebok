import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';

import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      createHtmlPlugin({
        inject: { data: {} },
      }),
      vue(),
      tailwindcss(),
    ],
    resolve: {
      alias: [
        {
          find: '#',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
      ],
    },
  };
});
