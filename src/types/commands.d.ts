declare namespace Cypress {

    interface Chainable<Subject> {
        doc(): Chainable<void>
    }
}