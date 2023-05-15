import { Doc } from "./documentation/doc";
import { UList } from "./documentation/UList";

Cypress.Commands.add("docHeader", (doc: Doc, text: string) => {
  cy.readFile(doc.templateHeaderPath).then((str) => {
    doc.header(str, text);
  });
});

Cypress.Commands.add("docText", (doc: Doc, text: string) => {
  cy.readFile(doc.templateTextPath).then((str) => {
    doc.text(str, text);
  });
});

Cypress.Commands.add("docAlert", (doc: Doc, text: string) => {
  cy.readFile(doc.templateAlertPath).then((str) => {
    doc.alert(str, text);
  });
});

Cypress.Commands.add("docImage", (doc: Doc, imagePath: string) => {
  cy.readFile(doc.templateImagePath).then((str) => {
    doc.screenshot(str, imagePath);
  });
});

Cypress.Commands.add("docLink", (doc: Doc, text: string, url: string) => {
  cy.readFile(doc.templateLinkPath).then((str) => {
    doc.link(str, text, url);
  });
});

Cypress.Commands.add("docWrite", (doc: Doc, filePath: string) => {
  cy.readFile(doc.templateBodyPath).then((str) => {
    const html = doc.generate(str);
    cy.writeFile(filePath, html);
    cy.log(`Documentation file written to ${filePath}`);
  });
});

Cypress.Commands.add(
  "docUList",
  (doc: Doc, listCb: (uDoc: Doc) => Cypress.Chainable<void>) => {
    cy.readFile(doc.templateUlPath).then((ulString) => {
      cy.readFile(doc.templateLiPath).then((liString) => {
        const uList = new UList(ulString, liString, doc);
        listCb(uList.uDoc).then(() => {
          const uListHtml = uList.generate();
          if (uListHtml) {
            doc.uList(uListHtml);
          }
        });
      });
    });
  }
);
