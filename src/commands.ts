import { Doc } from "./documentation/doc";

Cypress.Commands.add("docHeader", (doc: Doc, text: string) => {
  cy.readFile(__dirname + doc.templateHeaderPath).then((str) => {
    doc.header(str, text);
  });
});

Cypress.Commands.add("docText", (doc: Doc, text: string) => {
  cy.readFile(__dirname + doc.templateTextPath).then((str) => {
    doc.text(str, text);
  });
});

Cypress.Commands.add("docAlert", (doc: Doc, text: string) => {
  cy.readFile(__dirname + doc.templateAlertPath).then((str) => {
    doc.alert(str, text);
  });
});

Cypress.Commands.add("docImage", (doc: Doc, imagePath: string) => {
  cy.readFile(__dirname + doc.templateImagePath).then((str) => {
    doc.screenshot(str, imagePath);
  });
});

Cypress.Commands.add("docLink", (doc: Doc, text: string, url: string) => {
  cy.readFile(__dirname + doc.templateLinkPath).then((str) => {
    doc.link(str, text, url);
  });
});

Cypress.Commands.add("docWrite", (doc: Doc, filePath: string) => {
  cy.readFile(__dirname + doc.templateBodyPath).then((str) => {
    const html = doc.generate(str);
    cy.writeFile(filePath, html);
    cy.log(`Documentation file written to ${filePath}`);
  });
});
