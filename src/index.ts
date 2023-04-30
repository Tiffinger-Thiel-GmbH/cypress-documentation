import "@bahmutov/cy-api/support";
import "cypress-data-session";
import { Doc } from "./documentation/doc";
/// <reference types="cypress" />

declare global {
  namespace Cypress {
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
      docHeader(doc: Doc, text: string): Chainable<Subject>;
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
      docText(doc: Doc, text: string): Chainable<Subject>;
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
      docImage(doc: Doc, imagePath: string): Chainable<Subject>;
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
      docAlert(doc: Doc, text: string): Chainable<Subject>;
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
      docWrite(doc: Doc, filePath: string): Chainable<Subject>;

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
      docLink(doc: Doc, text: string, url: string): Chainable<Subject>;

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
        doc: Doc,
        listCb: (uDoc: Doc) => Chainable<Subject>
      ): Chainable<Subject>;
    }
  }
}
