import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        port: 3000
    },
    assetsInclude: ['**/*.html'],
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
});