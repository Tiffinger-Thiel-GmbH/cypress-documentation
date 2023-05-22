import { Doc } from "./doc";
import { ListTemplates, Template } from "./types";
import { UList } from "./UList";

let currDoc: Doc;
let ulist: UList | null = null;
let doc: Doc;

export function setUpDocumentationGenerator(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions & { documentOutputPath?: string },
  templates: Template,
  listTemplates: ListTemplates
) {
  doc = new Doc(templates);
  currDoc = doc;

  on("task", {
    documentationParagraph(text: string) {
      currDoc.text(text);
      return null;
    },
    documentationHeader(text: string) {
      currDoc.header(text);
      return null;
    },
    documentationAlert(text: string) {
      currDoc.alert(text);
      return null;
    },
    documentationLink({ text, url }: { text: string; url: string }) {
      currDoc.link(text, url);
      return null;
    },
    documentationImage(imagePath: string) {
      currDoc.screenshot(imagePath);
      return null;
    },
    documentationUlist() {
      const ulistDoc = new UList(
        listTemplates.templateUlPath,
        listTemplates.templateLiPath,
        templates
      );
      // Set currDoc tu ulist doc
      ulist = ulistDoc;
      currDoc = ulistDoc.uDoc;
      return null;
    },

    documentationEndUList() {
      // Generate ulist to init doc
      if (!ulist) {
        return;
      }
      doc.list(ulist.generate());
      currDoc = doc;
      ulist = null;
      return null;
    },
    documentationGenerate(fileName: string) {
      if (fileName) {
        doc.generate(fileName);
      }
      doc = new Doc(templates);
      currDoc = new Doc(templates);
      return null;
    },
  });
}
