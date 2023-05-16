/// <reference types="cypress" />

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Chainable<Subject> {
    /**
     * This is the chainable command for the cypress documentation
     */
    doc(): Chainable<Subject & { __docCommand: true }>;

    /**
     * This will generate a header in markdown
     *
     * @todo - Add templates later
     *
     * @param text
     *
     * @example
     *
     * cy.header("Some heading text")
     */
    header(text: string): Chainable<void>;
    /**
     * This will generate a text in markdown
     *
     * @todo - Add templates later
     *
     * @param text
     *
     * @example
     *
     * cy.paragraph("Some text")
     */
    paragraph(text: string): Chainable<void>;
    /**
     * This will generate a image in markdown
     *
     * @todo - Add templates later
     *
     * @param text
     *
     * @example
     *
     * cy.image("path/to/image.{png|jpg|..}")
     */
    image(imagePath: string): Chainable<void>;
    /**
     * This will alert (quote for now in md) a header in markdown
     *
     * @todo - Add templates later
     *
     * @param text
     *
     * @example
     *
     * cy.alert(doc, "text in some alert style")
     */
    alert(text: string): Chainable<void>;

    /**
     * This will generate a link in markdown
     *
     * @todo - Add templates later
     *
     * @param text
     *
     * @example
     *
     * cy.link("http://some_url.de")
     */
    link(text: string, url: string): Chainable<void>;

    /**
     * This will generate a List in html
     *
     * @param listCb
     *
     * @example
     *
     * cy.unorderedList( () => {
     *  cy.Text("Dies ist ein Text")
     *  ...
     * })
     */
    unorderedList(listCallback: () => void): Chainable<Subject>;
  }

  interface Chainable<Subject> {
    __docCommand: boolean;
  }
}

Cypress.Commands.add("doc", () => {
  cy.wrap({ __docCommand: true }).as("docCommand");
});

Cypress.Commands.add("paragraph", { prevSubject: true }, (subject, text) => {
  cy.get("@docCommand").then((docCommand) => {
    expect(docCommand).to.have.property("__docCommand", true);
  });
  cy.task("documentationParagraph", text);
});

Cypress.Commands.add("header", { prevSubject: true }, (subject, text) => {
  cy.get("@docCommand").then((docCommand) => {
    expect(docCommand).to.have.property("__docCommand", true);
  });

  cy.task("documentationHeader", text);
});

Cypress.Commands.add("link", { prevSubject: true }, (_, text, url) => {
  cy.get("@docCommand").then((docCommand) => {
    expect(docCommand).to.have.property("__docCommand", true);
  });

  cy.task("documentationLink", { text, url });
});

Cypress.Commands.add("alert", { prevSubject: true }, (subject, text) => {
  cy.get("@docCommand").then((docCommand) => {
    expect(docCommand).to.have.property("__docCommand", true);
  });

  cy.task("documentationAlert", text);
});

Cypress.Commands.add("image", { prevSubject: true }, (subject, imagePath) => {
  cy.get("@docCommand").then((docCommand) => {
    expect(docCommand).to.have.property("__docCommand", true);
  });

  cy.task("documentationImage", imagePath);
});
