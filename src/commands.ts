import { Doc } from "./documentation/doc";
import { UList } from "./documentation/UList";

Cypress.Commands.add("docHeader", (doc: Doc, text: string) => {
  cy.readFile(doc.templates.templateHeaderPath).then((str) => {
    doc.header(str, text);
  });
});

Cypress.Commands.add("docText", (doc: Doc, text: string) => {
  cy.readFile(doc.templates.templateTextPath).then((str) => {
    doc.text(str, text);
  });
});

Cypress.Commands.add("docAlert", (doc: Doc, text: string) => {
  cy.readFile(doc.templates.templateAlertPath).then((str) => {
    doc.alert(str, text);
  });
});

Cypress.Commands.add("docImage", (doc: Doc, imagePath: string) => {
  cy.readFile(doc.templates.templateImagePath).then((str) => {
    doc.screenshot(str, imagePath);
  });
});

Cypress.Commands.add("docLink", (doc: Doc, text: string, url: string) => {
  cy.readFile(doc.templates.templateLinkPath).then((str) => {
    doc.link(str, text, url);
  });
});

Cypress.Commands.add("docWrite", (doc: Doc, filePath: string) => {
  cy.readFile(doc.templates.templateBodyPath).then((str) => {
    const html = doc.generate(str);
    cy.writeFile(filePath, html);
    cy.log(`Documentation file written to ${filePath}`);
  });
});

Cypress.Commands.add(
  "docUList",
  (doc: Doc, listCb: (uDoc: Doc) => Cypress.Chainable<void>) => {
    cy.readFile(doc.templates.templateUlPath).then((ulString) => {
      cy.readFile(doc.templates.templateLiPath).then((liString) => {
        const uList = new UList(ulString, liString, doc);
        listCb(uList.uDoc).then(() => {
          const uListHtml = uList.generate();
          if (uListHtml) {
            doc.list(uListHtml);
          }
        });
      });
    });
  }
);
