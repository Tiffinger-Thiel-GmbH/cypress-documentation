import { Doc } from "./doc";
import { Template } from "./types";

export function setUpDocumentationGenerator(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
  templates: Template
) {
  on("before:spec", async (results) => {
    const doc = new Doc(templates);

    on("task", {
      generateText(text: string) {},
    });
  });
}
