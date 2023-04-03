/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable<Subject> {
    docHeader(
      doc: import("../documentation/doc").Doc,
      text: string
    ): Chainable<any>;
    docText(
      doc: import("../documentation/doc").Doc,
      text: string
    ): Chainable<any>;
    docImage(
      doc: import("../documentation/doc").Doc,
      imagePath: string
    ): Chainable<any>;
    docAlert(
      doc: import("../documentation/doc").Doc,
      text: string
    ): Chainable<any>;
    docWrite(
      doc: import("../documentation/doc").Doc,
      filePath: string
    ): Chainable<any>;

    docLink(
      doc: import("../documentation/doc").Doc,
      text: string,
      link: string
    ): Chainable<any>;
  }
}
