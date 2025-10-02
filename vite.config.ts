import { defineConfig } from 'vite'

export default defineConfig({
    base: './',
    server: {
        port: 3000
    },
    assetsInclude: ['**/*.html'],
    build: {
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name].[hash].js',
                chunkFileNames: 'assets/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash][extname]'
            }
        }
    },
    plugins: [
        {
            name: 'html-template-loader',
            transform(code, id) {
                if (id.endsWith('.html')) {
                    return {
                        code: `export default ${JSON.stringify(code)}`,
                        map: null
                    };
                }
            }
        }
    ]
})