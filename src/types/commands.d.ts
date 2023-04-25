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
     *
     * @example
     *
     * cy.docHeader(doc, "Some heading text")
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
     * cy.docText(doc, "Some text")
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
     *
     * @example
     *
     * cy.docImage(doc, "path/to/image.{png|jpg|..}")
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
     *
     * @example
     *
     * cy.docAlert(doc, "text in some alert style")
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
     *
     * cy.docWrite(doc, "path/to/output/directory.html")
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
     *
     * @example
     *
     * cy.docLink(doc, "http://some_url.de")
     */
    docLink(
      doc: import("../documentation/doc").Doc,
      text: string,
      url: string
    ): Chainable<any>;

    /**
     * This will generate a List in html
     *
     * @param doc - Documentation instance
     * @param listCb
     *
     * @example
     *
     * cy.docUList(doc, (uListDoc: Doc) => {
     *  cy.docText(uListDoc, "Dies ist ein Text")
     *  ...
     * })
     */
    docUList(
      doc: import("../documentation/doc").Doc,
      listCb: () => import("../documentation/IList").IList
    ): Chainable<any>;
  }
}
