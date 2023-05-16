// eslint-disable-next-line no-undef
import { defineConfig } from "cypress";
import { setUpDocumentationGenerator } from "./src/documentation/setup";

interface CustomCypressConfig extends Cypress.ConfigOptions {
  documentOutputPath?: string;
}

export default defineConfig<CustomCypressConfig>({
  documentOutputPath: "output.html",
  e2e: {
    setupNodeEvents(on, config) {
      setUpDocumentationGenerator(on, config, {
        templateTextPath: "cypress/template/components/paragraph.ejs",
        templateHeaderPath: "cypress/template/components/header.ejs",
        templateImagePath: "cypress/template/components/image.ejs",
        templateAlertPath: "cypress/template/components/alert.ejs",
        templateLinkPath: "cypress/template/components/link.ejs",
        templateBodyPath: "cypress/template/documentPage.ejs",
      });
    },
  },
});
