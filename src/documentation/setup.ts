import { Doc } from "./doc";
import { Template } from "./types";

export function setUpDocumentationGenerator(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
  templates: Template
) {
  const doc = new Doc(templates);
  on("before:spec", () => {
    console.log("TEST FUNCTION");
  });
  on("task", {
    documentationParagraph(text: string) {
      doc.text(text);
      return null;
    },
    documentationHeader(text: string) {
      doc.header(text);
      return null;
    },
  });
}
