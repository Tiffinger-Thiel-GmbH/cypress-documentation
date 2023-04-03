import { Doc } from "./documentation/doc";

Cypress.Commands.add("docHeader", (doc: Doc, text: string) => {
  doc.header(text);
});

Cypress.Commands.add("docText", (doc: Doc, text: string) => {
  doc.text(text);
});

Cypress.Commands.add("docAlert", (doc: Doc, text: string) => {
  doc.alert(text);
});

Cypress.Commands.add("docImage", (doc: Doc, imagePath: string) => {
  doc.screenshot(imagePath);
});

Cypress.Commands.add("docWrite", (doc: Doc, filePath: string) => {
  cy.writeFile(filePath, doc.doc);
  cy.log(`Documentation file written to ${filePath}`);
});
