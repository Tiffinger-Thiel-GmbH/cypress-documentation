declare namespace Cypress {
    
    interface Chainable<Subject> {
        doc(dock: import("../documentation/doc").Doc): Chainable<void>;
        header(text: string): Chainable<void>;
        text(text: string): Chainable<void>;
        image(image: Blob): Chainable<void>;
        alert(text: string): Chainable<void>;
    }
}