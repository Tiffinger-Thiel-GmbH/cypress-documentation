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
     * This will write the documentation to a file
     *
     * @todo - Add templates later
     *
     * @param text
     *
     * cy.write("path/to/output/directory.html")
     */
    write(filePath: string): Chainable<void>;

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
