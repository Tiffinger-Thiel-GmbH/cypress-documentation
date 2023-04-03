import { Doc } from "../../src/documentation/doc";

const doc = new Doc();

describe("create documentation", () => {
  it("should created a file", () => {
    cy.log("Try to create a new instance of the documentation");
    cy.docHeader(doc, "Dies ist eine Überschrift");
    cy.docText(doc, "some text");
    cy.docText(doc, "Noch ein Text");
    cy.docAlert(doc, "Dies ist ein Block!");

    cy.visit("http://haw-landshut.de/");

    cy.log("Now Visit HAW-Landhut and click decline cookies");

    cy.get(
      "#klaro > div > div > div.cm-modal.cm-klaro > div.cm-footer > div > button.cm-btn.cm-btn-decline.cm-btn-danger.cn-decline"
    ).click();

    cy.log("Now take a screenshot of the whole page");

    cy.docHeader(doc, "screenshot");

    cy.screenshot("haw-landshut", { overwrite: true }).then(() => {
      cy.docImage(doc, "cypress/screenshots/haw-landshut.png");
    });

    cy.docText(doc, "Now the link to the homepage HAW-Landshut");

    cy.docLink(doc, "Hier zur Hochschulwebsite", "https://haw-landshut.de/");

    cy.docText(doc, "After screenshot was taken");
    // This has to be the last call.
    // This write the documentation markdown file
    cy.docWrite(doc, "./test.md");
  });
});
