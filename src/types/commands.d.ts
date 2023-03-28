/// <reference types="cypress" />
declare namespace Cypress {
    
    interface Chainable<Subject> {
        /**
         *  
         * @param doc parse the doc class instance to generate the documentation 
         */
        doc(doc: import("../documentation/doc").Doc): import("../documentation/doc").Doc;
        /**
         * 
         * Command that extends the documentation with a header text
         * @param text - the header text 
         * @example
         * cy.doc(doc).header("some header")
         */
        header(text: string): Chainable<any>;
        text(text: string): Chainable<any>;
        image(image: Blob): Chainable<any>;
        alert(text: string): Chainable<any>;
    }
}