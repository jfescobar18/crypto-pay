import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./src/styles/variables.scss";',
                },
            },
        },
    },
    site: "https:/jfescobar18.github.io",
    base: "/crypto-pay"
});
