import { Doc } from "../../src/documentation/doc";

const doc = new Doc();

describe("create documentation", () => {
  it("should created a file", () => {
    cy.log("Try to create a new instance of the documentation");
    cy.docHeader(doc, "Paragraph");
    cy.docText(doc, "some text");
    cy.docText(doc, "Noch ein Text");

    cy.docHeader(doc, "Hier ein Alert!");
    cy.docAlert(doc, "Dies ist ein Block!");

    cy.docHeader(doc, "Hier ein Link");
    cy.docLink(doc, "Hier gehts zu Google", "https://google.de");

    cy.visit("http://haw-landshut.de/");

    cy.get(
      "#klaro > div > div > div.cm-modal.cm-klaro > div.cm-footer > div > button.cm-btn.cm-btn-decline.cm-btn-danger.cn-decline"
    ).click();

    cy.log("Now take a screenshot of the whole page");

    cy.docHeader(doc, "Screenshots");
    cy.docText(doc, "Hier wird ein screenshot erstellt:");

    cy.screenshot("haw-landshut", {
      overwrite: true,
      capture: "viewport",
    }).then(() => {
      cy.docImage(doc, "cypress/screenshots/haw-landshut.png");
    });

    cy.docHeader(doc, "Hier eine Liste");

    cy.docUList(doc, (uListDoc) => {
      console.log("Here we call a list command inside the callback");
      return cy.docLink(
        uListDoc,
        "Dies ist ein link in einer Liste",
        "http://google.de"
      );
    });

    cy.docText(doc, "After screenshot was taken");
    // This has to be the last call.
    // This write the documentation markdown file
    cy.docWrite(doc, "./test.html");
  });
});
