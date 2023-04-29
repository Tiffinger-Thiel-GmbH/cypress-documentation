import { Doc } from "./documentation/doc";
import { UList } from "./documentation/UList";

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
  console.log("LIST COMMAND CALLED: ", doc);
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

Cypress.Commands.add(
  "docUList",
  (doc: Doc, listCb: (uDoc: Doc) => Cypress.Chainable<void>) => {
    cy.readFile(__dirname + doc.templateUlPath).then((ulString) => {
      cy.readFile(__dirname + doc.templateLiPath).then((liString) => {
        const uList = new UList(ulString, liString);

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
