import { Doc } from "./doc";
import { Template } from "./types";

export function setUpDocumentationGenerator(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
  templates: Template
) {
  const doc = new Doc(templates);
  on("task", {
    documentationParagraph(text: string) {
      doc.text(text);
      return null;
    },
    documentationHeader(text: string) {
      doc.header(text);
      return null;
    },
    documentationAlert(text: string) {
      doc.alert(text);
      return null;
    },
    documentationLink({ text, url }: { text: string; url: string }) {
      doc.link(text, url);
      return null;
    },
    documentationImage(imagePath: string) {
      doc.screenshot(imagePath);
      return null;
    },
    documentationUlist() {},
  });
  on("after:spec", () => {
    doc.generate(config.documentOutputPath);
  });
}
