import { Doc } from "../../src/documentation/doc"

const doc = new Doc()


describe('create documentation', () => {
    it('should created a file', () => {
        cy.log('Try to create a new instance of the documentation')
        cy.docHeader(doc,'Dies ist eine Überschrift')
        cy.docText(doc, "some text");
        cy.docText(doc, 'Noch ein Text')

        cy.docWrite(doc, "./test.md")
    })
})