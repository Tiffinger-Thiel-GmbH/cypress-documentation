import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on('before:spec', (spec) => {
                require('index.ts')(spec)

            })
        },
    }
})