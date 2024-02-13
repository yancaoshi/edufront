import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
    const isProduction = mode === 'production';

    return {
        plugins: [
            vue()
        ],
        server: {
            port: 8080,
        },
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
        },
        build: {
            sourcemap: true,
            css: {
                sourcemap: true,
            }
        },
        define: {
            'process.env': {
                IS_PRODUCTION: JSON.stringify(isProduction),
                IS_DEVELOPMENT: JSON.stringify(!isProduction),
            },
        },
    };
});