// eslint-disable-next-line no-undef
import Cypress from "cypress";
import { setUpDocumentationGenerator } from "./src/documentation/setup";

export interface DocCypressConfig extends Cypress.ConfigOptions {
  documentOutputPath?: string;
}

const docCypressConfig = (config: DocCypressConfig): DocCypressConfig => config;

export default docCypressConfig({
  documentOutputPath: "output.html",
  experimentalInteractiveRunEvents: true,
  e2e: {
    setupNodeEvents(on) {
      setUpDocumentationGenerator(
        on,
        {
          templateTextPath: "cypress/template/components/paragraph.ejs",
          templateHeaderPath: "cypress/template/components/header.ejs",
          templateImagePath: "cypress/template/components/image.ejs",
          templateAlertPath: "cypress/template/components/alert.ejs",
          templateLinkPath: "cypress/template/components/link.ejs",
          templateBodyPath: "cypress/template/documentPage.ejs",
        },
        {
          templateLiPath: "cypress/template/components/list.ejs",
          templateUlPath: "cypress/template/components/uList.ejs",
        }
      );
    },
  },
});
