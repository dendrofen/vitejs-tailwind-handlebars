import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

function handlebarsOverride(options) {
    const plugin = handlebars(options);
    // Currently handleHotUpdate skips further processing, which bypasses
    // postcss and in turn tailwind doesn't pick up file changes
    delete plugin.handleHotUpdate;
    return plugin;
}

export default {
    root: "src",
    build: {
        outDir: '../build',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                components: resolve(__dirname, 'src/components.html'),
            },
        },
    },
    plugins: [
        handlebarsOverride({
            partialDirectory: resolve(__dirname, 'src/components'),
            helpers: {
                json: (context) => {
                    return JSON.stringify(context);
                }
            }
        }),
    ],
    server: {
        watch: {
            usePolling: true,
        },
        host: true,
        strictPort: true,
        port: 5173,
    }
};