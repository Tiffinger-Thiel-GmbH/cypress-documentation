import { Doc } from "./doc";
import { ListTemplates, Template } from "./types";
import { UList } from "./UList";

let currDoc: Doc | undefined;
let ulist: UList | null = null;
let doc: Doc | undefined;

export function setUpDocumentationGenerator(
  on: Cypress.PluginEvents,
  templates: Template,
  listTemplates: ListTemplates
) {
  on("task", {
    documentationInitialize() {
      console.log("🧨 INIT NEW DOCUMENTATION");

      return new Promise((resolve, reject) => {
        doc = new Doc(templates);
        currDoc = doc;

        if (doc instanceof Doc && currDoc instanceof Doc) {
          resolve(null);
        } else {
          reject("Failed to create documentation instance");
        }
      });
    },

    documentationParagraph(text: string) {
      return new Promise((resolve, reject) => {
        if (!currDoc) {
          return reject("No documentation instance. You may need to init!");
        }
        currDoc.text(text);
        resolve(null);
      });
    },
    documentationHeader(text: string) {
      return new Promise((resolve, reject) => {
        if (!currDoc) {
          return reject("No documentation instance. You may need to init!");
        }
        currDoc.header(text);
        resolve(null);
      });
    },
    documentationAlert(text: string) {
      return new Promise((resolve, reject) => {
        if (!currDoc) {
          return reject("No documentation instance. You may need to init!");
        }
        currDoc.alert(text);
        resolve(null);
      });
    },
    documentationLink({ text, url }: { text: string; url: string }) {
      return new Promise((resolve, reject) => {
        if (!currDoc) {
          return reject("No documentation instance. You may need to init!");
        }
        currDoc.link(text, url);
        resolve(null);
      });
    },
    documentationImage(imagePath: string) {
      return new Promise((resolve, reject) => {
        if (!currDoc) {
          return reject("No documentation instance. You may need to init!");
        }
        currDoc.screenshot(imagePath);
        resolve(null);
      });
    },
    documentationUlist() {
      return new Promise((resolve, reject) => {
        if (!currDoc) {
          return reject("No documentation instance. You may need to init!");
        }
        const ulistDoc = new UList(
          listTemplates.templateUlPath,
          listTemplates.templateLiPath,
          templates
        );
        // Set currDoc tu ulist doc
        ulist = ulistDoc;
        currDoc = ulistDoc.uDoc;
        resolve(null);
      });
    },

    documentationEndUList() {
      // Generate ulist to init doc
      return new Promise((resolve, reject) => {
        if (!doc) {
          return reject("No documentation instance. You may need to init!");
        }
        if (!ulist) {
          return;
        }
        doc.list(ulist.generate());
        currDoc = doc;
        ulist = null;
        resolve(null);
      });
    },
    documentationGenerate(fileName: string) {
      return new Promise((resolve, reject) => {
        if (!currDoc || !doc) {
          return reject("No documentation instance. You may need to init!");
        }
        if (fileName) {
          doc.generate(fileName);
        }
        doc = undefined;
        currDoc = undefined;
        resolve(null);
      });
    },
  });
}
