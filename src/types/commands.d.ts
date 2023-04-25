/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * This will generate a header in markdown
     *
     * @todo - Add templates later
     *
     * @param doc - Documentation instance
     * @param text
     */
    docHeader(
      doc: import("../documentation/doc").Doc,
      text: string
    ): Chainable<any>;
    /**
     * This will generate a text in markdown
     *
     * @todo - Add templates later
     *
     * @param doc - Documentation instance
     * @param text
     *
     * @example
     *
     * cy.doc(doc, "Some text")
     */
    docText(
      doc: import("../documentation/doc").Doc,
      text: string
    ): Chainable<any>;
    /**
     * This will generate a image in markdown
     *
     * @todo - Add templates later
     *
     * @param doc - Documentation instance
     * @param text
     */
    docImage(
      doc: import("../documentation/doc").Doc,
      imagePath: string
    ): Chainable<any>;
    /**
     * This will alert (quote for now in md) a header in markdown
     *
     * @todo - Add templates later
     *
     * @param doc - Documentation instance
     * @param text
     */
    docAlert(
      doc: import("../documentation/doc").Doc,
      text: string
    ): Chainable<any>;
    /**
     * This will write the documentation to a file
     *
     * @todo - Add templates later
     *
     * @param doc - Documentation instance
     * @param text
     */
    docWrite(
      doc: import("../documentation/doc").Doc,
      filePath: string
    ): Chainable<any>;

    /**
     * This will generate a link in markdown
     *
     * @todo - Add templates later
     *
     * @param doc - Documentation instance
     * @param text
     */
    docLink(
      doc: import("../documentation/doc").Doc,
      text: string,
      url: string
    ): Chainable<any>;
  }
}
