import { Doc } from "./doc";
import { ListTemplates, Template } from "./types";
import { UList } from "./UList";

let currDoc: Doc;
let ulist: UList | null = null;
let doc: Doc;

export function setUpDocumentationGenerator(
  on: Cypress.PluginEvents,
  templates: Template,
  listTemplates: ListTemplates
) {
  on("task", {
    documentationInitialize() {
      console.log("🧨 INIT NEW DOCUMENTATION");
      doc = new Doc(templates);
      currDoc = doc;
      return null;
    },

    documentationParagraph(text: string) {
      console.log("GENERATE TEXT!");
      currDoc.text(text);
      return null;
    },
    documentationHeader(text: string) {
      console.log("GENERATE HEADER!");
      currDoc.header(text);
      return null;
    },
    documentationAlert(text: string) {
      console.log("GENERATE ALERT!");
      currDoc.alert(text);
      return null;
    },
    documentationLink({ text, url }: { text: string; url: string }) {
      console.log("GENERATE LINK!");
      currDoc.link(text, url);
      return null;
    },
    documentationImage(imagePath: string) {
      console.log("GENERATE IMAGE!");
      currDoc.screenshot(imagePath);
      return null;
    },
    documentationUlist() {
      console.log("GENERATE ULIST!");
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
      console.log("END ULIST!");
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
      console.log("GENERATE FILE!");
      if (fileName) {
        doc.generate(fileName);
      }
      doc = new Doc(templates);
      currDoc = new Doc(templates);
      return null;
    },
  });
}
