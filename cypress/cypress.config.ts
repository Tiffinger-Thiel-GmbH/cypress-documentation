import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            require('fs/promises')
            on('before:spec', (spec) => {
            })
        },
    }
})